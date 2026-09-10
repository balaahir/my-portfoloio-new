import { Briefcase, Code2, Smartphone, MessageCircle, type LucideIcon } from 'lucide-react';
import { whyWorkWithMe } from '@/data/content';
import { Reveal } from '@/components/Reveal';

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Code2,
  Smartphone,
  MessageCircle,
};

export function WhyWorkWithMe() {
  return (
    <section className="py-20 lg:py-24 bg-ink-50/50 dark:bg-ink-900/20">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
            Why Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ink-900 dark:text-white">
            Why Work With Me?
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyWorkWithMe.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Briefcase;
            return (
              <Reveal key={item.id} delay={i * 80}>
                <div className="h-full p-6 rounded-2xl border border-ink-200/70 dark:border-ink-800/60 bg-white dark:bg-ink-900/50 text-center hover:border-brand-300 dark:hover:border-brand-700/60 transition-colors">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
                    <Icon size={22} />
                  </div>
                  <div className="text-xs font-bold text-ink-300 dark:text-ink-600 mb-2">{item.id}</div>
                  <h3 className="text-base font-bold text-ink-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
