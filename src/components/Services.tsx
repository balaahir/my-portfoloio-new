import {
  Globe,
  Layout,
  LayoutDashboard,
  ShoppingCart,
  RefreshCw,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/data/content';
import { Reveal } from '@/components/Reveal';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layout,
  LayoutDashboard,
  ShoppingCart,
  RefreshCw,
  Wrench,
};

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 dark:text-white">
            What I Can Build
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-400">
            From a simple landing page to a full web application — everything you need to establish
            your business online.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <Reveal key={service.id} delay={i * 80}>
                <article className="group h-full p-6 rounded-2xl border border-ink-200/70 dark:border-ink-800/60 bg-white dark:bg-ink-900/50 hover:border-brand-300 dark:hover:border-brand-700/60 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={21} />
                    </div>
                    <span className="text-sm font-bold text-ink-200 dark:text-ink-700">
                      {service.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                    {service.description}
                  </p>
                  {service.examples.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-ink-100 dark:border-ink-800/50 pt-4">
                      {service.examples.map((ex) => (
                        <li
                          key={ex}
                          className="flex items-center gap-2 text-xs text-ink-500 dark:text-ink-400"
                        >
                          <span className="w-1 h-1 rounded-full bg-brand-500" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
