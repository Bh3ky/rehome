import CampaignCard from "@/components/campaigns/CampaignCard";
import { getActiveCampaigns } from "@/data/campaigns";

export default function CampaignGrid() {
  const campaigns = getActiveCampaigns();
  const groups = [];
  for (const campaign of campaigns) {
    const group = groups.find((g) => g.city === campaign.city);
    if (group) group.items.push(campaign);
    else groups.push({ city: campaign.city, items: [campaign] });
  }

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div>
          <h2 className="section-title font-bold">Active campaigns</h2>
          <p className="mt-2 text-sm text-ink/50">
            {campaigns.length} active across {groups.length} cities
          </p>

          <div className="mt-10 flex flex-col gap-10">
            {groups.map((group) => (
              <div key={group.city}>
                <h3 className="text-sm font-medium uppercase tracking-wider text-ink/50">
                  {group.city}
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
                  {group.items.map((campaign) => (
                    <li key={campaign.slug}>
                      <CampaignCard campaign={campaign} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
