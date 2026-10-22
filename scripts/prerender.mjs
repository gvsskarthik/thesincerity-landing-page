import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import {
  render,
  seoPages,
  notFoundSeo,
  structuredData,
  siteUrl,
} from "../dist-ssr/entry-server.js";

const base = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", base), "utf8");
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
function head(html, page) {
  const url = siteUrl + page.path;
  const robots =
    page.kind === "not-found"
      ? "noindex, follow"
      : "index, follow, max-image-preview:large";
  const tags = [
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    ...(page.kind === "not-found"
      ? []
      : [`<link rel="canonical" href="${url}" />`]),
    `<meta property="og:site_name" content="Sincerity" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${siteUrl}/social-card.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Sincerity — Software products and technology services" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${siteUrl}/social-card.png" />`,
    ...(page.kind === "not-found"
      ? []
      : [
          `<script type="application/ld+json">${JSON.stringify(structuredData(page)).replaceAll("<", "\\u003c")}</script>`,
        ]),
  ];
  if (page.kind === "home" && process.env.GOOGLE_SITE_VERIFICATION)
    tags.push(
      `<meta name="google-site-verification" content="${escapeHtml(process.env.GOOGLE_SITE_VERIFICATION)}" />`,
    );
  if (page.kind === "home" && process.env.BING_SITE_VERIFICATION)
    tags.push(
      `<meta name="msvalidate.01" content="${escapeHtml(process.env.BING_SITE_VERIFICATION)}" />`,
    );
  return html
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeHtml(page.title)}</title>`,
    )
    .replace(
      /<meta\s+(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>/g,
      "",
    )
    .replace(/<link\s+rel="canonical"[^>]*>/g, "")
    .replace("</head>", tags.join("\n    ") + "\n  </head>");
}
for (const page of [...seoPages, notFoundSeo]) {
  const target =
    page.kind === "not-found" ? "404.html" : page.path.slice(1) + "index.html";
  const body =
    page.kind === "privacy"
      ? await readFile(new URL("privacy/index.html", base), "utf8")
      : template.replace(
          '<div id="root"></div>',
          `<div id="root">${render(page.path)}</div>`,
        );
  const html = head(body, page);
  // Ensure every server-rendered imported asset is also present in the client build.
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g))
    await access(new URL(match[1].slice(1), base));
  await mkdir(new URL("./", new URL(target, base)), { recursive: true });
  await writeFile(new URL(target, base), html);
}
const legacy = new URL("products/optimedicate/", base);
await mkdir(legacy, { recursive: true });
await writeFile(
  new URL("index.html", legacy),
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/products/optimedicare/"><link rel="canonical" href="' +
    siteUrl +
    '/products/optimedicare/"><title>OptiMediCare — Sincerity</title></head><body><a href="/products/optimedicare/">Continue to OptiMediCare</a></body></html>',
);
await writeFile(
  new URL("sitemap.xml", base),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    seoPages
      .map((page) => `  <url><loc>${siteUrl}${page.path}</loc></url>`)
      .join("\n") +
    "\n</urlset>\n",
);
console.log(
  `Pre-rendered ${seoPages.length} indexable pages, a noindex 404, and the canonical sitemap.`,
);
