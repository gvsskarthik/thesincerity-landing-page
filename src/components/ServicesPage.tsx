import { useState } from "react";
import { ArrowRight, ArrowUpRight, Pause, Play, Plus } from "lucide-react";
import { serviceDetails } from "../data/serviceDetails";
import { products } from "../data/products";
import CapabilityStage from "./CapabilityStage";
import DeliveryStory from "./DeliveryStory";
import AnimatedServiceIcon from "./AnimatedServiceIcon";
import { sceneForPath } from "../data/serviceScene";
import "./ServicesPage.css";

type Props = { onEnquire: (service?: string) => void };
const anchors = [
  "web-apps",
  "app-development",
  "saas",
  "cloud-data",
  "support",
  "whatsapp",
];

export default function ServicesPage({ onEnquire }: Props) {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className={`services-page premium-services ${paused ? "motion-paused" : ""}`}
    >
      <nav className="container breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Sincerity</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Services</span>
      </nav>
      <section
        className="services-editorial-hero container"
        aria-labelledby="services-page-title"
      >
        <div className="services-hero-kicker">
          <p className="eyebrow">SINCERITY SERVICES</p>
          <span>INDEPENDENT THINKING. CONNECTED TECHNOLOGY.</span>
        </div>
        <h1 id="services-page-title">
          Technology that
          <br />
          <em>means business.</em>
        </h1>
        <div className="services-hero-bottom">
          <p>
            Digital experiences. Purpose-built software.
            <br />
            The connections that bring it all together.
          </p>
          <div>
            <button className="button button-dark" onClick={() => onEnquire()}>
              Let’s discuss your project
              <ArrowRight size={16} />
            </button>
            <a href="#explore-services" className="text-link">
              Explore our expertise
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="services-hero-meta">
          <span>Web & mobile · SaaS · Integrations · Support</span>
          <button
            className="motion-toggle"
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}{" "}
            {paused ? "Enable motion" : "Pause motion"}
          </button>
        </div>
      </section>
      <div className="container">
        <CapabilityStage />
      </div>
      <section
        className="expertise-section container section-space"
        aria-labelledby="expertise-title"
      >
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">OUR EXPERTISE</p>
            <h2 id="expertise-title">
              The right discipline.
              <br />
              <span>For the next challenge.</span>
            </h2>
          </div>
          <p className="section-intro">
            From a first digital presence to a connected business platform.
            Explore the work in more detail.
          </p>
        </div>
        <div className="expertise-index">
          {serviceDetails.map((service, index) => (
            <article
              className="expertise-item"
              id={anchors[index]}
              data-reveal
              key={service.path}
            >
              <div className="expertise-item-top">
                <span>0{index + 1}</span>
                <AnimatedServiceIcon
                  type={sceneForPath(service.path)}
                  size={62}
                />
              </div>
              <a className="expertise-name" href={service.path}>
                <h3>{service.name}</h3>
                <ArrowUpRight size={23} />
              </a>
              <p>{service.intro}</p>
              <div className="expertise-actions">
                <a href={service.path}>
                  Explore the service
                  <ArrowRight size={15} />
                </a>
                <button
                  onClick={() => onEnquire(service.name)}
                  aria-label={`Discuss ${service.name}`}
                >
                  Let’s talk
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        className="product-proof section-space"
        aria-labelledby="proof-title"
      >
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">PRODUCT THINKING. IN PRACTICE.</p>
              <h2 id="proof-title">
                Our own software.
                <br />
                <span>Real working interfaces.</span>
              </h2>
            </div>
            <p className="section-intro">
              Explore products built by Sincerity. Actual application screens,
              shown with demonstration data.
            </p>
          </div>
          <div className="proof-grid">
            {products.slice(0, 2).map((product) => (
              <a
                href={product.path}
                className={`proof-card proof-${product.theme}`}
                key={product.name}
                data-reveal
              >
                <div className="proof-image">
                  <img
                    src={product.screens![0].src}
                    alt={`${product.name} application overview with demonstration data`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                  />
                </div>
                <div className="proof-copy">
                  <div>
                    <p>{product.category}</p>
                    <h3>{product.name}</h3>
                  </div>
                  <span>
                    Explore product
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <DeliveryStory />
      <section
        className="collaboration-section container section-space"
        aria-labelledby="collaboration-title"
      >
        <div className="collaboration-heading" data-reveal>
          <p className="eyebrow">SINCERITY, WHEREVER YOU WORK</p>
          <h2 id="collaboration-title">
            Different time zones.
            <br />
            <span>A shared direction.</span>
          </h2>
          <p>
            For businesses in India and international clients. Start with your
            goals, location, and working hours. We can agree on the scope,
            communication, and a practical way to collaborate.
          </p>
          <a href="mailto:support@thesincerity.in" className="text-link">
            support@thesincerity.in
            <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="faq-list">
          {[
            {
              q: "Do I need a finished specification?",
              a: "No. Start with your idea or the problem your business faces. We can clarify the users, requirements, and scope with you.",
            },
            {
              q: "Can you work on an existing application?",
              a: "Share the application, its current setup, and what you need to change. We can review the requirements and discuss an appropriate approach.",
            },
            {
              q: "How do we agree on a timeline and estimate?",
              a: "Scope, complexity, integrations, and priorities shape the work. We discuss these with you before agreeing on a timeline and estimate.",
            },
            {
              q: "Can we discuss ongoing support?",
              a: "Yes. Tell us about the application and the maintenance or development help you need. We can discuss coverage, priorities, and responsibilities for your requirements.",
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
      </section>
      <section className="services-final-cta container" data-reveal>
        <p className="eyebrow">YOUR NEXT CHAPTER</p>
        <div>
          <h2>
            Let’s make
            <br />
            <em>something useful.</em>
          </h2>
          <button
            onClick={() => onEnquire()}
            className="services-circle-cta"
            aria-label="Start a project conversation"
          >
            <ArrowUpRight size={34} />
          </button>
        </div>
        <p>Bring the ambition. We’ll work through the next step together.</p>
      </section>
    </div>
  );
}
