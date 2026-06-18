import {
  site,
  experience,
  openSource,
  featuredProjects,
  interests,
  education,
} from "@/lib/data";

/**
 * Server-side "personal context" builder for AI agents.
 *
 * Combines the static portfolio data in `data.ts` (single source of truth) with
 * live data from GitHub and the Medium feed, and exposes it as a machine-readable
 * profile. Consumed by the /context.json and /llms.txt route handlers and the
 * /ai-profile page. All network calls use Next's fetch cache (revalidated hourly).
 */

const GITHUB_USERNAME = "Ayush7614";
const BLOG_FEEDS = ["https://medium.com/feed/@techlatest.net"];
const REVALIDATE_SECONDS = 3600;

export interface ContextBlog {
  title: string;
  link: string;
  date?: string;
  tags?: string[];
}

export interface ContextRepo {
  name: string;
  fullName: string;
  url: string;
  description?: string;
  stars: number;
  language?: string;
}

export interface ContextGithub {
  username: string;
  profileUrl: string;
  contributionsLastYear?: number;
  pullRequestsOpened?: number;
  publicRepos?: number;
  followers?: number;
  totalStars: number;
  topRepos: ContextRepo[];
}

export interface PersonalContext {
  name: string;
  headline: string;
  bio: string;
  generatedAt: string;
  contact: {
    email: string;
    website: string;
    blog: string;
    socials: { name: string; href: string }[];
  };
  currentRole?: { role: string; company: string; period: string };
  skills: string[];
  experience: {
    role: string;
    company: string;
    period: string;
    highlights: string[];
  }[];
  education: typeof education;
  projects: { name: string; description: string; url?: string; stack: string[] }[];
  openSource: { name: string; role: string; description: string; url?: string }[];
  blogs: ContextBlog[];
  github?: ContextGithub;
}

function stripCdata(value: string): string {
  return value
    .replace(/<!\[CDATA\[/g, "")
    .replace(/\]\]>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

async function fetchBlogs(): Promise<ContextBlog[]> {
  const all: ContextBlog[] = [];
  for (const feed of BLOG_FEEDS) {
    try {
      const res = await fetch(feed, {
        headers: { "User-Agent": "ayushbuilds.dev" },
        next: { revalidate: REVALIDATE_SECONDS },
      });
      if (!res.ok) continue;
      const xml = await res.text();
      const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
      for (const item of items) {
        const title = item.match(/<title>([\s\S]*?)<\/title>/)?.[1];
        const link =
          item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ??
          item.match(/<guid[^>]*>([\s\S]*?)<\/guid>/)?.[1];
        const date = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1];
        const tags = [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)]
          .map((m) => stripCdata(m[1]))
          .filter(Boolean)
          .slice(0, 4);
        if (!title || !link) continue;
        all.push({
          title: stripCdata(title),
          link: stripCdata(link),
          date: date ? new Date(date).toISOString() : undefined,
          tags,
        });
      }
    } catch {
      // ignore feed failures
    }
  }
  all.sort((a, b) => (b.date ? Date.parse(b.date) : 0) - (a.date ? Date.parse(a.date) : 0));
  return all;
}

async function fetchGithub(): Promise<ContextGithub | undefined> {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "ayushbuilds.dev",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }),
    ]);

    const user = userRes.ok ? await userRes.json() : {};
    const repos: Array<Record<string, unknown>> = reposRes.ok ? await reposRes.json() : [];

    const totalStars = repos.reduce(
      (sum, r) => sum + ((r.stargazers_count as number) ?? 0),
      0,
    );

    const topRepos: ContextRepo[] = repos
      .filter((r) => !r.fork)
      .sort(
        (a, b) =>
          ((b.stargazers_count as number) ?? 0) - ((a.stargazers_count as number) ?? 0),
      )
      .slice(0, 8)
      .map((r) => ({
        name: r.name as string,
        fullName: r.full_name as string,
        url: r.html_url as string,
        description: (r.description as string) ?? undefined,
        stars: (r.stargazers_count as number) ?? 0,
        language: (r.language as string) ?? undefined,
      }));

    let contributionsLastYear: number | undefined;
    let pullRequestsOpened: number | undefined;
    if (token) {
      try {
        const gqlRes = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: { ...headers, "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions} totalPullRequestContributions}}}`,
            variables: { login: GITHUB_USERNAME },
          }),
          next: { revalidate: REVALIDATE_SECONDS },
        });
        if (gqlRes.ok) {
          const gql = await gqlRes.json();
          const cc = gql?.data?.user?.contributionsCollection;
          contributionsLastYear = cc?.contributionCalendar?.totalContributions;
          pullRequestsOpened = cc?.totalPullRequestContributions;
        }
      } catch {
        // ignore graphql failures
      }
    }

    return {
      username: GITHUB_USERNAME,
      profileUrl: `https://github.com/${GITHUB_USERNAME}`,
      contributionsLastYear,
      pullRequestsOpened,
      publicRepos: (user.public_repos as number) ?? undefined,
      followers: (user.followers as number) ?? undefined,
      totalStars,
      topRepos,
    };
  } catch {
    return undefined;
  }
}

export async function buildContext(): Promise<PersonalContext> {
  const [blogs, github] = await Promise.all([fetchBlogs(), fetchGithub()]);
  const current = experience[0];

  return {
    name: site.name,
    headline: site.tagline,
    bio: site.objective,
    generatedAt: new Date().toISOString(),
    contact: {
      email: site.email,
      website: site.liveUrl,
      blog: site.blogUrl,
      socials: site.socials.map((s) => ({ name: s.name, href: s.href })),
    },
    currentRole: current
      ? { role: current.role, company: current.company, period: current.period }
      : undefined,
    skills: interests,
    experience: experience.map((e) => ({
      role: e.role,
      company: e.company,
      period: e.period,
      highlights: e.highlights,
    })),
    education,
    projects: featuredProjects.map((p) => ({
      name: p.name,
      description: p.description,
      url: p.href,
      stack: p.stack,
    })),
    openSource: openSource.map((o) => ({
      name: o.name,
      role: o.role,
      description: o.description,
      url: o.href,
    })),
    blogs: blogs.slice(0, 20),
    github,
  };
}

export function toLlmsTxt(ctx: PersonalContext): string {
  const lines: string[] = [];
  lines.push(`# ${ctx.name}`);
  lines.push(`> ${ctx.headline}`);
  lines.push("");
  lines.push(ctx.bio);
  lines.push("");
  if (ctx.currentRole) {
    lines.push(`Current role: ${ctx.currentRole.role} at ${ctx.currentRole.company} (${ctx.currentRole.period})`);
  }
  lines.push(`Skills: ${ctx.skills.join(", ")}`);
  lines.push(`Website: ${ctx.contact.website}`);
  lines.push(`Blog: ${ctx.contact.blog}`);
  lines.push(`Email: ${ctx.contact.email}`);
  if (ctx.github) {
    const g = ctx.github;
    const parts = [
      g.contributionsLastYear != null && `${g.contributionsLastYear} contributions/yr`,
      g.publicRepos != null && `${g.publicRepos} repos`,
      `${g.totalStars} stars`,
      g.profileUrl,
    ].filter(Boolean);
    lines.push(`GitHub: ${parts.join(", ")}`);
  }
  lines.push("");
  lines.push("## Open source");
  for (const o of ctx.openSource) lines.push(`- ${o.name} (${o.role}): ${o.description}`);
  lines.push("");
  lines.push("## Projects");
  for (const p of ctx.projects) lines.push(`- ${p.name}: ${p.description}`);
  lines.push("");
  lines.push("## Recent writing");
  for (const b of ctx.blogs.slice(0, 15)) lines.push(`- [${b.title}](${b.link})`);
  lines.push("");
  lines.push(`Generated at ${ctx.generatedAt}`);
  return lines.join("\n");
}
