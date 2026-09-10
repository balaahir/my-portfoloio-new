import { Check } from 'lucide-react';
import { valueItems } from '@/data/content';

export function ValueStrip() {
  return (
    <section className="border-y border-ink-200/60 dark:border-ink-800/60 bg-ink-50/50 dark:bg-ink-900/30">
      <div className="container py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {valueItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden sm:block w-1 h-1 rounded-full bg-ink-300 dark:bg-ink-600 -ml-4" />
              )}
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/40">
                <Check size={12} className="text-brand-600 dark:text-brand-400" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-ink-700 dark:text-ink-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
