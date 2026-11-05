import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit or call the workshop at ${site.address.line1}, ${site.address.line2}.`,
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Visit the workshop."
        accent={[2]}
        body="We answer every enquiry within a working day. Or come and see the pieces in hand — the kettle is always on."
        image="/images/hero-images/inquire.png"
        alt="Inside the workshop"
      />

      <section className="bg-ink py-32 md:py-44">
        <div className="mx-auto grid max-w-[1600px] gap-20 px-6 md:grid-cols-12 md:px-10">
          {/* Details */}
          <div className="md:col-span-4">
            <SectionHeading eyebrow="Find us" title="Nugegoda, Sri Lanka." accent={[0]} className="mb-14" />
            <Stagger className="space-y-10" stagger={0.1}>
              <StaggerItem>
                <p className="eyebrow mb-3">Address</p>
                <address className="font-display text-2xl not-italic leading-snug text-ivory">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.country}
                </address>
              </StaggerItem>
              <StaggerItem>
                <p className="eyebrow mb-3">Telephone</p>
                <a href={`tel:${site.phoneIntl}`} className="font-display link-sweep text-2xl text-ivory hover:text-gold">
                  {site.phone}
                </a>
                <p className="mt-1 text-sm text-muted">{site.phoneAlt}</p>
              </StaggerItem>
              <StaggerItem>
                <p className="eyebrow mb-3">Email</p>
                <a href={`mailto:${site.email}`} className="font-display link-sweep text-2xl text-ivory hover:text-gold">
                  {site.email}
                </a>
              </StaggerItem>
              <StaggerItem>
                <p className="eyebrow mb-3">Hours</p>
                <ul className="divide-y divide-line border-y border-line">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between py-3 text-sm">
                      <span className="text-ivory-2">{h.days}</span>
                      <span className="text-ivory">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            </Stagger>
          </div>

          {/* Form */}
          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="eyebrow mb-10">Send an enquiry</p>
            </Reveal>
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative border-t border-line">
        <div className="relative h-[60vh] w-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]">
          <iframe
            src={mapSrc}
            title="Map to Sugathadasa Bandara & Sons"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute bottom-8 left-6 border border-line bg-ink/90 px-6 py-4 backdrop-blur md:left-10">
          <p className="eyebrow mb-1">Workshop</p>
          <p className="text-sm text-ivory">{site.address.line1}, {site.address.line2}</p>
        </div>
      </section>
    </>
  );
}
