import { ScrollReveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/features/service";

export function FaqSection() {
  return (
    <section className="dark-section py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            align="center"
            description="Short answers for the questions a founder or agency will ask before sending repo access."
            eyebrow="FAQ"
            title="Clear scope prevents messy projects."
          />
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <div className="mt-12 divide-y divide-white/10 rounded-[24px] border border-white/10 bg-white/[0.055] shadow-dark-soft backdrop-blur">
            {faqs.map((item) => (
              <details className="group p-6" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-bold text-white">
                  {item.question}
                  <span className="text-xl leading-none text-white/48 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-white/62">{item.answer}</p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
