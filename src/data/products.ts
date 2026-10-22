import optimedicateImage from "../assets/optimedicate-icon.png";
import wacentralImage from "../assets/wacentral-artwork.webp";
import waconnectImage from "../assets/waconnect-artwork.webp";

export type ProductScreen = {
  label: string;
  title: string;
  description: string;
  src: string;
  alt: string;
};

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
  appUrl?: string;
  screens?: ProductScreen[];
  questions?: { question: string; answer: string }[];
  highlights: { title: string; text: string }[];
};

export const products: Product[] = [
  {
    name: "OptiMediCare",
    path: "/products/optimedicare/",
    category: "Laboratory software",
    status: "Available",
    description:
      "Patients, tests, reports, and billing. One connected lab workspace.",
    detail:
      "OptiMediCare brings patient registration, test selection, result entry, reporting, billing, and accounts into one laboratory workspace. Track daily activity, review pending reports, and manage payments without jumping between separate tools.",
    audience: "Medical laboratories",
    image: optimedicateImage,
    theme: "lab",
    headline: "For the work that matters.",
    appUrl: "https://ssdclabs.online/",
    highlights: [
      {
        title: "Patient registration.",
        text: "Register patient details, select individual tests or packages, and prepare the bill in one workflow.",
      },
      {
        title: "Results & reporting.",
        text: "Enter test values, review report status, and prepare reports for printing or WhatsApp.",
      },
      {
        title: "Billing & collections.",
        text: "Track bill amounts, payments, dues, discounts, and payment methods.",
      },
      {
        title: "Your test catalogue.",
        text: "Organise individual tests, test groups, and hospital-specific packages.",
      },
      {
        title: "Referrals & partner labs.",
        text: "Manage referring doctors, external lab charges, and referral amounts alongside patient work.",
      },
      {
        title: "A view of the whole lab.",
        text: "Review patient visit trends, test categories, reporting activity, and collections from the dashboard.",
      },
    ],
    screens: [
      {
        label: "Dashboard",
        title: "Your laboratory, at a glance.",
        description:
          "Review billing, report status, WhatsApp activity, test volumes, visit trends, and recent work from the dashboard.",
        src: "/product-screens/omc-dashboard.webp",
        alt: "OptiMediCare dashboard showing billing, reports, WhatsApp activity, charts, and a demo patient work list.",
      },
      {
        label: "Patients",
        title: "Keep patient work organised.",
        description:
          "Find patient visits, check payment and report status, and move into the next step of the laboratory workflow.",
        src: "/product-screens/omc-patients.webp",
        alt: "OptiMediCare patient directory displaying demonstration patient records, report IDs, bills, and status controls.",
      },
      {
        label: "Registration",
        title: "From registration to billing.",
        description:
          "The registration screen brings patient details, test selection, bill summaries, external lab charges, and referrals together.",
        src: "/product-screens/omc-registration.webp",
        alt: "OptiMediCare new patient registration form with patient details, bill summary, external lab charges, referrals, and payment options.",
      },
      {
        label: "Reports",
        title: "See what is ready. Find what is pending.",
        description:
          "Review patient report status and open the relevant report workflow from the reports directory.",
        src: "/product-screens/omc-reports.webp",
        alt: "OptiMediCare reports directory showing demonstration records and report workflow actions.",
      },
      {
        label: "Accounts",
        title: "Understand the numbers behind the work.",
        description:
          "Review revenue, dues, referral amounts, doctor filters, and account entries. Export options are available in the application.",
        src: "/product-screens/omc-accounts.webp",
        alt: "OptiMediCare accounts screen with demonstration revenue, dues, referral totals, filters, and an accounts table.",
      },
    ],
    questions: [
      {
        question: "Can I manage tests and packages?",
        answer:
          "The application includes individual tests, test groups, and hospital-specific packages, with test selection available during patient registration.",
      },
      {
        question: "Does it cover reports and billing?",
        answer:
          "Yes. The application includes result entry, report views, print and WhatsApp preparation, patient bills, payment tracking, and accounts views. Ask our team for a walkthrough of your workflow.",
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
      "WACentral connects WhatsApp business messaging with SaaS applications and managed business accounts. Its developer workspace brings client onboarding, phone routes, webhook configuration, integration credentials, and chatbot routing into one place.",
    audience: "Businesses and developers",
    image: wacentralImage,
    theme: "messaging",
    headline: "Business, in conversation.",
    appUrl: "https://wacentral.sincerity.co.in/",
    highlights: [
      {
        title: "A developer workspace.",
        text: "Manage downstream business accounts and their messaging configuration from the SaaS portal.",
      },
      {
        title: "Client onboarding.",
        text: "Create and organise managed client workspaces, with account details and status in one directory.",
      },
      {
        title: "WhatsApp phone routes.",
        text: "Work with connected WhatsApp phone numbers and Meta Cloud API configuration.",
      },
      {
        title: "Webhooks & signed requests.",
        text: "Configure your HTTPS webhook destination and use HMAC-authenticated integration requests.",
      },
      {
        title: "Visual chatbot flows.",
        text: "Work with server-side, SaaS, and tenant chatbot routing, using a visual flow editor and conversation preview.",
      },
      {
        title: "Messaging visibility.",
        text: "Review messaging activity and client records, with webhook and outbound logs available across the platform’s workspaces.",
      },
    ],
    screens: [
      {
        label: "Developer overview",
        title: "One workspace for your messaging gateway.",
        description:
          "Review managed clients, phone routes, webhook configuration, and messaging activity from the SaaS developer dashboard.",
        src: "/product-screens/wacentral-dashboard.webp",
        alt: "WACentral SaaS developer dashboard showing demo client accounts, phone route configuration, webhook bridge, and message totals.",
      },
      {
        label: "Client directory",
        title: "Keep your managed businesses in view.",
        description:
          "Find client workspaces, filter by business type, and review their account details and current status.",
        src: "/product-screens/wacentral-clients.webp",
        alt: "WACentral managed client directory displaying demonstration businesses with type, contact details, and status.",
      },
      {
        label: "Chatbot studio",
        title: "Understand the conversation flow.",
        description:
          "Inspect routing modes and the application’s visual conversation flow. The screen shown uses the built-in server-side example flow.",
        src: "/product-screens/wacentral-chatbot.webp",
        alt: "WACentral chatbot and automation studio showing server-side, SaaS custom, and tenant custom routing alongside a branched conversation flow.",
      },
    ],
    questions: [
      {
        question: "Can I connect my own application?",
        answer:
          "WACentral includes a developer integration workspace with client identifiers, signed integration requests, and a configurable HTTPS webhook destination. Discuss your application's requirements with our team.",
      },
      {
        question: "Does it include chatbot tools?",
        answer:
          "The application includes a visual chatbot studio, conversation previews, and routing between server-side, SaaS custom, and tenant custom bots. Availability and setup depend on the account and integration configuration.",
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
