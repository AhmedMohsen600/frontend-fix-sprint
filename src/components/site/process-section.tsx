import { Badge } from "@/components/ui/badge";
import { PremiumCard, PremiumCardGlow } from "@/components/ui/premium-card";
import { ScrollReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/features/service";

export function ProcessSection() {
  return (
    <section className="dark-section py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            align="center"
            description="The buyer sends the issue list. Ahmed confirms the sprint scope, implements the frontend work, checks the affected screens, and sends clear delivery notes."
            eyebrow="Process"
            title="Simple enough to close without a long call."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <ScrollReveal delay={index * 100} key={step.title}>
              <PremiumCard className="h-full">
                <PremiumCardGlow />
                <div className="relative z-10 p-6">
                  <Badge tone={index === 0 ? "sky" : index === 1 ? "mint" : "gold"}>
                    Step {index + 1}
                  </Badge>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-white/62">{step.detail}</p>
                </div>
              </PremiumCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
