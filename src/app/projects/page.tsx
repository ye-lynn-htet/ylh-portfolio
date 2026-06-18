import type { Metadata } from "next";
import { projects } from "@/app/fallback-data";
import { SectionLabel, ProjectCard, BackLink } from "@/app/components";

export const metadata: Metadata = {
  title: "Projects — Ye Lynn Htet",
  description: "iOS and Flutter projects — SPOTV NOW, SAYA, Kakely, Pet Lovers Centre, Flash Mall EPOS.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <BackLink href="/" label="Home" />

        <div className="mt-6 space-y-3">
          <SectionLabel>Projects</SectionLabel>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            All Projects
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            Five production apps shipped across sports streaming, education, social writing, e-commerce, and point-of-sale.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} linkable />
          ))}
        </div>
      </main>
    </div>
  );
}
