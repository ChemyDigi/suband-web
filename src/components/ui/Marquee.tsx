import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("marquee relative overflow-hidden border-y border-line py-6", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent" />
      <div className="marquee-track flex w-max items-center gap-16 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className="font-display text-2xl text-ivory-2/70 md:text-3xl">{item}</span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
