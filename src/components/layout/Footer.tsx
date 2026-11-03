import Link from "next/link";
import { nav, site } from "@/content/site";
import { Monogram } from "@/components/ui/Monogram";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      {/* giant watermark */}
      <div
        aria-hidden
        className="font-display pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] leading-none text-ivory/[0.025]"
      >
        Since {site.established}
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Monogram className="h-12 w-12 text-gold" />
              <div className="leading-none">
                <p className="font-display text-2xl text-ivory">Sugathadasa Bandara</p>
                <p className="eyebrow mt-1.5 text-[0.6rem]">& Sons (Pvt) Ltd</p>
              </div>
            </div>
            <p className="font-display mt-10 max-w-sm text-3xl leading-tight text-ivory-2">
              Crafting excellence,{" "}
              <em className="text-gold">celebrating achievements.</em>
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="eyebrow mb-6">Pages</p>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-sweep text-sm text-ivory-2 hover:text-ivory">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-6">Workshop</p>
            <address className="space-y-1 text-sm not-italic text-ivory-2">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>{site.address.country}</p>
            </address>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-6">Contact</p>
            <ul className="space-y-1 text-sm text-ivory-2">
              <li>
                <a href={`tel:${site.phoneIntl}`} className="link-sweep hover:text-ivory">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-sweep hover:text-ivory">
                  {site.email}
                </a>
              </li>
              <li className="pt-3">
                <a href={site.social.facebook} target="_blank" rel="noreferrer" className="link-sweep hover:text-ivory">
                  Facebook
                </a>
              </li>
              <li>
                <a href={site.social.instagram} target="_blank" rel="noreferrer" className="link-sweep hover:text-ivory">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-line pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Nugegoda · Sri Lanka · Est. {site.established}</p>
        </div>
      </div>
    </footer>
  );
}
