# ayushbuilds.dev

Personal portfolio for **Ayush Kumar** — DevRel, AI agents, open source, and security.

**Live site:** [ayushbuilds.dev](https://ayushbuilds.dev)

## Site demo

Full walkthrough of the portfolio UI, sections, and interactions:

<video controls width="100%" src="docs/site-demo.mp4">
  <a href="docs/site-demo.mp4">Download site demo video</a>
</video>

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

- **Blog URL**: set `site.blogUrl` in `src/lib/data.ts` when ready.
- **Content**: edit `src/lib/data.ts` for experience, projects, and links.
- **Profile image**: replace `public/profile.png`.

## Deploy

Deploy on [Vercel](https://vercel.com) and point `ayushbuilds.dev` to the project.

```bash
npm run build
```
