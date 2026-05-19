"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { openSource } from "@/lib/data";

export function OpenSource() {
  return (
    <Section
      id="opensource"
      label="04 — open source"
      title="Contributing where it matters"
      subtitle="AI security, runtime governance, and guardrails for the LLM era."
      className="bg-[var(--bg-elevated)]"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {openSource.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-[var(--bg-card)] p-6 ember-border"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-[var(--ash)]">
                {repo.org}
              </span>
              <ArrowUpRight
                size={18}
                className="text-[var(--ash)] transition group-hover:text-[var(--ember)]"
              />
            </div>
            <h3 className="mt-3 text-xl font-bold text-[var(--mist)] group-hover:text-[var(--ember-glow)]">
              {repo.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--ember)]">{repo.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ash)]">
              {repo.description}
            </p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
