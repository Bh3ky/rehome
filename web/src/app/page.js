import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FooterGate from "@/components/layout/FooterGate";
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
      <Header />
      <main className="[@media(min-width:1024px)_and_(min-height:760px)]:relative [@media(min-width:1024px)_and_(min-height:760px)]:z-10 [@media(min-width:1024px)_and_(min-height:760px)]:bg-white">
        <Hero />
        <Why />
        <HowItWorks />
        <WhyStory />
        <FeaturedCampaigns />
        <ImpactTally />
        <PartnerHubs />
        <ForHubs />
        <Faq />
      </main>
      <FooterGate>
        <Footer />
      </FooterGate>
    </>
  );
}
