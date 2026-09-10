import { ArrowRight, Play, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid dark:opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-ink-950" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute -top-20 -left-32 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/20 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/60 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide">
              <Sparkles size={13} />
              Freelance Full-Stack Developer
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-ink-900 dark:text-white leading-[1.1]">
              Websites That Make Your Business{' '}
              <span className="text-gradient">Look Better</span> Online.
            </h1>

            <p className="mt-5 text-base lg:text-lg text-ink-600 dark:text-ink-400 max-w-xl mx-auto lg:mx-0">
              I design and develop modern, responsive websites and web applications for
              businesses, startups, and entrepreneurs.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 font-semibold text-sm hover:bg-brand-600 dark:hover:bg-brand-100 transition-all hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight size={17} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-ink-300 dark:border-ink-700 text-ink-800 dark:text-ink-200 font-semibold text-sm hover:bg-ink-100 dark:hover:bg-ink-800 transition-all hover:-translate-y-0.5"
              >
                <Play size={15} />
                View My Work
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 justify-center lg:justify-start text-sm text-ink-500 dark:text-ink-400">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                <span className="relative rounded-full w-2.5 h-2.5 bg-emerald-500" />
              </span>
              Available for selected freelance projects
            </div>
          </div>

          {/* Right: Browser frame composition */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-[340px] sm:h-[420px] lg:h-[460px]">
      {/* Main browser frame */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[460px] animate-float">
        <BrowserFrame>
          <MiniSitePreview />
        </BrowserFrame>
      </div>

      {/* Secondary browser frame — top right, smaller */}
      <div
        className="absolute top-0 right-0 w-[180px] sm:w-[220px] hidden sm:block animate-float"
        style={{ animationDelay: '1.5s' }}
      >
        <BrowserFrame small>
          <MiniSitePreview variant="dashboard" />
        </BrowserFrame>
      </div>

      {/* Tertiary browser frame — bottom left, smaller */}
      <div
        className="absolute bottom-0 left-0 w-[160px] sm:w-[200px] hidden sm:block animate-float"
        style={{ animationDelay: '3s' }}
      >
        <BrowserFrame small>
          <MiniSitePreview variant="store" />
        </BrowserFrame>
      </div>
    </div>
  );
}

export function BrowserFrame({
  children,
  small = false,
  className = '',
}: {
  children: React.ReactNode;
  small?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-ink-200/80 dark:border-ink-700/60 shadow-xl shadow-ink-900/10 dark:shadow-black/40 bg-white dark:bg-ink-900 ${className}`}
    >
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-ink-200/60 dark:border-ink-700/50 bg-ink-50/80 dark:bg-ink-800/50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <div className={`ml-2 flex-1 h-5 rounded-md bg-white dark:bg-ink-700/50 border border-ink-200/60 dark:border-ink-700/40 ${small ? 'max-w-[60px]' : 'max-w-[120px]'}`} />
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function MiniSitePreview({
  variant = 'landing',
}: {
  variant?: 'landing' | 'dashboard' | 'store';
}) {
  if (variant === 'dashboard') {
    return (
      <div className="p-3 bg-ink-50 dark:bg-ink-950">
        <div className="flex gap-2 mb-3">
          <div className="w-20 h-3 rounded bg-brand-400/70" />
          <div className="w-12 h-3 rounded bg-ink-300 dark:bg-ink-700" />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg bg-white dark:bg-ink-800 p-2 shadow-sm">
              <div className="w-6 h-1.5 rounded bg-ink-200 dark:bg-ink-600 mb-1" />
              <div className="w-10 h-3 rounded bg-brand-500/60" />
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-white dark:bg-ink-800 p-3 shadow-sm">
          <div className="flex items-end gap-1.5 h-16">
            {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-brand-500/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'store') {
    return (
      <div className="p-3 bg-white dark:bg-ink-950">
        <div className="flex justify-between items-center mb-3">
          <div className="w-16 h-3 rounded bg-ink-800 dark:bg-white" />
          <div className="w-5 h-5 rounded-full bg-amber-400/70" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-sm">
              <div className="h-10 bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-500/30 dark:to-orange-500/30" />
              <div className="p-1.5 bg-ink-50 dark:bg-ink-800">
                <div className="w-full h-1.5 rounded bg-ink-300 dark:bg-ink-600 mb-1" />
                <div className="w-8 h-2 rounded bg-amber-500/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-ink-900">
      {/* Hero area */}
      <div className="px-4 pt-5 pb-4 text-center bg-gradient-to-br from-brand-50 to-accent-50/50 dark:from-ink-800 dark:to-ink-800/50">
        <div className="mx-auto w-16 h-1.5 rounded-full bg-brand-500/60 mb-2" />
        <div className="mx-auto w-32 h-4 rounded bg-ink-800 dark:bg-white mb-2" />
        <div className="mx-auto w-40 h-2.5 rounded bg-ink-300 dark:bg-ink-600 mb-3" />
        <div className="flex justify-center gap-1.5">
          <div className="w-16 h-5 rounded-md bg-ink-900 dark:bg-white" />
          <div className="w-12 h-5 rounded-md border border-ink-300 dark:border-ink-600" />
        </div>
      </div>
      {/* Cards row */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-white dark:bg-ink-900">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-ink-200/60 dark:border-ink-700/50 p-2">
            <div className="w-6 h-6 rounded-lg bg-brand-100 dark:bg-brand-900/40 mb-2" />
            <div className="w-full h-1.5 rounded bg-ink-200 dark:bg-ink-700 mb-1" />
            <div className="w-2/3 h-1.5 rounded bg-ink-200 dark:bg-ink-700" />
          </div>
        ))}
      </div>
    </div>
  );
}
