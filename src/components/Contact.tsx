import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2, type LucideIcon } from 'lucide-react';
import { contact, projectTypeOptions, budgetOptions } from '@/data/content';
import { supabase } from '@/lib/supabase';
import { Reveal } from '@/components/Reveal';

type FormState = {
  name: string;
  email: string;
  business: string;
  project_type: string;
  budget: string;
  details: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  business: '',
  project_type: '',
  budget: '',
  details: '',
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and project details.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('enquiries').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        business: form.business.trim() || null,
        project_type: form.project_type || null,
        budget: form.budget || null,
        details: form.details.trim(),
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        'Something went wrong sending your enquiry. Please try again or reach me directly via email or WhatsApp.'
      );
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 dark:text-white">
            Let's Talk About Your Project.
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-400">
            Fill out the form below or reach me directly — I usually respond within 24 hours.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <Reveal className="lg:col-span-2" delay={80}>
            <div className="space-y-3 h-full">
              <ContactRow icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
              <ContactRow icon={Phone} label="WhatsApp" value={contact.whatsappDisplay} href={contact.whatsapp} external />
              <ContactRow icon={Linkedin} label="LinkedIn" value="Connect on LinkedIn" href={contact.linkedin} external />
              <ContactRow icon={Github} label="GitHub" value="View my code" href={contact.github} external />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={140}>
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl border border-ink-200/70 dark:border-ink-800/60 bg-white dark:bg-ink-900/50 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name *">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email *">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Business / Company">
                <input
                  type="text"
                  value={form.business}
                  onChange={(e) => update('business', e.target.value)}
                  placeholder="Your business name (optional)"
                  className={inputClass}
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Project Type">
                  <select
                    value={form.project_type}
                    onChange={(e) => update('project_type', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a type</option>
                    {projectTypeOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget">
                  <select
                    value={form.budget}
                    onChange={(e) => update('budget', e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select a range</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Project Details *">
                <textarea
                  value={form.details}
                  onChange={(e) => update('details', e.target.value)}
                  placeholder="Tell me about your project — what you need, your goals, and any specific requirements."
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </Field>

              {status === 'success' && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-sm text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 size={18} className="flex-shrink-0" />
                  Your enquiry has been sent. I'll get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 text-sm text-red-700 dark:text-red-400">
                  <AlertCircle size={18} className="flex-shrink-0" />
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 font-semibold text-sm hover:bg-brand-600 dark:hover:bg-brand-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  'w-full px-4 py-2.5 rounded-xl border border-ink-200 dark:border-ink-700/60 bg-white dark:bg-ink-800/40 text-sm text-ink-900 dark:text-ink-100 placeholder-ink-400 dark:placeholder-ink-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-400 transition-colors';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-ink-500 dark:text-ink-400 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-3.5 p-4 rounded-2xl border border-ink-200/70 dark:border-ink-800/60 bg-white dark:bg-ink-900/50 hover:border-brand-300 dark:hover:border-brand-700/60 hover:shadow-md transition-all group"
    >
      <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors">
        <Icon size={19} />
      </div>
      <div>
        <div className="text-xs text-ink-400 dark:text-ink-500">{label}</div>
        <div className="text-sm font-semibold text-ink-800 dark:text-ink-200">{value}</div>
      </div>
    </a>
  );
}
