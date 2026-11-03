"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString();
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
