"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Star } from "lucide-react";
import { Section } from "./Section";
import { site } from "@/lib/data";

export function Topmate() {
  const { topmate } = site;

  return (
    <Section
      id="topmate"
      label="06 — consult"
      title="1:1 Guidance & Mentorship"
      subtitle="Book a session on Topmate — resume reviews, DevRel paths, open source, and full-stack career guidance."
      className="bg-[var(--bg-elevated)]"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--bg-card)] via-[#1a1210] to-[var(--bg-card)] p-8 md:p-12 ember-border"
        whileInView={{ scale: [0.98, 1] }}
        viewport={{ once: true }}
      >
        <motion.div
          className="glow-orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-[#ff6b35]/25"
          aria-hidden
        />

        <div className="relative grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2 text-[var(--ember)]">
              <Star size={18} fill="currentColor" />
              <span className="font-mono text-sm">4.3/5 · 30 ratings</span>
            </div>
            <h3 className="mt-4 text-3xl font-bold text-[var(--mist)]">
              {topmate.title}
            </h3>
            <p className="mt-4 leading-relaxed text-[var(--ash)]">
              {topmate.description}
            </p>
            <a
              href={topmate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ember)] px-8 py-4 text-base font-semibold text-black transition hover:bg-[var(--ember-glow)] hover:shadow-[0_0_50px_rgba(255,107,53,0.35)]"
            >
              <Calendar size={20} />
              Book on Topmate
            </a>
          </div>

          <ul className="space-y-3">
            {topmate.offerings.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-[var(--bg)]/80 px-4 py-3 ember-border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <MessageCircle size={18} className="shrink-0 text-[var(--ember)]" />
                <span className="text-sm text-[var(--mist)]">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
