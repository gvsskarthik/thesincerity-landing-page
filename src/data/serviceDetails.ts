export type ServiceDetail = {
  path: string;
  name: string;
  title: string;
  description: string;
  visual: string;
  headline: string;
  intro: string;
  overviewTitle: string;
  overview: string;
  includes: { title: string; text: string }[];
  examples: string[];
  planning: string[];
  questions: { question: string; answer: string }[];
  relatedProduct?: { name: string; path: string; text: string };
};

export const serviceDetails: ServiceDetail[] = [
  {
    path: "/services/web-development/",
    name: "Web development",
    title: "Web Development Services | Sincerity",
    description:
      "Website and web application development by Sincerity. Explore responsive business websites, customer portals, integrations, and ongoing improvements.",
    visual: "web-apps",
    headline: "Web development. Built around your users.",
    intro:
      "Create a business website, customer portal, or web application that makes the next step clear. Sincerity brings design and development together around your requirements.",
    overviewTitle: "Start with what the website needs to do.",
    overview:
      "A business website should help visitors understand your company and take a useful next step. A portal or web application needs to help users complete real tasks. We begin by discussing the audience, content, and workflows, then define an interface and development approach that fit. Your project might need a simple enquiry journey, account access, a dashboard, or connections to existing software. The scope comes from those needs rather than a fixed collection of template features.",
    includes: [
      {
        title: "Business websites",
        text: "Company, product, and service websites with a clear page structure, readable content, responsive layouts, and useful contact journeys.",
      },
      {
        title: "Web applications and portals",
        text: "Browser-based tools for customers or internal teams, with the screens, forms, account functionality, and workflows agreed for your project.",
      },
      {
        title: "Responsive interface development",
        text: "Layouts that adapt to phones, tablets, and desktop screens, with attention to navigation, keyboard access, and practical interaction details.",
      },
      {
        title: "Integrations and improvements",
        text: "Connect relevant APIs or business tools, extend an existing website, or discuss maintenance and feature updates after launch.",
      },
    ],
    examples: [
      "A company website that clearly explains its services",
      "A customer portal for requests, documents, or account information",
      "An internal web application for a recurring business process",
    ],
    planning: [
      "The people who will use the site and their main tasks",
      "The content, pages, and features you need",
      "Existing systems, integrations, and launch priorities",
    ],
    questions: [
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. Share the current website and explain what is not working. We can discuss its content, layout, functionality, and technical setup before agreeing on the scope of a redesign.",
      },
      {
        question:
          "What is the difference between a website and a web application?",
        answer:
          "A website primarily presents information and helps visitors find the right next step. A web application supports tasks such as account management, data entry, approvals, or reporting. Some projects need both.",
      },
      {
        question: "Will the website work on mobile?",
        answer:
          "Responsive layouts are part of the discussion and development approach. We review the important journeys across suitable phone, tablet, and desktop sizes rather than simply reducing the desktop layout.",
      },
    ],
  },
  {
    path: "/services/app-development/",
    name: "App development",
    title: "App Development Services | Sincerity",
    description:
      "Explore Sincerity app development services for business and customer workflows. Plan mobile applications, interface design, backend connections, and support.",
    visual: "web-apps",
    headline: "App development. A useful experience, in hand.",
    intro:
      "Turn a customer journey or business workflow into an application people can use with confidence. Start with the problem, then define the right screens, features, and connections.",
    overviewTitle: "An application with a clear reason to exist.",
    overview:
      "A useful app gives people a straightforward way to complete a task. We help you think through who will use the application, where it will be used, and what information needs to move between the app and your business. Interface design, backend requirements, account access, and integrations all influence the development scope. Whether you have a new idea or an existing application to improve, we can discuss a practical first release and the work that should follow.",
    includes: [
      {
        title: "Application planning",
        text: "Define the audience, main journeys, feature priorities, and platform requirements before committing to a detailed development scope.",
      },
      {
        title: "Mobile interface design",
        text: "Organise the screens, navigation, forms, and feedback around how people use an application on a smaller screen.",
      },
      {
        title: "Connected functionality",
        text: "Develop the agreed application features and connect them to suitable backend services, APIs, or existing business systems.",
      },
      {
        title: "Review and ongoing development",
        text: "Review important workflows, prepare the agreed release, and discuss maintenance, issue resolution, and later improvements.",
      },
    ],
    examples: [
      "An application for customers to access a business service",
      "A mobile workflow for staff completing tasks away from a desk",
      "An app connected to an existing business platform",
    ],
    planning: [
      "Your intended users and the devices they use",
      "The most important actions for the first release",
      "Account, data, backend, and integration requirements",
    ],
    questions: [
      {
        question: "Do I need designs before starting?",
        answer:
          "No. You can begin with a description of the problem and the people who need the application. We can discuss the screens and user journeys as part of defining the project.",
      },
      {
        question: "Which platforms can the application target?",
        answer:
          "Tell us which devices and operating systems your users need. The platform coverage and development approach are agreed during scoping; they are not assumed to be identical for every project.",
      },
      {
        question: "Can an app connect to our existing software?",
        answer:
          "That depends on the existing system and the interfaces it provides. Share its documentation or integration requirements so we can review how the application could connect.",
      },
    ],
  },
  {
    path: "/services/saas-development/",
    name: "SaaS development",
    title: "Custom SaaS Development Services | Sincerity",
    description:
      "Custom SaaS development by Sincerity. Define a software product, design business workflows, develop dashboards and integrations, and plan ongoing improvements.",
    visual: "saas",
    headline: "Custom SaaS. Your workflow, made into software.",
    intro:
      "Build a software platform around a specific business problem. We help turn your requirements into a considered product scope, useful workflows, and a clear development path.",
    overviewTitle: "Build the product your workflow calls for.",
    overview:
      "Off-the-shelf tools do not fit every business process. A custom SaaS product can bring the agreed workflows into a platform shaped around your users and rules. The starting point is understanding the problem, the people involved, and the information they need. Together we can identify the core experience, account requirements, dashboards, integrations, and priorities for a first release. Additional functionality should follow a clear need rather than making the first version unnecessarily complicated.",
    includes: [
      {
        title: "Product discovery and scope",
        text: "Work through the business problem, user types, feature priorities, and the first set of workflows the platform needs to support.",
      },
      {
        title: "Dashboards and business workflows",
        text: "Develop the agreed screens, data entry, status views, and business processes around the way users need to work.",
      },
      {
        title: "Accounts and integrations",
        text: "Discuss account structure, access requirements, data connections, and APIs as part of the application design and development scope.",
      },
      {
        title: "Launch and evolution",
        text: "Review the working product, prepare the agreed launch, and plan the maintenance or feature development needed as requirements evolve.",
      },
    ],
    examples: [
      "A platform for a specialised business workflow",
      "A customer-facing software product",
      "An internal system connecting work currently spread across tools",
    ],
    planning: [
      "The business problem and the people the platform serves",
      "The core workflow and the rules it must follow",
      "The first-release priorities and required integrations",
    ],
    questions: [
      {
        question: "Can we begin with a smaller first version?",
        answer:
          "Yes. Discuss the most important user journey and the features needed to support it. A focused initial scope can make the purpose and next development priorities clearer.",
      },
      {
        question: "Can you develop an internal business platform?",
        answer:
          "Yes. Custom software can support an internal workflow as well as a customer-facing product. We define the users, process, data, and access needs with you.",
      },
      {
        question: "Does custom SaaS development include ongoing changes?",
        answer:
          "Ongoing development and maintenance can be discussed alongside the initial project. The features, responsibilities, and support scope should be agreed for your requirements.",
      },
    ],
    relatedProduct: {
      name: "OptiMediCare",
      path: "/products/optimedicare/",
      text: "Explore a Sincerity software product built around laboratory workflows, from patient registration to reporting and accounts.",
    },
  },
  {
    path: "/services/cloud-and-api-integration/",
    name: "Cloud & API integration",
    title: "Cloud & API Integration Services | Sincerity",
    description:
      "Cloud and API integration services from Sincerity. Connect applications, databases, and business tools with clearly defined data workflows and hosting support.",
    visual: "cloud-data",
    headline: "Connected systems. A clearer flow of information.",
    intro:
      "Bring the right information to the right application. Discuss cloud-based systems, API connections, and data workflows that help your business tools work together.",
    overviewTitle: "Understand the connection before building it.",
    overview:
      "Integration work begins with the systems involved, the information they expose, and the rules for using it. We review the available APIs, account access requirements, data formats, and the workflow you want to support. A connection may need to pass an event between applications, retrieve information for a dashboard, or support a recurring data process. We define what should happen when data is missing or a connected service is unavailable, as well as the normal path.",
    includes: [
      {
        title: "API integrations",
        text: "Connect suitable third-party APIs and business applications according to their available interfaces and the requirements of your workflow.",
      },
      {
        title: "Cloud applications and hosting support",
        text: "Discuss application setup, hosting requirements, and support for cloud-based systems used by your business.",
      },
      {
        title: "Database and data workflows",
        text: "Develop the agreed handling of data between application components or business systems, with clear inputs, outputs, and validation requirements.",
      },
      {
        title: "Integration review and troubleshooting",
        text: "Review an existing connection, investigate issues, or plan a change when business requirements or an external interface evolve.",
      },
    ],
    examples: [
      "Connecting a business application to an external API",
      "Bringing data from agreed systems into a dashboard",
      "Moving information between two tools in a defined workflow",
    ],
    planning: [
      "The applications and available API documentation",
      "The information that needs to move and what triggers it",
      "Access requirements, exceptions, and operational responsibilities",
    ],
    questions: [
      {
        question: "Can every application be integrated?",
        answer:
          "Integration depends on the interfaces, permissions, and capabilities of the systems involved. We review the available documentation and requirements before agreeing on an approach.",
      },
      {
        question: "Can you help with an existing integration?",
        answer:
          "Yes. Describe the connection and the issue or change you need. Relevant documentation and error details can help us understand the work; do not send passwords or access tokens through the enquiry form.",
      },
      {
        question: "Do you provide WhatsApp integration?",
        answer:
          "We can discuss WhatsApp business messaging integration and show the developer workspace in WACentral. The appropriate account setup, permissions, and workflow need to be reviewed for your business.",
      },
    ],
    relatedProduct: {
      name: "WACentral",
      path: "/products/wacentral/",
      text: "See the WhatsApp messaging developer workspace, with clients, phone routes, webhook configuration, and chatbot routing.",
    },
  },
  {
    path: "/services/technical-support/",
    name: "Technical support",
    title: "Software Maintenance & Technical Support | Sincerity",
    description:
      "Discuss software maintenance and technical support with Sincerity. Explore application troubleshooting, feature updates, technical review, and development support.",
    visual: "support",
    headline: "Software support. Keep your next step clear.",
    intro:
      "Maintain, troubleshoot, and improve the applications your business relies on. Tell us what needs attention and we can discuss a suitable support or development scope.",
    overviewTitle: "Support that starts with the actual issue.",
    overview:
      "An application may need a bug fixed, a feature updated, an integration reviewed, or a clearer plan for future development. We start by understanding the current setup, the impact on users, and the work you need to complete. Existing documentation, reproducible steps, and the application’s technical context help define the next action. Ongoing support can then be discussed with clear responsibilities and priorities rather than an undefined promise to cover every possible issue.",
    includes: [
      {
        title: "Application troubleshooting",
        text: "Review the reported behaviour and technical context, investigate a reproducible issue, and discuss an appropriate fix or next step.",
      },
      {
        title: "Maintenance and feature updates",
        text: "Plan agreed improvements to an existing application, from interface adjustments to changes in business functionality.",
      },
      {
        title: "Technical review",
        text: "Discuss the current application, relevant dependencies, or an integration and identify the work needed for the requirements you share.",
      },
      {
        title: "Development and team support",
        text: "Enquire about project help or dedicated technical support around the skills and work your business needs.",
      },
    ],
    examples: [
      "Resolving a recurring application issue",
      "Improving an existing customer or staff workflow",
      "Supporting an agreed sequence of maintenance and feature work",
    ],
    planning: [
      "The application and the behaviour you want to change",
      "The impact, urgency, and steps to reproduce an issue",
      "The current technical setup and support responsibilities",
    ],
    questions: [
      {
        question: "Is this the right place for product support?",
        answer:
          "If you use a Sincerity product, the Customer support link in the footer opens a product-support enquiry. This page also covers enquiries about maintenance and development work for business applications.",
      },
      {
        question: "Is round-the-clock support included?",
        answer:
          "Coverage, response arrangements, and responsibilities need to be agreed for the specific engagement. This page does not promise a universal response time or a 24-hour support service.",
      },
      {
        question: "What information should I share?",
        answer:
          "Explain the application, the issue or improvement, and any useful steps to reproduce it. Do not include passwords, access tokens, private customer records, or other confidential account information.",
      },
    ],
  },
  {
    path: "/services/whatsapp-integration/",
    name: "WhatsApp integration",
    title: "WhatsApp Business Integration Services | Sincerity",
    description:
      "Explore WhatsApp business messaging integration with Sincerity and WACentral: application connections, webhooks, managed clients, phone routes, and chatbot flows.",
    visual: "cloud-data",
    headline: "WhatsApp integration. Connected to your workflow.",
    intro:
      "Discuss how WhatsApp business messaging can connect with your application. Explore client workspaces, phone routes, webhooks, and chatbot routing through WACentral.",
    overviewTitle: "Connect the conversation to the software.",
    overview:
      "A useful messaging integration needs more than a send button. The business account setup, phone route, message flow, webhook destination, and application behaviour all need to fit together. Sincerity’s WACentral product provides a developer workspace for managed clients, phone routes, signed requests, and chatbot routing. We can walk through that workspace and discuss how your own application would connect. The scope depends on your business accounts, the required conversation flow, and the configuration available for your integration.",
    includes: [
      {
        title: "Application and webhook connections",
        text: "Review your application’s integration requirements and the HTTPS webhook destination used to receive relevant events.",
      },
      {
        title: "Managed business accounts",
        text: "Explore how WACentral organises managed client workspaces, account details, and connected phone routes.",
      },
      {
        title: "Chatbot routing and flows",
        text: "Discuss the visual chatbot workspace and the server-side, SaaS, or tenant routing options relevant to your configuration.",
      },
      {
        title: "Configuration and activity review",
        text: "Walk through the required account setup, signed integration requests, and the messaging activity views available in the workspace.",
      },
    ],
    examples: [
      "Connecting a business application to WhatsApp messaging",
      "Managing messaging configuration for downstream business clients",
      "Reviewing a chatbot conversation and its routing",
    ],
    planning: [
      "Your business messaging account and intended workflow",
      "The application, webhook, and authentication requirements",
      "The phone routes, clients, and chatbot behaviour you need",
    ],
    questions: [
      {
        question: "Is WACentral a WhatsApp integration product?",
        answer:
          "Yes. WACentral includes a developer workspace for WhatsApp messaging configuration, managed clients, phone routes, webhooks, and chatbot routing. See the product page for real interface screenshots.",
      },
      {
        question: "Will every messaging feature be available immediately?",
        answer:
          "Availability depends on the business account, completed connection setup, integration configuration, and the capabilities supported by the relevant platform. We can review the requirements during a walkthrough.",
      },
      {
        question: "Can we use our own application?",
        answer:
          "WACentral supports a configurable HTTPS webhook destination and HMAC-authenticated integration requests. Share the application’s requirements so our team can discuss the connection and setup.",
      },
    ],
    relatedProduct: {
      name: "WACentral",
      path: "/products/wacentral/",
      text: "Explore the real developer dashboard, client directory, and visual chatbot studio before arranging a walkthrough.",
    },
  },
];
