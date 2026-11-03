import { values } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Values() {
  return (
    <section className="bg-ink py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="What we hold to"
          title="Four things we will not compromise."
          accent={[0, 1]}
          className="mb-20 md:mb-28"
        />
        <Stagger className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {values.map((v, i) => (
            <StaggerItem
              key={v.title}
              className="group relative border-b border-r border-line p-8 transition-colors duration-700 hover:bg-ink-2 md:p-10"
            >
              <span className="font-display block text-6xl leading-none text-ivory/10 transition-colors duration-500 group-hover:text-gold/60">
                0{i + 1}
              </span>
              <h3 className="font-display mt-16 text-3xl text-ivory md:mt-24">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ivory-2">{v.body}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
