import { CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  lowRiskReasons,
  notIncludedItems,
  servicePackages,
  whatICanFixItems
} from "@/features/service";

export function FixScopeSection() {
  return (
    <section className="bg-white py-20" id="fixes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description="These are small, visible frontend problems that can be scoped, fixed, checked, and handed off without turning into a rebuild."
          eyebrow="Scope"
          title="What I can fix in a Frontend Fix Sprint."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {whatICanFixItems.map((item) => (
            <div
              className="rounded-lg border border-line bg-paper p-4 text-sm font-semibold text-ink"
              key={item}
            >
              <CheckCircle2 aria-hidden="true" className="mb-3 size-5 text-emerald-600" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="rounded-lg border border-line bg-paper p-6">
            <Badge tone="mint">What the client gets</Badge>
            <h3 className="mt-5 text-2xl font-bold text-ink">Delivered in 3 days</h3>
            <ul className="mt-6 grid gap-3">
              {servicePackages.sprint.includes.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-zinc-700" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-emerald-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border border-line bg-paper p-6">
            <Badge tone="coral">Not included</Badge>
            <h3 className="mt-5 text-2xl font-bold text-ink">Clear limits protect both sides</h3>
            <ul className="mt-6 grid gap-3">
              {notIncludedItems.map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-zinc-700" key={item}>
                  <XCircle
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-orange-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-4 rounded-lg border border-line bg-ink p-6 text-white">
          <Badge className="border-white/20 bg-white/10 text-white">Why $250 is low-risk</Badge>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {lowRiskReasons.map((reason) => (
              <p className="text-sm leading-6 text-zinc-200" key={reason}>
                {reason}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
