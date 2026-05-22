import { Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";

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
  "Clean maintainable code"
];

export function AboutAhmedSection() {
  return (
    <section className="bg-paper py-20" id="about-ahmed">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
        <div>
          <Badge tone="mint">About Ahmed</Badge>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Senior frontend judgment, AI-assisted speed
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
            I am Ahmed Mohsen, a Senior Frontend Engineer from Egypt. I have spent
            4+ years building React, Next.js, and React Native products by hand,
            including dashboards, payment portals, mobile apps, admin panels,
            analytics UIs, and polished marketing pages.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
            I use AI tools to move faster, but I still own the structure, review
            the implementation, protect the UX, and make sure the final result is
            clean, maintainable, and production-ready.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
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
        </div>

        <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                Senior Frontend Engineer
              </p>
              <h3 className="mt-2 text-2xl font-bold text-ink">Ahmed Mohsen</h3>
            </div>
            <Badge className="w-fit" tone="sky">
              Egypt / 4+ years
            </Badge>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {experienceAreas.map((area) => (
              <span
                className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-medium text-zinc-700"
                key={area}
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 border-t border-line pt-6 text-sm leading-6 text-zinc-600">
            Best fit for teams that need a real engineer to clean up a visible
            frontend problem quickly: scoped, reviewed, and delivered with notes
            the team can understand after handoff.
          </p>
        </article>
      </div>
    </section>
  );
}
