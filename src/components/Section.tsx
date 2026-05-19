"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">{label}</p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--mist)] sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-[var(--ash)]">{subtitle}</p>
          )}
        </motion.div>
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
