import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/ui/metric-card";
import {
  demoMetrics,
  funnelRows,
  polishFindings,
  sprintBacklog
} from "@/features/dashboard-demo";
import { getContactHref } from "@/features/service";

const statusTone = {
  fixed: "mint",
  improved: "sky",
  queued: "gold"
} as const;

export function DemoDashboard() {
  return (
    <main className="min-h-screen bg-paper">
      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <ButtonLink
              href="/"
              icon={<ArrowLeft aria-hidden="true" className="size-4" />}
              iconPosition="start"
              variant="ghost"
            >
              Back to offer
            </ButtonLink>
            <ButtonLink
              href={getContactHref()}
              icon={<ExternalLink aria-hidden="true" className="size-4" />}
              variant="primary"
            >
              Request this sprint
            </ButtonLink>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Badge tone="mint">SaaS dashboard polish demo</Badge>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-ink sm:text-5xl">
                A messy product dashboard turned into a clearer operating view.
              </h1>
            </div>
            <p className="text-lg leading-8 text-zinc-600">
              This demo shows the type of frontend value a fixed sprint can deliver:
              better hierarchy, responsive panels, clearer states, and practical task
              handoff for a React/Next.js SaaS app.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {demoMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
        <article className="rounded-lg border border-line bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-ink">Conversion funnel</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Responsive, readable, and focused on the next product decision.
              </p>
            </div>
            <Badge tone="sky">After polish</Badge>
          </div>
          <div className="mt-8 space-y-5">
            {funnelRows.map((row) => (
              <div key={row.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-ink">{row.label}</span>
                  <span className="text-zinc-500">{row.value}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-ink"
                    style={{ width: row.width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-line bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-ink">Sprint result</h2>
              <p className="mt-1 text-sm text-zinc-500">3-day handoff snapshot</p>
            </div>
            <Badge tone="mint">Ready</Badge>
          </div>
          <div className="mt-8 grid gap-4">
            {[
              ["UI issues closed", "5"],
              ["Responsive breakpoints checked", "4"],
              ["Build blockers", "0"],
              ["Next sprint ideas", "3"]
            ].map(([label, value]) => (
              <div className="flex items-center justify-between border-b border-line pb-3" key={label}>
                <span className="text-sm text-zinc-600">{label}</span>
                <strong className="text-lg text-ink">{value}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-line bg-white p-5 shadow-sm lg:col-span-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-ink">Before and after notes</h2>
              <p className="mt-1 text-sm text-zinc-500">
                The kind of delivery summary a client can approve quickly.
              </p>
            </div>
            <Badge tone="gold">Client review</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {polishFindings.map((finding) => (
              <article className="rounded-lg border border-line bg-paper p-4" key={finding.title}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink">{finding.title}</h3>
                  <Badge tone={statusTone[finding.status]}>{finding.status}</Badge>
                </div>
                <dl className="mt-4 grid gap-3 text-sm leading-6">
                  <div>
                    <dt className="font-semibold text-zinc-500">Before</dt>
                    <dd className="text-zinc-700">{finding.before}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-500">After</dt>
                    <dd className="text-zinc-700">{finding.after}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </article>

        <article className="rounded-lg border border-line bg-white p-5 shadow-sm lg:col-span-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-ink">Scoped sprint backlog</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Small enough to finish, specific enough to sell.
              </p>
            </div>
            <Badge tone="mint">4 items</Badge>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line text-zinc-500">
                  <th className="py-3 pr-4 font-semibold">Task</th>
                  <th className="py-3 pr-4 font-semibold">Impact</th>
                  <th className="py-3 pr-4 font-semibold">Owner</th>
                  <th className="py-3 font-semibold">State</th>
                </tr>
              </thead>
              <tbody>
                {sprintBacklog.map((item) => (
                  <tr className="border-b border-line last:border-0" key={item.task}>
                    <td className="py-4 pr-4 font-medium text-ink">{item.task}</td>
                    <td className="py-4 pr-4 text-zinc-600">{item.impact}</td>
                    <td className="py-4 pr-4 text-zinc-600">{item.owner}</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-2 text-emerald-700">
                        <CheckCircle2 aria-hidden="true" className="size-4" />
                        {item.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </main>
  );
}
