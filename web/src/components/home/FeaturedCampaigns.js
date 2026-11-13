/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";
import { getActiveCampaigns } from "@/data/campaigns";

const INTRO_PHOTO =
  "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=900&q=70";

const TILE = "h-full w-[85%] shrink-0 snap-start lg:w-[calc(100%-80px)]";

function ArrowLeft(props) {
  return <ArrowRight {...props} className={`rotate-180 ${props.className ?? ""}`} />;
}

export default function FeaturedCampaigns() {
  const scrollerRef = useRef(null);
  const campaigns = getActiveCampaigns();

  const scrollByTile = (direction) => {
    const scroller = scrollerRef.current;
    const tile = scroller?.firstElementChild;
    if (!tile) return;
    // Tile width plus the 20px gap, so each click lands on the next tile
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollBy({
      left: direction * (tile.offsetWidth + 20),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const navButton =
    "grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35";

  return (
    <section id="campaigns" className="section-pad scroll-mt-28 bg-white">
      <div className="site-container">
        <div className="grid gap-5 lg:h-[620px] lg:grid-cols-[1fr_3fr]">
          <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-surface lg:h-full">
            <img
              src={INTRO_PHOTO}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <h2 className="section-title font-title font-medium text-white">
                Featured campaigns
              </h2>
              <Link
                href="/campaigns"
                className="mt-4 inline-flex items-center gap-2 font-medium text-white underline underline-offset-4 transition-colors hover:text-ink"
              >
                View all campaigns <ArrowRight width={16} height={16} />
              </Link>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  aria-label="Scroll campaigns left"
                  onClick={() => scrollByTile(-1)}
                  className={navButton}
                >
                  <ArrowLeft />
                </button>
                <button
                  type="button"
                  aria-label="Scroll campaigns right"
                  onClick={() => scrollByTile(1)}
                  className={navButton}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex h-[560px] min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:h-full"
          >
            {campaigns.map((c) => (
              <Link
                key={c.slug}
                href={`/campaigns/${c.slug}`}
                className={`group relative overflow-hidden rounded-[28px] bg-surface transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-green ${TILE}`}
              >
                <img
                  src={c.photo}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-x-0 bottom-0 max-w-3xl p-8 md:p-12">
                  <h3 className="section-title font-title font-medium text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-lg leading-snug text-white/85 md:text-xl">
                    {c.needs}
                  </p>
                  <div className="mt-4 max-w-md">
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/25">
                      <div
                        className="h-full rounded-full bg-white"
                        style={{ width: `${(c.received / c.needed) * 100}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-white/85">
                      {c.received} of {c.needed} items received
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            <div
              className={`flex flex-col items-center justify-center rounded-[28px] bg-green p-8 text-center ${TILE}`}
            >
              <h3 className="section-title font-title font-medium text-white">
                Run a youth hub?
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85 md:text-xl">
                Tell us what your space needs and we&apos;ll help you start a
                campaign.
              </p>
              <Button href="/for-hubs" variant="light" arrow className="mt-8">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
