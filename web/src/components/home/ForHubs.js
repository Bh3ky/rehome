import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";

export default function ForHubs() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container flex flex-col items-center text-center">
        <h2 className="section-title max-w-3xl text-balance font-bold">
          Run a youth or community space?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75 md:text-xl">
          Tell us what your space needs. We&apos;ll help you share its story,
          and donors can offer pieces that make it feel like home. It&apos;s
          free, and you decide what comes in.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 text-lg font-medium underline underline-offset-4 transition-colors hover:text-green"
        >
          Get in touch <ArrowRight width={18} height={18} />
        </Link>
      </div>
    </section>
  );
}
