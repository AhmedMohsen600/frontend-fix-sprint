import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Badge
        className={
          theme === "dark"
            ? "border-white/10 bg-white/10 text-blue-100"
            : "border-white/10 bg-white/10 text-blue-100"
        }
        tone="sky"
      >
        {eyebrow}
      </Badge>
      <h2
        className={cn(
          "mt-4 text-4xl font-semibold leading-[1.04] sm:text-5xl",
          theme === "dark" ? "text-white" : "text-white"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 text-base leading-7 sm:text-lg",
          theme === "dark" ? "text-white/68" : "text-white/68"
        )}
      >
        {description}
      </p>
    </div>
  );
}
