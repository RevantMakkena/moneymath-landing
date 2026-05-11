# How the moneymath-landing Project Works

`moneymath-landing` is the public landing site for MoneyMath at `https://moneymath.pro`. It is a Next.js App Router project that explains the MoneyMath brand and sends users to the calculator app at `https://calculators.moneymath.pro`.

## Runtime and Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide icons
- Vercel Analytics

The useful commands are defined in `package.json`:

- `npm run dev` starts the local development server.
- `npm run build` builds the app.
- `npm run start` serves a production build.
- `npm run lint` runs ESLint.

## Main Route

The site has one primary page:

- `src/app/page.tsx`

That page composes the landing experience from section components:

- `Navbar`
- `HeroSection`
- `StatsBar`
- `ProductsSection`
- `PopularCalcs`
- `FAQ`
- `Footer`
- `BackgroundDecoration`

The page also creates three JSON-LD schema blocks:

- WebSite schema for the MoneyMath site.
- ItemList schema for popular calculators.
- FAQPage schema from the landing FAQ data.

## Global Layout

`src/app/layout.tsx` owns the global document shell:

- Site metadata, Open Graph metadata, Twitter metadata, and canonical URL.
- Favicon configuration.
- Google AdSense script and account meta tag.
- Organization JSON-LD.
- A small theme bootstrap script that applies the `dark` class before the page renders.
- Global body styling.
- Vercel Analytics.

The layout defaults to dark mode unless the user has stored `theme=light` in `localStorage`.

## Landing Content

The app keeps reusable marketing content in data files:

- `src/data/products.ts` defines the product cards and popular calculator links.
- `src/data/siteAeo.ts` defines the canonical site URLs and landing FAQ content.

The current product list contains one live product, `Calculators`, which links to the calculator subdomain.

## Redirects

`next.config.ts` permanently redirects calculator and legal/static paths from the landing domain to the calculator subdomain. For example:

- `/mortgage` redirects to `https://calculators.moneymath.pro/mortgage`
- `/privacy` redirects to `https://calculators.moneymath.pro/privacy`
- `/answers/:slug` redirects to `https://calculators.moneymath.pro/answers/:slug`

This lets older or guessed calculator URLs on the marketing domain land on the real calculator app.

