import { navLinks, skillGroups, experiences, projects, contact } from "@/app/fallback-data";
import { SectionLabel, AccentBar, Tag, ProjectCard, accentTokens } from "@/app/components";

// ── Orbit — neon language ring ─────────────────────────────────────────

const orbitLabels = [
  { label: "Swift",   color: "#f97316" },
  { label: "Flutter", color: "#38bdf8" },
  { label: "Python",  color: "#eab308" },
  { label: "Dart",    color: "#2dd4bf" },
  { label: "UIKit",   color: "#3b82f6" },
  { label: "FastAPI", color: "#10b981" },
  { label: "SwiftUI", color: "#a78bfa" },
  { label: "RxSwift", color: "#c084fc" },
];

function HeroIllustration() {
  return (
    <div
      className="relative h-[340px] w-[340px] shrink-0 sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px]"
      role="img"
      aria-label="Programming languages orbiting: Swift, Flutter, Python, Dart, UIKit, FastAPI, SwiftUI, RxSwift"
    >
      {/* Ghost ring guides */}
      <div aria-hidden="true" className="absolute inset-0 rounded-full border border-slate-800/40" />
      <div aria-hidden="true" className="absolute inset-12 rounded-full border border-slate-800/25 sm:inset-14" />
      <div aria-hidden="true" className="absolute inset-24 rounded-full border border-slate-800/15 sm:inset-28" />

      {/* Central anchor */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
      />

      {/* Rotating ring */}
      <div className="absolute inset-0 animate-orbit">
        {orbitLabels.map((item, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const R = 158;

          return (
            <div
              key={item.label}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
              style={{
                transform: `translate(${Math.round(Math.cos(angle) * R)}px, ${Math.round(Math.sin(angle) * R)}px)`,
              }}
            >
              <span
                className="font-mono text-sm font-bold tracking-tight whitespace-nowrap sm:text-base lg:text-lg animate-unorbit"
                style={{
                  color: item.color,
                  filter: `drop-shadow(0 0 6px ${item.color}44) drop-shadow(0 0 2px ${item.color}66)`,
                }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Explore More button ─────────────────────────────────────────────────

function ExploreMore({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-8 text-center">
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 transition-all hover:border-indigo-500 hover:text-indigo-400"
      >
        {label}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="relative bg-slate-950 text-slate-50">
      {/* ── Ambient background ── */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      {/* ── Grid pattern ── */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ════════════════════════════════════════════════════════════
          HEADER
          ════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Main navigation">
          <a href="#" className="text-base font-semibold tracking-tight text-slate-50">
            Ye Lynn Htet
          </a>
          <ul className="hidden items-center gap-6 sm:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-slate-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile nav — compact dots for now */}
          <div className="flex items-center gap-4 sm:hidden" aria-label="Quick navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-slate-400 transition-colors hover:text-indigo-400"
              >
                {link.label.slice(0, 3)}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-32 px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
        {/* ════════════════════════════════════════════════════════════
            HERO
            ════════════════════════════════════════════════════════════ */}
        <section className="flex flex-col items-center gap-10 sm:flex-row sm:gap-16">
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <p className="font-mono text-sm font-medium tracking-[0.2em] text-indigo-400 uppercase">
              Senior Mobile Developer
            </p>
            <h1 className="max-w-lg text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
              Ye Lynn Htet
            </h1>
            <p className="max-w-md text-balance text-lg leading-relaxed text-slate-400">
              I&rsquo;m a professional Mobile Developer crafting high-performance iOS and Flutter applications.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-indigo-500 px-6 text-sm font-semibold text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_28px_rgba(99,102,241,0.25)] sm:px-8"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-700 px-6 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 sm:px-8"
              >
                Get in Touch
              </a>
            </div>
          </div>
          <HeroIllustration />
        </section>

        {/* ════════════════════════════════════════════════════════════
            SKILLS — 3 of 4 groups
            ════════════════════════════════════════════════════════════ */}
        <section id="skills" className="scroll-mt-20 space-y-8">
          <div className="space-y-3">
            <SectionLabel>Technical Skills</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What I work with
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skillGroups.slice(0, 3).map((group) => (
              <div
                key={group.label}
                className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-slate-700 sm:p-6"
              >
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
            ))}
          </div>
          <ExploreMore href="/skills" label="Explore All Skills" />
        </section>

        {/* ════════════════════════════════════════════════════════════
            EXPERIENCE — 3 of 4 roles
            ════════════════════════════════════════════════════════════ */}
        <section id="experience" className="scroll-mt-20 space-y-8">
          <div className="space-y-3">
            <SectionLabel>Experience</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Where I&rsquo;ve worked
            </h2>
          </div>
          <ol className="relative space-y-0" role="list">
            {/* Vertical timeline line */}
            <div className="pointer-events-none absolute bottom-0 left-[15px] top-0 w-px bg-slate-800 sm:left-[19px]" aria-hidden="true" />
            {experiences.slice(0, 3).map((exp) => (
              <li key={exp.company} className="group relative pb-10 pl-10 last:pb-0 sm:pl-12">
                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className={`absolute left-[11px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-slate-800 bg-slate-950 transition-colors group-hover:border-slate-600 sm:left-[13px] sm:h-3 sm:w-3 ${accentTokens[exp.accent].bar}`}
                />
                {/* Card */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-slate-700 sm:p-6">
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
            ))}
          </ol>
          <ExploreMore href="/experience" label="Explore Full History" />
        </section>

        {/* ════════════════════════════════════════════════════════════
            PROJECTS — 3 of 5 projects
            ════════════════════════════════════════════════════════════ */}
        <section id="projects" className="scroll-mt-20 space-y-8">
          <div className="space-y-3">
            <SectionLabel>Projects</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Apps I&rsquo;ve shipped
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <ExploreMore href="/projects" label="Explore All Projects" />
        </section>

        {/* ════════════════════════════════════════════════════════════
            CONTACT / FOOTER
            ════════════════════════════════════════════════════════════ */}
        <footer id="contact" className="scroll-mt-20 space-y-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12">
          <div className="space-y-3">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Let&rsquo;s talk
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              I&rsquo;m based in Kobe and open to remote opportunities worldwide. Reach out — I&rsquo;d love to hear about your project.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` },
              { label: "Location", value: contact.location, href: null },
              { label: "LinkedIn", value: contact.linkedin, href: `https://${contact.linkedin}` },
              { label: "GitHub", value: contact.github, href: `https://${contact.github}` },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 transition-colors hover:border-slate-700">
                <dt className="mb-1 font-mono text-xs font-medium tracking-[0.15em] text-slate-500 uppercase">
                  {item.label}
                </dt>
                <dd>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-slate-300 transition-colors hover:text-indigo-400"
                      {...(item.label === "Email" || item.label === "Phone" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-300">{item.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="pt-4 text-center font-mono text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Ye Lynn Htet
          </p>
        </footer>
      </main>
    </div>
  );
}
