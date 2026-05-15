# Universal Ventures

A minimal static website for Universal Ventures, built as an institutional research
publication for economic infrastructure, protocol economies, and coordination
systems.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Local Markdown research entries
- Static export for GitHub Pages

## Local Development

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static Build

```sh
npm run lint
npm run build
```

The static export is written to `out/`.

To preview the exported site:

```sh
npm run serve
```

## GitHub Pages

This project is configured for a repository named `universal-ventures`, deployed
with GitHub Pages Actions.

1. Create `vishnugovind10/universal-ventures`.
2. Push this project to the `main` branch.
3. In GitHub, open Settings > Pages.
4. Set Source to GitHub Actions.
5. Push to `main` or run the workflow manually.

The workflow reads the Pages base path from `actions/configure-pages` and passes
it to Next.js as `PAGES_BASE_PATH`, so the exported assets work under:

```txt
https://vishnugovind10.github.io/universal-ventures/
```

To test the same base path locally during build:

```powershell
$env:PAGES_BASE_PATH="/universal-ventures"
npm run build
```

## Research Content

Research entries live in `content/research/*.md` with frontmatter:

```yaml
title: "Protocol Economies as Adaptive Systems"
summary: "Short description for the index."
category: "Framework essay"
status: "Working note"
date: "2026-05-10"
externalUrl: "https://example.com"
featured: true
```

If `externalUrl` is present, the Research page links out. If it is omitted, the
entry is rendered as a local static article at `/research/[slug]/`.
