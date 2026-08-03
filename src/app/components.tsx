import { toSlug } from "@/lib/slug";
import type { Accent, SkillGroup, Experience, Project } from "@/types/portfolio";

// ── Token helpers ────────────────────────────────────────────────────

export const accentTokens: Record<Accent, { bar: string; tag: string; glow: string }> = {
  indigo:  { bar: "bg-indigo-500",  tag: "text-indigo-400  border-indigo-500/20",  glow: "bg-indigo-500/10" },
  sky:     { bar: "bg-sky-500",     tag: "text-sky-400     border-sky-500/20",     glow: "bg-sky-500/10" },
  emerald: { bar: "bg-emerald-500", tag: "text-emerald-400 border-emerald-500/20", glow: "bg-emerald-500/10" },
  amber:   { bar: "bg-amber-500",   tag: "text-amber-400   border-amber-500/20",   glow: "bg-amber-500/10" },
  violet:  { bar: "bg-violet-500",  tag: "text-violet-400  border-violet-500/20",  glow: "bg-violet-500/10" },
  rose:    { bar: "bg-rose-500",    tag: "text-rose-400    border-rose-500/20",    glow: "bg-rose-500/10" },
};

// ── Micro-components ─────────────────────────────────────────────────

export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-8 bg-indigo-500/40" />
      <p className="font-mono text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
        {children}
      </p>
    </div>
  );
}

export function AccentBar({ accent }: { accent: Accent }) {
  return <div className={`h-1 w-8 rounded-full ${accentTokens[accent].bar}`} />;
}

export function Tag({ children, accent }: { children: string; accent: Accent }) {
  const t = accentTokens[accent];
  return (
    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${t.tag} bg-slate-900/80 hover:bg-slate-800/80`}>
      {children}
    </span>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      <span aria-hidden="true">←</span>
      {label}
    </a>
  );
}

// ── Section cards ────────────────────────────────────────────────────

export function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:-translate-y-0.5 hover:border-slate-700 hover:shadow-lg sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <AccentBar accent={group.accent} />
        <h3 className="text-sm font-semibold tracking-tight text-slate-200">
          {group.label}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((skill) => (
          <Tag key={skill} accent={group.accent}>
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <li className="group relative pb-10 pl-10 last:pb-0 sm:pl-12">
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className={`absolute left-[11px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-slate-800 bg-slate-950 transition-colors group-hover:border-slate-600 sm:left-[13px] sm:h-3 sm:w-3 ${accentTokens[exp.accent].bar}`}
      />
      {/* Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:-translate-y-0.5 hover:border-slate-700 hover:shadow-lg sm:p-6">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-100">
              {exp.company}
            </h3>
            <p className="text-sm text-slate-400">{exp.role}</p>
          </div>
          <span className="mt-1 inline-block self-start rounded-full border border-slate-700 px-3 py-0.5 text-xs text-slate-400 sm:mt-0">
            {exp.period}
          </span>
        </div>
        <ul className="space-y-1.5" aria-label={`Highlights at ${exp.company}`}>
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
              <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function ProjectCard({ project, linkable = false }: { project: Project; linkable?: boolean }) {
  const t = accentTokens[project.accent];

  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl sm:p-6">
      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${t.glow} blur-lg`}
        aria-hidden="true"
      />
      <AccentBar accent={project.accent} />
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-base font-semibold tracking-tight text-slate-100">
          {linkable ? (
            <a
              href={`/projects/${toSlug(project.title)}`}
              className="transition-colors hover:text-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
      </div>
      <div className="relative z-10 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag} accent={project.accent}>
            {tag}
          </Tag>
        ))}
      </div>
      {/* App Store button */}
      {project.appStore && (
        <div className="relative z-10 flex gap-3 pt-1">
          <a
            href={project.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:border-slate-500 hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            App Store
          </a>
        </div>
      )}
    </div>
  );
}
