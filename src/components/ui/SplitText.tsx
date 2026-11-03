"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Word indices to render in gold gradient */
  accent?: number[];
  once?: boolean;
};

/**
 * Splits text into words and raises each one from behind a mask.
 * Used for headlines.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  as = "h2",
  accent = [],
  once = true,
}: Props) {
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.5 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="overflow-hidden pb-[0.12em] -mb-[0.12em] pr-[0.25em]">
          <motion.span
            className={cn("inline-block will-change-transform", accent.includes(i) && "font-extrabold text-gild")}
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 1.1, ease: EASE } },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
