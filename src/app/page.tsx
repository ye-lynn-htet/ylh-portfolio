const projects = [
  {
    title: "Cloud Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, team collaboration, and role-based access control.",
    tags: ["React", "TypeScript", "D3.js"],
    color: "emerald",
  },
  {
    title: "API Gateway",
    description:
      "High-performance API gateway handling 10M+ requests/day with rate limiting, auth, and request transformation.",
    tags: ["Go", "gRPC", "Redis"],
    color: "violet",
  },
  {
    title: "Design System",
    description:
      "Component library powering 12 product teams — theming, a11y, and 200+ composable primitives.",
    tags: ["React", "Storybook", "Tailwind"],
    color: "amber",
  },
] as const;

const colorMap = {
  emerald: {
    glow: "bg-emerald-500/10",
    accent: "bg-emerald-500",
    text: "text-emerald-400",
    border: "border-emerald-500/20 group-hover:border-emerald-500/50",
  },
  violet: {
    glow: "bg-violet-500/10",
    accent: "bg-violet-500",
    text: "text-violet-400",
    border: "border-violet-500/20 group-hover:border-violet-500/50",
  },
  amber: {
    glow: "bg-amber-500/10",
    accent: "bg-amber-500",
    text: "text-amber-400",
    border: "border-amber-500/20 group-hover:border-amber-500/50",
  },
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 -top-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl sm:-left-32 sm:-top-32 sm:h-96 sm:w-96" />
        <div className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl sm:-bottom-32 sm:-right-32 sm:h-96 sm:w-96" />
        <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/50 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center px-4 py-16 sm:py-24">
        {/* Hero */}
        <section className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm font-medium tracking-widest text-emerald-400 uppercase">
              Full-Stack Developer
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl md:text-7xl">
              Ye Lynn Htet
            </h1>
            <p className="mx-auto max-w-lg text-balance text-lg leading-relaxed text-zinc-400">
              I build modern, performant web experiences — from clean UI to
              scalable infrastructure.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-zinc-50 px-6 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:shadow-[0_0_24px_rgba(250,250,250,0.15)] sm:px-8"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-zinc-700 bg-transparent px-6 text-sm font-semibold text-zinc-50 transition-all hover:border-zinc-500 hover:bg-zinc-800 sm:px-8"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Projects */}
        <section
          id="work"
          className="mt-20 flex w-full max-w-6xl flex-col items-center gap-8 sm:mt-32 sm:gap-12"
        >
          <div className="flex flex-col items-center gap-3">
            <p className="font-mono text-sm font-medium tracking-widest text-zinc-500 uppercase">
              Selected Work
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl md:text-4xl">
              Projects
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const c = colorMap[project.color];
              return (
                <div
                  key={project.title}
                  className="group relative flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/90 hover:shadow-2xl sm:p-6"
                >
                  {/* Accent glow behind card */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${c.glow} blur-xl`}
                  />

                  {/* Color accent bar */}
                  <div className={`h-1 w-10 rounded-full ${c.accent}`} />

                  <div className="relative z-10 flex flex-col gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-0.5 text-xs font-medium ${c.border} ${c.text} bg-zinc-900/80`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Subtle bottom shimmer */}
                  <div className="pointer-events-none absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
