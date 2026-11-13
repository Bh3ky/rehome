"use client";

import { useEffect, useState } from "react";
import { MapPin } from "@/components/ui/icons";
import { SITE } from "@/config/site";

export default function LocationStatus() {
  const [index, setIndex] = useState(0);
  const cities = SITE.cities;

  useEffect(() => {
    if (cities.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % cities.length), 3000);
    return () => clearInterval(id);
  }, [cities.length]);

  return (
    <span className="hidden items-center gap-2 sm:inline-flex">
      <span className="relative grid h-5 w-5 place-items-center">
        <span className="animate-ring absolute inset-0 rounded-full bg-white/50" />
        <MapPin width={15} height={15} className="relative" />
      </span>
      <span>
        Currently supporting hubs in{" "}
        <span
          key={cities[index]}
          className="animate-city-in inline-block font-bold"
        >
          {cities[index]}
        </span>
      </span>
    </span>
  );
}
