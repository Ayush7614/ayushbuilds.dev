"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      label="02 — experience"
      title="Where I've shipped impact"
      subtitle="DevRel, community, full-stack, and GSoC — across AI cloud, edtech, and OSS."
      className="bg-[var(--bg-elevated)]"
    >
      <div className="relative space-y-0 pl-8 timeline-line">
        {experience.map((job, i) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            className="relative pb-12 pl-8 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-[var(--ember)] bg-[var(--bg)] shadow-[0_0_12px_rgba(255,107,53,0.5)]" />
            <div className="rounded-2xl bg-[var(--bg-card)] p-6 ember-border transition hover:translate-x-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--mist)]">
                    {job.role}
                  </h3>
                  <p className="text-[var(--ember-glow)]">{job.company}</p>
                </div>
                <p className="font-mono text-xs text-[var(--ash)]">
                  {job.period}
                  <br />
                  {job.location}
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((h) => (
                  <li
                    key={h.slice(0, 40)}
                    className="text-sm leading-relaxed text-[var(--ash)]"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
