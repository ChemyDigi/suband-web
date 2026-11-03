"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { testimonials } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];

  return (
    <section className="border-y border-line bg-ink-2">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-28 md:grid-cols-12 md:px-10 md:py-40">
        <div className="md:col-span-3">
          <Reveal>
            <p className="eyebrow flex items-center gap-4">
              <span className="h-px w-8 bg-gold/60" />
              Kind words
            </p>
          </Reveal>
          <div className="mt-10 flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className={cn(
                  "h-px w-10 transition-all duration-500",
                  idx === i ? "bg-gold" : "bg-line-strong hover:bg-gold/50",
                )}
              />
            ))}
          </div>
        </div>
        <div className="relative min-h-[14rem] md:col-span-9">
          <span className="font-display absolute -left-4 -top-16 select-none text-[12rem] leading-none text-gold/10 md:-left-10">
            &ldquo;
          </span>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <p className="font-display text-3xl leading-[1.2] text-ivory md:text-5xl">{t.quote}</p>
              <footer className="mt-8 flex items-center gap-4 text-sm text-ivory-2">
                <span className="h-px w-8 bg-gold" />
                <span>
                  {t.name} <span className="text-muted">— {t.org}</span>
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
