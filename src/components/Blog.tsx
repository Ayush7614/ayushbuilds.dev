"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { site } from "@/lib/data";

export function Blog() {
  const hasBlogUrl = Boolean(site.blogUrl);

  return (
    <Section
      id="blog"
      label="05 — blog"
      title="Technical writing & thoughts"
      subtitle="300+ blogs on AI, DevOps, cloud, LLMs, and open source — NeuralVerse coming soon."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          className="rounded-2xl bg-[var(--bg-card)] p-8 ember-border"
          whileHover={{ scale: 1.01 }}
        >
          <BookOpen className="text-[var(--ember)]" size={32} />
          <h3 className="mt-4 text-xl font-semibold text-[var(--mist)]">
            NeuralVerse
          </h3>
          <p className="mt-2 text-[var(--ash)]">
            My personal blog website — deep dives on DevRel, agentic AI, security,
            and community building.
          </p>
          <a
            href="https://github.com/Ayush7614/NeuralVerse"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--ember)] hover:underline"
          >
            View on GitHub <ExternalLink size={14} />
          </a>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--bg)]/50 p-8"
          initial={{ opacity: 0.8 }}
        >
          <p className="font-mono text-xs text-[var(--ember)]">
            {"// blog_url_pending"}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-[var(--mist)]">
            {hasBlogUrl ? "Read my blog" : "Blog link coming soon"}
          </h3>
          <p className="mt-2 text-sm text-[var(--ash)]">
            {hasBlogUrl
              ? "All posts live at your blog hub."
              : "You mentioned you'll share the blog URL later — drop it in src/lib/data.ts as site.blogUrl and it'll light up here automatically."}
          </p>
          {hasBlogUrl ? (
            <a
              href={site.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-[var(--ember)] px-6 py-2.5 text-sm font-semibold text-black"
            >
              Visit Blog
            </a>
          ) : (
            <div className="mt-6 rounded-lg bg-[var(--bg-card)] px-4 py-3 font-mono text-xs text-[var(--ash)]">
              site.blogUrl = &quot;&quot;
            </div>
          )}
        </motion.div>
      </div>

      <motion.p
        className="mt-8 text-center text-sm text-[var(--ash)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Also find my writing on{" "}
        <a
          href="https://hashnode.com/@Ayush7614"
          className="text-[var(--ember-glow)] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hashnode
        </a>{" "}
        and aggregated at{" "}
        <a
          href="https://all-blogs-in-one-place.vercel.app"
          className="text-[var(--ember-glow)] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          all-blogs-in-one-place
        </a>
      </motion.p>
    </Section>
  );
}
