# Gardners Digital Solutions — Project Plan

**Business:** Gardners Digital Solutions (division of Oxide Consulting, LLC)
**Domain:** https://www.gardnersdigital.com
**Location:** Carlisle, PA
**Repo:** OxideConsulting/GardnersWebsite
**Branch:** v2-revamp
**Hosting:** Cloudflare Pages (free tier)

---

## Overview

The repo currently contains two projects:
- **Legacy (root):** An Eleventy/CodeStitch site built by Gemini — being retired.
- **v3/ (the real project):** A clean Vite-based static site with a dark/terminal-green CRT aesthetic. This is the site going forward.

**Goal:** Nuke everything except v3, promote it to repo root, and get it live on Cloudflare Pages at zero cost.

## Tech Stack (v3)

- **Bundler:** Vite 7.3.0
- **Styling:** Pure CSS (849 lines) — black base, neon green (#00ff41) accents, glassmorphism, CRT effects
- **JS:** Vanilla JS (75 lines) — scroll animations, hero entrance, image modal
- **Fonts:** Inter (body), Outfit (headings) via Google Fonts
- **Hosting:** Cloudflare Pages (free)
- **Budget constraint:** All services must be free or near-free

## Site Pages (v3)

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Complete — hero, stats, value prop, services grid, CTA |
| About | `/about/` | Complete — mission, philosophy, CTA |
| Services | `/services/` | Complete — 3 competencies, 4-step process, CTA |
| Contact | `/contact/` | **Form non-functional** — no action/handler |
| Privacy Policy | — | **Missing** |
| Terms of Use | — | **Missing** |
| 404 | — | **Missing** |

---

## Issues to Resolve

### Must Fix Before Launch

- [ ] **Contact form has no backend** — `<form>` tag has no action, method, or JS handler. Needs a free solution compatible with Cloudflare Pages (see options below).
- [ ] **Homepage title says "Premium v3"** — `<title>Gardners Digital | Premium v3</title>` needs updating.
- [ ] **Favicon points to nonexistent `/vite.svg`** — Need real favicons (can reuse from old site's `src/assets/favicons/`).
- [ ] **No meta descriptions** — All 4 pages have `<title>` only. Need `<meta name="description">` for search engines.
- [ ] **Contact email discrepancy** — v3 uses `hello@gardners.digital`, old site uses `info@gardnersdigital.com`. Confirm which is correct.

### Should Fix Before Launch

- [ ] **No `robots.txt`** — Needed for search engine crawling.
- [ ] **No `sitemap.xml`** — Helps search indexing (only 4 pages, so simple to create).
- [ ] **No Privacy Policy or Terms of Use** — Old site had both. Business sites should have these.
- [ ] **No 404 page** — Cloudflare Pages serves a generic one; a branded 404 is better UX.
- [ ] **No Open Graph tags** — Social sharing will have no preview image/description.

### Repository Cleanup (Before or During Promotion)

- [ ] **Promote v3 to repo root** — Move v3 contents up, delete all legacy Eleventy files.
- [ ] **Create `.gitignore`** — node_modules, dist, .DS_Store, .env
- [ ] **Clean stale git artifacts** — `.git/.MERGE_MSG.swp`, lock files
- [ ] **Update `package.json`** — Name, description, repository URL
- [ ] **Delete `dist/`** from repo — Cloudflare Pages will build on deploy
- [ ] **Delete `index.html.bak`** — Stale backup file in v3

---

## Free-Tier Solutions

### Contact Form (free options)

| Option | Free Tier | How It Works | Notes |
|--------|-----------|--------------|-------|
| **Cloudflare Workers** | 100K req/day | Write a small worker to receive form POST and forward via email (e.g. MailChannels or Resend) | Fully in Cloudflare ecosystem, no third party |
| **Formspree** | 50 submissions/mo | Add `action="https://formspree.io/f/ID"` to form tag | Simplest option; old site already had an account (`xvgkvlak`) |
| **Web3Forms** | 250 submissions/mo | Similar to Formspree, just an action URL | More generous free tier than Formspree |
| **Formspark** | 250 submissions/mo | Same pattern | Another alternative |
| **Static Forms** | 50 submissions/mo | Action URL | Simplest, most basic |

**Recommendation:** Web3Forms or Formspree for simplicity. Cloudflare Workers if you want full control and no third-party dependency.

### Other Free Services

- **Cloudflare Pages:** Free for unlimited sites, 500 builds/mo, 1 build at a time
- **Cloudflare Analytics:** Free, privacy-respecting (no cookie banner needed)
- **DNS:** Cloudflare free tier (likely already there if using CF Pages)

---

## Action Plan

### Phase 1: Repository Cleanup

1. Clean stale git artifacts (lock files, swap files)
2. Promote v3 to repo root (move files up, delete legacy)
3. Create proper `.gitignore`
4. Update `package.json` metadata
5. Remove `dist/`, `index.html.bak`
6. Commit clean state

### Phase 2: Fix Critical Issues

1. Fix page titles (remove "Premium v3", etc.)
2. Add meta descriptions to all pages
3. Set up favicons (reuse from old site or generate new ones matching v3 aesthetic)
4. Implement contact form submission (choose provider)
5. Confirm correct contact email address
6. Add `robots.txt` and `sitemap.xml` to `public/`

### Phase 3: Add Missing Pages

1. Add Privacy Policy page
2. Add Terms of Use page
3. Add 404 page
4. Update vite.config.js with any new page entries
5. Update navigation/footer links

### Phase 4: SEO & Polish

1. Add Open Graph meta tags (og:title, og:description, og:image)
2. Add JSON-LD structured data (LocalBusiness schema)
3. Test build: `npm run build`
4. Run Lighthouse audit
5. Test responsive design across devices

### Phase 5: Deploy

1. Connect repo to Cloudflare Pages
2. Configure build: `npm run build`, output dir `dist`
3. Set custom domain (gardnersdigital.com)
4. Verify live site
5. Test contact form end-to-end

---

## Reference (v3)

- **Vite config:** `vite.config.js`
- **Entry point:** `main.js` (imports style.css, sets up animations)
- **Styles:** `style.css` (849 lines, all design tokens and components)
- **Pages:** `index.html`, `about/index.html`, `services/index.html`, `contact/index.html`
- **Static assets:** `public/assets/` (images, SVGs)
- **Build output:** `dist/` (generated by `npm run build`)

## Design System (v3)

- **Base:** #000000 (pure black)
- **Primary accent:** #00ff41 (neon/phosphor green)
- **Secondary:** #008f11 (deep terminal green)
- **Glass:** rgba(30, 41, 59, 0.7) with blur
- **Heading font:** Outfit (500/700/900)
- **Body font:** Inter (400/500/600)
- **Effects:** CRT scanlines, flicker animation, glassmorphism, scroll-reveal
