import optimedicateImage from "../assets/optimedicate-icon.png";
import wacentralImage from "../assets/wacentral-artwork.webp";
import waconnectImage from "../assets/waconnect-artwork.webp";

export type Product = {
  name: string;
  path: string;
  category: string;
  status: "Available" | "Beta";
  description: string;
  detail: string;
  audience: string;
  image: string;
  theme: string;
  headline: string;
  highlights: { title: string; text: string }[];
};

export const products: Product[] = [
  {
    name: "Optimedicate",
    path: "/products/optimedicate/",
    category: "Laboratory software",
    status: "Available",
    description: "Thoughtfully built for the work of medical laboratories.",
    detail:
      "Optimedicate (SSDC) is our medical laboratory management product. Explore the software with our team and discuss how it fits the way your laboratory works.",
    audience: "Medical laboratories",
    image: optimedicateImage,
    theme: "lab",
    headline: "For the work that matters.",
    highlights: [
      {
        title: "A focus on laboratories.",
        text: "A software product created for medical laboratory management.",
      },
      {
        title: "Your workflow comes first.",
        text: "Discuss your laboratory’s day-to-day requirements with our team.",
      },
      {
        title: "See it for yourself.",
        text: "Request a guided product demonstration before deciding what fits.",
      },
    ],
  },
  {
    name: "WACentral",
    path: "/products/wacentral/",
    category: "Messaging infrastructure",
    status: "Available",
    description: "A connection between your software and your customers.",
    detail:
      "WACentral is our WhatsApp API gateway for business messaging. Speak with our team about connecting messaging to your business software and the integration requirements for your use case.",
    audience: "Businesses and developers",
    image: wacentralImage,
    theme: "messaging",
    headline: "Business, in conversation.",
    highlights: [
      {
        title: "Messaging meets software.",
        text: "Explore a WhatsApp API gateway built for business messaging integrations.",
      },
      {
        title: "Start with your use case.",
        text: "Discuss your application, messaging needs, and integration requirements.",
      },
      {
        title: "A closer look, together.",
        text: "Request a walkthrough of the product with our team.",
      },
    ],
  },
  {
    name: "WA Connect",
    path: "/products/wa-connect/",
    category: "Business communication",
    status: "Beta",
    description: "Bring your business conversations a little closer.",
    detail:
      "WA Connect is our business communication product, currently in beta. Get in touch to learn about the current capabilities and enquire about beta access.",
    audience: "Businesses exploring communication tools",
    image: waconnectImage,
    theme: "connect",
    headline: "Closer conversations.",
    highlights: [
      {
        title: "Built around communication.",
        text: "A Sincerity product focused on business conversations.",
      },
      {
        title: "Currently in beta.",
        text: "Ask our team about the current capabilities and availability.",
      },
      {
        title: "Explore early access.",
        text: "Tell us about your business and enquire about joining the beta.",
      },
    ],
  },
];
