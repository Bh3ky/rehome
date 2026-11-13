/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const photo = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=75`;

const PHOTOS = [
  photo("1522202176988-66273c2fd55f"),
  photo("1509062522246-3755977927d7"),
  photo("1460661419201-fd4cecdf8a8b"),
];

const STEPS = [
  {
    title: "A hub shares its needs",
    text: "Each hub tells its story and lists what would make its space feel like home.",
  },
  {
    title: "You offer a piece",
    text: "Share photos, size, condition and anything we should know about its cultural meaning.",
  },
  {
    title: "We screen every offer",
    text: "We check safety, quality and fit, and flag anything that carries cultural or spiritual significance.",
  },
  {
    title: "The hub decides",
    text: "The hub has the final say on what comes into its space, and can decline with a reason.",
  },
  {
    title: "We coordinate delivery",
    text: "Drop-off or pickup is arranged between you, the hub and us.",
  },
  {
    title: "You see it in place",
    text: "The hub shares a photo of your piece in its new home, and we send it to you with the story of the room.",
  },
];

const VISIBLE_AT_FIRST = 3;

export default function HowWeWork() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="grid gap-14 md:grid-cols-[5fr_7fr] md:gap-16">
          <div>
            <h2 className="section-title font-bold">How we work</h2>

            <ol className="mt-10 border-l-2 border-ink/15">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className={`relative pb-10 pl-8 last:pb-0 ${
                    i >= VISIBLE_AT_FIRST && !expanded ? "hidden" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-ink/40 ring-4 ring-white"
                  />
                  <h3 className="text-2xl font-bold text-ink/50">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink md:text-xl">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((e) => !e)}
              className="mt-10 inline-flex items-center justify-center rounded-xl border border-ink px-6 py-3.5 text-base font-medium transition-colors hover:bg-ink hover:text-white"
            >
              {expanded ? "Show fewer steps" : "Show more steps"}
            </button>
          </div>

          <div className="grid h-[420px] grid-cols-2 grid-rows-2 gap-3 self-start md:sticky md:top-36 md:h-[560px]">
            {PHOTOS.map((src, i) => (
              <div
                key={src}
                className={`overflow-hidden rounded-xl bg-surface ${
                  i === 0 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
