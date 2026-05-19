"use client";

import { Section } from "./Section";
import { site, education, awards, volunteer } from "@/lib/data";

export function About() {
  return (
    <Section
      id="about"
      label="01 — about"
      title="Building bridges between builders & technology"
      subtitle="DevRel engineer, full-stack developer, and open-source advocate."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-[var(--ash)]">
            {site.objective}
          </p>
          <p className="leading-relaxed text-[var(--ash)]">
            With <strong className="text-[var(--mist)]">4+ years</strong> in
            developer experience, DevRel, community management, and open-source
            engagement — plus <strong className="text-[var(--mist)]">2+ years</strong>{" "}
            deep in AI, LLMs, and production-ready agents — I sit at the
            intersection of education, security, and infrastructure for the agentic
            era.
          </p>
          <p className="leading-relaxed text-[var(--ash)]">
            I love technical writing, SEO, documentation, and mentoring. Recent
            work spans{" "}
            <strong className="text-[var(--ember-glow)]">RuntimeWall</strong>,{" "}
            <strong className="text-[var(--ember-glow)]">Promptfoo</strong>, and{" "}
            <strong className="text-[var(--ember-glow)]">Thyris Safe Zone</strong>{" "}
            — pushing AI security and guardrails forward.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {site.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-[var(--bg-card)] p-4 ember-border text-center"
              >
                <p className="text-2xl font-bold text-[var(--ember)]">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-xs text-[var(--ash)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-[var(--bg-card)] p-6 ember-border">
            <h3 className="font-mono text-sm text-[var(--ember)]">education</h3>
            <p className="mt-3 text-lg font-semibold text-[var(--mist)]">
              {education.school}
            </p>
            <p className="text-[var(--ash)]">{education.degree}</p>
            <p className="mt-2 font-mono text-xs text-[var(--ash)]">
              {education.period} · {education.location} · GPA {education.gpa}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.courses.map((c) => (
                <span
                  key={c}
                  className="rounded-md bg-[var(--bg)] px-2 py-1 font-mono text-xs text-[var(--ash)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[var(--bg-card)] p-6 ember-border">
            <h3 className="font-mono text-sm text-[var(--ember)]">
              honors & awards
            </h3>
            <ul className="mt-4 space-y-2">
              {awards.map((a) => (
                <li
                  key={a}
                  className="flex gap-2 text-sm text-[var(--ash)] before:text-[var(--ember)] before:content-['▸']"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[var(--bg-card)] p-6 ember-border">
            <h3 className="font-mono text-sm text-[var(--ember)]">
              community & volunteer
            </h3>
            <ul className="mt-4 space-y-2">
              {volunteer.map((v) => (
                <li
                  key={v}
                  className="flex gap-2 text-sm text-[var(--ash)] before:text-[var(--ember)] before:content-['▸']"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
