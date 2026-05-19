"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060608]/90 backdrop-blur-xl border-b border-[rgba(255,107,53,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm tracking-tight text-[var(--mist)]"
        >
          <span className="text-[var(--ember)]">{">"}</span> {site.handle}
          <span className="text-[var(--ash)]">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--ash)] transition-colors hover:text-[var(--ember-glow)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-[var(--border-strong)] bg-[rgba(255,107,53,0.08)] px-5 py-2 text-sm font-medium text-[var(--ember-glow)] transition hover:bg-[rgba(255,107,53,0.15)] md:inline-block"
        >
          Resume
        </a>

        <button
          type="button"
          className="text-[var(--mist)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[var(--border)] bg-[#060608]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-[var(--ash)] hover:text-[var(--ember)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[var(--ember)]"
                >
                  Resume →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
