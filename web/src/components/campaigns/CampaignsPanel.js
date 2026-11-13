import Button from "@/components/ui/Button";

export default function CampaignsPanel() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="rounded-[24px] bg-ink px-6 py-16 text-white md:px-16 md:py-28 lg:flex lg:h-[620px] lg:items-center lg:py-0">
          <div className="grid w-full gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-soft">
                Our campaigns
              </p>
              <h2 className="mt-5 text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
                A bare room can change how a young person feels.
              </h2>
            </div>

            <div>
              <p className="text-[20px] leading-[1.45] text-white/90 md:text-[24px]">
                Each campaign is one hub, one space and one wishlist. We help
                the hub tell its story, share what it needs, and match it with
                donors who have the right pieces. Every item is screened for
                safety and respect, and every donor sees where their piece ends
                up.
              </p>
              <div className="mt-10">
                <Button href="/offer" variant="light" arrow>
                  Rehome an item
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
