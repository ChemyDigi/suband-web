"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE, delay: d },
  }),
};

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  as?: "div" | "p" | "li" | "span" | "section";
};

/** Fade-up on enter. Fires once. */
export function Reveal({ children, className, delay = 0, amount = 0.3, as = "div" }: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      custom={delay}
    >
      {children}
    </Tag>
  );
}

/** Children revealed with a stagger. Each child should be a <Reveal>-like motion element or use <StaggerItem>. */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  amount = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

/** Image/box that unmasks with a clip-path wipe. */
export function Unmask({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left";
}) {
  const from = direction === "up" ? "inset(100% 0 0 0)" : "inset(0 100% 0 0)";
  // The clipped element itself never "intersects" in Chrome, so observe an
  // unclipped wrapper and drive the animation from that.
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: from }}
        animate={{ clipPath: inView ? "inset(0 0 0 0)" : from }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay }}
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: inView ? 1 : 1.2 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay }}
          className="relative h-full w-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
