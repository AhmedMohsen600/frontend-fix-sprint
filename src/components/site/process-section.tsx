import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/features/service";

export function ProcessSection() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          description="The buyer sends the issue list. Ahmed confirms the sprint scope, implements the frontend work, checks the affected screens, and sends clear delivery notes."
          eyebrow="Process"
          title="Simple enough to close without a long call."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <article className="rounded-lg border border-line bg-white p-6 shadow-sm" key={step.title}>
              <Badge tone={index === 0 ? "sky" : index === 1 ? "mint" : "gold"}>
                Step {index + 1}
              </Badge>
              <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
