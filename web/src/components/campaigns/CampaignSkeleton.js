export default function CampaignSkeleton() {
  return (
    <section className="section-pad bg-white" aria-busy="true">
      <div className="site-container mt-24 md:mt-20">
        <div className="h-10 w-72 rounded-lg bg-ink/10" />
        <div className="mt-8 grid gap-y-16 lg:grid-cols-[1fr_360px] lg:gap-x-16">
          <div className="aspect-video rounded-xl bg-ink/5" />
          <div className="hidden h-[560px] rounded-xl bg-ink/5 lg:block" />
        </div>
      </div>
    </section>
  );
}
