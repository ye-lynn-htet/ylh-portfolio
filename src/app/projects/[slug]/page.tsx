import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/app/fallback-data";
import { toSlug } from "@/lib/slug";
import { Tag, BackLink } from "@/app/components";
import { accentTokens } from "@/app/components";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: toSlug(p.title) }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => toSlug(p.title) === slug);
  return {
    title: project ? `${project.title} — Ye Lynn Htet` : "Project not found",
    description: project?.description ?? "Project not found.",
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => toSlug(p.title) === slug);

  if (!project) {
    return (
      <div className="relative min-h-screen bg-slate-950 text-slate-50">
        <main className="relative z-10 mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:py-28">
          <h1 className="text-2xl font-bold text-slate-50">Project not found</h1>
          <p className="mt-2 text-slate-400">
            The project you&rsquo;re looking for doesn&rsquo;t exist.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-indigo-500 hover:text-indigo-400"
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>
        </main>
      </div>
    );
  }

  const t = accentTokens[project.accent];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28">
        <BackLink href="/projects" label="All Projects" />

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          {/* Accent bar */}
          <div className={`h-1 w-12 rounded-full ${t.bar}`} />

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} accent={project.accent}>
                {tag}
              </Tag>
            ))}
          </div>

          {/* App Store link */}
          <div className="mt-8">
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-400 hover:shadow-[0_0_28px_rgba(99,102,241,0.25)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              View on App Store
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
