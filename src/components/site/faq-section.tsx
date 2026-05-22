import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/features/service";

export function FaqSection() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          description="Short answers for the questions a founder or agency will ask before sending repo access."
          eyebrow="FAQ"
          title="Clear scope prevents messy projects."
        />
        <div className="mt-12 divide-y divide-line rounded-lg border border-line bg-white">
          {faqs.map((item) => (
            <details className="group p-6" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-bold text-ink">
                {item.question}
                <span className="text-xl leading-none text-zinc-500 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-zinc-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
