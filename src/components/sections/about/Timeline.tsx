"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { timeline } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Pinned heritage timeline. The giant year on the left is sticky and swaps
 * as each milestone scrolls into the centre of the viewport.
 */
export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.5", "end 0.5"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(timeline.length - 1, Math.max(0, Math.floor(v * timeline.length))));
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative border-t border-line bg-ink-2 py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Heritage"
          title="Half a century, one bench at a time."
          accent={[0, 1, 2]}
          className="mb-24 md:mb-40"
        />

        <div ref={ref} className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="sticky top-1/2 hidden -translate-y-1/2 md:block">
              <p className="eyebrow mb-6">Milestone {String(active + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}</p>
              <div className="relative h-[9rem] overflow-hidden lg:h-[12rem]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={timeline[active].year}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display absolute left-0 top-0 block text-[9rem] leading-none text-gild lg:text-[12rem]"
                  >
                    {timeline[active].year}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="relative md:col-span-6 md:col-start-7">
            <div className="absolute left-0 top-0 h-full w-px bg-line">
              <motion.div style={{ height: lineH }} className="w-full bg-gold" />
            </div>
            <ol className="space-y-24 pl-10 md:space-y-[50vh]">
              {timeline.map((t, i) => (
                <li key={t.year} className="relative">
                  <span
                    className={cn(
                      "absolute -left-10 top-2 h-2 w-2 -translate-x-1/2 rotate-45 transition-colors duration-500",
                      active >= i ? "bg-gold" : "bg-line-strong",
                    )}
                  />
                  <p className="font-display mb-3 text-3xl text-gold md:hidden">{t.year}</p>
                  <h3
                    className={cn(
                      "font-display text-3xl transition-colors duration-500 md:text-5xl",
                      active === i ? "text-ivory" : "text-ivory/45",
                    )}
                  >
                    {t.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-ivory-2">{t.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
