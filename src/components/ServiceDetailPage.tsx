import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import type { ServiceDetail } from "../data/serviceDetails";
import ServiceVisual from "./ServiceVisual";
import "./SeoPages.css";

type Props = { service: ServiceDetail; onEnquire: (service: string) => void };
export default function ServiceDetailPage({ service, onEnquire }: Props) {
  return (
    <div className="service-detail-page">
      <nav className="container breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Sincerity</a>
        <span aria-hidden="true">/</span>
        <a href="/services/">Services</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{service.name}</span>
      </nav>
      <section className="container service-detail-hero">
        <div data-reveal>
          <p className="eyebrow">SINCERITY SERVICES / {service.name}</p>
          <h1>{service.headline}</h1>
          <p>{service.intro}</p>
          <p className="international-detail-note">
            For businesses in India and international clients.
          </p>
          <button
            className="button button-dark"
            onClick={() => onEnquire(service.name)}
          >
            Discuss {service.name.toLowerCase()}
            <ArrowRight size={16} />
          </button>
        </div>
        <ServiceVisual type={service.visual} />
      </section>
      <section className="service-detail-overview section-space">
        <div className="container company-layout" data-reveal>
          <h2>{service.overviewTitle}</h2>
          <p>{service.overview}</p>
        </div>
      </section>
      <section className="container section-space">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">THE WORK, DEFINED</p>
            <h2>
              What we can
              <br />
              <span>help you build.</span>
            </h2>
          </div>
          <p className="section-intro">
            The final scope is agreed around your business, users, and existing
            technology.
          </p>
        </div>
        <div className="service-detail-features">
          {service.includes.map((item, index) => (
            <article key={item.title} data-reveal>
              <span className="highlight-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="service-planning section-space">
        <div className="container">
          <div className="service-planning-columns">
            <div data-reveal>
              <p className="eyebrow">WHERE IT COULD FIT</p>
              <h2>
                Start with
                <br />
                <span>a practical use.</span>
              </h2>
              <ul>
                {service.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </div>
            <div className="planning-card" data-reveal>
              <p className="eyebrow">BEFORE WE ESTIMATE</p>
              <h3>Let’s understand the requirements.</h3>
              <p>
                These details help us discuss the approach, scope, and timeline.
              </p>
              <ol>
                {service.planning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <button
                className="text-link"
                onClick={() => onEnquire(service.name)}
              >
                Talk through your requirements
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {service.relatedProduct && (
        <aside
          className="container related-product"
          aria-label="Related Sincerity product"
          data-reveal
        >
          <div>
            <p className="eyebrow">EXPLORE OUR SOFTWARE</p>
            <h2>{service.relatedProduct.name}</h2>
            <p>{service.relatedProduct.text}</p>
          </div>
          <a className="button button-dark" href={service.relatedProduct.path}>
            Explore {service.relatedProduct.name}
            <ArrowRight size={16} />
          </a>
        </aside>
      )}
      <section className="container section-space">
        <div className="faq-layout">
          <div>
            <p className="eyebrow">USEFUL DETAILS</p>
            <h2>
              Questions about
              <br />
              <span>{service.name.toLowerCase()}.</span>
            </h2>
          </div>
          <div className="faq-list">
            {service.questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <Plus size={18} />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="container contact-section" data-reveal>
        <div className="contact-panel">
          <div>
            <p className="eyebrow">LET’S WORK THROUGH THE NEXT STEP</p>
            <h2>Tell us what you have in mind.</h2>
            <p>
              Share the problem, the idea, or the application you want to
              improve.
            </p>
          </div>
          <button
            className="button button-white"
            onClick={() => onEnquire(service.name)}
          >
            Discuss your project
            <ArrowRight size={16} />
          </button>
        </div>
        <a className="text-link service-detail-back" href="/services/">
          <ArrowLeft size={16} />
          Explore all Sincerity services
        </a>
      </section>
    </div>
  );
}
