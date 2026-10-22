import { ArrowRight, Plus } from "lucide-react";
import { services } from "../data/services";
import { serviceDetails } from "../data/serviceDetails";
import ServiceVisual from "./ServiceVisual";
import "./ServicesPage.css";

type Props = { onEnquire: (service?: string) => void };

export default function ServicesPage({ onEnquire }: Props) {
  return (
    <div className="services-page">
      <nav className="container breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Sincerity</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Services</span>
      </nav>
      <section
        className="services-hero container"
        aria-labelledby="services-page-title"
      >
        <div data-reveal>
          <p className="eyebrow">SINCERITY SERVICES</p>
          <h1 id="services-page-title">
            Your next idea.
            <br />
            <span>Let’s make it work.</span>
          </h1>
          <p className="services-hero-lead">
            Websites. Applications. Custom software. Connected systems.
            <br />
            Technology shaped around your business, wherever you work.
          </p>
          <button className="button button-dark" onClick={() => onEnquire()}>
            Discuss your project
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="services-hero-map" data-reveal>
          <span className="map-label">FROM AN IDEA TO SOMETHING USEFUL</span>
          <div className="service-map-center">
            <span className="map-orbit" />
            <span className="map-orbit second" />
            <span className="map-core">
              Your
              <br />
              next idea.
            </span>
          </div>
          <div className="service-map-links">
            {services.map((service) => (
              <a href={`#${service.id}`} key={service.id}>
                <service.icon size={22} strokeWidth={1.5} />
                <span>{service.title}</span>
                <ArrowRight size={15} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <p className="container international-note">
        For businesses in India and international clients. Tell us your
        location, working hours, and project requirements so we can agree on a
        practical way to collaborate.
      </p>
      <nav
        className="service-jump-nav container"
        aria-label="Explore our services"
      >
        {services.map((service) => (
          <a href={`#${service.id}`} key={service.id}>
            <service.icon size={17} />
            {service.title}
          </a>
        ))}
      </nav>
      <div className="service-chapters container">
        {services.map((service, index) => (
          <section
            className={`service-chapter service-theme-${service.theme}`}
            id={service.id}
            aria-labelledby={`${service.id}-title`}
            key={service.id}
            data-reveal
          >
            <div className="service-chapter-copy">
              <p className="eyebrow">
                0{index + 1} / {service.label}
              </p>
              <p className="service-chapter-name">{service.title}</p>
              <h2 id={`${service.id}-title`}>{service.headline}</h2>
              <p className="service-chapter-description">
                {service.description}
              </p>
              <ul>
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="service-outcome">{service.outcome}</p>
              <div className="service-learn-links">
                {serviceDetails
                  .filter((detail) => detail.visual === service.id)
                  .map((detail) => (
                    <a key={detail.path} href={detail.path}>
                      Explore {detail.name.toLowerCase()}
                      <ArrowRight size={14} />
                    </a>
                  ))}
              </div>
              <button
                className="text-link"
                onClick={() => onEnquire(service.title)}
              >
                Discuss{" "}
                {service.id === "support"
                  ? "your support needs"
                  : "this service"}
                <ArrowRight size={16} />
              </button>
            </div>
            <ServiceVisual type={service.id} />
          </section>
        ))}
      </div>
      <section
        className="service-process section-space"
        aria-labelledby="process-title"
      >
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">A CLEAR WAY FORWARD</p>
              <h2 id="process-title">
                Good work starts
                <br />
                <span>with understanding.</span>
              </h2>
            </div>
            <p className="section-intro">
              We begin with what your business needs, then agree on a practical
              path together.
            </p>
          </div>
          <ol className="service-process-steps">
            {[
              {
                title: "Understand",
                text: "Talk through your goals, users, existing tools, and the problem you want to solve.",
              },
              {
                title: "Define",
                text: "Agree on the scope, priorities, and approach before development begins.",
              },
              {
                title: "Build & review",
                text: "Develop the agreed work and review the experience with your team.",
              },
              {
                title: "Launch & evolve",
                text: "Prepare for launch and discuss the support or improvements you need next.",
              },
            ].map((step, index) => (
              <li key={step.title} data-reveal>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="section-space service-questions container"
        aria-labelledby="service-questions-title"
      >
        <div className="faq-layout">
          <div>
            <p className="eyebrow">LET’S MAKE THE NEXT STEP CLEAR</p>
            <h2 id="service-questions-title">Before we begin.</h2>
          </div>
          <div className="faq-list">
            {[
              {
                q: "Do I need a finished specification?",
                a: "No. Start with your idea or the problem your business faces. We can discuss the requirements and clarify the scope with you.",
              },
              {
                q: "Can you work on an existing application?",
                a: "Tell us about the application, the current setup, and what you want to change. We can review the requirements and discuss whether the work is a fit.",
              },
              {
                q: "How do I get a timeline and estimate?",
                a: "Share your requirements with our team. Scope, complexity, integrations, and priorities help us discuss a suitable approach, estimate, and timeline.",
              },
              {
                q: "Can I enquire about ongoing support?",
                a: "Yes. Use the Technical support enquiry to describe the application, the issue, or the ongoing development help you need. Please do not include passwords or private customer information.",
              },
            ].map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <Plus size={18} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-section container" data-reveal>
        <div className="contact-panel">
          <div>
            <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
            <h2>What does your business need next?</h2>
            <p>
              Tell us the idea. We’ll work through the possibilities together.
            </p>
          </div>
          <button className="button button-white" onClick={() => onEnquire()}>
            Start a conversation
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
