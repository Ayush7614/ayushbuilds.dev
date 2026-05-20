"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { site } from "@/lib/data";

export function Blog() {
  return (
    <Section
      id="blog"
      label="05 — blog"
      title="Technical writing & thoughts"
      subtitle="800+ blogs on NeuralVerse — AI, LLMs, agentic AI, security, DevRel, and open source."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.a
          href={site.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl bg-[var(--bg-card)] p-8 ember-border transition hover:border-[var(--ember)]"
          whileHover={{ scale: 1.01 }}
        >
          <BookOpen className="text-[var(--ember)]" size={32} />
          <h3 className="mt-4 text-xl font-semibold text-[var(--mist)]">
            NeuralVerse
          </h3>
          <p className="mt-2 text-[var(--ash)]">
            My live blog — deep dives on engineering, AI agents, security, DevRel,
            and community building. Read the latest signals from the lab.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ember)]">
            Visit NeuralVerse <ExternalLink size={14} />
          </span>
        </motion.a>

        <motion.div
          className="rounded-2xl bg-[var(--bg-card)] p-8 ember-border"
          whileHover={{ scale: 1.01 }}
        >
          <p className="font-mono text-xs text-[var(--ember)]">
            {"// also_on"}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-[var(--mist)]">
            More writing
          </h3>
          <p className="mt-2 text-sm text-[var(--ash)]">
            Older posts and mirrors across the web. NeuralVerse is the main hub.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://hashnode.com/@Ayush7614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--ember-glow)] hover:underline"
            >
              Hashnode <ExternalLink size={14} />
            </a>
            <a
              href="https://all-blogs-in-one-place.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--ember-glow)] hover:underline"
            >
              All blogs in one place <ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/Ayush7614/NeuralVerse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--ash)] hover:text-[var(--ember)]"
            >
              Source on GitHub <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
