"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus } from "@/components/ui/icons";
import { FAQS } from "@/data/faq";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="section-pad scroll-mt-28 bg-white">
      <div className="site-container grid gap-12 pb-16 md:pb-36 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            FAQ
          </p>
          <h2 className="mt-5 text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
            Questions, clearly answered.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65 md:text-xl">
            The best rehoming starts with clarity. Here are answers to what
            people ask most before they give a piece or bring a hub.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-lg font-medium transition-colors hover:text-green"
          >
            More questions? Contact Us <ArrowUpRight width={18} height={18} />
          </Link>
        </div>

        <ul className="flex flex-col gap-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.question} className="rounded-[32px] bg-ink/5">
                <button
                  type="button"
                  id={`faq-button-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-7 text-left md:px-10 md:py-8"
                >
                  <span className="text-[20px] leading-snug md:text-[26px]">
                    {item.question}
                  </span>
                  <Plus
                    width={30}
                    height={30}
                    strokeWidth={1.5}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-8 text-lg leading-relaxed text-ink/70 md:px-10 md:text-xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
