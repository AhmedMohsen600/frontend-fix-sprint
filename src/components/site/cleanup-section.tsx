import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  cleanupIncludedItems,
  cleanupPainItems,
  cleanupScopeRules,
  getContactHref
} from "@/features/service";

export function CleanupSection() {
  return (
    <section className="bg-paper py-20" id="cleanup">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              description="I help teams refactor messy React/Next.js frontend code into clean, maintainable, scalable structure without changing the current UI or breaking existing behavior."
              eyebrow="Second offer"
              title="Have messy React code nobody wants to touch?"
            />
            <p className="mt-5 leading-7 text-zinc-600">
              The Frontend Cleanup Sprint is for one scoped feature or module:
              split huge components, extract logic into hooks, remove duplication,
              simplify state and props, and leave notes so the team can move faster.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={getContactHref("Frontend Cleanup Sprint Request")}
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
              >
                Send messy code/module
              </ButtonLink>
              <Badge className="justify-center px-4 py-3" tone="mint">
                From $300 · 3-5 days
              </Badge>
            </div>
          </div>

          <div className="grid gap-4">
            <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <Badge tone="coral">Good fit when you have</Badge>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cleanupPainItems.map((item) => (
                  <p className="text-sm font-medium leading-6 text-zinc-700" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <Badge tone="sky">Included</Badge>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cleanupIncludedItems.slice(0, 8).map((item) => (
                  <p className="flex gap-3 text-sm leading-6 text-zinc-700" key={item}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-emerald-600"
                    />
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <Badge tone="neutral">Scope rules</Badge>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cleanupScopeRules.map((item) => (
                  <p className="text-sm leading-6 text-zinc-600" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
