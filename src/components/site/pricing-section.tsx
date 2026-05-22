import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  formatUsd,
  getContactHref,
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
  return (
    <section className="bg-white py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          description="The first sale should be easy to understand: one small frontend issue list, one fixed price, one clean delivery."
          eyebrow="Pricing"
          title="Start with $250. Upsell only when the client needs ongoing help."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {packages.map((item, index) => (
            <article
              className="rounded-lg border border-line bg-paper p-6 shadow-sm"
              key={item.name}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge tone={index === 0 ? "mint" : "sky"}>
                    {index === 0
                      ? "UI fixes"
                      : index === 1
                        ? "Code cleanup"
                        : "Monthly option"}
                  </Badge>
                  <h3 className="mt-5 text-2xl font-bold text-ink">{item.name}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{item.description}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <div className="text-4xl font-bold text-ink">
                    {item.priceLabel ?? formatUsd(item.price)}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-500">{item.timeline}</div>
                </div>
              </div>
              <ul className="mt-7 grid gap-3">
                {item.includes.map((included) => (
                  <li className="flex gap-3 text-sm leading-6 text-zinc-700" key={included}>
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    {included}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm font-medium text-zinc-600">{item.bestFor}</p>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
