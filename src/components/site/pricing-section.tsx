import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { PremiumCard, PremiumCardGlow } from "@/components/ui/premium-card";
import { ScrollReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  finalBossBuildBestFor,
  finalBossBuildScopeRules,
  formatUsd,
  getContactHref,
  getFinalBossBuildHref,
  type ServicePackage,
  servicePackages
} from "@/features/service";

const packages: ServicePackage[] = [
  servicePackages.sprint,
  servicePackages.cleanup,
  servicePackages.retainer
];

const packageSubjects = [
  "Frontend Fix Sprint Request",
  "Frontend Cleanup Sprint Request",
  "Monthly Frontend Care Request"
];

export function PricingSection() {
  const finalBossBuild = servicePackages.finalBoss;

  return (
    <section className="dark-section py-20 lg:py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            align="center"
            description="Small sprints stay easy to buy. Full builds stay custom, scoped, and milestone-based."
            eyebrow="Pricing"
            title="Clear prices for sprints. Custom scope for bigger builds."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {packages.map((item, index) => (
            <ScrollReveal delay={index * 100} key={item.name}>
              <PremiumCard className="h-full">
                <PremiumCardGlow />
                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Badge tone={index === 0 ? "mint" : "sky"}>
                        {index === 0
                          ? "UI fixes"
                          : index === 1
                            ? "Code cleanup"
                            : "Monthly option"}
                      </Badge>
                      <h3 className="mt-5 text-2xl font-bold text-white">{item.name}</h3>
                      <p className="mt-3 leading-7 text-white/62">{item.description}</p>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <div className="text-4xl font-bold text-white">
                        {item.priceLabel ?? formatUsd(item.price)}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white/46">
                        {item.timeline}
                      </div>
                    </div>
                  </div>
                  <ul className="mt-7 grid gap-3">
                    {item.includes.map((included) => (
                      <li className="flex gap-3 text-sm leading-6 text-white/64" key={included}>
                        <Check
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-emerald-300"
                        />
                        {included}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 text-sm font-medium text-white/54">{item.bestFor}</p>
                  <ButtonLink
                    className="mt-7 w-full"
                    href={getContactHref(packageSubjects[index])}
                    icon={<ArrowRight aria-hidden="true" className="size-4" />}
                  >
                    {index === 0
                      ? "Send me your frontend issue"
                      : index === 1
                        ? "Send messy code/module"
                        : "Ask about monthly care"}
                  </ButtonLink>
                </div>
              </PremiumCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <article
            className="mt-6 overflow-hidden rounded-[28px] border border-blue-300/20 bg-[radial-gradient(ellipse_78%_100%_at_50%_0%,rgba(5,66,255,0.32),transparent_54%),linear-gradient(135deg,#111522,#070910_60%,#03050a)] text-white shadow-dark-soft"
            id="full-build"
          >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <Badge className="border-blue-300/40 bg-white/10 text-blue-100" tone="neutral">
                Premium custom option
              </Badge>
              <h3 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                {finalBossBuild.name}
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-white/70">
                Need more than a small fix? Hire me to build the full frontend.
                I can take your Figma, product idea, or existing requirements
                and turn them into a clean React/Next.js frontend with solid
                structure, responsive UI, and production-ready handoff.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4">
                  <p className="text-sm font-semibold uppercase text-blue-100">
                    Pricing
                  </p>
                  <p className="mt-2 text-3xl font-bold">Starting from $1,500</p>
                  <p className="mt-1 text-sm text-white/54">Custom quote</p>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-4">
                  <p className="text-sm font-semibold uppercase text-blue-100">
                    Delivery
                  </p>
                  <p className="mt-2 text-3xl font-bold">2-4 weeks+</p>
                  <p className="mt-1 text-sm text-white/54">
                    Timeline depends on scope
                  </p>
                </div>
              </div>
              <ButtonLink
                className="mt-8 border-white bg-white text-ink hover:border-white hover:bg-blue-50"
                href={getFinalBossBuildHref()}
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
              >
                Discuss a full build
              </ButtonLink>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[18px] border border-white/10 bg-white/10 p-5">
                <Badge className="border-white/20 bg-white/10 text-white" tone="neutral">
                  Included
                </Badge>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {finalBossBuild.includes.map((included) => (
                    <p className="flex gap-3 text-sm leading-6 text-white/72" key={included}>
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-emerald-300"
                      />
                      {included}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-5">
                  <Badge className="border-white/20 bg-white/10 text-white" tone="neutral">
                    Best for
                  </Badge>
                  <ul className="mt-5 grid gap-2">
                    {finalBossBuildBestFor.map((item) => (
                      <li className="text-sm leading-6 text-white/68" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/10 p-5">
                  <Badge className="border-white/20 bg-white/10 text-white" tone="neutral">
                    Scope rules
                  </Badge>
                  <ul className="mt-5 grid gap-2">
                    {finalBossBuildScopeRules.map((item) => (
                      <li className="text-sm leading-6 text-white/68" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
