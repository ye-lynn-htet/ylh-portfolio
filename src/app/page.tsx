export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/50 blur-3xl" />
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
      <main className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm font-medium tracking-widest text-emerald-400 uppercase">
            Full-Stack Developer
          </p>
          <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
            Ye Lynn Htet
          </h1>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-zinc-400">
            I build modern, performant web experiences — from clean UI to
            scalable infrastructure.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="#work"
            className="inline-flex h-12 items-center rounded-xl bg-zinc-50 px-8 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:shadow-[0_0_24px_rgba(250,250,250,0.15)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-xl border border-zinc-700 bg-transparent px-8 text-sm font-semibold text-zinc-50 transition-all hover:border-zinc-500 hover:bg-zinc-800"
          >
            Get in Touch
          </a>
        </div>
      </main>
    </div>
  );
}
