import Button from "@/components/ui/Button";
import { SITE } from "@/config/site";

export const metadata = {
  title: `Page not found | ${SITE.name}`,
};

export default function NotFound() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container mt-24 flex min-h-[50svh] flex-col items-center justify-center text-center md:mt-20">
        <h1 className="section-title font-bold">Page not found</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70 md:text-xl">
          This page isn&apos;t built yet, or the link has moved. Head back home
          or have a look at our campaigns.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/campaigns" variant="outline">
            See campaigns
          </Button>
        </div>
      </div>
    </section>
  );
}
