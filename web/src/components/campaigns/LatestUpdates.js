/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { UPDATES } from "@/data/updates";

export default function LatestUpdates() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div>
          <h2 className="section-title font-bold">Latest updates</h2>

          <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {UPDATES.map((update) => (
              <li
                key={update.id}
                className="grid gap-8 py-10 md:grid-cols-[5fr_7fr] md:items-center md:gap-16"
              >
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-ink/50">
                    {update.campaign} · {update.city} · {update.when}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">{update.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink md:text-xl">
                    {update.text}
                  </p>
                  <Link
                    href={`/campaigns/${update.campaignSlug}`}
                    className="mt-5 inline-flex items-center gap-2 text-lg font-medium text-brand underline-offset-4 hover:underline"
                  >
                    Read more <ArrowRight width={18} height={18} />
                  </Link>
                </div>

                <div className="grid h-[260px] grid-cols-2 grid-rows-2 gap-3 md:h-[320px]">
                  {update.photos.map((src, i) => (
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
