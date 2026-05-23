import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { PremiumCard, PremiumCardGlow } from "@/components/ui/premium-card";
import { ScrollReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { demoCapabilities } from "@/features/dashboard-demo";
import { beforeAfterValue } from "@/features/service";

export function ProofSection() {
  return (
    <section className="dark-section py-20 lg:py-28" id="proof">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <ScrollReveal className="lg:sticky lg:top-28">
            <SectionHeading
              description="The demo is a compact proof piece: hierarchy, data density, responsive behavior, visible states, and client-friendly delivery notes."
              eyebrow="Proof"
              title="A dashboard demo that shows the kind of polish buyers pay for."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink
                href="/demo"
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
              >
                View dashboard demo
              </ButtonLink>
              <ButtonLink
                href="/use-cases"
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
                variant="secondary"
              >
                View use cases
              </ButtonLink>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {demoCapabilities.map((capability, index) => (
              <ScrollReveal delay={index * 80} key={capability.title}>
                <PremiumCard className="h-full">
                  <PremiumCardGlow />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <capability.icon aria-hidden="true" className="size-5 text-blue-200" />
                      <Badge tone={index % 2 === 0 ? "sky" : "mint"}>Proof</Badge>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/62">{capability.detail}</p>
                  </div>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {beforeAfterValue.map((item, index) => (
            <ScrollReveal delay={index * 80} key={item.before}>
              <PremiumCard className="h-full">
                <PremiumCardGlow />
                <div className="relative z-10 p-6">
                  <Badge tone="neutral">Before / after</Badge>
                  <p className="mt-5 text-sm leading-6 text-white/48">{item.before}</p>
                  <p className="mt-4 text-lg font-semibold leading-7 text-white">
                    {item.after}
                  </p>
                </div>
              </PremiumCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
