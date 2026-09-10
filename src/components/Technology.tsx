import { techStack } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Technology() {
  const categories = [
    { label: 'Frontend', items: techStack.frontend },
    { label: 'Backend', items: techStack.backend },
    { label: 'Database', items: techStack.database },
    { label: 'Tools', items: techStack.tools },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
            Technology
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white">
            Modern Technology. Practical Results.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 80}>
              <div className="p-5 rounded-2xl border border-ink-200/70 dark:border-ink-800/60 bg-ink-50/50 dark:bg-ink-900/30">
                <h3 className="text-xs font-bold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-ink-800 border border-ink-200/60 dark:border-ink-700/50 text-sm font-medium text-ink-700 dark:text-ink-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
