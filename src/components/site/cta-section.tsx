import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/ui/reveal";
import { getContactHref } from "@/features/service";

export function CtaSection() {
  return (
    <section className="dark-section px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal className="mx-auto max-w-7xl">
      <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(5,66,255,0.3),transparent_56%),linear-gradient(180deg,#111522,#070910)] p-6 shadow-dark-soft sm:p-10">
        <div className="flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-[1.04] sm:text-5xl">
            Send the messy screen, broken feature, or ugly component.
            </h2>
            <p className="mt-4 leading-7 text-white/62">
            Include the app URL, screenshots, tech stack, deadline, and budget.
            I will review the scope and tell you if it fits a small sprint before
            work starts.
            </p>
          </div>
          <ButtonLink
            className="border-white bg-white text-ink hover:border-blue-100 hover:bg-blue-50"
            href={getContactHref()}
            icon={<ArrowRight aria-hidden="true" className="size-4" />}
          >
            Send me your frontend issue
          </ButtonLink>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
