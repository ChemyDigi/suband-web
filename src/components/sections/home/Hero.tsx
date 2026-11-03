"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Pinned hero. The section is 200vh tall; the inner frame is sticky for
 * the first viewport, so the trophy grows and the headline drifts as you
 * scroll before the page releases.
 */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const ringScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const dim = useTransform(scrollYProgress, [0.35, 1], [0, 0.9]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        {/* Ambient atmospheric lighting */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[10%] top-1/2 -translate-y-1/2 h-[75vmin] w-[75vmin] rounded-full bg-gold/10 blur-[130px]"
        />

        {/* Geometric calibration rings */}
        <motion.div
          style={{ rotate: ringRotate, scale: ringScale }}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 md:left-[66%]"
          aria-hidden
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <circle cx="50" cy="50" r="49.5" fill="none" stroke="rgba(231,207,140,0.18)" strokeWidth="0.15" />
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(231,207,140,0.08)" strokeWidth="0.1" strokeDasharray="0.6 1.8" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(231,207,140,0.16)" strokeWidth="0.12" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(231,207,140,0.06)" strokeWidth="0.1" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(231,207,140,0.06)" strokeWidth="0.1" />
          </svg>
        </motion.div>

        {/* Trophy Hero Image Stage */}
        <motion.div
          style={{ scale: imgScale, y: imgY }}
          className="absolute inset-y-0 right-0 w-full md:left-[40%] md:w-[60%] lg:left-[38%] lg:w-[62%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: EASE }}
            className="relative h-full w-full"
          >
            <Image
              src="/images/hero.jpg"
              alt="Museum-quality solid cast brass championship cup trophy on black marble plinth"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, (min-width: 768px) 60vw, 100vw"
              className="object-cover object-center opacity-40 md:opacity-100"
            />
            {/* Gradients to seamlessly melt image into dark background */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent md:from-ink md:via-ink/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
          </motion.div>
        </motion.div>

        {/* Floating Spec Pill (Desktop) */}
        <motion.div
          style={{ y: badgeY, opacity: textOpacity }}
          className="absolute bottom-28 right-12 z-20 hidden lg:block max-w-xs"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: EASE }}
            className="rounded-xl border border-line-strong bg-ink-2/80 p-5 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[0.625rem] font-bold uppercase tracking-[0.24em] text-gold-2">
                Atelier Spec · N° 01
              </span>
            </div>
            <p className="font-display text-sm font-bold tracking-tight text-ivory">
              Solid Hand-Cast Brass Championship Cup
            </p>
            <p className="mt-1 text-xs leading-relaxed text-ivory-2/70">
              Turned on the lathe & polished by hand to a mirror finish. Mounted on Nero Marquina marble.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Dimming Transition Overlay */}
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink z-20" />

        {/* Hero Copy & Bold Typography */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 pt-28 md:justify-center md:px-10 md:pb-0"
        >
          {/* Refined Bold Sans-Serif Headline */}
          <h1 className="font-display max-w-xl text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold tracking-tight text-ivory leading-[1.08] lg:max-w-2xl">
            <Line delay={0.6}>Crafting excellence,</Line>
            <Line delay={0.78}>
              <span className="text-gild font-extrabold">celebrating</span> achievement.
            </Line>
          </h1>

          {/* Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.1 }}
            className="mt-8 flex flex-col items-start gap-6"
          >
            <p className="max-w-md text-sm leading-relaxed text-ivory-2 md:text-base font-normal">
              Three generations of brass trophies, presentation plaques, medals and awards —
              cast, turned and polished by hand in our own Nugegoda workshop.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/collection">The Collection</Button>
              <Button href="/contact" variant="ghost">
                Enquire
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 lg:flex z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-gold/80 [writing-mode:vertical-rl]">
              Scroll
            </span>
            <span className="relative h-14 w-px overflow-hidden bg-line-strong">
              <motion.span
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 h-1/2 bg-gold"
              />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Line({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, ease: EASE, delay }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
