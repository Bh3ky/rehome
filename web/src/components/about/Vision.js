"use client";

import { useState } from "react";

const PHOTO =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=75";

const ITEMS = [
  {
    title: "5-Year Plan",
    text: "Prove the model with a handful of pilot hubs in year one. Open campaigns in every major city by year three. By year five, hand the platform to community partners so hubs and donors can run it themselves.",
  },
  {
    title: "Founder's Message",
    text: "ReHome started with a simple thought: the things we throw away could make someone's room feel like home. I'm building it so no meaningful piece goes to waste while a young person sits in a bare space. Thank you for being part of it. The founder",
  },
];

const LEAF =
  "M50 50 C46 44 36 38 33 28 C30 16 44 8 50 22 C56 8 70 16 67 28 C64 38 54 44 50 50Z";
const LEAF_SCALE = "translate(50 50) scale(1.3) translate(-50 -50)";
const LEAF_ANGLES = [30, 120, 210, 300];

function Clover() {
  return (
    <svg
      viewBox="-16 -16 132 152"
      role="img"
      aria-label="A four-leaf clover"
      className="h-auto w-full max-w-[480px] text-white/75"
    >
      <defs>
        <clipPath id="about-clover-leaves">
          {LEAF_ANGLES.map((angle) => (
            <path
              key={angle}
              d={LEAF}
              transform={`rotate(${angle} 50 50) ${LEAF_SCALE}`}
            />
          ))}
        </clipPath>
      </defs>
      <path
        d="M50 50 C28 56 4 58 3 88 C2 104 6 118 10 130"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <image
        href={PHOTO}
        x="-16"
        y="-16"
        width="132"
        height="132"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#about-clover-leaves)"
      />
    </svg>
  );
}

export default function Vision() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad bg-ink text-white">
      <div className="site-container">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="section-title font-bold">Our vision</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 md:text-xl">
              A Zimbabwe where no community space is bare and no meaningful
              object is wasted. Every hub feels like home, and every piece of
              heritage and craft finds a place where it is loved.
            </p>

            <ul className="mt-10 border-t border-white/15">
              {ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.title} className="border-b border-white/15">
                    <h3>
                      <button
                        type="button"
                        id={`vision-button-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`vision-panel-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className={`flex w-full items-center justify-between gap-6 py-5 text-left text-2xl font-medium transition-colors ${
                          isOpen ? "text-white" : "text-white/50 hover:text-white"
                        }`}
                      >
                        {item.title}
                        <span
                          aria-hidden="true"
                          className={`text-3xl font-light leading-none transition-transform duration-300 motion-reduce:transition-none ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`vision-panel-${i}`}
                      role="region"
                      aria-labelledby={`vision-button-${i}`}
                      inert={!isOpen}
                      className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 text-lg leading-relaxed text-white/75 md:text-xl">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <Clover />
          </div>
        </div>
      </div>
    </section>
  );
}
