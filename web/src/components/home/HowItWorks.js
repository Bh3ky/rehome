/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";

const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;

const INTRO_PHOTO = unsplash("1544717297-fa95b6ee9643", 900);

const STEPS = [
  {
    title: "A hub shares what it needs",
    text: "Each hub tells its story and lists what would make its space feel like home, from wall art to a reading corner.",
    photo: unsplash("1452860606245-08befc0ff44b"),
    cta: { label: "See the campaigns", href: "/campaigns" },
  },
  {
    title: "You offer a piece",
    text: "Snap a photo of something you no longer need, tell us a little about it, and choose the hub it's for.",
    photo: unsplash("1513364776144-60967b0f800f"),
    cta: { label: "Rehome an item", href: "/offer" },
  },
  {
    title: "We check, the hub accepts",
    text: "We look at every offer for safety and fit, then the hub decides what it welcomes into its space.",
    photo: unsplash("1522202176988-66273c2fd55f"),
    cta: { label: "Our guidelines", href: "/guidelines" },
  },
  {
    title: "You see where it lands",
    text: "Once it's in place, you get a photo of your piece in its new home, and the story of the room it helped change.",
    photo: unsplash("1529390079861-591de354faf5"),
    cta: { label: "See transformations", href: "/transformations" },
  },
];

function ArrowLeft(props) {
  return <ArrowRight {...props} className={`rotate-180 ${props.className ?? ""}`} />;
}

export default function HowItWorks() {
  const [index, setIndex] = useState(0);
  const last = STEPS.length - 1;
  const prev = () => setIndex((i) => (i === 0 ? last : i - 1));
  const next = () => setIndex((i) => (i === last ? 0 : i + 1));

  const navButton =
    "grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/35";

  return (
    <section id="how-it-works" className="section-pad scroll-mt-28 bg-white">
      <div className="site-container">
        <div className="grid gap-5 lg:h-[620px] lg:grid-cols-[1fr_3fr]">
          <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-surface lg:h-full">
            <img
              src={INTRO_PHOTO}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <h2 className="section-title font-title font-medium text-white">
                How it works
              </h2>
              <div className="mt-6 flex gap-3">
                <button type="button" aria-label="Previous step" onClick={prev} className={navButton}>
                  <ArrowLeft />
                </button>
                <button type="button" aria-label="Next step" onClick={next} className={navButton}>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[560px] overflow-hidden rounded-[28px] bg-surface lg:h-full">
            <div
              className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {STEPS.map((step, i) => (
                <article
                  key={step.title}
                  aria-hidden={i !== index}
                  className="relative h-full w-full shrink-0"
                >
                  <img
                    src={step.photo}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="absolute inset-x-0 bottom-0 max-w-3xl p-8 md:p-12">
                    <h3 className="section-title font-title font-medium text-white">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-white/85 md:text-xl">
                      {step.text}
                    </p>
                    <Button
                      href={step.cta.href}
                      arrow
                      tabIndex={i === index ? 0 : -1}
                      className="mt-8"
                    >
                      {step.cta.label}
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <div className="absolute bottom-5 right-5 flex">
              {STEPS.map((step, i) => (
                <button
                  key={step.title}
                  type="button"
                  aria-label={`Go to step ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className="group grid h-6 w-6 place-items-center"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      i === index
                        ? "bg-white"
                        : "bg-white/40 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
