# Sincerity website

The public homepage for Sincerity (OPC) Private Limited, with Sincerity Technologies products, business services, company information, and enquiries.

## Development

Use Node.js 22 and npm:

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run lint
npm run preview
```

The production output is `dist/`. GitHub Actions builds and deploys `main` to GitHub Pages using the domain in `public/CNAME`. The former `/explore/` address redirects to the homepage.

## Content

- `src/components/ExplorePage.tsx`: homepage, shared navigation/footer, and enquiry handling.
- `src/data/products.ts`: product content, images, availability, and paths.
- `src/components/ProductPage.tsx`: dedicated product presentation and FAQs.
- `src/components/ProductScreens.tsx`: visible workflow screenshots and an accessible zoom viewer.
- `public/product-screens/`: real application interface captures with synthetic demonstration data.
- `src/seo/pages.ts`: canonical SEO route catalogue and truthful structured data.
- `src/data/serviceDetails.ts`: dedicated service page content.
- `src/components/CapabilityStage.tsx`: manually controlled service explorer.
- `src/components/DeliveryStory.tsx`: scroll-driven delivery chapters.
- `src/components/AnimatedServiceIcon.tsx`: six SVG service marks with finite, accessible motion.
- `src/components/ServiceScene.tsx`: illustrative SVG interface/system scenes.
- `src/components/LabUseCases.tsx`: medical/pathology lab audiences, report workflows, and configured checkup packages.
- `scripts/prerender.mjs`: renders complete static HTML, metadata, and the sitemap.
- `scripts/check-seo.mjs`: validates built metadata, internal links, schema, and the sitemap.
- `src/components/ExplorePage.css`: responsive page and dialog styles.
- `src/index.css`: global styles and motion preferences.
- `index.html`: metadata and font loading.

Products currently retain the previously published availability labels: OptiMediCare and WACentral are available, and WA Connect is in beta. Update the product list when availability changes. Product panels use the supplied OptiMediCare illustration and matching generated artwork for the messaging products. Original assets are preserved; display assets use WebP for smaller downloads. OptiMediCare and WACentral have real interface screenshots, captured from their existing application builds with synthetic demonstration data. No production patient/customer data or credentials were used. See `docs/product-review.md` for provenance. Videos can be added when available.

Dedicated pages: `/products/optimedicare/`, `/products/wacentral/`, and `/products/wa-connect/`. These work as direct entry URLs, including browser reloads. Previously published `/products/optimedicate/` links redirect to the correctly named OptiMediCare page. When adding a product, update `src/data/products.ts`, the SEO route catalogue; the sitemap is generated automatically.

Artwork provenance and generation prompts are documented in `docs/artwork.md`.

## Enquiries

Product and business enquiries use the existing FormSubmit endpoint for `support@thesincerity.in`. Submission requires both a successful HTTP response and an explicit successful JSON result. Failures retain the entered information, allow retry, and offer an email alternative. Requests time out after 15 seconds and are cancelled when the dialog closes. Contact details are not stored in local storage.

FormSubmit delivery depends on the mailbox's FormSubmit configuration and activation. Browser checks intercept submission requests; they do not verify actual email receipt or send test enquiries.

## SEO and contact details

The build pre-renders twelve indexable pages and a noindex 404; interactive pages hydrate in the browser. Run `npm run check:seo` to recheck the built output. See `docs/seo.md` for search topic mapping, Google Search Console verification and sitemap submission, and host-specific redirect rules.

Sincerity services target businesses in India and international clients. The public contact is `support@thesincerity.in`, telephone `+919988661683`. Forms use the corresponding FormSubmit destination; delivery requires that mailbox’s FormSubmit configuration/activation. No real test enquiries were sent.

The expanded search-language audit is in `docs/search-intent-audit.md`. It records supported topics and excluded claims; it does not invent keyword volumes or rankings. Services motion can be paused on the overview page and respects system reduced-motion preferences.
