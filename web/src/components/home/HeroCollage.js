/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";

const unsplash = (id, width = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

const PHOTOS = {
  farLeft: unsplash("1529390079861-591de354faf5"),
  leftTop: unsplash("1513364776144-60967b0f800f"),
  leftBottom: unsplash("1522202176988-66273c2fd55f"),
  center: unsplash("1503676260728-1c00da094a0b", 1600),
  rightTop: unsplash("1460661419201-fd4cecdf8a8b"),
  rightBottom: unsplash("1509062522246-3755977927d7"),
  farRight: unsplash("1488521787991-ed7bbaae773c"),
};

function PhotoTile({ src, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-[32px] bg-surface ${className}`}>
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function HeroVideo({ src, poster }) {
  if (src) {
    return (
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <div className="relative h-full w-full">
      <img
        src={PHOTOS.center}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-stone-600/60 mix-blend-saturation" />
      <img
        src={PHOTOS.center}
        alt=""
        className="animate-reveal absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute bottom-5 left-5 rounded-full bg-black/50 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
        Before / After
      </span>
    </div>
  );
}

export default function HeroCollage({ videoSrc, videoPoster }) {
  const collageRef = useRef(null);

  // Progress (0 -> 1) goes into a CSS variable instead of state to avoid re-renders on every scroll tick.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const collage = collageRef.current;
      if (!collage) return;

      const rect = collage.getBoundingClientRect();
      // Expansion finishes at 70% of the pinned distance; the rest holds the full-screen video.
      const range = (rect.height - window.innerHeight) * 0.7;
      const progress = Math.min(1, Math.max(0, -rect.top / range));
      collage.style.setProperty("--p", progress.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={collageRef} className="collage pointer-events-none relative h-[260svh]">
      <div className="sticky top-0 flex h-svh items-center justify-center gap-[1.1vw] overflow-hidden">
        <div className="collage-side hidden w-[18vw] shrink-0 md:block">
          <PhotoTile src={PHOTOS.farLeft} className="h-[60svh]" />
        </div>

        <div className="collage-side hidden w-[18vw] shrink-0 flex-col gap-[2.2svh] md:flex">
          <PhotoTile src={PHOTOS.leftTop} className="h-[36svh]" />
          <PhotoTile src={PHOTOS.leftBottom} className="h-[48svh]" />
        </div>

        <div className="collage-center relative shrink-0 overflow-hidden">
          <HeroVideo src={videoSrc} poster={videoPoster} />
        </div>

        <div className="collage-side hidden w-[18vw] shrink-0 flex-col gap-[2.2svh] md:flex">
          <PhotoTile src={PHOTOS.rightTop} className="h-[48svh]" />
          <PhotoTile src={PHOTOS.rightBottom} className="h-[36svh]" />
        </div>

        <div className="collage-side hidden w-[18vw] shrink-0 md:block">
          <PhotoTile src={PHOTOS.farRight} className="h-[60svh]" />
        </div>
      </div>
    </div>
  );
}
