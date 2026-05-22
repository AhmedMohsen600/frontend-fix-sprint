import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { PremiumCard, PremiumCardGlow } from "@/components/ui/premium-card";
import { ScrollReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  cleanupIncludedItems,
  cleanupPainItems,
  cleanupScopeRules,
  getContactHref
} from "@/features/service";

export function CleanupSection() {
  return (
    <section className="dark-section px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="cleanup">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_76%_8%,rgba(5,66,255,0.24),transparent_56%)]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <ScrollReveal className="lg:sticky lg:top-28">
          <SectionHeading
            description="I clean and restructure dirty React/Next.js frontend code so the team can move faster, without changing the current UI or breaking behavior."
            eyebrow="Cleanup Sprint"
            theme="dark"
            title="Have messy React code nobody wants to touch?"
          />
          <p className="mt-6 max-w-xl text-base leading-7 text-white/58">
            One scoped feature or module gets split, renamed, simplified, and
            documented. The result is code your team can actually maintain after
            the sprint.
          </p>
          <ButtonLink
            className="mt-8 border-white bg-white text-ink hover:border-blue-100 hover:bg-blue-50"
            href={getContactHref("Frontend Cleanup Sprint Request")}
            icon={<ArrowRight aria-hidden="true" className="size-4" />}
          >
            Send messy code/module
          </ButtonLink>
        </ScrollReveal>

        <div className="grid gap-5">
          <ScrollReveal>
            <PremiumCard>
              <PremiumCardGlow />
              <div className="relative z-10 p-6 sm:p-7">
                <Badge className="border-red-300/20 bg-red-300/10 text-red-100" tone="neutral">
                  Good fit when you have
                </Badge>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {cleanupPainItems.map((item, index) => (
                    <p
                      className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium leading-6 text-white/72 transition duration-300 hover:border-blue-300/24 hover:bg-white/[0.07]"
                      key={item}
                      style={{ transitionDelay: `${index * 20}ms` }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            <ScrollReveal delay={90}>
            <PremiumCard>
              <PremiumCardGlow />
              <div className="relative z-10 p-6 sm:p-7">
                <Badge className="border-emerald-300/20 bg-emerald-300/10 text-emerald-100" tone="neutral">
                  Included
                </Badge>
                <div className="mt-6 grid gap-3">
                  {cleanupIncludedItems.slice(0, 7).map((item) => (
                    <p className="flex gap-3 text-sm leading-6 text-white/68" key={item}>
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-emerald-300"
                      />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </PremiumCard>
            </ScrollReveal>

            <ScrollReveal delay={180}>
            <PremiumCard>
              <PremiumCardGlow />
              <div className="relative z-10 p-6 sm:p-7">
                <Badge className="border-white/20 bg-white/10 text-white" tone="neutral">
                  Scope rules
                </Badge>
                <div className="mt-6 grid gap-3">
                  {cleanupScopeRules.map((item) => (
                    <p className="text-sm leading-6 text-white/58" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </PremiumCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
