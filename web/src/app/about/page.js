import AboutIntro from "@/components/about/AboutIntro";
import MissionValues from "@/components/about/MissionValues";
import Vision from "@/components/about/Vision";
import HowWeWork from "@/components/about/HowWeWork";
import AboutCta from "@/components/about/AboutCta";
import { SITE } from "@/config/site";

export const metadata = {
  title: `About | ${SITE.name}`,
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <MissionValues />
      <Vision />
      <HowWeWork />
      <AboutCta />
    </>
  );
}
