"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-start justify-between gap-8 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-6">
                <span className="eyebrow text-gold/60">0{i + 1}</span>
                <span
                  className={cn(
                    "font-display text-2xl leading-snug transition-colors duration-300 md:text-3xl",
                    isOpen ? "text-gold" : "text-ivory group-hover:text-gold-2",
                  )}
                >
                  {item.q}
                </span>
              </span>
              <span className="relative mt-3 h-4 w-4 shrink-0">
                <span className="absolute left-0 top-1/2 h-px w-full bg-gold" />
                <span
                  className={cn(
                    "absolute left-1/2 top-0 h-full w-px bg-gold transition-transform duration-500",
                    isOpen ? "scale-y-0" : "scale-y-100",
                  )}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 pl-[3.25rem] text-base leading-relaxed text-ivory-2">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
