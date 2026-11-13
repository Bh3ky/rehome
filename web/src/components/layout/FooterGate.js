"use client";

import { useEffect, useRef, useState } from "react";

const REVEAL_LAYOUT = "(min-width: 1024px) and (min-height: 760px)";

export default function FooterGate({ children }) {
  const spacerRef = useRef(null);
  // Starts true so the footer stays usable without JS and on screens where it is a normal block
  const [revealed, setRevealed] = useState(true);

  useEffect(() => {
    const spacer = spacerRef.current;
    const layout = window.matchMedia(REVEAL_LAYOUT);
    let observer;

    // In the reveal layout the footer is pinned under the page; only the spacer scrolling
    // into view means the page has slid away, so only then should the footer be reachable.
    const setup = () => {
      observer?.disconnect();
      if (!layout.matches) {
        setRevealed(true);
        return;
      }
      observer = new IntersectionObserver(([entry]) =>
        setRevealed(entry.isIntersecting)
      );
      observer.observe(spacer);
    };

    setup();
    layout.addEventListener("change", setup);
    return () => {
      layout.removeEventListener("change", setup);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={spacerRef}
        aria-hidden="true"
        className="hidden h-svh [@media(min-width:1024px)_and_(min-height:760px)]:block"
      />
      <div inert={!revealed}>{children}</div>
    </>
  );
}
