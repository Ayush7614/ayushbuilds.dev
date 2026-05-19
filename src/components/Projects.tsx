"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import { Section } from "./Section";
import { featuredProjects, otherProjects } from "@/lib/data";

const statusColors: Record<string, string> = {
  active: "bg-emerald-500/20 text-emerald-400",
  live: "bg-[rgba(255,107,53,0.2)] text-[var(--ember-glow)]",
  wip: "bg-amber-500/20 text-amber-400",
};

export function Projects() {
  return (
    <Section
      id="projects"
      label="03 — projects"
      title="Things I build & ship"
      subtitle="From AI runtime security to full-stack apps — side projects and flagship work."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] p-6 ember-border ${
              project.featured ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {project.featured && (
              <div className="absolute right-4 top-4 flex items-center gap-1 font-mono text-xs text-[var(--ember)]">
                <Sparkles size={12} />
                flagship
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--ember)]">
                {project.tag}
              </span>
              {project.status && (
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase ${statusColors[project.status]}`}
                >
                  {project.status}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-2xl font-bold text-[var(--mist)] group-hover:text-[var(--ember-glow)]">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ash)]">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-[var(--bg)] px-2 py-1 font-mono text-xs text-[var(--ash)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-[var(--ember)]">
              <GitHubIcon size={16} />
              View repository
              <ExternalLink size={14} className="opacity-0 transition group-hover:opacity-100" />
            </div>
            {project.featured && (
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#ff6b35]/10 blur-3xl transition group-hover:bg-[#ff6b35]/20" />
            )}
          </motion.a>
        ))}
      </div>

      <h3 className="mt-16 mb-6 font-mono text-sm text-[var(--ash)]">
        {"// more_projects"}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((p, i) => (
          <motion.div
            key={p.name}
            className="rounded-xl bg-[var(--bg-card)] p-5 ember-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h4 className="font-semibold text-[var(--mist)]">{p.name}</h4>
            <p className="mt-2 text-sm text-[var(--ash)]">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-[var(--ember-dim)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
