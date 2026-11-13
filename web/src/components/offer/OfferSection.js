/* eslint-disable @next/next/no-img-element */
import DarkTopMarker from "@/components/offer/DarkTopMarker";
import OfferForm from "@/components/offer/OfferForm";
import { getActiveCampaigns } from "@/data/campaigns";

const PHOTO =
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=75";

export default function OfferSection({ defaultCampaign = "" }) {
  const campaigns = getActiveCampaigns();

  return (
    <section className="grid lg:h-svh lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)]">
      <DarkTopMarker />

      <div className="flex items-center justify-center bg-ink px-5 pb-10 pt-40 md:px-10 lg:pb-20 lg:pt-48">
        <div className="w-full max-w-[520px] rounded-2xl border border-ink/15 bg-white p-6 md:p-8 lg:max-h-full lg:overflow-y-auto">
          <h1 className="section-title font-bold">Offer an item</h1>
          <div className="mt-6">
            <OfferForm
              campaigns={campaigns}
              defaultCampaign={defaultCampaign}
            />
          </div>
        </div>
      </div>

      <div className="relative min-h-[320px] bg-ink">
        <img
          src={PHOTO}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
