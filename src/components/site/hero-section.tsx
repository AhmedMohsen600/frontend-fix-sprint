import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { getContactHref, proofStats } from "@/features/service";

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-[46%] top-20 hidden w-[780px] rotate-[-2deg] rounded-lg border border-white/12 bg-white/10 p-4 shadow-soft backdrop-blur sm:block">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <div className="h-3 w-28 rounded bg-white/60" />
            <div className="mt-2 h-2 w-44 rounded bg-white/20" />
          </div>
          <div className="h-9 w-28 rounded-lg bg-emerald-300/80" />
        </div>
        <div className="grid gap-3 py-4 sm:grid-cols-4">
          {["$18.6k", "42.8%", "94", "7"].map((value) => (
            <div className="rounded-lg border border-white/10 bg-white/12 p-3" key={value}>
              <div className="h-2 w-16 rounded bg-white/20" />
              <div className="mt-5 text-2xl font-bold text-white">{value}</div>
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-white/10 bg-white/12 p-4">
            <div className="flex h-44 items-end gap-2">
              {[34, 48, 42, 64, 58, 76, 88, 72].map((height, index) => (
                <div
                  className="flex-1 rounded-t bg-sky-300/80"
                  key={index}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3 rounded-lg border border-white/10 bg-white/12 p-4">
            {["Mobile billing overflow", "Dashboard hierarchy", "Empty states"].map(
              (item) => (
                <div className="flex items-center gap-3" key={item}>
                  <CheckCircle2 className="size-4 text-emerald-300" />
                  <div className="h-2 flex-1 rounded bg-white/30" />
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
    <section className="relative isolate min-h-[calc(100svh-7rem)] overflow-hidden">
      <HeroBackdrop />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl pt-6 text-white">
          <Badge className="border-white/20 bg-white/10 text-white" tone="neutral">
            React/Next.js fixes + cleanup
          </Badge>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            Frontend Fix + Cleanup Sprints
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            Fix React/Next.js UI issues or clean one messy frontend feature in a
            small scoped sprint. Starting from $250, delivered in 3-5 days.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              className="border-white bg-white text-ink hover:bg-zinc-100"
              href={getContactHref()}
              icon={<ArrowRight aria-hidden="true" className="size-4" />}
            >
              Send me your frontend issue
            </ButtonLink>
            <ButtonLink
              className="border-white/25 bg-white/10 text-white hover:bg-white/15"
              href="/demo"
              icon={<ExternalLink aria-hidden="true" className="size-4" />}
              variant="secondary"
            >
              View dashboard demo
            </ButtonLink>
          </div>
        </div>

        <dl className="mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4">
          {proofStats.map((stat) => (
            <div className="bg-white/10 p-4 backdrop-blur" key={stat.label}>
              <dt className="text-xs font-semibold uppercase text-zinc-300">{stat.label}</dt>
              <dd className="mt-2 text-2xl font-bold text-white">{stat.value}</dd>
              <dd className="text-sm text-zinc-300">{stat.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
