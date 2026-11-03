import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "solid", className }: Props) {
  const base =
    "group relative inline-flex items-center gap-4 overflow-hidden px-8 py-4 text-[0.7rem] uppercase tracking-[0.26em] transition-colors duration-500";
  if (variant === "ghost") {
    return (
      <Link href={href} className={cn(base, "border border-line-strong text-ivory hover:text-ink", className)}>
        <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-600 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-x-0" />
        <span className="relative">{children}</span>
        <Arrow />
      </Link>
    );
  }
  return (
    <Link href={href} className={cn(base, "bg-gold text-ink hover:text-ivory", className)}>
      <span className="absolute inset-0 -translate-x-full bg-ivory/10 transition-transform duration-600 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-x-0" />
      <span className="absolute inset-0 translate-y-full bg-ink-3 transition-transform duration-600 ease-[cubic-bezier(.76,0,.24,1)] group-hover:translate-y-0" />
      <span className="relative">{children}</span>
      <Arrow />
    </Link>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="relative h-3.5 w-3.5 -translate-x-1 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}
