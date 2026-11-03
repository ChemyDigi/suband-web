"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { services } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Editorial list. On desktop a floating image follows the cursor and
 * swaps per row; on touch devices the image sits inline.
 */
export function ServicesList() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section className="bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="What we do"
          title="Five services, one roof."
          accent={[3]}
          body="Design, casting, engraving, volume production and restoration — all carried out in our own workshop in Nugegoda."
          className="mb-20 md:mb-28"
        />

        <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setActive(null)} className="relative">
          {/* floating image (desktop) */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={active}
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-none absolute left-0 top-0 z-20 hidden h-72 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden md:block"
              >
                <Image src={services[active].image} alt="" fill sizes="224px" className="object-cover" />
              </motion.div>
            )}
          </AnimatePresence>

          <ul className="border-t border-line">
            {services.map((s, i) => (
              <Reveal key={s.numeral} as="li" amount={0.4} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setActive(i)}
                  className="group grid cursor-default gap-6 border-b border-line py-10 md:grid-cols-12 md:items-center md:py-12"
                >
                  <span className="eyebrow md:col-span-1">{s.numeral}</span>
                  <h3
                    className={cn(
                      "font-display text-4xl transition-all duration-500 md:col-span-5 md:text-6xl",
                      active === i ? "translate-x-3 text-gold" : "text-ivory",
                    )}
                  >
                    {s.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ivory-2 md:col-span-5 md:col-start-8">{s.body}</p>
                  <div className="relative aspect-[4/3] overflow-hidden md:hidden">
                    <Image src={s.image} alt="" fill sizes="100vw" className="object-cover" />
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
