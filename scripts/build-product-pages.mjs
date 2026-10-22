import { readFile, writeFile, mkdir } from "node:fs/promises";

const template = await readFile(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
const pages = [
  {
    slug: "optimedicate",
    name: "Optimedicate",
    description:
      "Discover Optimedicate, Sincerity’s medical laboratory management product. Explore the product and request a guided demonstration.",
  },
  {
    slug: "wacentral",
    name: "WACentral",
    description:
      "Discover WACentral, Sincerity’s WhatsApp API gateway for business messaging. Discuss your integration requirements and request a walkthrough.",
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
