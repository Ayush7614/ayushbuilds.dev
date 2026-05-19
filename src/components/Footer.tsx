import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-sm text-[var(--ash)]">
          <span className="text-[var(--ember)]">© {year}</span> {site.name} ·{" "}
          {site.domain}
        </p>
        <p className="font-mono text-xs text-[var(--ash)]">
          built with next.js · designed with ember
        </p>
      </div>
    </footer>
  );
}
