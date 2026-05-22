import { CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PremiumCard, PremiumCardGlow } from "@/components/ui/premium-card";
import { ScrollReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  lowRiskReasons,
  notIncludedItems,
  servicePackages,
  whatICanFixItems
} from "@/features/service";

export function FixScopeSection() {
  return (
    <section className="dark-section py-20 lg:py-28" id="fixes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            description="These are small, visible frontend problems that can be scoped, fixed, checked, and handed off without turning into a rebuild."
            eyebrow="Scope"
            title="What I can fix in a Frontend Fix Sprint."
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {whatICanFixItems.map((item, index) => (
            <ScrollReveal delay={index * 45} key={item}>
              <div className="h-full rounded-[18px] border border-white/10 bg-white/[0.055] p-4 text-sm font-semibold text-white/78 shadow-dark-soft transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.075]">
                <CheckCircle2 aria-hidden="true" className="mb-3 size-5 text-emerald-300" />
                {item}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <ScrollReveal>
            <PremiumCard>
              <PremiumCardGlow />
              <div className="relative z-10 p-6">
                <Badge tone="mint">What the client gets</Badge>
                <h3 className="mt-5 text-2xl font-bold text-white">Delivered in 3 days</h3>
                <ul className="mt-6 grid gap-3">
                  {servicePackages.sprint.includes.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-white/68" key={item}>
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-emerald-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </PremiumCard>
          </ScrollReveal>

          <ScrollReveal delay={110}>
            <PremiumCard>
              <PremiumCardGlow />
              <div className="relative z-10 p-6">
                <Badge tone="coral">Not included</Badge>
                <h3 className="mt-5 text-2xl font-bold text-white">
                  Clear limits protect both sides
                </h3>
                <ul className="mt-6 grid gap-3">
                  {notIncludedItems.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-white/62" key={item}>
                      <XCircle
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-orange-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </PremiumCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={160}>
          <div className="mt-4 rounded-[24px] border border-white/10 bg-[radial-gradient(ellipse_70%_90%_at_50%_0%,rgba(5,66,255,0.24),transparent_58%),#090b10] p-6 text-white shadow-dark-soft">
            <Badge className="border-white/20 bg-white/10 text-white">
              Why $250 is low-risk
            </Badge>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {lowRiskReasons.map((reason) => (
                <p className="text-sm leading-6 text-white/68" key={reason}>
                  {reason}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
