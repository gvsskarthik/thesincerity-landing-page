import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
const base = new URL("../dist/", import.meta.url);
const site = "https://thesincerity.in";
const sitemap = await readFile(new URL("sitemap.xml", base), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
assert(urls.length >= 12, "Missing product or service pages in sitemap");
assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap entries");
const titles = new Set();
const descriptions = new Set();
for (const url of urls) {
  const path = new URL(url).pathname;
  const html = await readFile(
    new URL(path.slice(1) + "index.html", base),
    "utf8",
  );
  const titlesOnPage = [...html.matchAll(/<title>([^<]+)<\/title>/g)];
  assert.equal(titlesOnPage.length, 1, url + " needs one title");
  const title = titlesOnPage[0][1];
  assert(!titles.has(title), url + " duplicate title");
  titles.add(title);
  const metas = [
    ...html.matchAll(/<meta name="description" content="([^"]+)"/g),
  ];
  assert.equal(metas.length, 1, url + " needs one description");
  assert(!descriptions.has(metas[0][1]), url + " duplicate description");
  descriptions.add(metas[0][1]);
  const canonicals = [
    ...html.matchAll(/<link rel="canonical" href="([^"]+)"/g),
  ];
  assert.equal(canonicals.length, 1);
  assert.equal(canonicals[0][1], url);
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    url + " needs one readable page heading",
  );
  assert(
    !html.includes('<div id="root"></div>'),
    url + " still an empty JS shell",
  );
  assert(!/name="robots" content="noindex/.test(html));
  const json = JSON.parse(
    html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
  );
  assert.equal(json["@context"], "https://schema.org");
  const organization = json["@graph"].find(
    (item) => item["@type"] === "Organization",
  );
  assert.equal(organization.email, "support@thesincerity.in");
  assert.equal(organization.telephone, "+919988661683");
  assert(
    !html.includes("contact@thesincerity.in"),
    url + " has an outdated mailbox",
  );
  const service = json["@graph"].find((item) => item["@type"] === "Service");
  if (service) assert.equal(service.areaServed, "Worldwide");

  assert.equal(
    json["@graph"].find((i) => i["@type"] === "Organization").url,
    site + "/",
  );
  assert.equal(
    json["@graph"].find((i) => i["@type"] === "WebSite").url,
    site + "/",
  );
  assert.equal(
    json["@graph"].find(
      (i) => i["@type"] === "WebPage" || i["@type"] === "CollectionPage",
    ).url,
    url,
  );
  for (const match of html.matchAll(
    /(?:src|href)="(\/(?:assets|product-screens)\/[^"?#]+)"/g,
  ))
    await access(new URL(match[1].slice(1), base));
  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const link = match[1];
    if (link.startsWith("//")) continue;
    await access(
      new URL(link.slice(1) + (link.endsWith("/") ? "index.html" : ""), base),
    );
  }
  assert(
    html.includes('property="og:image" content="' + site + '/social-card.png"'),
  );
}
const notFound = await readFile(new URL("404.html", base), "utf8");
assert(/name="robots" content="noindex, follow"/.test(notFound));
assert(!sitemap.includes("404.html"));
assert(!sitemap.includes("optimedicate/"));
await access(new URL("social-card.png", base));
console.log(
  `SEO checks passed for ${urls.length} pre-rendered pages: unique metadata, canonical URLs, schema, content headings, internal links, images, sitemap, and noindex 404.`,
);
