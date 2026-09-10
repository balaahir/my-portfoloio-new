import { Check, ArrowRight } from 'lucide-react';
import { pricing } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Pricing() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 dark:text-white">
            Let's Build Something That Fits Your Needs.
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-400">
            Three starting categories to give you a sense of investment. Final pricing depends on
            pages, features, integrations, and project complexity.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {pricing.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 80}>
              <div
                className={`h-full p-6 rounded-2xl border-2 transition-all hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'border-brand-500 dark:border-brand-600 bg-brand-50/50 dark:bg-brand-950/20 shadow-xl shadow-brand-500/10'
                    : 'border-ink-200/70 dark:border-ink-800/60 bg-white dark:bg-ink-900/50 hover:border-brand-300 dark:hover:border-brand-700/60'
                }`}
              >
                {plan.highlighted && (
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-600 text-white text-[10px] font-bold tracking-wider mb-4">
                    MOST FLEXIBLE
                  </span>
                )}
                <h3 className="text-lg font-bold text-ink-900 dark:text-white">{plan.title}</h3>
                <div className="mt-3 text-sm font-semibold text-brand-600 dark:text-brand-400">
                  {plan.price}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-400">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center">
                        <Check size={10} className="text-brand-600 dark:text-brand-400" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-brand-600 text-white hover:bg-brand-700'
                      : 'border border-ink-300 dark:border-ink-700 text-ink-800 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-8">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            Final pricing depends on pages, features, integrations, and project complexity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
