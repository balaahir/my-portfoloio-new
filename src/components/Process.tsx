import { processSteps } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
            Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 dark:text-white">
            From Idea to Launch
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-400">
            A clear, structured process that keeps you informed at every step.
          </p>
        </Reveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-ink-200 dark:via-ink-700 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="relative text-center lg:text-left">
                  <div className="relative z-10 w-14 h-14 mx-auto lg:mx-0 rounded-2xl bg-white dark:bg-ink-900 border-2 border-brand-200 dark:border-brand-800/60 flex items-center justify-center font-display text-lg font-extrabold text-brand-600 dark:text-brand-400 shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-ink-900 dark:text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
