import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-ink-50/50 dark:bg-ink-900/20">
      <div className="container max-w-3xl">
        <Reveal className="text-center mb-12">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 40}>
                <div className="rounded-xl border border-ink-200/70 dark:border-ink-800/60 bg-white dark:bg-ink-900/50 overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-ink-900 dark:text-white">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-ink-100 dark:bg-ink-800 flex items-center justify-center text-ink-600 dark:text-ink-400">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
