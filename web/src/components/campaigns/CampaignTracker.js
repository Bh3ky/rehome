import Button from "@/components/ui/Button";
import ProgressRing from "@/components/ui/ProgressRing";
import { getCampaignTracker } from "@/data/campaigns";

const STEPS = [
  {
    key: "offered",
    title: "Offered",
    text: (n) => `${n} pieces offered by donors so far.`,
  },
  {
    key: "screened",
    title: "Screened",
    text: (n) => `${n} checked for safety, quality and fit.`,
  },
  {
    key: "accepted",
    title: "Accepted",
    text: (n) => `${n} accepted by the hub.`,
  },
  {
    key: "collected",
    title: "Collected",
    text: (n) => `${n} collected and on their way.`,
  },
  {
    key: "placed",
    title: "Placed",
    text: (n) => `${n} now in the space, with photos shared.`,
  },
];

export default function CampaignTracker({ campaign, className = "" }) {
  const tracker = getCampaignTracker(campaign);

  return (
    <aside
      aria-label="Progress"
      className={`lg:sticky lg:top-36 lg:self-start ${className}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Progress</h2>
        <span className="flex items-center gap-2 text-sm font-medium text-green">
          <span className="relative grid h-2.5 w-2.5 place-items-center">
            <span className="animate-ring absolute inset-0 rounded-full bg-green/60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-green" />
          </span>
          Live
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <span className="text-green">
          <ProgressRing
            received={campaign.received}
            needed={campaign.needed}
            size={52}
          />
        </span>
        <div>
          <p className="text-2xl font-bold leading-none">
            {campaign.received} of {campaign.needed}
          </p>
          <p className="mt-1 text-sm text-ink/50">items placed</p>
        </div>
      </div>

      <ol className="mt-8 border-l-2 border-ink/15">
        {STEPS.map((step) => (
          <li key={step.key} className="relative pb-7 pl-6 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-ink/40 ring-4 ring-white"
            />
            <h3 className="text-lg font-bold text-ink/50">{step.title}</h3>
            <p className="mt-1 text-base leading-relaxed text-ink">
              {step.text(tracker[step.key])}
            </p>
          </li>
        ))}
      </ol>

      <Button
        href={`/offer?campaign=${campaign.slug}`}
        className="mt-8 w-full"
      >
        Offer an item
      </Button>
    </aside>
  );
}
