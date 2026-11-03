import Image from "next/image";
import { Reveal, Unmask } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import { site } from "@/content/site";

export function Story() {
  return (
    <section className="relative bg-ink py-32 md:py-48">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Unmask className="aspect-[3/4] overflow-hidden">
            <Image
              src="/images/workshop.jpg"
              alt="Craftsman polishing a brass trophy by hand"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </Unmask>
          <Reveal delay={0.3}>
            <p className="mt-5 flex items-center gap-4 text-xs text-muted">
              <span className="h-px w-6 bg-gold/60" />
              The workshop floor, Old Kesbewa Road
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-gold/60" />
              Our story
            </p>
          </Reveal>
          <SplitText
            text="It began with a single cup."
            accent={[4, 5]}
            className="font-display text-4xl leading-[1.05] text-ivory md:text-6xl"
          />
          <Reveal delay={0.3} className="mt-10 space-y-6 text-base leading-relaxed text-ivory-2 md:text-lg">
            <p>
              In {site.established}, Sugathadasa Bandara cast his first brass trophy for a school sports
              meet in Nugegoda. He had no catalogue and no showroom — only a lathe, a furnace and a
              conviction that an award should be made as carefully as the achievement it marks.
            </p>
            <p>
              His sons learned the trade at his bench. Today the third generation works alongside them,
              and the firm designs and manufactures brass trophies, souvenirs, presentation plaques,
              acrylic awards, medals and anodised aluminium labels for schools, universities, sporting
              bodies and corporations across Sri Lanka.
            </p>
            <p>
              The furnace has been replaced twice. The conviction has not.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <blockquote className="mt-12 border-l border-gold/50 pl-6">
              <p className="font-display text-2xl font-bold leading-snug text-gold-2 md:text-3xl">
                &ldquo;Our name is on the base of every piece. That is the only guarantee we have ever needed.&rdquo;
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">The Bandara family</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
