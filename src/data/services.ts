import { PanelsTopLeft, Layers3, Cloud, Headphones } from "lucide-react";

export const services = [
  {
    id: "web-apps",
    title: "Websites & applications",
    text: "Web and mobile applications shaped around the way your business works.",
    headline: "A better experience. On every screen.",
    description:
      "From a company website to a customer portal or mobile application, we design and develop around the people who will use it. Clear journeys, useful features, and a consistent experience across devices.",
    icon: PanelsTopLeft,
    theme: "blue",
    label: "WEB & MOBILE",
    includes: [
      "Business websites and customer portals",
      "Web and mobile application development",
      "Responsive interfaces and user journeys",
      "Connections to your existing tools",
    ],
    outcome: "A digital experience built around your users and your business.",
  },
  {
    id: "saas",
    title: "Custom SaaS development",
    text: "Turn a business idea or internal workflow into a dedicated software platform.",
    headline: "Your way of working. Built into software.",
    description:
      "Have a product idea or a process that off-the-shelf software cannot quite handle? We help define the requirements and develop a platform around your workflows, users, and business rules.",
    icon: Layers3,
    theme: "violet",
    label: "PRODUCT & PLATFORM",
    includes: [
      "Product discovery and feature planning",
      "Dashboards and business workflows",
      "Account and application functionality",
      "Testing, launch, and ongoing development",
    ],
    outcome: "A platform shaped around the problem you need to solve.",
  },
  {
    id: "cloud-data",
    title: "Cloud & data systems",
    text: "Connect your applications, manage your data, and support your cloud infrastructure.",
    headline: "Bring your systems into the conversation.",
    description:
      "Help your software work together. We work on cloud-based systems, data workflows, and integrations so the information your business relies on can move between the right tools.",
    icon: Cloud,
    theme: "green",
    label: "CLOUD & INTEGRATION",
    includes: [
      "Cloud application setup and hosting support",
      "API and third-party integrations",
      "Database and data workflow development",
      "Connections between business systems",
    ],
    outcome: "Connected systems with a clearer flow of information.",
  },
  {
    id: "support",
    title: "Technical support",
    text: "Ongoing development, maintenance, and guidance for your technology.",
    headline: "Keep moving. Keep improving.",
    description:
      "Technology needs attention after launch. Discuss application maintenance, issue resolution, feature improvements, or development support with a team that can work through your requirements.",
    icon: Headphones,
    theme: "peach",
    label: "SUPPORT & DEVELOPMENT",
    includes: [
      "Application maintenance and troubleshooting",
      "Feature updates and improvements",
      "Technical review and development guidance",
      "Project support and dedicated team enquiries",
    ],
    outcome: "A practical next step for the software your business depends on.",
  },
];
