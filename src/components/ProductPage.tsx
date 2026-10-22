import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import type { Product } from "../data/products";

type Props = { product: Product; onEnquire: () => void };

export default function ProductPage({ product, onEnquire }: Props) {
  return (
    <div className={`product-page product-page-${product.theme}`}>
      <div className="container product-subnav">
        <a className="back-link" href="/#technologies">
          <ArrowLeft size={15} />
          All products
        </a>
        <span>{product.name}</span>
        <button className="text-link" onClick={onEnquire}>
          {product.status === "Beta"
            ? "Enquire about access"
            : "Request a demo"}
          <ArrowRight size={15} />
        </button>
      </div>
      <section
        className="product-page-hero container"
        aria-labelledby="product-title"
      >
        <div className="product-page-copy">
          <p className="eyebrow">SINCERITY TECHNOLOGIES / {product.category}</p>
          <h1 id="product-title">
            {product.name}
            <span>{product.headline}</span>
          </h1>
          <p className="product-page-description">{product.description}</p>
          <button className="button button-dark" onClick={onEnquire}>
            {product.status === "Beta"
              ? "Explore beta access"
              : "Arrange a walkthrough"}
            <ArrowRight size={16} />
          </button>
          <p className="availability">
            <span
              className={
                product.status === "Beta"
                  ? "availability-dot beta-dot"
                  : "availability-dot"
              }
            />
            {product.status === "Beta"
              ? "Currently in beta"
              : "Available for product enquiries"}
          </p>
        </div>
        <div className="product-page-art">
          <img
            src={product.image}
            alt={`${product.name} product illustration`}
            width={500}
            height={500}
            fetchPriority="high"
          />
        </div>
      </section>
      <section
        className="product-overview section-space"
        id="overview"
        aria-labelledby="overview-title"
      >
        <div className="container">
          <div className="product-overview-heading">
            <p className="eyebrow">THE PRODUCT, CONSIDERED</p>
            <h2 id="overview-title">
              A clear purpose.
              <br />
              <span>A closer look.</span>
            </h2>
            <p>{product.detail}</p>
          </div>
          <div className="product-highlights">
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
      <section
        className="product-walkthrough section-space"
        aria-labelledby="walkthrough-title"
      >
        <div className="container walkthrough-layout">
          <div>
            <p className="eyebrow">EXPLORE WITH SINCERITY</p>
            <h2 id="walkthrough-title">
              See how it fits
              <br />
              <span>your business.</span>
            </h2>
          </div>
          <div>
            <p>
              Get a closer look at {product.name} with our team. Tell us what
              you need, ask your questions, and discuss the next step.
            </p>
            <button className="button button-dark" onClick={onEnquire}>
              {product.status === "Beta"
                ? "Enquire about WA Connect"
                : "Request a live walkthrough"}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      <section
        className="product-faq section-space"
        aria-labelledby="faq-title"
      >
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">A FEW USEFUL DETAILS</p>
            <h2 id="faq-title">Good questions.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>
                Who is {product.name} for?
                <Plus size={18} />
              </summary>
              <p>
                {product.name} is for {product.audience.toLowerCase()}. Contact
                us to discuss whether it fits your requirements.
              </p>
            </details>
            <details>
              <summary>
                Is the product available?
                <Plus size={18} />
              </summary>
              <p>
                {product.status === "Beta"
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
                Use the enquiry button to reach our team, or email{" "}
                <a href="mailto:contact@thesincerity.in">
                  contact@thesincerity.in
                </a>
                .
              </p>
            </details>
          </div>
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
