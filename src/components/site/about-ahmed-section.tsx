import { Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/ui/reveal";

const experienceAreas = [
  "React.js",
  "Next.js",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "Dashboards",
  "Payment portals",
  "Analytics UIs",
  "Admin panels",
  "Frontend architecture",
  "Performance",
  "Scalable frontend code"
];

export function AboutAhmedSection() {
  return (
    <section className="dark-section py-20 text-white lg:py-28" id="about-ahmed">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
        <ScrollReveal>
          <Badge className="border-white/10 bg-white/10 text-blue-100" tone="neutral">
            About Ahmed
          </Badge>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.04] text-white sm:text-5xl">
            Senior frontend engineer. AI-assisted execution.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/68 sm:text-lg">
            {"I'm Ahmed Mohsen, a Senior Frontend Engineer from Egypt with 4+ years of hands-on experience building React, Next.js, and React Native products."}
          </p>
          <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">
            Before AI tools became part of my workflow, I was already building
            production dashboards, payment portals, mobile apps, admin panels,
            analytics UIs, and polished marketing pages by hand.
          </p>
          <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">
            Today, I use AI to move faster, but not to replace engineering
            judgment. I still understand the codebase, own the architecture,
            review every decision, protect the UX, and make sure the final result
            is clean, maintainable, scalable, and production-ready.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              className="border-white/14 bg-white/10 text-white hover:border-white/30 hover:bg-white/14 hover:text-white"
              href="https://github.com/AhmedMohsen600"
              icon={<Github aria-hidden="true" className="size-4" />}
              iconPosition="start"
              rel="noreferrer"
              target="_blank"
              variant="secondary"
            >
              View GitHub
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/in/ahmed-frontend/"
              icon={<Linkedin aria-hidden="true" className="size-4" />}
              iconPosition="start"
              rel="noreferrer"
              target="_blank"
            >
              Connect on LinkedIn
            </ButtonLink>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
        <article className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 shadow-dark-soft backdrop-blur">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-white/42">
                Senior Frontend Engineer
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">Ahmed Mohsen</h3>
            </div>
            <Badge className="w-fit border-white/10 bg-white/10 text-blue-100" tone="neutral">
              Egypt / 4+ years
            </Badge>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {experienceAreas.map((area) => (
              <span
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-medium text-white/68"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 border-t border-white/10 pt-6 text-sm font-semibold leading-6 text-white/76 sm:text-base sm:leading-7">
            {"You're not hiring random generated code. You're hiring a frontend engineer who knows what good code should look like, how it should scale, and how to use AI to deliver it faster."}
          </p>
        </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
