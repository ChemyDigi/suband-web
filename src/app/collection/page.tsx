import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Chapters } from "@/components/sections/collection/Chapters";
import { Materials } from "@/components/sections/collection/Materials";
import { CTA } from "@/components/sections/shared/CTA";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Brass trophies, presentation plaques, acrylic and crystal awards, medals, souvenirs and anodised aluminium labels.",
};

export default function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="The collection"
        title="Six families of award."
        accent={[3]}
        body="From solid brass cups to die-struck medals — every form we make, and what each one is for."
        image="/images/gallery.jpg"
        alt="Gallery of brass trophies and awards on backlit shelves"
      />
      <Chapters />
      <Materials />
      <CTA />
    </>
  );
}
