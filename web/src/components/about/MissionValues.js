/* eslint-disable @next/next/no-img-element */
const PHOTO =
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=75";

const BLOCKS = [
  {
    title: "Our mission",
    text: "To give meaningful things a second life by connecting people who no longer need them with youth and community hubs across Zimbabwe that do, so every space can feel welcoming, inspiring and like home.",
  },
  {
    title: "Our values",
    text: "We value reuse over waste, care over charity, and respect for the culture and the people behind every piece. Hubs choose what comes in, donors see where their gift lands, and nothing is placed where it doesn't belong.",
  },
];

export default function MissionValues() {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="grid gap-12 md:grid-cols-[5fr_6fr] md:gap-16">
          <div className="h-[360px] self-start overflow-hidden rounded-xl bg-surface md:sticky md:top-36 md:h-[560px]">
            <img
              src={PHOTO}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {BLOCKS.map((block) => (
              <div key={block.title}>
                <h2 className="section-title font-bold">{block.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-ink/70 md:text-xl">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
