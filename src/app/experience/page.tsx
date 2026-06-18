import type { Metadata } from "next";
import { experiences } from "@/app/fallback-data";
import { SectionLabel, ExperienceCard, BackLink } from "@/app/components";

export const metadata: Metadata = {
  title: "Experience — Ye Lynn Htet",
  description: "Work history — Senior iOS and Flutter developer at Telaaxon, CODIGO, Binary Lab, and Light Idea Software.",
};

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28">
        <BackLink href="/" label="Home" />

        <div className="mt-6 space-y-3">
          <SectionLabel>Experience</SectionLabel>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work History
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            Four roles across the mobile development landscape — from iOS specialist at a startup to senior Flutter developer at a med-tech company.
          </p>
        </div>

        <div className="mt-10">
          <ol className="relative space-y-0" role="list">
            {/* Vertical timeline line */}
            <div className="pointer-events-none absolute bottom-0 left-[15px] top-0 w-px bg-slate-800 sm:left-[19px]" aria-hidden="true" />
            {experiences.map((exp) => (
              <ExperienceCard key={exp.company} exp={exp} />
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
}
