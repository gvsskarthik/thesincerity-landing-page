import { products } from "../data/products";
import { serviceDetails } from "../data/serviceDetails";

export const siteUrl = "https://thesincerity.in";
export type SeoPage = {
  path: string;
  title: string;
  description: string;
  kind: "home" | "services" | "service" | "product" | "privacy" | "not-found";
};
export const seoPages: SeoPage[] = [
  {
    path: "/",
    title: "Sincerity | Software Products & Development Services",
    description:
      "Explore Sincerity Technologies and Sincerity Services: lab management software, WhatsApp integrations, SaaS products, web development, and app development.",
    kind: "home",
  },
  {
    path: "/services/",
    title: "Software, Web & App Development Services | Sincerity",
    description:
      "Web, app, and SaaS development for international clients. Explore Sincerity cloud/API integration, WhatsApp business messaging, and software support.",
    kind: "services",
  },
  ...serviceDetails.map((s) => ({
    path: s.path,
    title: s.title,
    description: s.description,
    kind: "service" as const,
  })),
  {
    path: "/products/optimedicare/",
    title: "OptiMediCare | Laboratory Management Software by Sincerity",
    description:
      "OptiMediCare lab management software connects patient registration, test results, laboratory reports, billing, accounts, and WhatsApp report workflows.",
    kind: "product",
  },
  {
    path: "/products/wacentral/",
    title: "WACentral | WhatsApp Business Messaging & API Integration",
    description:
      "Explore WACentral by Sincerity: WhatsApp messaging integrations, managed business clients, phone routes, webhooks, signed requests, and visual chatbot flows.",
    kind: "product",
  },
  {
    path: "/products/wa-connect/",
    title: "WA Connect | Business Communication Software by Sincerity",
    description:
      "Discover WA Connect, a Sincerity business communication product currently in beta. Discuss its current capabilities, availability, and beta access.",
    kind: "product",
  },
  {
    path: "/privacy/",
    title: "Privacy Policy | Sincerity",
    description:
      "How the Sincerity website handles contact, product, support, and career enquiries, including enquiry forms and third-party submission processing.",
    kind: "privacy",
  },
];
export const notFoundSeo: SeoPage = {
  path: "/404.html",
  title: "Page Not Found | Sincerity",
  description:
    "Find Sincerity products, software development services, or the company homepage.",
  kind: "not-found",
};

export function structuredData(page: SeoPage) {
  const url = siteUrl + page.path;
  const organizationId = siteUrl + "/#organization";
  const websiteId = siteUrl + "/#website";
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Sincerity",
      legalName: "Sincerity (OPC) Private Limited",
      url: siteUrl + "/",
      logo: {
        "@type": "ImageObject",
        url: siteUrl + "/favicon-512x512.png",
        width: 512,
        height: 512,
      },
      email: "support@thesincerity.in",
      telephone: "+919988661683",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919988661683",
        email: "support@thesincerity.in",
        contactType: "customer support",
      },
      description:
        "A technology company developing software products and providing technology services for businesses.",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl + "/",
      name: "Sincerity",
      alternateName: ["Sincerity Technologies", "Sincerity Services"],
      publisher: { "@id": organizationId },
      inLanguage: "en",
    },
    {
      "@type": page.kind === "services" ? "CollectionPage" : "WebPage",
      "@id": url + "#webpage",
      url,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: siteUrl + "/social-card.png",
      },
    },
  ];
  const detail = serviceDetails.find((s) => s.path === page.path);
  if (detail)
    graph.push({
      "@type": "Service",
      "@id": url + "#service",
      name: detail.name,
      serviceType: detail.name,
      description: detail.intro,
      url,
      provider: { "@id": organizationId },
      areaServed: "Worldwide",
      mainEntityOfPage: { "@id": url + "#webpage" },
    });
  const product = products.find((p) => p.path === page.path);
  if (product)
    graph.push({
      "@type": "SoftwareApplication",
      "@id": url + "#software",
      name: product.name,
      url,
      description: product.detail,
      applicationCategory:
        product.theme === "lab"
          ? "BusinessApplication"
          : "CommunicationApplication",
      operatingSystem: "Web browser",
      image: new URL(product.image, siteUrl).href,
      publisher: { "@id": organizationId },
      featureList: product.highlights.map((h) => h.title + " " + h.text),
      ...(product.screens
        ? { screenshot: product.screens.map((s) => siteUrl + s.src) }
        : {}),
      mainEntityOfPage: { "@id": url + "#webpage" },
    });
  if (page.kind === "services")
    graph.push({
      "@type": "ItemList",
      "@id": url + "#services",
      name: "Sincerity development and integration services",
      itemListElement: serviceDetails.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: siteUrl + s.path,
      })),
    });
  if (page.kind !== "home" && page.kind !== "not-found") {
    const items = [{ name: "Sincerity", item: siteUrl + "/" }];
    if (page.kind === "service")
      items.push({ name: "Services", item: siteUrl + "/services/" });
    items.push({
      name:
        product?.name ||
        detail?.name ||
        (page.kind === "privacy" ? "Privacy policy" : "Services"),
      item: url,
    });
    graph.push({
      "@type": "BreadcrumbList",
      "@id": url + "#breadcrumbs",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        ...item,
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
