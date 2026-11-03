import { faqs } from "@/content/site";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section className="bg-ink py-32 md:py-48">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <SectionHeading eyebrow="Questions" title="Before you ask." accent={[2]} />
        </div>
        <Reveal className="md:col-span-7 md:col-start-6" amount={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
