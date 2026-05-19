"use client";

import { motion } from "framer-motion";
import { FileText, Mail, Send } from "lucide-react";
import { Section } from "./Section";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <Section
      id="contact"
      label="07 — contact"
      title="Let's build something"
      subtitle="Open to DevRel roles, AI security collaborations, speaking, and mentorship."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <motion.a
          href={`mailto:${site.email}`}
          className="flex flex-col items-center rounded-2xl bg-[var(--bg-card)] p-8 ember-border text-center transition hover:border-[var(--ember)]"
          whileHover={{ y: -4 }}
        >
          <Mail className="text-[var(--ember)]" size={32} />
          <h3 className="mt-4 font-semibold text-[var(--mist)]">Email</h3>
          <p className="mt-2 text-sm text-[var(--ash)] break-all">
            {site.email}
          </p>
        </motion.a>

        <motion.a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-2xl bg-[var(--bg-card)] p-8 ember-border text-center transition hover:border-[var(--ember)]"
          whileHover={{ y: -4 }}
        >
          <FileText className="text-[var(--ember)]" size={32} />
          <h3 className="mt-4 font-semibold text-[var(--mist)]">Resume</h3>
          <p className="mt-2 text-sm text-[var(--ash)]">View PDF on Drive</p>
        </motion.a>

        <motion.a
          href={site.topmate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-2xl bg-[var(--bg-card)] p-8 ember-border text-center transition hover:border-[var(--ember)]"
          whileHover={{ y: -4 }}
        >
          <Send className="text-[var(--ember)]" size={32} />
          <h3 className="mt-4 font-semibold text-[var(--mist)]">Topmate</h3>
          <p className="mt-2 text-sm text-[var(--ash)]">Book a 1:1 session</p>
        </motion.a>
      </div>

      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {site.socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--border)] px-5 py-2 font-mono text-sm text-[var(--ash)] transition hover:border-[var(--ember)] hover:text-[var(--ember)]"
          >
            {s.name}
          </a>
        ))}
      </motion.div>
    </Section>
  );
}
