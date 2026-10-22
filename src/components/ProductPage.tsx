import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import ProductScreens from "./ProductScreens";
import LabCapabilities from "./LabCapabilities";
import LabUseCases from "./LabUseCases";
import type { Product } from "../data/products";

type Props = { product: Product; onEnquire: () => void };

export default function ProductPage({ product, onEnquire }: Props) {
  const lab = product.theme === "lab";
  const beta = product.status === "Beta";
  const steps = lab
    ? [
        { title: "Register", text: "Patients, tests, and packages" },
        { title: "Process", text: "Result entry and report status" },
        { title: "Report", text: "Report views, print, and sharing" },
        { title: "Reconcile", text: "Payments, dues, and accounts" },
      ]
    : [
        { title: "Connect", text: "Application and phone routes" },
        { title: "Configure", text: "Clients and webhook destination" },
        { title: "Route", text: "Conversation and chatbot flows" },
        { title: "Review", text: "Messaging activity and logs" },
      ];
  return (
    <div className={`product-page product-page-${product.theme}`}>
      <nav className="container breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Sincerity</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.name}</span>
      </nav>
      <div className="product-nav-wrap">
        <nav
          className="container product-subnav"
          aria-label={`${product.name} navigation`}
        >
          <a className="product-nav-name" href="#product-top">
            {product.name}
            {beta && <span>Beta</span>}
          </a>
          <div className="product-anchor-links">
            {product.screens && <a href="#screens">Screens</a>}
            {!beta && <a href="#workflow">Workflow</a>}
            <a href="#capabilities">Capabilities</a>
            <a href="#questions">Questions</a>
          </div>
          <button className="product-nav-cta" onClick={onEnquire}>
            {beta ? "Enquire about access" : "Request a demo"}
            <ArrowRight size={14} />
          </button>
        </nav>
      </div>
      <section
        className="product-editorial-hero container"
        id="product-top"
        aria-labelledby="product-title"
      >
        <div className="product-identity">
          <img src={product.image} alt="" width={64} height={64} />
          <div>
            <p>{product.name}</p>
            <span>
              {product.category} {beta ? "· Beta" : "by Sincerity"}
            </span>
          </div>
        </div>
        <h1 id="product-title">
          {lab ? (
            <>
              Your lab.
              <br />
              <span>Working together.</span>
            </>
          ) : beta ? (
            <>
              Closer conversations.
              <br />
              <span>New possibilities.</span>
            </>
          ) : (
            <>
              One gateway.
              <br />
              <span>Every conversation.</span>
            </>
          )}
        </h1>
        <p className="product-hero-lead">{product.description}</p>
        <div className="product-page-actions">
          <button className="button button-dark" onClick={onEnquire}>
            {beta ? "Explore beta access" : "Arrange a walkthrough"}
            <ArrowRight size={16} />
          </button>
          {product.appUrl && (
            <a
              className="text-link"
              href={product.appUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open {product.name}
              <ArrowRight size={16} />
            </a>
          )}
        </div>
        {beta && (
          <div className="beta-art">
            <img
              src={product.image}
              alt="WA Connect product illustration"
              width={500}
              height={500}
            />
          </div>
        )}
      </section>
      {lab && (
        <div className="container">
          <div className="lab-workflow-intro" data-reveal>
            <p>
              Made for medical laboratories.
              <br />
              Follow one connected patient visit.
            </p>
            <ol>
              <li>
                <span>01</span>
                <a href="#lab-registration">Register &amp; bill</a>
              </li>
              <li>
                <span>02</span>
                <a href="#lab-result-entry">Enter results</a>
              </li>
              <li>
                <span>03</span>
                <a href="#lab-reports">Prepare reports</a>
              </li>
              <li>
                <span>04</span>
                <a href="#lab-operations">Review accounts</a>
              </li>
            </ol>
          </div>
        </div>
      )}
      {product.screens && (
        <ProductScreens name={product.name} screens={product.screens} />
      )}
      {lab && <LabUseCases />}
      {!beta && !lab && (
        <section
          className="connected-section section-space"
          aria-labelledby="connected-title"
        >
          <div className="container">
            <div className="connected-heading">
              <p className="eyebrow">
                {lab
                  ? "ONE CONNECTED LAB WORKFLOW"
                  : "THE INTEGRATION, EXPLAINED"}
              </p>
              <h2 id="connected-title">
                {lab ? (
                  <>
                    Less switching.
                    <br />
                    <span>More of the whole picture.</span>
                  </>
                ) : (
                  <>
                    From your application.
                    <br />
                    <span>To your customer.</span>
                  </>
                )}
              </h2>
              <p>{product.detail}</p>
            </div>
            <ol className="workflow-path">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="path-node">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
            {!lab && (
              <div className="integration-note">
                <Check size={20} />
                <p>
                  <strong>Built for your integration.</strong> Configure an
                  HTTPS webhook destination and use HMAC-authenticated requests.
                  Phone routes, clients, and chatbot routing are managed in the
                  developer workspace.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
      {lab ? (
        <LabCapabilities />
      ) : (
        <section
          className="product-overview section-space"
          id="capabilities"
          aria-labelledby="overview-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE DETAILS THAT MAKE A DIFFERENCE</p>
                <h2 id="overview-title">
                  {beta ? "A new conversation." : "Consider the possibilities."}
                </h2>
              </div>
              <p className="section-intro">
                {beta
                  ? product.detail
                  : `Tools for ${product.audience.toLowerCase()}, connected in ${product.name}.`}
              </p>
            </div>
            <div className="product-highlights" data-reveal>
              {product.highlights.map((highlight, index) => (
                <article key={highlight.title}>
                  <span className="highlight-number">0{index + 1}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <section
        className="product-faq section-space"
        id="questions"
        aria-labelledby="faq-title"
      >
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">BEFORE YOU GET STARTED</p>
            <h2 id="faq-title">
              A little more
              <br />
              <span>clarity.</span>
            </h2>
            <p className="faq-intro">
              Have a specific workflow in mind?
              <br />
              Let’s talk it through.
            </p>
            <button className="text-link" onClick={onEnquire}>
              Ask our team
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="faq-list">
            {product.questions?.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <Plus size={18} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
            <details>
              <summary>
                Who is {product.name} for?
                <Plus size={18} />
              </summary>
              <p>
                {product.name} is for {product.audience.toLowerCase()}. Contact
                us to discuss how it fits your requirements.
              </p>
            </details>
            <details>
              <summary>
                Is the product available?
                <Plus size={18} />
              </summary>
              <p>
                {beta
                  ? "WA Connect is currently in beta. Our team can explain the current capabilities and discuss access."
                  : `${product.name} is available for product enquiries and demonstrations. Speak with us about onboarding and your specific requirements.`}
              </p>
            </details>
            <details>
              <summary>
                How can I learn more?
                <Plus size={18} />
              </summary>
              <p>
                Arrange a walkthrough with our team or email{" "}
                <a href="mailto:support@thesincerity.in">
                  support@thesincerity.in
                </a>
                .
              </p>
            </details>
          </div>
        </div>
      </section>
      <section
        className="product-walkthrough container"
        aria-labelledby="walkthrough-title"
      >
        <div className="walkthrough-panel" data-reveal>
          <img src={product.image} alt="" width={100} height={100} />
          <p className="eyebrow">YOUR NEXT STEP</p>
          <h2 id="walkthrough-title">
            {beta ? "Explore what’s next." : "See it with your team."}
          </h2>
          <p>
            Bring your questions. Explore your workflow.
            <br />
            Discover whether {product.name} is right for you.
          </p>
          <button className="button button-dark" onClick={onEnquire}>
            {beta ? "Enquire about WA Connect" : "Request a live walkthrough"}
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
      <div className="container product-return">
        <a className="text-link" href="/#technologies">
          <ArrowLeft size={16} />
          Explore all Sincerity products
        </a>
      </div>
    </div>
  );
}
