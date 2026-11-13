"use client";

import { useRef, useState } from "react";
import { Pause, Play, Volume, VolumeOff } from "@/components/ui/icons";
import { SITE } from "@/config/site";

const ORIGIN = "https://www.youtube-nocookie.com";

export default function VideoCard() {
  const frameRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const id = SITE.campaignsVideoId;

  // The embed is driven through YouTube's postMessage command API (enablejsapi=1)
  const send = (func) =>
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: "" }),
      ORIGIN
    );

  const togglePlay = () => {
    send(playing ? "pauseVideo" : "playVideo");
    setPlaying(!playing);
  };

  const toggleMute = () => {
    send(muted ? "unMute" : "mute");
    setMuted(!muted);
  };

  const button =
    "inline-flex items-center gap-2 rounded-full bg-black/55 px-4 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-black/75";

  return (
    <section className="bg-white">
      <div className="site-container">
        <div className="relative aspect-video overflow-hidden rounded-[28px] bg-ink md:aspect-auto md:h-[90svh]">
          <iframe
            ref={frameRef}
            title="Our work, in our own words"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-video w-full -translate-x-1/2 -translate-y-1/2 md:min-w-[160svh]"
          />

          <div
            aria-hidden="true"
            onClick={togglePlay}
            className="absolute inset-0 cursor-pointer"
          />

          <div className="absolute bottom-5 left-5 flex gap-3">
            <button type="button" onClick={togglePlay} className={button}>
              {playing ? (
                <Pause width={18} height={18} />
              ) : (
                <Play width={18} height={18} />
              )}
              {playing ? "Pause" : "Play"}
            </button>
            <button type="button" onClick={toggleMute} className={button}>
              {muted ? (
                <VolumeOff width={18} height={18} />
              ) : (
                <Volume width={18} height={18} />
              )}
              {muted ? "Unmute" : "Mute"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
