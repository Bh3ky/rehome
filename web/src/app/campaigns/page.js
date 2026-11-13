import CampaignsHero from "@/components/campaigns/CampaignsHero";
import VideoCard from "@/components/campaigns/VideoCard";
import CampaignsPanel from "@/components/campaigns/CampaignsPanel";
import CampaignGrid from "@/components/campaigns/CampaignGrid";
import LatestUpdates from "@/components/campaigns/LatestUpdates";
import ForHubs from "@/components/home/ForHubs";
import { SITE } from "@/config/site";

export const metadata = {
  title: `Campaigns | ${SITE.name}`,
};

export default function CampaignsPage() {
  return (
    <>
      <CampaignsHero />
      <VideoCard />
      <CampaignsPanel />
      <CampaignGrid />
      <LatestUpdates />
      <ForHubs />
    </>
  );
}
