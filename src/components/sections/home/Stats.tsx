import Image from "next/image";
import { stats } from "@/content/site";
import { Counter } from "@/components/ui/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/gallery.jpg" alt="" fill sizes="100vw" className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
      </div>
      <div className="relative mx-auto max-w-[1600px] px-6 py-32 md:px-10 md:py-44">
        <Reveal>
          <p className="eyebrow mb-16 text-center">In numbers</p>
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-y-16 md:grid-cols-4" stagger={0.12}>
          {stats.map((s) => (
            <StaggerItem key={s.label} className="flex flex-col items-center text-center">
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="font-display text-6xl leading-none text-gild md:text-8xl"
              />
              <span className="mt-5 text-[0.7rem] uppercase tracking-[0.26em] text-ivory-2">{s.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
