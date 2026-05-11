# Data Flow

The landing app has a simple data flow: static data is imported into server-rendered pages, while small client components handle theme, animation, and local UI interactions in the browser.

## Page Request Flow

1. A browser requests `https://moneymath.pro/`.
2. Next.js renders `src/app/layout.tsx`.
3. The layout adds metadata, AdSense, Organization JSON-LD, the theme bootstrap script, the body shell, and Analytics.
4. Next.js renders `src/app/page.tsx`.
5. `page.tsx` imports data from `src/data/products.ts` and `src/data/siteAeo.ts`.
6. `page.tsx` builds WebSite, ItemList, and FAQPage JSON-LD from that data.
7. The page renders landing sections and links users to `https://calculators.moneymath.pro`.

## Content Flow

Static content starts in data files:

- `products` drives `ProductsSection` and `ProductCard`.
- `popularCalcs` drives `PopularCalcs` and the ItemList JSON-LD.
- `landingFaqs` drives the visible FAQ and FAQPage JSON-LD.
- `siteUrl` and `calculatorsUrl` keep canonical domain values consistent.

Those data objects are imported directly. There is no database, CMS, or runtime API fetch.

## Interaction Flow

Browser-only behavior lives in client components:

- `Navbar` reads the current theme from `document.documentElement`, toggles the `dark` class, and stores the choice in `localStorage`.
- `HeroSection` stores the selected mortgage preset in React state, recalculates the preview with `useMemo`, and updates the displayed monthly payment.
- `StatsBar` uses `IntersectionObserver` and `requestAnimationFrame` to count stats up when they enter the viewport.
- `FadeIn` uses `IntersectionObserver` to animate children once.
- `FAQ` stores open/closed state per FAQ item.

The mortgage preview in the hero is local-only. It does not call the calculator app or persist the entered values.

## Redirect Flow

For calculator-like paths, `next.config.ts` returns permanent redirects before a landing page is rendered. That keeps traffic flowing to the calculators app while allowing the landing domain to remain a broad entry point.

## Asset Flow

Static assets live in `public/`:

- `favicon.svg`
- `robots.txt`
- `sitemap.xml`
- `ads.txt`
- `llms.txt`

Next serves these files directly from the site root.

