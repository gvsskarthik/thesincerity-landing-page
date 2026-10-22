# Sincerity SEO implementation and next steps

Implemented 22 October 2026 for `https://thesincerity.in/`.

## What this work can achieve

The implementation makes the site easier to discover, crawl, read, and understand. It does not guarantee a ranking, an indexing date, a Knowledge Panel, rich results, or a number-one result for “Sincerity” or broad technology searches. Brand searches also compete with the ordinary English word and other organisations using similar names.

The appropriate aim is relevant visibility for the company, its real products, and the services it offers. There is no fabricated review markup, fake customer evidence, purchased-link scheme, hidden keyword text, bulk city-page generation, or promise to rank for unrelated technologies.

## Audit findings and fixes

| Finding                                               | Implemented change                                                                                                                                                                                                                          |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The initial HTML was an empty React shell             | Build-time React rendering produces the full visible content and navigation for each route. The browser hydrates the same interface for interactive features. No runtime rendering server or production application dependency is required. |
| Most services shared one destination                  | Six useful, distinct service pages explain the work, example uses, planning requirements, and common questions. They link from the Services page and footer.                                                                                |
| Product search descriptions were generic              | Page-specific titles and descriptions identify laboratory management software, WhatsApp messaging integrations, and beta business communication software.                                                                                   |
| Company identity was mainly graphical                 | Visible company copy explicitly names Sincerity; Organization and WebSite structured data identify the brand, legal name, logo, contact email, and canonical website.                                                                       |
| No structured page relationships                      | WebPage, Service, SoftwareApplication, ItemList, and visible BreadcrumbList markup describe the appropriate pages. No prices, ratings, certifications, locations, or availability claims are invented.                                      |
| Social previews were incomplete                       | A branded 1200 × 630 preview image, Open Graph tags, and Twitter card tags are generated for every page.                                                                                                                                    |
| Missing URLs returned the homepage as HTTP 200        | The website’s Nginx virtual host now serves a genuine HTTP 404 with a helpful noindex page. GitHub Pages receives a generated `404.html` as well.                                                                                           |
| `www` and index-file aliases served duplicate content | Permanent redirects consolidate the website on HTTPS without `www`, remove explicit `index.html` URLs, and preserve the old product/home links.                                                                                             |
| Multiple hand-maintained sitemap copies could drift   | One SEO route catalogue generates the canonical sitemap during every build. The obsolete sitemap copies and root robots duplicate were removed; `public/robots.txt` remains the crawler policy.                                             |

## Search topic and destination map

These are intended topics, not measured search volumes or ranking claims.

| Search intent                                                                     | Destination                            |
| --------------------------------------------------------------------------------- | -------------------------------------- |
| Sincerity; Sincerity Technologies; Sincerity Services; Sincerity software company | `/`                                    |
| Software development services                                                     | `/services/`                           |
| Website development; web application development; customer portal development     | `/services/web-development/`           |
| Mobile app development; business application development                          | `/services/app-development/`           |
| Custom SaaS development; business software platform development                   | `/services/saas-development/`          |
| Cloud application integration; API integration; data workflows                    | `/services/cloud-and-api-integration/` |
| Software maintenance; application technical support                               | `/services/technical-support/`         |
| WhatsApp business integration services; application messaging integration         | `/services/whatsapp-integration/`      |
| OptiMediCare; laboratory management software; lab billing and reporting software  | `/products/optimedicare/`              |
| WACentral; WhatsApp messaging platform; webhooks and chatbot routing              | `/products/wacentral/`                 |
| WA Connect; Sincerity business communication beta                                 | `/products/wa-connect/`                |

No city-specific landing pages or LocalBusiness address markup were added because a verified office address and target locality were not supplied. The user confirmed an international audience, so the service copy explicitly welcomes international clients and service structured data uses worldwide coverage. No overseas offices are claimed.

## Google Search Console — owner action still needed

The website changes are live, but no authenticated Search Console connection was available in this session. Verification and submission have **not** been claimed or performed.

1. Open [Google Search Console](https://search.google.com/search-console/) using the Google account that should own the site.
2. Add the URL-prefix property `https://thesincerity.in/` (or verify the domain property through your DNS provider).
3. For URL-prefix verification, Google can provide an HTML verification file or an HTML meta tag. The file can be placed in `public/`, or the meta tag’s public verification value can be supplied through `GOOGLE_SITE_VERIFICATION` during the build. Do not share a password or OAuth token.
4. If using a meta value, configure the GitHub repository Actions variable `GOOGLE_SITE_VERIFICATION` so later GitHub deployments retain it. For a server build, pass the same public value in the build environment. A committed Google verification HTML file is another way to retain verification across both hosting paths.
5. Complete verification in Search Console. Submit `sitemap.xml` in the Sitemaps section.
6. Inspect the homepage, Services page, the key service pages, and the two available product pages. Request indexing where appropriate. A submission is a request, not a guarantee.
7. Review indexing status, queries, impressions, clicks, and page experience after Google has had time to process the changes. Compare actual results before deciding which content to improve next.

Bing verification is also supported through the optional public `BING_SITE_VERIFICATION` build value. No analytics tracker was added and no third-party marketing message was sent.

## What helps after the technical work

Keep company details and product information accurate and consistent. Add real customer-approved case studies when available, with the problem, delivered work, screenshots, and outcomes that can be substantiated. Use genuine company profiles and relevant references that link to the canonical site. Create additional helpful material around real customer questions; do not publish large volumes of repetitive keyword pages. Measure performance and improve the pages that earn relevant impressions.

Broad queries such as “web development” are competitive, and unrelated “any technology” searches should not be targeted with misleading pages. Brand recognition, relevant evidence, useful content, and time matter alongside the code.

## Build and validation

- `npm run build` compiles the client, creates a separate build-time rendering bundle in ignored `dist-ssr/`, generates the static pages and sitemap, then runs SEO checks.
- `npm run check:seo` verifies the built metadata, canonical URLs, structured-data identity, headings, internal links, image paths, sitemap, and noindex error page.
- `npm run lint` checks source code.
- Browser verification covered all twelve sitemap pages with JavaScript disabled. Interactive pages were checked for hydration errors, mobile/tablet/desktop overflow, accessibility, and contextual service enquiries. No real enquiries were sent.
- Live HTTPS checks verified real 404 responses, canonical host/index redirects, legacy paths, the sitemap, and a successful request using a Googlebot-style user agent. A user-agent test does not impersonate a verified Google crawl or prove indexing.
- All 999 protected application source/build files still matched the existing read-only baseline. Neither `/srv/ssdc` nor `/srv/wa-central` was modified.

The applied host-specific redirect and error-page rules are recorded in `deploy/nginx-seo.conf`. They affect only the Sincerity landing website’s virtual host. Its Nginx configuration was backed up, checked with `nginx -t`, then reloaded. Other application virtual hosts were not edited.

## Primary references

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google site names](https://developers.google.com/search/docs/appearance/site-names)
- [Vite pre-rendering and static generation](https://vite.dev/guide/ssr.html#pre-rendering-ssg)

These references guided the implementation. Structured data supplies explicit information; it is not a shortcut to guaranteed rankings or special search displays.

## Confirmed business contact

The user supplied `support@thesincerity.in` and `+919988661683`. These are now reflected in the public footer, email links, enquiry destination, privacy copy, and Organization/ContactPoint structured data. The new form destination requires the support mailbox’s existing FormSubmit activation/configuration; mocked tests do not establish real email receipt.

The homepage uses solid pure white at the document, body, header, and main content levels. Technologies and Services are side by side above 640px and stack on narrow phones; the three product cards remain vertically stacked.

## Expanded search-language review — 23 October 2026

The content was reviewed by the actual job and audience for each offering. OptiMediCare now explicitly describes medical and pathology lab management, diagnostic centres, blood test report management, health checkup packages, and configured laboratory disciplines. WACentral and all six services received relevant commercial terminology and explanatory FAQs. Coverage is documented in `docs/search-intent-audit.md`, with source evidence and unsupported claims that were deliberately excluded. No keyword volume or ranking data was available, and no invented count or ranking is claimed.

The build check now verifies that important laboratory topics appear in the visible pre-rendered body rather than only in metadata. The twelve-route structure, canonical behaviour, real contact details, and Search Console verification requirements remain in place.
