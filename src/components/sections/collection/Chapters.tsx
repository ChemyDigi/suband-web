"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { collection } from "@/content/site";
import { Button } from "@/components/ui/Button";

/**
 * Stacked scroll-lock chapters. Each family of award is a full-viewport
 * sticky card; as the next one scrolls up it covers the previous, which
 * recedes (scales down and dims) beneath it.
 */
export function Chapters() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section ref={ref} className="relative">
      {collection.map((item, i) => (
        <Chapter
          key={item.slug}
          item={item}
          index={i}
          total={collection.length}
          progress={scrollYProgress}
          stacked={desktop}
        />
      ))}
    </section>
  );
}

function Chapter({
  item,
  index,
  total,
  progress,
  stacked,
}: {
  item: (typeof collection)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
  stacked: boolean;
}) {
  // Each card owns a 1/total slice of the section's scroll range.
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(progress, [start, end], [1, 0.9]);
  const dim = useTransform(progress, [start, end], [0, 0.7]);
  const isLast = index === total - 1;
  const flip = index % 2 === 1;

  return (
    <div id={item.slug} className="relative md:sticky md:top-0 md:h-screen" style={{ zIndex: index + 1 }}>
      <motion.div
        style={isLast || !stacked ? undefined : { scale }}
        className="relative h-full w-full origin-top overflow-hidden border-t border-line bg-ink-2 md:border-0"
      >
        <div className="mx-auto grid h-full max-w-[1600px] md:grid-cols-12">
          {/* Image */}
          <div className={`relative h-[55vh] md:h-full md:col-span-6 ${flip ? "md:order-2" : ""}`}>
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-ink-2/0" />
          </div>

          {/* Copy */}
          <div
            className={`relative flex flex-col justify-center px-6 pb-20 pt-10 md:col-span-6 md:px-16 md:pb-0 md:pt-0 lg:px-24 ${
              flip ? "md:order-1" : ""
            }`}
          >
            <span className="font-display absolute right-10 top-10 hidden text-[14rem] leading-none text-ivory/[0.06] md:block">
              {item.numeral}
            </span>
            <p className="eyebrow mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-gold/60" />
              {item.numeral} / {String(total).padStart(2, "0")}
            </p>
            <h2 className="font-display text-4xl leading-[1.02] text-ivory md:text-6xl lg:text-7xl">{item.title}</h2>
            <p className="font-display mt-4 text-xl font-bold text-gold-2 md:text-2xl">{item.short}</p>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ivory-2">{item.body}</p>
            <div className="mt-10">
              <Button href="/contact" variant="ghost">
                Enquire about {item.title.split(" ")[0].toLowerCase()}
              </Button>
            </div>
          </div>
        </div>
        {stacked && <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink" />}
      </motion.div>
    </div>
  );
}
