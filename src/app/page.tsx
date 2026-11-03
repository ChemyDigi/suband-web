import { Hero } from "@/components/sections/home/Hero";
import { Manifesto } from "@/components/sections/home/Manifesto";
import { CollectionScroll } from "@/components/sections/home/CollectionScroll";
import { Craft } from "@/components/sections/home/Craft";
import { Stats } from "@/components/sections/home/Stats";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTA } from "@/components/sections/shared/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <CollectionScroll />
      <Craft />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
