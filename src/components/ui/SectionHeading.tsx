import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  className,
  align = "left",
  size = "md",
}: {
  eyebrow?: string;
  title: string;
  accent?: number[];
  body?: string;
  className?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal amount={0.6}>
          <p className={cn("eyebrow mb-6", align === "center" && "text-center")}>
            {eyebrow}
          </p>
        </Reveal>
      )}
      <SplitText
        text={title}
        accent={accent}
        as="h2"
        className={cn(
          "font-display leading-[1.02] text-ivory",
          size === "lg" ? "text-5xl md:text-7xl lg:text-8xl" : "text-4xl md:text-6xl",
          align === "center" && "justify-center",
        )}
      />
      {body && (
        <Reveal delay={0.3} amount={0.6}>
          <p className={cn("mt-8 max-w-xl text-base leading-relaxed text-ivory-2 md:text-lg", align === "center" && "mx-auto")}>
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
