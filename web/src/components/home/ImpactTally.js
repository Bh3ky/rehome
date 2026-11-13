import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import { IMPACT_STATS } from "@/data/impact";

export default function ImpactTally() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="mx-auto max-w-[1432px] rounded-[24px] bg-green px-6 py-16 text-white md:px-16 lg:flex lg:h-[620px] lg:items-center lg:py-0">
          <div className="grid w-full gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Our impact
              </p>
              <h2 className="mt-5 text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
                Every piece rehomed makes a space warmer.
              </h2>
            </div>

            <div>
              <p className="text-[20px] leading-[1.45] text-white/90 md:text-[24px]">
                Pieces that would have ended up in the bin now hang on walls,
                fill shelves and brighten rooms where young people heal and
                learn. Every number here is a real item in a real room.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-8">
                <Button href="/offer" variant="light" arrow>
                  Rehome an item
                </Button>

                <dl className="flex flex-wrap gap-x-8 gap-y-6">
                  {IMPACT_STATS.map((stat) => (
                    <div key={stat.label} className="flex shrink-0 flex-col-reverse">
                      <dt className="mt-2 whitespace-nowrap text-sm text-white/80">
                        {stat.label}
                      </dt>
                      <dd className="text-[34px] font-bold leading-none tracking-[-0.03em] md:text-[44px]">
                        <CountUp value={stat.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
