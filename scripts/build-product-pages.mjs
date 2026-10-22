import { readFile, writeFile, mkdir } from "node:fs/promises";

const template = await readFile(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
const pages = [
  {
    slug: "optimedicare",
    name: "OptiMediCare",
    description:
      "Explore OptiMediCare laboratory software: patient registration, tests, reporting, billing, and accounts. View real interface screenshots with demonstration data.",
  },
  {
    slug: "wacentral",
    name: "WACentral",
    description:
      "Explore WACentral: SaaS client management, WhatsApp phone routes, signed integrations, webhooks, and visual chatbot flows. See real product screenshots.",
  },
  {
    slug: "wa-connect",
    name: "WA Connect",
    description:
      "Discover WA Connect, Sincerity’s business communication product, currently in beta. Enquire about its capabilities and access.",
  },
];
for (const page of pages) {
  const url = `https://thesincerity.in/products/${page.slug}/`;
  const title = `${page.name} — Sincerity Technologies`;
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/,
      `$1${page.description}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/>)/,
      `$1${title}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/>)/,
      `$1${page.description}$2`,
    )
    .replaceAll("https://thesincerity.in/", url);
  const directory = new URL(`../dist/products/${page.slug}/`, import.meta.url);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
}
console.log("Built dedicated product entry pages.");

// Keep previously published links working after correcting the product name.
const legacyDirectory = new URL(
  "../dist/products/optimedicate/",
  import.meta.url,
);
await mkdir(legacyDirectory, { recursive: true });
await writeFile(
  new URL("index.html", legacyDirectory),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=/products/optimedicare/"><link rel="canonical" href="https://thesincerity.in/products/optimedicare/"><title>OptiMediCare — Sincerity Technologies</title></head><body><p><a href="/products/optimedicare/">Continue to OptiMediCare</a></p></body></html>`,
);
