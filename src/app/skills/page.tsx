import type { Metadata } from "next";
import { skillGroups } from "@/app/fallback-data";
import { SectionLabel, AccentBar, Tag, BackLink } from "@/app/components";

export const metadata: Metadata = {
  title: "Skills — Ye Lynn Htet",
  description: "Technical skills and technologies — UIKit, SwiftUI, Flutter, RxSwift, Firebase, and more.",
};

export default function SkillsPage() {
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
          <SectionLabel>Technical Skills</SectionLabel>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Complete Skill Set
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            Technologies, frameworks, and tools I use to build production iOS and Flutter applications.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
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
      </main>
    </div>
  );
}
