import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesList } from "@/components/sections/services/ServicesList";
import { ProcessLock } from "@/components/sections/services/ProcessLock";
import { FAQ } from "@/components/sections/services/FAQ";
import { CTA } from "@/components/sections/shared/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom design, casting, engraving, bulk institutional orders and trophy restoration — in our own workshop.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Made to order, made by hand."
        accent={[4, 5]}
        body="From a single engraved plate to a thousand matched medals — how we work, and what to expect."
        image="/images/engraving.jpg"
        alt="Engraving tool cutting a brass plate"
      />
      <ServicesList />
      <ProcessLock />
      <FAQ />
      <CTA />
    </>
  );
}
