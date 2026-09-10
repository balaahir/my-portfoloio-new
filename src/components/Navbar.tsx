import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, ArrowRight } from 'lucide-react';
import { navLinks, contact } from '@/data/content';
import { useTheme } from '@/hooks/useTheme';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-ink-950/80 glass border-b border-ink-200/60 dark:border-ink-800/60'
            : 'bg-transparent'
        }`}
      >
        <nav className="container flex items-center justify-between h-16 lg:h-18">
          <a href="#home" className="font-display text-xl font-extrabold tracking-tight text-ink-900 dark:text-white">
            {contact.name}
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-semibold hover:bg-brand-600 dark:hover:bg-brand-100 transition-colors"
            >
              Start a Project
              <ArrowRight size={15} />
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[280px] max-w-[80vw] bg-white dark:bg-ink-900 shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-ink-200 dark:border-ink-800">
            <span className="font-display font-bold text-ink-900 dark:text-white">{contact.name}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-600 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-medium text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-ink-900 dark:bg-white text-white dark:text-ink-900 font-semibold"
            >
              Start a Project
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
