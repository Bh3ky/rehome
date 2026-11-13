import { Suspense } from "react";
import { notFound } from "next/navigation";
import CampaignDetail from "@/components/campaigns/CampaignDetail";
import CampaignSkeleton from "@/components/campaigns/CampaignSkeleton";
import { SITE } from "@/config/site";
import { CAMPAIGNS, getCampaign } from "@/data/campaigns";

export function generateStaticParams() {
  return CAMPAIGNS.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) return {};
  return {
    title: `${campaign.title} | ${SITE.name}`,
    description: campaign.needs,
  };
}

// params is read inside the Suspense boundary so the page shell doesn't depend on the URL
async function CampaignContent({ params }) {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) notFound();

  return <CampaignDetail campaign={campaign} />;
}

export default function CampaignPage({ params }) {
  return (
    <Suspense fallback={<CampaignSkeleton />}>
      <CampaignContent params={params} />
    </Suspense>
  );
}
