# Contributing to ayushbuilds.dev

Thanks for your interest in this project. This repository is my personal portfolio site ([ayushbuilds-dev.vercel.app](https://ayushbuilds-dev.vercel.app/)), but suggestions, bug reports, and small improvements are welcome.

## Ways to contribute

- Report bugs or broken UI via [Issues](https://github.com/Ayush7614/ayushbuilds.dev/issues)
- Propose features or content updates using the issue templates
- Open a pull request with a focused change and a clear description
- Improve documentation, accessibility, performance, or tests

## Getting started

### Prerequisites

- **Node.js 20+**
- **npm**

### Setup

```bash
git clone https://github.com/Ayush7614/ayushbuilds.dev.git
cd ayushbuilds.dev
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Useful commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | TypeScript check |
| `npm run test:e2e` | Playwright smoke tests |
| `npm run test:e2e:ui` | Playwright interactive UI |

## Project structure

```
src/
  app/           # Next.js App Router pages & layout
  components/    # UI sections (Hero, Projects, etc.)
  lib/data.ts    # Site content (experience, projects, links)
public/          # Static assets (profile image, etc.)
e2e/             # Playwright smoke tests
docs/            # README demo media
```

Most copy and links live in **`src/lib/data.ts`**. Prefer editing that file for content changes instead of hard-coding strings in components.

## Pull request guidelines

1. **Branch** from `master` (e.g. `fix/nav-mobile`, `feat/lighthouse-scores`).
2. **Keep PRs small** — one concern per PR when possible.
3. **Run checks locally** before opening:
   ```bash
   npm run lint
   npx tsc --noEmit
   npm run build
   npm run test:e2e
   ```
4. **Describe your change** — what, why, and how to test.
5. **Screenshots or GIFs** are appreciated for UI changes.

CI runs automatically: lint, typecheck, build, Lighthouse, and E2E smoke tests.

## Code style

- **TypeScript** for all application code
- Match existing patterns in components (Tailwind CSS, Framer Motion)
- Avoid unrelated refactors in the same PR
- Use meaningful commit messages (e.g. `fix: mobile nav overlap`, `docs: update contributing guide`)

## Content & assets

- Do not commit secrets (`.env`, API keys, tokens)
- Optimize large images before adding them to `public/` or `docs/`
- If you update the profile image, replace `public/profile.png` and keep a reasonable file size

## Reporting security issues

Please do **not** open a public issue for security vulnerabilities. Email [ayushknj3@gmail.com](mailto:ayushknj3@gmail.com) with details instead.

## Questions

- **Portfolio / collaboration:** [Topmate](https://topmate.io/ayush7)
- **GitHub:** [@Ayush7614](https://github.com/Ayush7614)

Thank you for helping improve this project.
