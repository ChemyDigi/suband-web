"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Marquee } from "@/components/ui/Marquee";
import { clients } from "@/content/site";

const TEXT =
  "A trophy outlives the match. It stands on a shelf for forty years, catching the light each morning, reminding someone of the day they were the best. We have been making those objects in Nugegoda for three generations — and we still polish every one by hand.";

/**
 * Scroll-linked word reveal: each word brightens as the reader scrolls
 * through the section, so the statement is "read" by the scroll itself.
 */
export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = TEXT.split(" ");

  return (
    <section className="relative bg-ink">
      <Marquee items={clients} />
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
        <p className="eyebrow mb-12 flex items-center gap-4">
          <span className="h-px w-8 bg-gold/60" />
          Why we make
        </p>
        <p className="font-display flex flex-wrap text-3xl leading-[1.25] md:text-5xl lg:text-6xl">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#3a3426", "#f2eadb"]);
  return (
    <span className="relative mr-[0.28em]">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
}
