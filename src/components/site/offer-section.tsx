import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { painFixes, whoThisIsForItems } from "@/features/service";

export function OfferSection() {
  return (
    <section className="bg-paper py-20" id="offer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="Best for products that already exist but have visible issues costing trust: broken mobile screens, messy dashboards, rough interactions, or a launch checklist that keeps slipping."
          eyebrow="The offer"
          title="A fixed $250 sprint for frontend problems users can see."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {painFixes.map((item) => (
            <article className="rounded-lg border border-line bg-white p-6 shadow-sm" key={item.pain}>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-600" />
                <div>
                  <h3 className="text-lg font-bold text-ink">{item.pain}</h3>
                  <p className="mt-2 leading-7 text-zinc-600">{item.fix}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-line bg-white p-6 shadow-sm">
          <Badge tone="gold">Who this is for</Badge>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {whoThisIsForItems.map((item) => (
              <p className="flex gap-3 text-sm font-medium leading-6 text-zinc-700" key={item}>
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-emerald-600"
                />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
