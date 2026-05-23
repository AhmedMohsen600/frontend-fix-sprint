import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { PremiumCard, PremiumCardGlow } from "@/components/ui/premium-card";
import { ScrollReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaSection } from "@/components/site/cta-section";
import { SiteHeader } from "@/components/site/site-header";
import { getContactHref } from "@/features/service";
import { useCases } from "@/features/use-cases";

export const metadata: Metadata = {
  title: "Frontend Use Cases | Ahmed Mohsen",
  description:
    "Real frontend use cases for ERP dashboards, internal portals, fintech websites, payment products, and scoped React/Next.js delivery."
};

export default function UseCasesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="dark-section px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="mx-auto max-w-7xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_70%_44%_at_26%_0%,rgba(5,66,255,0.28),transparent_58%)]"
            />
            <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <ScrollReveal>
                <Badge className="border-white/10 bg-white/10 text-blue-100">
                  Use cases
                </Badge>
                <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                  Frontend work for products that need trust and structure.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <p className="max-w-2xl text-lg leading-8 text-white/66">
                  These references show the kind of screens Ahmed can fix,
                  clean, or build: dense ERP dashboards, internal portals,
                  payment websites, SaaS product pages, and frontend systems
                  where UI polish and maintainable code both matter.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={getContactHref("Use Case Project Request")}
                    icon={<ArrowRight aria-hidden="true" className="size-4" />}
                  >
                    Send a similar project
                  </ButtonLink>
                  <ButtonLink
                    href="/demo"
                    icon={<ExternalLink aria-hidden="true" className="size-4" />}
                    variant="secondary"
                  >
                    View dashboard demo
                  </ButtonLink>
                </div>
              </ScrollReveal>
            </div>

            <div className="relative mt-16 grid gap-5">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;

                return (
                  <ScrollReveal delay={index * 110} key={useCase.title}>
                    <PremiumCard className="h-full">
                      <PremiumCardGlow />
                      <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="flex size-12 items-center justify-center rounded-full bg-sky text-white shadow-[0_0_34px_rgba(5,66,255,0.35)]">
                              <Icon aria-hidden="true" className="size-5" />
                            </span>
                            <Badge tone={index === 0 ? "sky" : "mint"}>
                              {useCase.eyebrow}
                            </Badge>
                            <Badge tone="neutral">{useCase.category}</Badge>
                          </div>

                          <h2 className="mt-7 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                            {useCase.title}
                          </h2>
                          <p className="mt-4 text-base leading-7 text-white/66">
                            {useCase.summary}
                          </p>
                          <p className="mt-5 text-sm leading-6 text-white/50">
                            {useCase.context}
                          </p>

                          <ButtonLink
                            className="mt-8"
                            href={useCase.href}
                            icon={<ExternalLink aria-hidden="true" className="size-4" />}
                            rel="noreferrer"
                            target="_blank"
                            variant="secondary"
                          >
                            View live reference
                          </ButtonLink>
                        </div>

                        <div className="grid gap-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <UseCaseList title="What this proves" items={useCase.painPoints} />
                            <UseCaseList title="Frontend focus" items={useCase.frontendFocus} />
                          </div>

                          <div className="rounded-[18px] border border-white/10 bg-white/[0.055] p-5">
                            <p className="text-sm font-semibold uppercase text-blue-100">
                              Offer fit
                            </p>
                            <div className="mt-4 grid gap-3">
                              {useCase.offerFit.map((item) => (
                                <p className="text-sm leading-6 text-white/68" key={item}>
                                  {item}
                                </p>
                              ))}
                            </div>
                          </div>

                          <p className="rounded-[18px] border border-emerald-300/16 bg-emerald-300/8 p-5 text-sm font-medium leading-6 text-emerald-50/82">
                            {useCase.proofNote}
                          </p>
                        </div>
                      </div>
                    </PremiumCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="dark-section border-y border-white/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <ScrollReveal>
              <SectionHeading
                description="The same offer system can handle a quick issue list, a messy module, or a bigger scoped frontend build."
                eyebrow="How to use this page"
                title="Send one screen, module, or product reference."
              />
            </ScrollReveal>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Fix Sprint",
                  detail:
                    "Use this when the UI already exists but needs bugs, responsiveness, spacing, or dashboard polish fixed."
                },
                {
                  title: "Cleanup Sprint",
                  detail:
                    "Use this when the UI works, but the React/Next.js code is hard to maintain or risky to change."
                },
                {
                  title: "Final Boss Build",
                  detail:
                    "Use this when you need a scoped frontend built from Figma, requirements, or a clear product direction."
                }
              ].map((item, index) => (
                <ScrollReveal delay={index * 90} key={item.title}>
                  <PremiumCard className="h-full">
                    <PremiumCardGlow />
                    <div className="relative z-10 p-6">
                      <span className="text-sm font-semibold text-blue-100">
                        0{index + 1}
                      </span>
                      <h3 className="mt-5 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/62">
                        {item.detail}
                      </p>
                    </div>
                  </PremiumCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
    </>
  );
}

function UseCaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-white/[0.045] p-5">
      <p className="text-sm font-semibold uppercase text-white/48">{title}</p>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li className="text-sm leading-6 text-white/68" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
