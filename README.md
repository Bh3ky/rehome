# ReHome

**Giving unwanted things a place that matters.**

ReHome is a curated circular-economy platform that rehomes unused art, decor, furniture and cultural pieces into under-resourced youth and community hubs across Zimbabwe. Instead of landfill, a meaningful object ends up on the wall of a youth centre, a recovery space or a learning hub, and the person who gave it sees where it landed.

> **"ReHome" is a working name.** It will be replaced with a culturally grounded Zimbabwean name before launch. It lives in one place, [`web/src/config/site.js`](web/src/config/site.js).

This is a portfolio project: a full-featured proof of concept built ahead of community consultation. It is not a marketplace and not a SaaS dashboard. It is a story-led platform where hubs run **transformation campaigns** and donors respond to a real need.

## Status

Built: the homepage, About, Campaigns (list and detail), Offer, For hubs and Contact pages. The offer and hub application forms save to Supabase. Still to build: Transformations, Guidelines, Privacy and Terms, so a few nav and footer links still lead to 404s. Sanity and Resend are planned but not wired in.

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

The other pages:

- **About:** story, mission and values, vision (with a photo-filled clover), how we work
- **Campaigns:** a video hero, campaign cards grouped by city, and a latest-updates board
- **Campaign detail:** story, a live progress tracker that stays in view while you scroll, and a photo collage
- **Offer an item** and **Apply as a hub:** split-screen forms that save to Supabase
- **Contact:** details and social links

## Tech stack

| Layer | Choice | State |
| --- | --- | --- |
| Framework | Next.js 16 (App Router), React 19, plain JavaScript | In use |
| Styling | Tailwind CSS v4 | In use |
| Fonts | Avenir Next (system font) for the site; Young Serif for the footer wordmark | In use |
| Database and photo storage | Supabase | In use: offers and hub applications |
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

### Connect Supabase

The forms need a Supabase project.

1. Create a project at [supabase.com](https://supabase.com).
2. In the dashboard, open **SQL Editor**, paste the contents of [`supabase/schema.sql`](supabase/schema.sql) and run it. It creates the tables, the security rules (visitors can only add rows, never read them) and two private photo buckets.
3. Copy `web/.env.example` to `web/.env.local` and fill in the project URL and the publishable key (Project Settings, then API). Restart the dev server.

Submissions are reviewed in the Supabase dashboard (Table Editor and Storage).

## Project structure

```
REHOME/
├── supabase/        Database schema, security rules and photo buckets
├── web/             The Next.js app
│   ├── public/      Logo and placeholder partner logos
│   ├── src/app/     Layout, global styles and the routes (offer and for-hubs hold their Server Actions)
│   ├── src/components/  One folder per page or area, plus layout and ui
│   ├── src/config/  Site name, nav, contact details
│   ├── src/data/    Placeholder campaigns, FAQ, impact stats, form options
│   ├── src/lib/     Supabase client and the browser photo upload
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

- Build the remaining pages: transformations, guidelines, privacy and terms
- Move campaigns and updates into Supabase, and add an admin view for reviewing submissions
- Connect Sanity for hub and transformation stories
- Email notifications with Resend
- Choose the final name and replace the placeholder content and imagery
