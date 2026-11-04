"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { process } from "@/content/site";

/**
 * Scroll-locked process. The viewport is pinned for 4 screens of scroll;
 * each quarter swaps the step, while a ring arc fills around the numeral.
 */
export function ProcessLock() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(process.length - 1, Math.floor(v * process.length)));
  });
  const dash = useTransform(scrollYProgress, [0, 1], [314, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const step = process[active];

  return (
    <section ref={ref} className="relative h-[400vh] border-y border-line bg-ink-2">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* progress ring */}
        <motion.svg
          style={{ rotate }}
          viewBox="0 0 120 120"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 md:left-[30%]"
          aria-hidden
        >
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(231,207,140,0.10)" strokeWidth="0.3" />
          <motion.circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#c9a24a"
            strokeWidth="0.4"
            strokeDasharray="314"
            style={{ strokeDashoffset: dash }}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </motion.svg>

        <div className="relative mx-auto grid w-full max-w-[1600px] gap-10 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">How a commission works</p>
            <div className="relative h-[8rem] overflow-hidden md:h-[14rem]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={step.step}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  className="font-display absolute left-0 top-0 text-[8rem] leading-none text-gild md:text-[14rem]"
                >
                  {step.step}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-display text-5xl text-ivory md:text-7xl lg:text-8xl">{step.title}</h3>
                <p className="mt-8 max-w-md text-base leading-relaxed text-ivory-2 md:text-lg">{step.body}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-14 flex gap-3">
              {process.map((p, i) => (
                <span
                  key={p.step}
                  className={`h-px transition-all duration-700 ${i === active ? "w-16 bg-gold" : "w-8 bg-line-strong"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="eyebrow absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.55rem] text-muted">
          Keep scrolling
        </p>
      </div>
    </section>
  );
}
