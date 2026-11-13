/* eslint-disable @next/next/no-img-element */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2000&q=75";

export default function AboutIntro() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container mt-24 md:mt-20">
        <div className="mx-auto max-w-[1344px]">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface md:aspect-auto md:h-[558px]">
            <img
              src={HERO_IMAGE}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="section-title mt-10 font-bold">Our story</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70 md:text-xl">
            Why do meaningful things end up in the bin while youth spaces nearby
            have bare walls? ReHome brings the two together across Zimbabwe.
          </p>
        </div>
      </div>
    </section>
  );
}
