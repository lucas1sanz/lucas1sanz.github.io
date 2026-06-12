# Engineer-as-Wizard Portfolio

A fast, dark, sleek-modern static portfolio with subtle "magic" accents. The *Engineer is the
wizard* — the site's own polish is the proof of craft. **No backend, no LLM** — pure static,
built for GitHub Pages.

Built with **Astro + Tailwind v4**. Ships effectively zero framework JS — the only
client code is a few small inlined vanilla scripts (particles, scroll-reveal, mobile nav).
React isn't needed for anything here; add `@astrojs/react` later if you ever want an island.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the built site
```

## Make it yours (placeholders to replace)

All content lives in `src/data/` and a few config spots:

| What | Where |
|---|---|
| Name, title, tagline, bio, email, socials | `src/data/site.ts` |
| Projects (cards) | `src/data/projects.ts` |
| Skills + "how the magic works" steps | `src/data/skills.ts` |
| GitHub username (for `site` URL) | `astro.config.mjs` → `site:` |
| Favicon | `public/favicon.svg` |
| Social preview image | `public/og-image.png` (real 1200×630 card). If you change your name/title, regenerate or replace this PNG. |

Search the repo for `TODO` to find every placeholder.

## Deploy to GitHub Pages (user page)

This is configured as a **user page** served at the root (`https://lucas1sanz.github.io`).
`site:` in `astro.config.mjs` is already set.

1. Create a repo named exactly **`lucas1sanz.github.io`** and push this code to `main`.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

> Switching to a **project page** (`USERNAME.github.io/repo`) instead? Add
> `base: '/repo'` to `astro.config.mjs` and set `site` accordingly.

## Notes

- Effects (aurora + canvas particles) are lightweight and **honor `prefers-reduced-motion`**.
- Accessibility: skip link, semantic landmarks, focus-visible styles, AA-contrast dark theme.
