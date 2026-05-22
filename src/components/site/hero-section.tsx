import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { MaskedReveal, SoftReveal } from "@/components/ui/reveal";
import { getContactHref, proofStats } from "@/features/service";

const sprintSignals = [
  "UI bug triage",
  "Responsive pass",
  "Code cleanup",
  "Handoff notes"
];

function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_16%_0%,rgba(5,66,255,0.36),transparent_54%),radial-gradient(ellipse_56%_40%_at_92%_4%,rgba(251,176,65,0.13),transparent_50%),linear-gradient(180deg,#05060a_0%,#080a12_56%,#000_100%)]" />
      <div className="glow-drift absolute -left-40 top-4 h-[520px] w-[820px] rotate-[-8deg] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(5,66,255,0.32),transparent_62%)] blur-3xl" />
      <div className="grid-drift absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="absolute -top-52 left-1/2 h-[720px] w-[340px] -translate-x-1/2 rotate-[-8deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}

function HeroConsole() {
  return (
    <SoftReveal
      className="relative mx-auto hidden w-full max-w-[520px] lg:ml-auto lg:block"
      delay="0.55s"
    >
      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.06] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
        <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,#0542ff,transparent)]" />
        <div className="rounded-[18px] border border-white/10 bg-black/58 p-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="h-2.5 w-28 rounded-full bg-white/24" />
              <div className="mt-2 h-2 w-44 rounded-full bg-white/10" />
            </div>
            <Badge className="border-emerald-400/20 bg-emerald-400/10 text-emerald-100">
              Scoped sprint
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 py-4">
            {proofStats.map((stat) => (
              <div className="rounded-[16px] border border-white/10 bg-white/[0.06] p-3" key={stat.label}>
                <p className="text-xs font-semibold uppercase text-white/46">{stat.label}</p>
                <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-white/48">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[16px] border border-white/10 bg-white/[0.05] p-3">
            <div className="flex h-20 items-end gap-2">
              {[42, 58, 48, 70, 64, 86, 78].map((height, index) => (
                <div
                  className="bar-rise flex-1 rounded-t-[10px] bg-[linear-gradient(180deg,#6f94ff,#0542ff)] shadow-[0_0_24px_rgba(5,66,255,0.22)]"
                  key={`${height}-${index}`}
                  style={{
                    "--bar-delay": `${0.65 + index * 0.06}s`,
                    height: `${height}%`
                  } as CSSProperties}
                />
              ))}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {sprintSignals.map((item) => (
              <div className="flex items-center gap-2 rounded-[14px] border border-white/8 bg-white/[0.04] px-3 py-2" key={item}>
                <CheckCircle2 aria-hidden="true" className="size-4 text-emerald-300" />
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SoftReveal>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[780px] overflow-hidden pt-[72px] text-white sm:min-h-screen">
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-7xl min-w-0 gap-10 px-4 py-16 text-center sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.88fr] lg:items-center lg:px-8 lg:text-left">
        <div className="min-w-0 max-w-5xl lg:max-w-none">
          <MaskedReveal delay="0.08s">
            <Badge className="border-white/10 bg-white/8 text-blue-100">
              Senior React/Next.js execution
            </Badge>
          </MaskedReveal>

          <h1 className="mx-auto mt-5 max-w-[22rem] text-[2.72rem] font-semibold leading-[1.04] text-white sm:max-w-5xl sm:text-[4.7rem] sm:leading-[1] lg:mx-0 lg:text-[5.8rem]">
            <MaskedReveal className="headline-reveal" delay="0.18s">
              Fix it.
            </MaskedReveal>
            <MaskedReveal className="headline-reveal" delay="0.34s">
              Clean it.
            </MaskedReveal>
            <MaskedReveal className="headline-reveal" delay="0.5s">
              Build it right.
            </MaskedReveal>
          </h1>

          <MaskedReveal className="mx-auto mt-5 max-w-[23rem] sm:max-w-2xl lg:mx-0" delay="0.72s">
            <p className="text-base leading-7 text-white/68 sm:text-xl sm:leading-8">
              React/Next.js frontend sprints for teams that need visible UI
              issues fixed, messy modules cleaned, or a scoped frontend built
              from scratch. Small work starts at $250. Full builds start from
              $1,500.
            </p>
          </MaskedReveal>

          <MaskedReveal className="mt-6" delay="0.9s">
            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <ButtonLink
                className="border-white bg-white text-ink hover:border-blue-100 hover:bg-blue-50"
                href={getContactHref()}
                icon={<ArrowRight aria-hidden="true" className="size-4" />}
              >
                Send me your frontend issue
              </ButtonLink>
              <ButtonLink
                className="border-white/14 bg-white/8 text-white hover:border-white/28 hover:bg-white/12 hover:text-white"
                href="/demo"
                icon={<ExternalLink aria-hidden="true" className="size-4" />}
                variant="secondary"
              >
                View dashboard demo
              </ButtonLink>
            </div>
          </MaskedReveal>
        </div>

        <HeroConsole />
      </div>
    </section>
  );
}
