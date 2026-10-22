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
- `scripts/build-product-pages.mjs`: generates static GitHub Pages entry points and metadata for each product.
- `src/components/ExplorePage.css`: responsive page and dialog styles.
- `src/index.css`: global styles and motion preferences.
- `index.html`: metadata and font loading.

Products currently retain the previously published availability labels: Optimedicate and WACentral are available, and WA Connect is in beta. Update the product list when availability changes. Product panels use the supplied Optimedicate illustration and matching generated artwork for the messaging products. Original assets are preserved; display assets use WebP for smaller downloads. Screenshots and videos can be added to individual product pages when authentic media is available.

Dedicated pages: `/products/optimedicate/`, `/products/wacentral/`, and `/products/wa-connect/`. These work as direct entry URLs, including browser reloads. When adding a product, update `src/data/products.ts`, the build entry list, and both sitemaps.

Artwork provenance and generation prompts are documented in `docs/artwork.md`.

## Enquiries

Product and business enquiries use the existing FormSubmit endpoint for `contact@thesincerity.in`. Submission requires both a successful HTTP response and an explicit successful JSON result. Failures retain the entered information, allow retry, and offer an email alternative. Requests time out after 15 seconds and are cancelled when the dialog closes. Contact details are not stored in local storage.

FormSubmit delivery depends on the mailbox's FormSubmit configuration and activation. Browser checks intercept submission requests; they do not verify actual email receipt or send test enquiries.
