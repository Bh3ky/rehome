# ReHome

**Giving unwanted things a place that matters.**

ReHome is a curated circular-economy platform that rehomes unused art, decor, furniture and cultural pieces into under-resourced youth and community hubs across Zimbabwe. Instead of landfill, a meaningful object ends up on the wall of a youth centre, a recovery space or a learning hub, and the person who gave it sees where it landed.

> **"ReHome" is a working name.** It will be replaced with a culturally grounded Zimbabwean name before launch. It lives in one place, [`web/src/config/site.js`](web/src/config/site.js).

This is a portfolio project: a full-featured proof of concept built ahead of community consultation. It is not a marketplace and not a SaaS dashboard. It is a story-led platform where hubs run **transformation campaigns** and donors respond to a real need.

## Status

The **homepage is complete**. Other pages (campaigns, offer an item, transformations, for hubs, about) are planned and not built yet, so some links currently lead to 404s. Supabase, Sanity and Resend are planned but not wired in.

## How it works

1. **Hubs** share their space and a wishlist as a campaign.
2. **Donors** browse campaigns and offer an item.
3. **Admin** screens each offer for quality, safety and cultural sensitivity, then coordinates logistics.
4. **Hubs** decide what to accept and post before-and-after proof.
5. **Donors** get an update showing where their piece ended up.

## What is built

The homepage, section by section:

- **Header** with a live "currently supporting hubs in..." strip, WhatsApp link, campaigns dropdown, and a mobile menu
- **Hero** with a collage whose centre card expands to a full-screen before/after loop on scroll
- **Why** heading with a scroll-driven word-by-word reveal, followed by the story paragraph
- **How it works** carousel
- **Featured campaigns** with horizontally scrolling campaign cards and progress bars
- **Impact tally** with count-up stats
- **Partner hubs**, **For hubs** and **FAQ**
- **Footer** that is revealed from underneath the page

## Tech stack

| Layer | Choice | State |
| --- | --- | --- |
| Framework | Next.js 16 (App Router), React 19, plain JavaScript | In use |
| Styling | Tailwind CSS v4 | In use |
| Fonts | Avenir Next (system font) for the site; Young Serif for the footer wordmark | In use |
| Database, auth, storage | Supabase | Installed, not wired |
| Stories content | Sanity | Planned |
| Email | Resend | Installed, not wired |
| Messaging | WhatsApp click-to-chat links | In use |
| Hosting | Vercel | Planned |

Avenir Next ships with macOS and iOS; other platforms fall back to their system sans-serif.

## Getting started

Requires Node.js 20.9 or newer.

```bash
cd web
npm install
npm run dev
```

Then open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

No environment variables are needed yet. They will be documented here once Supabase and Resend are connected.

## Project structure

```
REHOME/
├── web/             The Next.js app
│   ├── public/      Logo and placeholder partner logos
│   ├── src/app/     Layout, global styles, homepage route
│   ├── src/components/
│   │   ├── home/    One component per homepage section
│   │   ├── layout/  Header, footer, logo
│   │   └── ui/      Button, icons, count-up
│   ├── src/config/  Site name, nav, contact details
│   ├── src/data/    Placeholder campaigns, FAQ, impact stats
│   └── tests/       Playwright layout checks (not yet runnable, see below)
└── README.md
```

## Design notes

- Light theme only, white backgrounds.
- Every section's content sits inside `.site-container` and uses `.section-pad` for vertical spacing, so edges and rhythm stay consistent.
- Colours are tokens in `web/src/app/globals.css` (logo green `#008c31`, blue `#114fee`).
- Placeholder photos load from Unsplash at runtime. Replace them with real photography before launch.

## Testing

Layout and spacing checks are written with Playwright in `web/tests/`, but `@playwright/test` is not yet a dependency, so `npm run test:visual` will not work until it is installed.

## Roadmap

- Build the remaining pages: campaigns, offer an item, transformations, for hubs, about
- Connect Supabase for campaigns, offers and the admin review queue
- Connect Sanity for hub and transformation stories
- Email notifications with Resend
- Choose the final name and replace the placeholder content and imagery
