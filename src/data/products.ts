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
    category: "Medical & pathology lab management software",
    status: "Available",
    description:
      "Medical and pathology lab management software for patient registration, blood test reports, health checkup packages, and billing.",
    detail:
      "OptiMediCare is laboratory management software for medical laboratories, pathology labs, and diagnostic centres. Connect patient registration, your configured blood tests and health checkup packages, result entry, laboratory report preparation, billing, and accounts in one workspace.",
    audience: "Medical laboratories, pathology labs, and diagnostic centres",
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
        title: "Blood test & pathology reports.",
        text: "Enter laboratory test results, review report status, and prepare blood test reports and other configured pathology reports for printing, PDF download, or WhatsApp.",
      },
      {
        title: "Billing & collections.",
        text: "Track bill amounts, payments, dues, discounts, and payment methods.",
      },
      {
        title: "Tests & health checkup packages.",
        text: "Organise individual tests, test groups, and hospital-specific packages. Build health checkup packages from the tests configured in your laboratory’s catalogue.",
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
      {
        label: "Result entry",
        title: "The results. In their right place.",
        description:
          "Open the patient’s selected tests, enter result values, and review the configured units and reference ranges. The report workspace highlights values outside those ranges and shows results still awaiting entry.",
        src: "/product-screens/omc-results.webp",
        alt: "OptiMediCare result-entry workspace with a demonstration patient, selected test rows, configured reference details, and result entry controls.",
      },
      {
        label: "Test catalogue",
        title: "Your tests. Your lab’s catalogue.",
        description:
          "Organise individual tests, groups, and hospital-specific packages. Review categories, shortcuts, configured normal values, prices, and active status.",
        src: "/product-screens/omc-tests.webp",
        alt: "OptiMediCare test catalogue showing demonstration tests, categories, shortcuts, prices, and catalogue controls.",
      },
      {
        label: "Lab setup",
        title: "A report that belongs to your lab.",
        description:
          "Manage your lab profile and report identity. The settings workspace also includes print-position preferences, password settings, authenticator-app protection, and WhatsApp setup.",
        src: "/product-screens/omc-settings.webp",
        alt: "OptiMediCare settings workspace showing the demonstration lab profile and navigation for print preferences and account settings.",
      },
    ],
    questions: [
      {
        question: "Is OptiMediCare for medical and pathology lab management?",
        answer:
          "Yes. It supports the administrative workflow of medical laboratories, pathology labs, and diagnostic centres: patient registration, configured tests and packages, result entry, lab reports, billing, payments, and accounts. Our team can review your laboratory’s workflow in a demonstration.",
      },
      {
        question:
          "Can we prepare blood test reports and health checkup packages?",
        answer:
          "Your laboratory can configure blood tests and other laboratory tests with its own parameters, units, and reference ranges. Staff enter the results and prepare reports through the report workspace. Related tests can be organised into groups or health checkup packages using the catalogue’s package functionality.",
      },
      {
        question: "Does this website offer blood tests or medical advice?",
        answer:
          "Sincerity provides the OptiMediCare software. It does not provide blood testing, health checkups, or medical interpretation through this website. Your laboratory performs the tests, reviews the results, and is responsible for the information and reports it issues.",
      },
      {
        question: "Can reports use our laboratory’s branding?",
        answer:
          "You can configure the lab name and contact details, report print positions, text sizes, and heading options. A lab signature image can be used on downloaded and WhatsApp PDFs. Ask our team to review your report format during the walkthrough.",
      },
      {
        question: "How are reference ranges used?",
        answer:
          "The test catalogue supports configured units and reference ranges, including parameter-level ranges. Result entry uses those settings to display reference details and highlight values outside the configured ranges. Your laboratory remains responsible for configuring and reviewing its test information and reports.",
      },
      {
        question: "What is needed for WhatsApp reporting?",
        answer:
          "The application includes WhatsApp setup and report-sharing workflows. Availability depends on the lab’s completed connection and account configuration. Our team can walk through the setup and requirements with you.",
      },
      {
        question: "Can we track dues and external lab work?",
        answer:
          "Yes. Accounts includes due-patient views, date and doctor filters, and export options. The lab-to-lab workflow records tests, external laboratory charges, and referral or commission entries.",
      },
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
    category: "WhatsApp Business API integration",
    status: "Available",
    description:
      "WhatsApp messaging, clients, and chatbot flows. One developer workspace.",
    detail:
      "WACentral connects WhatsApp Business API messaging with SaaS applications and managed business accounts. Its developer workspace brings client onboarding, Meta Cloud API phone routes, webhook configuration, HMAC-signed integration requests, and visual chatbot routing into one place.",
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
        question: "How does WACentral connect to the WhatsApp Business API?",
        answer:
          "The workspace includes Meta Cloud API configuration, connected phone routes, managed clients, HTTPS webhooks, and signed integration requests. Account access, permissions, phone setup, and the application’s message workflow need to be configured for your business.",
      },
      {
        question: "Can developers manage more than one business client?",
        answer:
          "The SaaS developer workspace includes managed client onboarding and a client directory, with messaging configuration and phone routes for downstream business accounts. Ask for a walkthrough of the account structure and access requirements for your integration.",
      },
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
