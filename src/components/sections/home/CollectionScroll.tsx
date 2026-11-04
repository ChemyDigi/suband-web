"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { collection } from "@/content/site";
import { SplitText } from "@/components/ui/SplitText";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Horizontal scroll-lock gallery.
 * The section is tall; the track is sticky and translates on X as the user
 * scrolls vertically, so the page "locks" while the collection slides past.
 */
export function CollectionScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Measure how far the track must travel so the last item ends flush right.
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const pad = window.innerWidth >= 768 ? 40 : 24;
      setDistance(Math.max(0, track.scrollWidth + pad - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progressW = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative h-[380vh] bg-ink-2">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Reveal amount={0.5}>
                <p className="eyebrow mb-5">The collection</p>
              </Reveal>
              <SplitText
                text="Six families of award."
                accent={[3]}
                className="font-display text-4xl leading-none text-ivory md:text-6xl"
              />
            </div>
            <Link
              href="/collection"
              className="link-sweep hidden shrink-0 pb-2 text-[0.7rem] uppercase tracking-[0.26em] text-gold md:block"
            >
              View all
            </Link>
          </div>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="mt-12 flex w-max gap-6 pl-6 md:mt-16 md:gap-10 md:pl-10">
          {collection.map((item, i) => (
            <Card key={item.slug} item={item} index={i} />
          ))}
          <div className="flex w-[60vw] items-center pl-4 md:w-[26vw] md:pl-10">
            <Link href="/collection" className="group flex flex-col gap-4">
              <span className="font-display text-4xl text-ivory transition-colors group-hover:text-gold md:text-5xl">
                See the whole
                <br />
                <em>collection</em>
              </span>
              <span className="eyebrow">Explore</span>
            </Link>
          </div>
        </motion.div>

        {/* progress */}
        <div className="mx-auto mt-10 w-full max-w-[1600px] px-6 md:mt-14 md:px-10">
          <div className="h-px w-full bg-line">
            <motion.div style={{ width: progressW }} className="h-full bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item, index }: { item: (typeof collection)[number]; index: number }) {
  return (
    <Link
      href={`/collection#${item.slug}`}
      className="group relative block w-[72vw] shrink-0 sm:w-[46vw] md:w-[30vw] lg:w-[24vw]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-3">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 768px) 30vw, 72vw"
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
        <span className="font-display absolute left-5 top-4 text-6xl leading-none text-ivory/20 transition-colors duration-500 group-hover:text-gold/70">
          {item.numeral}
        </span>
        <div className="absolute inset-x-5 bottom-5">
          <h3 className="font-display text-2xl text-ivory md:text-3xl">{item.title}</h3>
          <p className="mt-1 text-xs tracking-wide text-ivory-2/80">{item.short}</p>
        </div>
        <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
      </div>
      <span className="sr-only">{index + 1}</span>
    </Link>
  );
}
