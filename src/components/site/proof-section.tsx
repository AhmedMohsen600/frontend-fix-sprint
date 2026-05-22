import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { demoCapabilities } from "@/features/dashboard-demo";
import { beforeAfterValue } from "@/features/service";

export function ProofSection() {
  return (
    <section className="bg-white py-20" id="proof">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              description="The demo is intentionally frontend-focused: dashboard hierarchy, data density, responsive behavior, visible states, and the kind of delivery notes clients can approve quickly."
              eyebrow="Proof"
              title="Show the buyer what a cleaned-up sprint looks like."
            />
            <ButtonLink
              className="mt-8"
              href="/demo"
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              View dashboard demo
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {demoCapabilities.map((capability) => (
              <article
                className="rounded-lg border border-line bg-paper p-5"
                key={capability.title}
              >
                <capability.icon aria-hidden="true" className="size-5 text-ink" />
                <h3 className="mt-5 text-base font-bold text-ink">{capability.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{capability.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {beforeAfterValue.map((item) => (
            <article className="rounded-lg border border-line bg-paper p-5" key={item.before}>
              <Badge tone="neutral">Before / after</Badge>
              <p className="mt-5 text-sm leading-6 text-zinc-500">{item.before}</p>
              <p className="mt-4 text-base font-semibold leading-7 text-ink">{item.after}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
