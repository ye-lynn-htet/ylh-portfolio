import { navLinks, skillGroups, experiences, projects, contact } from "@/app/fallback-data";
import { SectionLabel, AccentBar, Tag, ProjectCard, accentTokens } from "@/app/components";
import ScrollReveal from "@/app/scroll-reveal";

// ── Floating tags — neon language badges ────────────────────────────────

const floatingTags = [
  { label: "Swift",   color: "#f97316", x: "8%",  y: "12%", delay: "0s" },
  { label: "Flutter", color: "#38bdf8", x: "62%", y: "6%",  delay: "0.5s" },
  { label: "Python",  color: "#eab308", x: "35%", y: "28%", delay: "1s" },
  { label: "Dart",    color: "#2dd4bf", x: "72%", y: "32%", delay: "1.5s" },
  { label: "UIKit",   color: "#3b82f6", x: "12%", y: "55%", delay: "0.8s" },
  { label: "FastAPI", color: "#10b981", x: "55%", y: "58%", delay: "1.2s" },
  { label: "SwiftUI", color: "#a78bfa", x: "28%", y: "78%", delay: "0.3s" },
  { label: "RxSwift", color: "#c084fc", x: "68%", y: "80%", delay: "1.7s" },
];

const floatingSmallTags = [
  { label: "Combine",    color: "#f9731680", x: "45%", y: "15%", delay: "0.3s" },
  { label: "async/await", color: "#38bdf880", x: "18%", y: "38%", delay: "0.9s" },
  { label: "REST",       color: "#10b98180", x: "78%", y: "50%", delay: "1.4s" },
  { label: "JSON",       color: "#eab30880", x: "5%",  y: "72%", delay: "0.6s" },
  { label: "Firebase",   color: "#f59e0b80", x: "82%", y: "18%", delay: "1.1s" },
  { label: "SQLite",     color: "#6366f180", x: "48%", y: "45%", delay: "1.6s" },
  { label: "CoreData",   color: "#a78bfa80", x: "15%", y: "88%", delay: "0.2s" },
  { label: "GraphQL",    color: "#e879f980", x: "70%", y: "68%", delay: "0.7s" },
];

function HeroIllustration() {
  return (
    <div
      className="relative h-[340px] w-[340px] shrink-0 sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px]"
      role="img"
      aria-label="Programming languages: Swift, Flutter, Python, Dart, UIKit, FastAPI, SwiftUI, RxSwift"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl sm:h-64 sm:w-64"
      />

      {/* Decorative graphic lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flowing curves */}
        <path
          d="M0 80 C100 60, 150 120, 250 100 S380 60, 400 90"
          stroke="url(#lineGrad1)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M0 200 C80 170, 180 230, 280 190 S380 220, 400 200"
          stroke="url(#lineGrad2)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M0 310 C120 280, 200 340, 300 300 S370 320, 400 300"
          stroke="url(#lineGrad1)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Subtle diagonal accent */}
        <path
          d="M60 0 L120 400"
          stroke="url(#lineGrad3)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <path
          d="M320 0 L280 400"
          stroke="url(#lineGrad3)"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        {/* Small accent dots at intersections */}
        <circle cx="150" cy="100" r="2" fill="#6366f1" opacity="0.3" />
        <circle cx="280" cy="190" r="2" fill="#818cf8" opacity="0.25" />
        <circle cx="100" cy="280" r="1.5" fill="#6366f1" opacity="0.2" />
        <circle cx="330" cy="300" r="2" fill="#818cf8" opacity="0.2" />
        {/* Gradients */}
        <defs>
          <linearGradient id="lineGrad1" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="30%" stopColor="#6366f1" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#818cf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="40%" stopColor="#6366f1" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {floatingTags.map((item) => (
        <span
          key={item.label}
          className="absolute font-mono text-sm font-bold tracking-tight whitespace-nowrap animate-float sm:text-base lg:text-lg"
          style={{
            left: item.x,
            top: item.y,
            color: item.color,
            filter: `drop-shadow(0 0 8px ${item.color}44) drop-shadow(0 0 3px ${item.color}66)`,
            animationDelay: item.delay,
          }}
        >
          {item.label}
        </span>
      ))}

      {/* Small floating skill keywords */}
      {floatingSmallTags.map((item) => (
        <span
          key={item.label}
          className="absolute font-mono text-[10px] tracking-wider whitespace-nowrap animate-float sm:text-xs"
          style={{
            left: item.x,
            top: item.y,
            color: item.color,
            animationDelay: item.delay,
          }}
        >
          {item.label}
        </span>
      ))}
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
        <nav className="mx-auto flex max-w-6xl items-center justify-center sm:justify-between px-4 py-3 sm:px-6" aria-label="Main navigation">
          <a href="#" className="hidden sm:block text-base font-semibold tracking-tight text-slate-50">
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
          {/* Mobile nav — full labels */}
          <ul className="flex items-center gap-1 sm:hidden" role="list" aria-label="Quick navigation">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl space-y-32 px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
        {/* ════════════════════════════════════════════════════════════
            HERO
            ════════════════════════════════════════════════════════════ */}
        <section className="flex flex-col items-center gap-10 sm:flex-row sm:gap-16">
          <div className="order-2 flex flex-col gap-6 text-center sm:order-1 sm:text-left">
            <p
              className="font-mono text-sm font-medium tracking-[0.2em] text-indigo-400 uppercase"
              style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
            >
              Senior Mobile Developer
            </p>
            <h1
              className="max-w-lg text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
            >
              Ye Lynn Htet
            </h1>
            <p
              className="max-w-md text-balance text-lg leading-relaxed text-slate-400"
              style={{ animation: "fadeInUp 0.6s ease-out 0.35s both" }}
            >
              I&rsquo;m a professional Mobile Developer crafting high-performance iOS and Flutter applications.
            </p>
            <div
              className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4"
              style={{ animation: "fadeInUp 0.6s ease-out 0.5s both" }}
            >
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
          <div className="order-1 sm:order-2" style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}>
            <HeroIllustration />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SKILLS — 3 of 4 groups
            ════════════════════════════════════════════════════════════ */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* ════════════════════════════════════════════════════════════
            EXPERIENCE — 3 of 4 roles
            ════════════════════════════════════════════════════════════ */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* ════════════════════════════════════════════════════════════
            PROJECTS — 3 of 5 projects
            ════════════════════════════════════════════════════════════ */}
        <ScrollReveal>
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
        </ScrollReveal>

        {/* ════════════════════════════════════════════════════════════
            CONTACT / FOOTER
            ════════════════════════════════════════════════════════════ */}
        <ScrollReveal>
          <footer id="contact" className="scroll-mt-20 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="space-y-3">
                <SectionLabel>Contact</SectionLabel>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Let&rsquo;s talk
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-slate-400">
                  I&rsquo;m based in Kobe and open to remote opportunities worldwide. Reach out — I&rsquo;d love to hear about your project.
                </p>
              </div>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
                  { label: "Location", value: contact.location, href: null },
                  { label: "LinkedIn", value: "linkedin.com/ye-lynn-htet", href: `https://${contact.linkedin}` },
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
                          {...(item.label === "Email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
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
            </div>
            <p className="pt-8 text-center font-mono text-xs text-slate-600">
              &copy; 2026 Ye Lynn Htet
            </p>
          </footer>
        </ScrollReveal>
      </main>
    </div>
  );
}
