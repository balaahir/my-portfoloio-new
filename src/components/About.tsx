import { contact } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-ink-50/50 dark:bg-ink-900/20">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-square max-w-[320px] rounded-3xl bg-gradient-to-br from-brand-600 to-accent-600 p-1 mx-auto lg:mx-0">
                <div className="w-full h-full rounded-[20px] bg-white dark:bg-ink-900 flex items-center justify-center">
                  <span className="font-display text-[7rem] font-extrabold text-gradient">B</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-2 lg:right-4 px-4 py-2.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 shadow-xl">
                <div className="text-xs font-semibold opacity-70">Based in</div>
                <div className="text-sm font-bold">{contact.location}</div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={120}>
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
              About
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 dark:text-white">
              Hi, I'm Balaji.
            </h2>
            <div className="mt-5 space-y-4 text-ink-600 dark:text-ink-400 leading-relaxed">
              <p>
                I'm a freelance full-stack developer based in India. I design and develop modern
                websites and web applications for businesses, startups, and entrepreneurs.
              </p>
              <p>
                I work across frontend, backend, APIs, databases, and deployment to turn ideas into
                reliable digital products.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-semibold hover:bg-brand-600 dark:hover:bg-brand-100 transition-colors"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 rounded-xl border border-ink-300 dark:border-ink-700 text-ink-800 dark:text-ink-200 text-sm font-semibold hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
              >
                View My Work
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
