import { useState } from 'react';
import { ArrowUpRight, Eye, X, Check, ExternalLink } from 'lucide-react';
import { projects, type projects as projectsType } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/Hero';
import { ProjectPreview } from '@/components/ProjectPreview';

type Project = (typeof projectsType)[number];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-ink-50/50 dark:bg-ink-900/20">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
            Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 dark:text-white">
            Website Demos for Real Business Types
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-400">
            Each project below is a complete, working website concept designed for a specific type
            of client. Explore the preview and case study to see what I can build for you.
          </p>
        </Reveal>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <ProjectCard project={project} index={i} onViewCaseStudy={() => setActiveProject(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      {activeProject && <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onViewCaseStudy,
}: {
  project: Project;
  index: number;
  onViewCaseStudy: () => void;
}) {
  const isReversed = index % 2 === 1;

  return (
    <article className="group grid lg:grid-cols-2 gap-0 rounded-3xl border border-ink-200/70 dark:border-ink-800/60 bg-white dark:bg-ink-900/50 overflow-hidden hover:shadow-2xl hover:shadow-ink-900/10 dark:hover:shadow-black/30 transition-all duration-500">
      {/* Visual side */}
      <div
        className={`relative p-6 sm:p-10 flex items-center justify-center bg-gradient-to-br ${
          isReversed
            ? 'lg:order-2 from-ink-50 to-white dark:from-ink-800/30 dark:to-ink-900'
            : 'from-ink-50 to-white dark:from-ink-800/30 dark:to-ink-900'
        }`}
      >
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-[10px] font-bold tracking-wider border border-amber-200 dark:border-amber-800/50">
            {project.badge}
          </span>
        </div>
        <div className="w-full max-w-[420px] transition-transform duration-500 group-hover:scale-[1.03]">
          <BrowserFrame>
            <ProjectPreview projectId={project.id} accent={project.accent as 'emerald' | 'orange' | 'blue' | 'violet' | 'teal' | 'amber'} />
          </BrowserFrame>
        </div>
      </div>

      {/* Info side */}
      <div className={`p-7 sm:p-10 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
        <div className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-2">
          {project.category}
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-900 dark:text-white mb-3">
          {project.name}
        </h3>
        <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="mb-5">
          <div className="text-xs font-semibold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-2.5">
            Key Features
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.features.slice(0, 7).map((f) => (
              <span
                key={f}
                className="px-2.5 py-1 rounded-lg bg-ink-100 dark:bg-ink-800/60 text-ink-600 dark:text-ink-400 text-[11px] font-medium"
              >
                {f}
              </span>
            ))}
            {project.features.length > 7 && (
              <span className="px-2.5 py-1 rounded-lg bg-ink-100 dark:bg-ink-800/60 text-ink-500 dark:text-ink-500 text-[11px] font-medium">
                +{project.features.length - 7} more
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs font-semibold text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-2.5">
            Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-300 text-[11px] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-semibold hover:bg-brand-600 dark:hover:bg-brand-100 transition-colors"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
          <button
            onClick={onViewCaseStudy}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-ink-300 dark:border-ink-700 text-ink-800 dark:text-ink-200 text-sm font-semibold hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
          >
            <Eye size={15} />
            View Case Study
          </button>
        </div>
      </div>
    </article>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white dark:bg-ink-900 sm:rounded-2xl shadow-2xl my-0 sm:my-8 animate-fade-up">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-ink-200 dark:border-ink-800 bg-white/90 dark:bg-ink-900/90 glass rounded-t-2xl">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-extrabold text-ink-900 dark:text-white">{project.name}</h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-[9px] font-bold tracking-wider">
                {project.badge}
              </span>
            </div>
            <div className="text-sm text-ink-500 dark:text-ink-400">{project.category}</div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-500 dark:text-ink-400 hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
            aria-label="Close case study"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-7">
          {/* Preview */}
          <div className="max-w-[400px] mx-auto">
            <BrowserFrame>
              <ProjectPreview projectId={project.id} accent={project.accent as 'emerald' | 'orange' | 'blue' | 'violet' | 'teal' | 'amber'} />
            </BrowserFrame>
          </div>

          {/* Overview */}
          <section>
            <h4 className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wide mb-2">
              Project Overview
            </h4>
            <p className="text-ink-700 dark:text-ink-300 text-sm leading-relaxed">{project.description}</p>
          </section>

          {/* Problem & Solution */}
          <div className="grid sm:grid-cols-2 gap-5">
            <section className="rounded-xl bg-ink-50 dark:bg-ink-800/30 p-4">
              <h4 className="text-sm font-bold text-ink-900 dark:text-white mb-2">Problem</h4>
              <p className="text-ink-600 dark:text-ink-400 text-xs leading-relaxed">{cs.problem}</p>
            </section>
            <section className="rounded-xl bg-brand-50 dark:bg-brand-950/30 p-4">
              <h4 className="text-sm font-bold text-ink-900 dark:text-white mb-2">Solution</h4>
              <p className="text-ink-600 dark:text-ink-400 text-xs leading-relaxed">{cs.solution}</p>
            </section>
          </div>

          {/* Key Features */}
          <section>
            <h4 className="text-sm font-bold text-ink-900 dark:text-white mb-3">Key Features</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-400">
                  <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center">
                    <Check size={10} className="text-brand-600 dark:text-brand-400" strokeWidth={3} />
                  </span>
                  {f}
                </div>
              ))}
            </div>
          </section>

          {/* Design & Responsive */}
          <div className="grid sm:grid-cols-2 gap-5">
            <section>
              <h4 className="text-sm font-bold text-ink-900 dark:text-white mb-2">Design Approach</h4>
              <p className="text-ink-600 dark:text-ink-400 text-xs leading-relaxed">{cs.design}</p>
            </section>
            <section>
              <h4 className="text-sm font-bold text-ink-900 dark:text-white mb-2">Responsive Experience</h4>
              <p className="text-ink-600 dark:text-ink-400 text-xs leading-relaxed">{cs.responsive}</p>
            </section>
          </div>

          {/* Technology */}
          <section>
            <h4 className="text-sm font-bold text-ink-900 dark:text-white mb-3">Technology</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-300 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Final Result */}
          <section className="rounded-xl bg-gradient-to-br from-brand-50 to-accent-50/30 dark:from-brand-950/30 dark:to-ink-800/30 p-4">
            <h4 className="text-sm font-bold text-ink-900 dark:text-white mb-2">Final Result</h4>
            <p className="text-ink-600 dark:text-ink-400 text-xs leading-relaxed">{cs.result}</p>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-ink-100 dark:border-ink-800">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-semibold"
            >
              <ExternalLink size={15} />
              View Live Demo
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-ink-300 dark:border-ink-700 text-ink-800 dark:text-ink-200 text-sm font-semibold hover:bg-ink-100 dark:hover:bg-ink-800 transition-colors"
            >
              Start a Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
