import AboutIntro from "@/components/about/AboutIntro";
import MissionValues from "@/components/about/MissionValues";
import { SITE } from "@/config/site";

export const metadata = {
  title: `About | ${SITE.name}`,
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <MissionValues />
    </>
  );
}
