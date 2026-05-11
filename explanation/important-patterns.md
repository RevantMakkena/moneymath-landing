# Important Patterns

## Data-Driven Sections

The landing page avoids hardcoding repeated content inside components where possible. Product cards, popular calculator links, and FAQs come from `src/data`.

When adding a new product or popular calculator, update the data file first, then let the existing components render it.

## Client Islands for Interaction

Most of the landing page can be statically rendered, but interactive pieces are marked with `"use client"`:

- Theme toggle in `Navbar`.
- Mortgage preset preview in `HeroSection`.
- Count-up stats in `StatsBar`.
- Scroll reveal in `FadeIn`.
- Accordion-like FAQ behavior in `FAQ`.

This keeps the page simple while still allowing small browser interactions.

## SEO and AEO Are Built Into the Page

`page.tsx` emits JSON-LD for WebSite, calculator list, and FAQ content. `layout.tsx` emits Organization JSON-LD and standard metadata.

When visible content changes, update the matching structured data so crawlers and answer engines see the same story users see.

## Theme Is Applied Before Hydration

`layout.tsx` injects a small script into `<head>` that applies the `dark` class before React hydrates. This avoids a light/dark flash on first paint.

The `Navbar` theme toggle must stay in sync with that same `dark` class and `localStorage` value.

## Redirects Preserve the Product Boundary

Calculator functionality lives on `calculators.moneymath.pro`, not in the landing app. The landing app owns brand positioning and route forwarding.

If a calculator route is added to the calculator app, consider adding the matching redirect in `next.config.ts` so the marketing domain keeps forwarding correctly.

## Styling Is Mostly Tailwind

Global CSS is limited to Tailwind import, dark variant setup, and a few reusable effects:

- Hero grid background.
- Hero fade mask.
- Calculator link hover effect.
- Product card accent line.

Prefer component-level Tailwind classes unless a style needs to be shared across multiple components.

