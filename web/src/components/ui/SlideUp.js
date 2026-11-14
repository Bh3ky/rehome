"use client";

import { useLayoutEffect, useRef } from "react";

// Plays each time the page appears, including when Next re-shows a previously visited page.
export default function SlideUp({ className, children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = ref.current.animate(
      [{ transform: "translateY(100svh)" }, { transform: "translateY(0)" }],
      { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
    return () => animation.cancel();
  }, []);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
