"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/ui/SplitText";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.4]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-40 md:py-56">
      <motion.div
        style={{ scale: ringScale, rotate: ringRotate }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="49.5" fill="none" stroke="rgba(231,207,140,0.2)" strokeWidth="0.15" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(231,207,140,0.12)" strokeWidth="0.1" strokeDasharray="0.5 1.5" />
        </svg>
      </motion.div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">Commission a piece</p>
        </Reveal>
        <SplitText
          text="Tell us what deserves to be remembered."
          accent={[4]}
          className="font-display justify-center text-5xl leading-[1] text-ivory md:text-7xl lg:text-8xl"
        />
        <Reveal delay={0.4}>
          <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-ivory-2">
            A single commemorative cup or a thousand matched medals — the workshop answers every
            enquiry within a working day.
          </p>
        </Reveal>
        <Reveal delay={0.6} className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
          <Button href="/contact">Start an enquiry</Button>
          <a href={`tel:${site.phoneIntl}`} className="link-sweep text-sm tracking-wide text-ivory-2 hover:text-ivory">
            or call {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
