"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import { process } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const IMAGES = ["/images/home/brief.png", "/images/home/design.png", "/images/home/make.png", "/images/home/deliver.png"];

/**
 * Pinned process. Left column (image + giant step numeral) is sticky while
 * the four steps scroll past on the right; the image crossfades per step.
 */
export function Craft() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.4", "end 0.8"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(process.length - 1, Math.floor(v * process.length)));
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="The craft"
          title="From a sentence to a shelf."
          accent={[4]}
          body="Every piece passes through the same four stages, and the same few pairs of hands."
          className="mb-20 md:mb-32"
        />

        <div ref={ref} className="grid gap-16 md:grid-cols-12">
          {/* Sticky visual */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="sticky top-24 hidden md:block">
              <div className="relative aspect-[4/5] overflow-hidden">
                {IMAGES.map((src, i) => (
                  <motion.div
                    key={src}
                    animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.08 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={src}
                      alt={process[i] ? `${process[i].step} - ${process[i].title}` : ""}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-6 left-6 overflow-hidden">
                  <motion.span
                    key={active}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display block text-[7rem] leading-none text-gold"
                  >
                    {process[active].step}
                  </motion.span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="relative md:col-span-6 lg:col-span-6 lg:col-start-7">
            <div className="absolute left-0 top-0 h-full w-px bg-line">
              <motion.div style={{ height: lineH }} className="w-full bg-gold" />
            </div>
            <ol className="space-y-28 pl-10 md:space-y-[45vh]">
              {process.map((p, i) => (
                <li key={p.step} className="relative">
                  <span
                    className={cn(
                      "absolute -left-10 top-3 h-2 w-2 -translate-x-1/2 rotate-45 transition-colors duration-500",
                      active >= i ? "bg-gold" : "bg-line-strong",
                    )}
                  />
                  <p className="eyebrow mb-4">{p.step}</p>
                  <h3
                    className={cn(
                      "font-display text-4xl transition-colors duration-500 md:text-6xl",
                      active === i ? "text-ivory" : "text-ivory/50",
                    )}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ivory-2">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
