"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitText } from "@/components/ui/SplitText";
import { Reveal } from "@/components/ui/Reveal";

/** Full-bleed parallax image with a centred statement. */
export function ParallaxBand({
  image,
  alt,
  eyebrow,
  title,
  accent,
  caption,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  accent?: number[];
  caption?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative flex min-h-[80vh] items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-15%_0]">
        <Image src={image} alt={alt} fill sizes="100vw" className="object-cover opacity-45" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      <div className="relative mx-auto max-w-[1100px] px-6 py-32 text-center md:px-10">
        <Reveal>
          <p className="eyebrow mb-8">{eyebrow}</p>
        </Reveal>
        <SplitText
          text={title}
          accent={accent}
          className="font-display justify-center text-4xl leading-[1.05] text-ivory md:text-6xl lg:text-7xl"
        />
        {caption && (
          <Reveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-md text-sm text-ivory-2">{caption}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
