import { Suspense } from "react";
import OfferSection from "@/components/offer/OfferSection";
import { SITE } from "@/config/site";
import { getCampaign } from "@/data/campaigns";

export const metadata = {
  title: `Offer an item | ${SITE.name}`,
};

// searchParams is read inside the Suspense boundary so the page shell doesn't depend on the URL
async function OfferContent({ searchParams }) {
  const { campaign } = await searchParams;
  const slug = typeof campaign === "string" && getCampaign(campaign) ? campaign : "";

  return <OfferSection defaultCampaign={slug} />;
}

export default function OfferPage({ searchParams }) {
  return (
    <Suspense fallback={<OfferSection />}>
      <OfferContent searchParams={searchParams} />
    </Suspense>
  );
}
