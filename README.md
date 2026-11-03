# Sugathadasa Bandara & Sons — Website

Pitch prototype for Sugathadasa Bandara & Sons (Pvt) Ltd, trophy makers, Nugegoda.
Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Motion** (Framer Motion) and **Lenis** smooth scroll.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## Pages

| Route         | Highlights                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| `/`           | Pinned hero, scroll-read manifesto, horizontal scroll-lock collection, pinned process, counters, testimonials |
| `/about`      | Parallax hero, unmasking imagery, pinned heritage timeline, values grid, parallax statement band |
| `/collection` | Stacked scroll-lock "chapters" (one per award family), materials grid      |
| `/services`   | Cursor-following image list, scroll-locked 4-step process, FAQ accordion   |
| `/contact`    | Details, hours, demo enquiry form, embedded map                            |

## Project structure

```
src/
  app/                    # Routes (App Router)
    layout.tsx            # Fonts, smooth scroll, nav, footer
    page.tsx              # Home
    about/ collection/ services/ contact/
    globals.css           # Tailwind v4 theme tokens + global effects
  components/
    layout/               # Navbar, Footer, SmoothScroll (Lenis)
    ui/                   # Reusable primitives: Reveal, SplitText, Counter,
                          #   Marquee, Button, SectionHeading, PageHero, Accordion, Monogram
    sections/             # Page-specific sections
      home/  about/  collection/  services/  contact/  shared/
  content/
    site.ts               # ALL copy, contact details and data in one place
  lib/
    utils.ts              # cn() helper
public/images/            # Generated imagery (swap for real photography)
```

## Editing content

Everything the client might want to change — address, phone, hours, product
families, timeline, testimonials, FAQs — lives in `src/content/site.ts`.
Items marked `PLACEHOLDER` (founding year, timeline dates, client list,
testimonials, statistics) should be confirmed with the client before launch.

## Design notes

- Palette: warm near-black (`ink`), brushed gold (`gold`), ivory (`ivory`) — defined as Tailwind theme tokens in `globals.css`.
- Type: Cormorant Garamond (display) + Manrope (body), loaded via `next/font`.
- Motif: the brass ring (see `Monogram.tsx`) recurs in the hero, process and CTA sections.
- All scroll effects respect `prefers-reduced-motion` (Lenis disables itself; grain and marquee stop).

## Imagery

Images in `public/images` were AI-generated as stand-ins for the pitch.
Replace them with photography of the actual workshop and pieces — same
filenames, and nothing else needs to change.
