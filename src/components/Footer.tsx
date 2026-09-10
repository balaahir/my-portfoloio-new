import { Github, Linkedin, MessageCircle, type LucideIcon } from 'lucide-react';
import { contact, navLinks } from '@/data/content';

export function Footer() {
  return (
    <footer className="border-t border-ink-200/60 dark:border-ink-800/60 bg-ink-50/50 dark:bg-ink-950/50">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="font-display text-xl font-extrabold text-ink-900 dark:text-white">
              {contact.name}
            </div>
            <div className="mt-1 text-sm text-ink-500 dark:text-ink-400">{contact.title}</div>
            <p className="mt-4 text-sm text-ink-500 dark:text-ink-400 max-w-xs">
              Modern, responsive websites and web applications for businesses, startups, and
              entrepreneurs.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-600 dark:text-ink-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-4">
              Social
            </h3>
            <div className="flex gap-2.5">
              <SocialLink icon={Github} href={contact.github} label="GitHub" />
              <SocialLink icon={Linkedin} href={contact.linkedin} label="LinkedIn" />
              <SocialLink icon={MessageCircle} href={contact.whatsapp} label="WhatsApp" />
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 inline-block text-sm text-ink-600 dark:text-ink-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ink-200/60 dark:border-ink-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400 dark:text-ink-500">
            © 2026 {contact.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-400 dark:text-ink-500">Based in {contact.location}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  icon: Icon,
  href,
  label,
}: {
  icon: LucideIcon;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg flex items-center justify-center border border-ink-200 dark:border-ink-700/60 text-ink-600 dark:text-ink-400 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors"
    >
      <Icon size={17} />
    </a>
  );
}
