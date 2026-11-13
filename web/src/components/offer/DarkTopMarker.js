"use client";

import { useEffect, useRef } from "react";

// Tells the header the page opens on a dark section. The attribute is present in the server
// HTML for the first paint and removed whenever the page is hidden, because Next keeps
// previously visited pages mounted (but hidden) and a plain CSS marker would linger.
export default function DarkTopMarker() {
  const ref = useRef(null);

  useEffect(() => {
    const marker = ref.current;
    marker.setAttribute("data-dark-top", "");
    return () => marker.removeAttribute("data-dark-top");
  }, []);

  return <span ref={ref} data-dark-top hidden />;
}
