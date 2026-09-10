import { ArrowRight, MessageCircle } from 'lucide-react';
import { contact } from '@/data/content';
import { Reveal } from '@/components/Reveal';

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 dark:bg-gradient-to-br dark:from-ink-800 dark:to-ink-900 px-6 py-14 lg:px-16 lg:py-20 text-center">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-dots opacity-20" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Have a Website Idea?
              </h2>
              <p className="mt-4 text-ink-300 max-w-xl mx-auto">
                Tell me what you're building. I'll help you turn the idea into a professional
                digital experience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-ink-900 font-semibold text-sm hover:bg-brand-100 transition-all hover:-translate-y-0.5"
                >
                  Start a Project
                  <ArrowRight size={17} />
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-ink-600 text-white font-semibold text-sm hover:bg-ink-800 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle size={17} />
                  WhatsApp Me
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
