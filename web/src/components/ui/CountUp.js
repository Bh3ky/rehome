"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1800;

export default function CountUp({ value }) {
  const target = parseInt(value, 10);
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(target);
          return;
        }

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / DURATION);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(target * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target]);

  // The final value is rendered invisibly to reserve its width, so nothing shifts while counting.
  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <span className="invisible">{target}</span>
      <span className="absolute inset-0">{display}</span>
    </span>
  );
}
