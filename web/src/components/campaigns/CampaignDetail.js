/* eslint-disable @next/next/no-img-element */
import CampaignTracker from "@/components/campaigns/CampaignTracker";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import { getCampaignGallery } from "@/data/campaigns";

export default function CampaignDetail({ campaign }) {
  const gallery = getCampaignGallery(campaign);
  const stats = [
    { value: campaign.needed, label: "Items needed" },
    { value: campaign.received, label: "Items received" },
    { value: campaign.needed - campaign.received, label: "Still needed" },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="site-container mt-24 pb-16 md:mt-20 md:pb-24">
        <h1 className="section-title font-bold">{campaign.title}</h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wider text-ink/50">
          {campaign.hub} · {campaign.city}
        </p>

        <div className="mt-8 grid gap-y-16 lg:grid-cols-[1fr_360px] lg:gap-x-16">
          <div className="aspect-video overflow-hidden rounded-xl bg-surface lg:col-start-1">
            <img
              src={campaign.photo}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <CampaignTracker
            campaign={campaign}
            className="lg:col-start-2 lg:row-span-3 lg:row-start-1"
          />

          <div className="lg:col-start-1">
            <h2 className="section-title font-bold">Campaign overview</h2>
            <div className="mt-5 flex flex-col gap-5 text-lg leading-relaxed text-ink md:text-xl">
              {campaign.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 flex justify-end gap-10 md:gap-14">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse text-right"
                >
                  <dt className="mt-3 text-base text-ink/60">{stat.label}</dt>
                  <dd className="text-[34px] font-bold leading-none text-brand md:text-[44px]">
                    <CountUp value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul
            aria-label="Campaign photos"
            className="grid grid-cols-3 gap-3 lg:col-start-1"
          >
            {gallery.map((src) => (
              <li
                key={src}
                className="aspect-square overflow-hidden rounded-lg bg-surface"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 flex justify-center">
          <Button href="/campaigns" variant="outline">
            Back to campaigns
          </Button>
        </div>
      </div>
    </section>
  );
}
