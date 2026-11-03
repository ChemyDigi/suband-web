"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitText } from "./SplitText";
import { Reveal } from "./Reveal";

/**
 * Shared inner-page hero: oversized serif headline over a slow parallax image.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  body,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  accent?: number[];
  body?: string;
  image: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[88vh] items-end overflow-hidden pb-16 pt-40 md:pb-24">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover opacity-50" />
      </motion.div>
      <div className="vignette absolute inset-0 -z-10" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <Reveal amount={0.1}>
          <p className="eyebrow mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/70" />
            {eyebrow}
          </p>
        </Reveal>
        <SplitText
          as="h1"
          text={title}
          accent={accent}
          className="font-display max-w-5xl text-[13vw] leading-[0.92] text-ivory sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        />
        {body && (
          <Reveal delay={0.5} amount={0.1}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-ivory-2 md:text-lg">{body}</p>
          </Reveal>
        )}
      </motion.div>
    </section>
  );
}
