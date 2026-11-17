import Hero from "@/components/home/Hero";
import Why from "@/components/home/Why";
import HowItWorks from "@/components/home/HowItWorks";
import WhyStory from "@/components/home/WhyStory";
import FeaturedCampaigns from "@/components/home/FeaturedCampaigns";
import ImpactTally from "@/components/home/ImpactTally";
import PartnerHubs from "@/components/home/PartnerHubs";
import ForHubs from "@/components/home/ForHubs";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <HowItWorks />
      <WhyStory />
      <FeaturedCampaigns />
      <ImpactTally />
      <PartnerHubs />
      <ForHubs />
      <Faq />
    </>
  );
}
