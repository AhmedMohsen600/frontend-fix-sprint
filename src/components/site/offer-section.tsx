import { ArrowRight, Bug, Code2, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { PremiumCard, PremiumCardGlow } from "@/components/ui/premium-card";
import { ScrollReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getContactHref, getFinalBossBuildHref, servicePackages } from "@/features/service";

const serviceCards = [
  {
    accent: "Main offer",
    cta: "Send frontend issue",
    href: getContactHref("Frontend Fix Sprint Request"),
    icon: Bug,
    price: "$250",
    title: servicePackages.sprint.name,
    body: "3-5 scoped UI bugs, responsive issues, dashboard polish items, or small performance wins."
  },
  {
    accent: "Main offer",
    cta: "Send messy module",
    href: getContactHref("Frontend Cleanup Sprint Request"),
    icon: Code2,
    price: "From $300",
    title: servicePackages.cleanup.name,
    body: "One messy React/Next.js feature cleaned into maintainable components, hooks, naming, and structure."
  },
  {
    accent: "Premium option",
    cta: "Discuss full build",
    href: getFinalBossBuildHref(),
    icon: Rocket,
    price: "From $1,500",
    title: servicePackages.finalBoss.name,
    body: "A scoped full frontend build from Figma, product idea, or requirements with milestone-based delivery."
  }
];

export function OfferSection() {
  return (
    <section className="dark-section px-4 py-20 sm:px-6 lg:px-8 lg:py-28" id="offer">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <SectionHeading
            description="Start small with a focused sprint, or scope a larger frontend build when the product needs more than cleanup."
            eyebrow="Services"
            title="Pick the right amount of frontend execution."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;
            const isPremium = index === 2;

            return (
              <ScrollReveal delay={index * 110} key={card.title}>
                <PremiumCard className="h-full">
                  <PremiumCardGlow />
                  <div className="relative z-10 flex min-h-[370px] flex-col justify-between p-6 sm:p-7">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex size-12 items-center justify-center rounded-full bg-sky text-white shadow-[0_0_34px_rgba(5,66,255,0.35)]">
                          <Icon aria-hidden="true" className="size-5" />
                        </div>
                        <Badge
                          className={
                            isPremium
                              ? "border-amber-300/20 bg-amber-300/10 text-amber-100"
                              : "border-white/10 bg-white/10 text-blue-100"
                          }
                          tone="neutral"
                        >
                          {card.accent}
                        </Badge>
                      </div>
                      <h3 className="mt-8 text-3xl font-semibold leading-[1.04] text-white">
                        {card.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/62">{card.body}</p>
                    </div>

                    <div className="mt-8">
                      <p className="text-4xl font-semibold text-white">{card.price}</p>
                      <ButtonLink
                        className="mt-6 w-full"
                        href={card.href}
                        icon={<ArrowRight aria-hidden="true" className="size-4" />}
                        variant="secondary"
                      >
                        {card.cta}
                      </ButtonLink>
                    </div>
                  </div>
                </PremiumCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
