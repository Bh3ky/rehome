import Button from "@/components/ui/Button";
import HeroCollage from "@/components/home/HeroCollage";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto flex min-h-[80svh] max-w-[1200px] flex-col items-center justify-center px-5 pb-10 pt-40 text-center">
        {/* w-fit makes the title set the column width, so the subtitle can be insetted relative to the title's edges */}
        <div className="mx-auto w-fit">
          <h1 className="hero-title font-title text-balance font-medium">
            Unwanted <em>treasures</em> can become the <em>heart</em> of a
            space where young people <em>belong</em>.
          </h1>

          <p className="hero-subtitle mt-8 px-12 text-balance text-ink/80">
            We connect the art, decor, furniture and cultural pieces people no
            longer need with youth and community hubs across Zimbabwe, so bare
            rooms become spaces that feel welcoming, inspiring and like home.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/offer" arrow>
            Rehome an item
          </Button>
          <Button href="/for-hubs" variant="outline">
            Bring your hub
          </Button>
        </div>
      </div>

      <HeroCollage />
    </section>
  );
}
