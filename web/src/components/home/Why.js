"use client";

import { useEffect, useRef } from "react";

const TEXT =
  "Youth hubs are building spaces that heal, while meaningful pieces sit unused in homes everywhere. Two problems that were always meant to solve each other.";

const WORDS = TEXT.split(" ");

export default function Why() {
  const trackRef = useRef(null);

  // Scroll progress goes into a CSS variable; each word derives its opacity from it (see .reveal-word).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      // Fully revealed at 85% of the pinned distance, then the heading rests.
      const range = (rect.height - window.innerHeight) * 0.85;
      const progress = Math.min(1, Math.max(0, -rect.top / range));
      track.style.setProperty("--p", progress.toFixed(4));
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
    <section id="why" ref={trackRef} className="reveal-track -mb-[19svh] h-[170svh] bg-white md:-mb-[29svh]">
      <div className="site-container sticky top-0 flex h-svh items-center">
        <h2 className="indent-first text-balance text-[49px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[71px]">
          {WORDS.map((word, i) => (
            <span
              key={i}
              className="reveal-word"
              style={{ "--s": ((i / WORDS.length) * 0.8).toFixed(3) }}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
