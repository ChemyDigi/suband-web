"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";


export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 600 && y > prev && !open);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    return () => document.documentElement.classList.remove("lenis-stopped");
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -96 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled && !open ? "bg-ink/70 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="group flex flex-col leading-none transition-opacity duration-300 hover:opacity-85">
            <span className="font-display text-[1.05rem] tracking-wide text-white">
              Sugathadasa Bandara
            </span>
            <span className="eyebrow mt-1 text-[0.55rem] tracking-[0.2em] text-white">
              & Sons (Pvt) Ltd
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "link-sweep text-[0.72rem] uppercase tracking-[0.24em] transition-colors duration-300",
                    active ? "text-gold" : "text-ivory-2 hover:text-ivory",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="group relative overflow-hidden border border-line-strong px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:text-ink"
            >
              <span className="absolute inset-0 -translate-y-full bg-gold transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
              <span className="relative">Inquire</span>
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span
              className={cn(
                "absolute h-px w-6 bg-ivory transition-all duration-500",
                open ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-6 bg-ivory transition-all duration-500",
                open ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink-2 px-6 pb-10 pt-28 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "font-display block text-5xl leading-[1.1]",
                      pathname === item.href ? "text-gold font-black" : "text-ivory",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-muted"
            >
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p className="mt-3 text-gold">{site.phone}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
