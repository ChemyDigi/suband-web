import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const materials = [
  { name: "Brass", note: "Cast and turned in-house. Lacquered or left to patina." },
  { name: "Teak & Mahogany", note: "Seasoned hardwood bases and plaque boards." },
  { name: "Acrylic", note: "Optically clear, laser-cut and flame-polished." },
  { name: "Crystal", note: "Imported blanks, engraved and gold-leafed." },
  { name: "Aluminium", note: "Anodised, etched and colour-filled labels." },
  { name: "Enamel", note: "Hard-fired colour for medals and badges." },
];

export function Materials() {
  return (
    <section className="relative z-10 border-t border-line bg-ink py-32 md:py-44">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Materials"
          title="Honest materials, properly finished."
          accent={[0, 1]}
          className="mb-20"
        />
        <Stagger className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {materials.map((m, i) => (
            <StaggerItem key={m.name} className="group bg-ink p-8 transition-colors duration-700 hover:bg-ink-2 md:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-3xl text-ivory transition-colors group-hover:text-gold-2">{m.name}</h3>
                <span className="eyebrow text-gold/50">0{i + 1}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ivory-2">{m.note}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
