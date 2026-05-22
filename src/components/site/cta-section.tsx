import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { getContactHref } from "@/features/service";

export function CtaSection() {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Send the messy screen, broken feature, or ugly component.
          </h2>
          <p className="mt-4 leading-7 text-zinc-300">
            Include the app URL, screenshots, tech stack, deadline, and budget.
            I will review the scope and tell you if it fits a small sprint before
            work starts.
          </p>
        </div>
        <ButtonLink
          className="border-white bg-white text-ink hover:bg-zinc-100"
          href={getContactHref()}
          icon={<ArrowRight aria-hidden="true" className="size-4" />}
        >
          Send me your frontend issue
        </ButtonLink>
      </div>
    </section>
  );
}
