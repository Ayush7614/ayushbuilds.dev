"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";
import { site, badges, interests } from "@/lib/data";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: XIcon,
  mail: Mail,
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <motion.div
        className="glow-orb -left-32 top-1/4 h-96 w-96 bg-[#ff6b35]/20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="glow-orb right-0 top-1/3 h-80 w-80 bg-[#ff4500]/15"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute inset-0 grid-bg opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.1fr]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="order-2 lg:order-1">
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            // developer_relations · ai_security · open_source
          </motion.p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-[var(--mist)]">I&apos;m </span>
            <span className="text-gradient">{site.name}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ash)]">
            {site.tagline}. Building{" "}
            <a
              href="https://github.com/RuntimeWall/RuntimeWall"
              className="text-[var(--ember-glow)] underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RuntimeWall
            </a>{" "}
            — the secure runtime for autonomous AI agents. 4+ years shaping
            developer communities. Obsessed with LLMs, agentic AI, and AI
            security.
          </p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#projects"
              className="rounded-full bg-[var(--ember)] px-7 py-3 text-sm font-semibold text-black transition hover:bg-[var(--ember-glow)] hover:shadow-[0_0_40px_rgba(255,107,53,0.4)]"
            >
              View Projects
            </a>
            <a
              href={site.topmate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--border-strong)] px-7 py-3 text-sm font-medium text-[var(--mist)] transition hover:border-[var(--ember)] hover:text-[var(--ember-glow)]"
            >
              Book on Topmate
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-transparent px-7 py-3 text-sm text-[var(--ash)] transition hover:text-[var(--ember)]"
            >
              {site.email}
            </a>
          </motion.div>

          <div className="mt-10 flex gap-4">
            {site.socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full ember-border text-[var(--ash)] transition hover:text-[var(--ember)]"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <motion.div
            className="mt-10 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-[var(--bg-card)] px-3 py-1 font-mono text-xs text-[var(--ash)] ember-border"
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="order-1 flex justify-center lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div className="relative animate-float">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#ff6b35]/40 via-transparent to-transparent blur-2xl" />
            <motion.div
              className="relative overflow-hidden rounded-3xl ember-border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/profile.png"
                alt="Ayush Kumar — profile"
                width={480}
                height={480}
                className="h-auto w-full max-w-md object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-60"
                aria-hidden
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 rounded-2xl bg-[var(--bg-card)] px-4 py-3 font-mono text-xs ember-border shadow-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="text-[var(--ember)]">status:</span>{" "}
              <span className="text-[var(--mist)]">building agents 🛡️</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 overflow-hidden whitespace-nowrap border-y border-[var(--border)] py-3 w-full max-w-4xl">
        <motion.div className="flex animate-marquee gap-8">
          {[...interests, ...interests].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono text-sm text-[var(--ash)] shrink-0"
            >
              {item} <span className="text-[var(--ember)]">◆</span>
            </span>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-[var(--ash)] animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
