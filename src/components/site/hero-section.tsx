import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { getContactHref, proofStats } from "@/features/service";

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-paper">
      <div className="absolute inset-0 opacity-[0.55] [background-image:linear-gradient(#d8e2ef_1px,transparent_1px),linear-gradient(90deg,#d8e2ef_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-x-0 top-0 hidden h-32 bg-white sm:block" />
      <div className="absolute left-[64%] top-32 hidden w-[680px] rotate-[-2deg] rounded-xl border border-line bg-white p-4 shadow-soft lg:block">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div>
            <div className="h-3 w-28 rounded bg-slate-300" />
            <div className="mt-2 h-2 w-44 rounded bg-slate-100" />
          </div>
          <div className="h-9 w-28 rounded-lg bg-blue-600" />
        </div>
        <div className="grid gap-3 py-4 sm:grid-cols-4">
          {["$18.6k", "42.8%", "94", "7"].map((value) => (
            <div className="rounded-lg border border-line bg-paper p-3" key={value}>
              <div className="h-2 w-16 rounded bg-slate-200" />
              <div className="mt-5 text-2xl font-bold text-ink">{value}</div>
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-line bg-paper p-4">
            <div className="flex h-44 items-end gap-2">
              {[34, 48, 42, 64, 58, 76, 88, 72].map((height, index) => (
                <div
                  className="flex-1 rounded-t bg-blue-500"
                  key={index}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3 rounded-lg border border-line bg-paper p-4">
            {["Mobile billing overflow", "Dashboard hierarchy", "Empty states"].map(
              (item) => (
                <div className="flex items-center gap-3" key={item}>
                  <CheckCircle2 className="size-4 text-emerald-600" />
                  <div className="h-2 flex-1 rounded bg-slate-200" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl text-ink sm:pt-6">
          <Badge className="border-blue-200 bg-blue-50 text-blue-800" tone="neutral">
            React/Next.js fixes + cleanup
          </Badge>
          <h1 className="mt-6 max-w-[21rem] text-3xl font-bold leading-[1.08] sm:max-w-none sm:text-6xl sm:leading-[1.02] lg:text-7xl">
            Frontend Fix + Cleanup Sprints
          </h1>
          <p className="mt-6 max-w-[21.5rem] text-lg leading-8 text-slate-600 sm:max-w-2xl sm:text-xl">
            Fix React/Next.js UI issues or clean one messy frontend feature in a
            small scoped sprint. Starting from $250, delivered in 3-5 days.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={getContactHref()}
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              Send me your frontend issue
            </ButtonLink>
            <ButtonLink
              href="/demo"
              icon={<ExternalLink aria-hidden="true" className="size-4" />}
              variant="secondary"
            >
              View dashboard demo
            </ButtonLink>
          </div>
        </div>

        <dl className="mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {proofStats.map((stat) => (
            <div className="rounded-lg border border-line bg-white/90 p-4 shadow-sm backdrop-blur" key={stat.label}>
              <dt className="text-xs font-semibold uppercase text-slate-500">{stat.label}</dt>
              <dd className="mt-2 text-2xl font-bold text-ink">{stat.value}</dd>
              <dd className="text-sm text-slate-500">{stat.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
