import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Story } from "@/components/sections/about/Story";
import { Timeline } from "@/components/sections/about/Timeline";
import { Values } from "@/components/sections/about/Values";
import { ParallaxBand } from "@/components/sections/shared/ParallaxBand";
import { CTA } from "@/components/sections/shared/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Three generations of trophy makers in Nugegoda. The story, heritage and values of Sugathadasa Bandara & Sons.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the workshop"
        title="Three generations, one bench."
        accent={[2]}
        body="A family business that has been casting, engraving and polishing awards in Nugegoda for over half a century."
        image="/images/hero-images/about.png"
        alt="About the workshop"
      />
      <Story />
      <Timeline />
      <Values />
      <ParallaxBand
        image="/images/gallery.jpg"
        alt="Gallery of brass awards"
        eyebrow="The name on the base"
        title="Every piece that leaves this workshop carries our family's name."
        accent={[8, 9]}
        caption="It has for over fifty years. It will for the next fifty."
      />
      <CTA />
    </>
  );
}
