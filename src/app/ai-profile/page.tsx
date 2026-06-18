import type { Metadata } from "next";
import Link from "next/link";
import { buildContext } from "@/lib/context";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "AI Profile | Ayush Kumar",
  description:
    "Machine-readable profile of Ayush Kumar for AI agents — live GitHub activity, recent writing, projects, and open source. Available as /context.json and /llms.txt.",
};

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="ember-border rounded-xl bg-[var(--bg-card)] px-5 py-4">
      <div className="font-mono text-2xl font-bold text-[var(--ember)]">{value}</div>
      <div className="mt-1 text-sm text-[var(--ash)]">{label}</div>
    </div>
  );
}

export default async function AiProfilePage() {
  const ctx = await buildContext();

  return (
    <main className="relative mx-auto max-w-4xl px-6 py-20">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />

      <Link
        href="/"
        className="font-mono text-xs text-[var(--ash)] transition-colors hover:text-[var(--ember)]"
      >
        ← back to ayushbuilds.dev
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-4 py-1.5 font-mono text-xs text-[var(--ember)]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--ember)]" />
          AI Context Ready
        </span>
        <span className="rounded-full border border-[var(--border)] px-4 py-1.5 font-mono text-xs text-[var(--ash)]">
          MCP Enabled
        </span>
      </div>

      <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">
        <span className="text-gradient">{ctx.name}</span>
      </h1>
      <p className="section-label mt-3">{ctx.headline}</p>
      <p className="mt-5 max-w-2xl leading-relaxed text-[var(--mist)]">{ctx.bio}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/context.json"
          className="ember-border rounded-lg bg-[var(--bg-card)] px-4 py-2 font-mono text-sm text-[var(--foreground)]"
        >
          /context.json
        </a>
        <a
          href="/llms.txt"
          className="ember-border rounded-lg bg-[var(--bg-card)] px-4 py-2 font-mono text-sm text-[var(--foreground)]"
        >
          /llms.txt
        </a>
        <a
          href="https://github.com/Ayush7614/personal-context"
          target="_blank"
          rel="noreferrer"
          className="ember-border rounded-lg bg-[var(--bg-card)] px-4 py-2 font-mono text-sm text-[var(--foreground)]"
        >
          personal-context ↗
        </a>
      </div>

      {ctx.currentRole && (
        <section className="mt-14">
          <p className="section-label">current role</p>
          <p className="mt-2 text-lg text-[var(--foreground)]">
            {ctx.currentRole.role} <span className="text-[var(--ash)]">@</span>{" "}
            {ctx.currentRole.company}
          </p>
        </section>
      )}

      {ctx.github && (
        <section className="mt-14">
          <p className="section-label">github · live</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {ctx.github.contributionsLastYear != null && (
              <Stat label="Contributions / yr" value={ctx.github.contributionsLastYear} />
            )}
            <Stat label="Public Repos" value={ctx.github.publicRepos ?? "—"} />
            <Stat label="Total Stars" value={ctx.github.totalStars} />
            <Stat label="Followers" value={ctx.github.followers ?? "—"} />
          </div>
          <div className="mt-4 space-y-2">
            {ctx.github.topRepos.slice(0, 5).map((r) => (
              <a
                key={r.fullName}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="ember-border flex items-center justify-between rounded-lg bg-[var(--bg-card)] px-4 py-3"
              >
                <span className="font-mono text-sm text-[var(--foreground)]">{r.name}</span>
                <span className="font-mono text-xs text-[var(--ember)]">★ {r.stars}</span>
              </a>
            ))}
          </div>
        </section>
      )}

      {ctx.blogs.length > 0 && (
        <section className="mt-14">
          <p className="section-label">recent writing · live</p>
          <div className="mt-4 space-y-3">
            {ctx.blogs.slice(0, 8).map((b) => (
              <a
                key={b.link}
                href={b.link}
                target="_blank"
                rel="noreferrer"
                className="ember-border block rounded-lg bg-[var(--bg-card)] px-4 py-3"
              >
                <span className="text-[var(--foreground)]">{b.title}</span>
                {b.date && (
                  <span className="ml-2 font-mono text-xs text-[var(--ash)]">
                    {b.date.slice(0, 10)}
                  </span>
                )}
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14">
        <p className="section-label">open source</p>
        <div className="mt-4 space-y-3">
          {ctx.openSource.map((o) => (
            <div key={o.name} className="ember-border rounded-lg bg-[var(--bg-card)] px-4 py-3">
              <div className="text-[var(--foreground)]">
                {o.name} <span className="text-[var(--ash)]">· {o.role}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--ash)]">{o.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <p className="section-label">use this in your ai tool</p>
        <p className="mt-3 text-sm text-[var(--ash)]">
          Add the personal-context MCP server so any agent can query this profile live:
        </p>
        <pre className="ember-border mt-4 overflow-x-auto rounded-xl bg-[var(--bg-elevated)] p-5 font-mono text-xs leading-relaxed text-[var(--mist)]">
{`{
  "mcpServers": {
    "ayush": {
      "command": "npx",
      "args": ["-y", "personal-context-mcp"]
    }
  }
}`}
        </pre>
      </section>

      <p className="mt-16 font-mono text-xs text-[var(--ash)]">
        generated {ctx.generatedAt} · refreshed hourly
      </p>
    </main>
  );
}
