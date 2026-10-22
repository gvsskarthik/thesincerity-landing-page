import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Loader2,
  Menu,
  MessageCircle,
  Microscope,
  X,
} from "lucide-react";
import SincerityLogo from "./SincerityLogo";
import SincerityWordmark from "./SincerityWordmark";
import "./ExplorePage.css";

type Product = {
  name: string;
  category: string;
  status: string;
  description: string;
  detail: string;
  audience: string;
  icon: typeof Microscope;
  theme: string;
};

const products: Product[] = [
  {
    name: "Optimedicate",
    category: "LAB MANAGEMENT",
    status: "Available",
    description: "Software for the everyday work of medical laboratories.",
    detail:
      "Optimedicate (SSDC) is our medical laboratory management product. Speak with our team to see the product in action and discuss how it fits your laboratory’s workflow.",
    audience: "For medical laboratories",
    icon: Microscope,
    theme: "lab",
  },
  {
    name: "WACentral",
    category: "BUSINESS MESSAGING",
    status: "Available",
    description: "Connect WhatsApp messaging to your business software.",
    detail:
      "WACentral is our WhatsApp API gateway. Request a walkthrough to explore business messaging integration and discuss your requirements with our team.",
    audience: "For businesses and developers",
    icon: MessageCircle,
    theme: "messaging",
  },
  {
    name: "WA Connect",
    category: "COMMUNICATION",
    status: "Beta",
    description: "A simpler way to bring your business conversations together.",
    detail:
      "WA Connect is our business communication product, currently in beta. Contact us to learn about its current capabilities and enquire about beta access.",
    audience: "For business communication",
    icon: MessageCircle,
    theme: "connect",
  },
];

const services = [
  {
    title: "Websites & applications",
    text: "Web and mobile applications shaped around the way your business works.",
  },
  {
    title: "Custom SaaS development",
    text: "Turn a business idea or internal workflow into a dedicated software platform.",
  },
  {
    title: "Cloud & data systems",
    text: "Connect your applications, manage your data, and support your cloud infrastructure.",
  },
  {
    title: "Technical support",
    text: "Ongoing development, maintenance, and guidance for your technology.",
  },
];

const enquiryTopics = {
  careers: {
    title: "Careers at Sincerity",
    intro:
      "Tell us about your experience, interests, and the kind of role you’re looking for. Contact us to enquire about current opportunities.",
  },
  hiring: {
    title: "Find technical help for your business.",
    intro:
      "Tell us about the skills, team support, or project expertise your business needs. We’ll discuss how Sincerity Services can help.",
  },
  support: {
    title: "How can we help?",
    intro:
      "Tell us which product or service you need help with and describe the issue. Please don’t include passwords or other sensitive account details.",
  },
  media: {
    title: "News & media enquiries",
    intro:
      "Contact Sincerity for company updates, press information, and media enquiries.",
  },
};

const copyrightYear = new Date().getFullYear();

type Enquiry =
  | { kind: "product"; product: Product }
  | { kind: "business"; service?: string; topic?: keyof typeof enquiryTopics };

export default function ExplorePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [detail, setDetail] = useState<Product | null>(null);
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const pendingRequest = useRef<AbortController | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const modalOpen = Boolean(detail || enquiry);
  const enquiryTopic =
    enquiry?.kind === "business" && enquiry.topic
      ? enquiryTopics[enquiry.topic]
      : null;

  useEffect(() => {
    if (!modalOpen) return;
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    const keepFocusInDialog = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !element) return;
      const controls = Array.from(
        element.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]):not([tabindex="-1"]), textarea:not([disabled])',
        ),
      ).filter((control) => control.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first || !last) return;
      if (
        event.shiftKey &&
        (document.activeElement === first ||
          document.activeElement === element.querySelector("h2"))
      ) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    element?.addEventListener("keydown", keepFocusInDialog);
    return () => {
      element?.removeEventListener("keydown", keepFocusInDialog);
      element?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [modalOpen]);

  useEffect(() => {
    const element = dialog.current;
    if (!element?.open) return;
    const target =
      element.querySelector<HTMLElement>('input:not([tabindex="-1"])') ||
      element.querySelector<HTMLElement>("h2");
    target?.focus();
  }, [detail, enquiry, sent]);

  useEffect(() => () => pendingRequest.current?.abort(), []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  const closeDialog = () => {
    pendingRequest.current?.abort();
    pendingRequest.current = null;
    setSending(false);
    setDetail(null);
    setEnquiry(null);
  };

  const openEnquiry = (next: Enquiry) => {
    setDetail(null);
    setError("");
    setSent(false);
    setEnquiry(next);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    const form = new FormData(event.currentTarget);
    const controller = new AbortController();
    pendingRequest.current = controller;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    setSending(true);
    setError("");
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contact@thesincerity.in",
        {
          method: "POST",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.get("name"),
            email: form.get("email"),
            company: form.get("company"),
            topic:
              enquiry?.kind === "business"
                ? enquiry.topic || "general"
                : "product",
            message: form.get("message"),
            product:
              enquiry?.kind === "product"
                ? enquiry.product.name
                : enquiry?.service || "Business enquiry",
            _subject:
              enquiry?.kind === "product"
                ? `Product enquiry: ${enquiry.product.name}`
                : enquiryTopic
                  ? `Sincerity enquiry: ${enquiryTopic.title}`
                  : "Sincerity business enquiry",
            _honey: form.get("website"),
          }),
        },
      );
      if (!response.ok) throw new Error("Submission failed");
      const data: { success?: boolean | string } = await response.json();
      if (data.success !== true && data.success !== "true")
        throw new Error("Submission not confirmed");
      if (pendingRequest.current === controller) setSent(true);
    } catch {
      if (pendingRequest.current === controller)
        setError(
          "We couldn’t confirm your message was sent. Please try again, or email contact@thesincerity.in.",
        );
    } finally {
      window.clearTimeout(timeout);
      if (pendingRequest.current === controller) {
        setSending(false);
        pendingRequest.current = null;
      }
    }
  };

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Sincerity home"
            onClick={() => setMenuOpen(false)}
          >
            <SincerityLogo size={34} />
            <SincerityWordmark width={138} />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#technologies">Technologies</a>
            <a href="#services">Services</a>
            <a href="#company">Company</a>
          </nav>
          <div className="header-actions">
            <button
              className="button button-dark header-contact"
              onClick={() => openEnquiry({ kind: "business" })}
            >
              Let’s talk <ArrowRight size={15} />
            </button>
            <button
              className="menu-toggle"
              ref={menuButton}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <a href="#technologies" onClick={() => setMenuOpen(false)}>
            Technologies <ArrowRight size={17} />
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services <ArrowRight size={17} />
          </a>
          <a href="#company" onClick={() => setMenuOpen(false)}>
            Company <ArrowRight size={17} />
          </a>
          <button
            onClick={() => {
              setMenuOpen(false);
              openEnquiry({ kind: "business" });
            }}
          >
            Contact Sincerity <ArrowRight size={17} />
          </button>
        </nav>
      </header>

      <main id="main">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-card">
              <div
                className="hero-brand"
                aria-label="Sincerity OPC Private Limited"
              >
                <SincerityLogo size="var(--hero-logo-size)" />
                <SincerityWordmark width="100%" />
              </div>
              <div className="hero-copy">
                <h1 id="hero-title">
                  Technology.
                  <br />
                  <span>Built with purpose.</span>
                </h1>
                <p>
                  We build SaaS products, AI applications, and communication
                  platforms, alongside technology services for businesses.
                </p>
                <div className="hero-actions">
                  <a className="button button-dark" href="#technologies">
                    Explore Products <ArrowRight size={16} />
                  </a>
                  <a className="text-link" href="#services">
                    Explore Services <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
            <nav className="division-cards" aria-label="Explore Sincerity">
              <a className="division-card" href="#technologies">
                <span className="division-number" aria-hidden="true">
                  01
                </span>
                <div className="division-copy">
                  <h2>Sincerity Technologies</h2>
                  <p>Explore our SaaS, AI, and communication products.</p>
                  <span className="division-action">
                    Explore Technologies <ArrowRight size={16} />
                  </span>
                </div>
              </a>
              <a className="division-card" href="#services">
                <span className="division-number" aria-hidden="true">
                  02
                </span>
                <div className="division-copy">
                  <h2>Sincerity Services</h2>
                  <p>
                    Technology services to help your business build, connect,
                    and grow.
                  </p>
                  <span className="division-action">
                    Explore Services <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            </nav>
          </div>
        </section>

        <section
          className="technologies-section section-space"
          id="technologies"
          aria-labelledby="technologies-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SINCERITY TECHNOLOGIES</p>
                <h2 id="technologies-title">
                  Ideas brought to life.
                  <br />
                  <span>Products built to be useful.</span>
                </h2>
              </div>
              <p className="section-intro">
                Discover our software and communication products. Find what fits
                your work, and take a closer look.
              </p>
            </div>
            <div className="product-grid" id="products">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <article
                    className={`product-card product-${product.theme}`}
                    key={product.name}
                  >
                    <div className="product-identity" aria-hidden="true">
                      <div className="product-identity-top">
                        <span>{product.category}</span>
                        <span className="product-number">0{index + 1}</span>
                      </div>
                      <div className="product-symbol">
                        <Icon size={44} strokeWidth={1.35} />
                      </div>
                      <div className="product-identity-bottom">
                        <span>{product.name}</span>
                        <ChevronRight size={22} strokeWidth={1.3} />
                      </div>
                    </div>
                    <div className="product-body">
                      <div className="product-heading">
                        <h3>{product.name}</h3>
                        <span
                          className={`status ${product.status === "Beta" ? "status-beta" : ""}`}
                        >
                          {product.status}
                        </span>
                      </div>
                      <p>{product.description}</p>
                      <span className="product-audience">
                        {product.audience}
                      </span>
                      <button
                        className="text-link product-link"
                        onClick={() => setDetail(product)}
                      >
                        Explore {product.name} <ArrowRight size={16} />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="product-note">
              Interested in a product? Explore the details or{" "}
              <button
                className="inline-link"
                onClick={() => openEnquiry({ kind: "business" })}
              >
                start a conversation with us
              </button>
              .
            </p>
          </div>
        </section>

        <section
          className="services-section section-space"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="container services-layout">
            <div className="services-intro">
              <p className="eyebrow">SINCERITY SERVICES</p>
              <h2 id="services-title">
                Your business.
                <br />
                Our technical expertise.
              </h2>
              <p>
                Have something to build, connect, or improve? We work with
                businesses to turn their requirements into practical technology.
              </p>
              <button
                className="button button-dark"
                onClick={() => openEnquiry({ kind: "business" })}
              >
                Discuss your project <ArrowRight size={16} />
              </button>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article className="service-row" key={service.title}>
                  <span className="service-index">0{index + 1}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <button
                    className="service-action"
                    aria-label={`Enquire about ${service.title}`}
                    onClick={() =>
                      openEnquiry({ kind: "business", service: service.title })
                    }
                  >
                    <ArrowRight size={20} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="company-section section-space"
          id="company"
          aria-labelledby="company-title"
        >
          <div className="container company-layout">
            <div>
              <p className="eyebrow">THE COMPANY BEHIND THE TECHNOLOGY</p>
              <h2 id="company-title">
                Built with thought.
                <br />
                <span>Made with Sincerity.</span>
              </h2>
            </div>
            <div className="company-copy">
              <p className="company-lead">
                We’re a technology company bringing together our own products
                and services for businesses.
              </p>
              <p>
                Through Sincerity Technologies, we develop software, SaaS, AI,
                and communication products. Through Sincerity Services, we help
                businesses build and support their technology.
              </p>
              <a className="text-link" href="mailto:contact@thesincerity.in">
                Get to know us <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <div className="contact-panel">
              <div>
                <p className="eyebrow">LET’S START A CONVERSATION</p>
                <h2 id="contact-title">What would you like to build?</h2>
                <p>
                  Explore a product, discuss a project, or simply get in touch.
                </p>
              </div>
              <button
                className="button button-white"
                onClick={() => openEnquiry({ kind: "business" })}
              >
                Talk to Sincerity <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a className="brand" href="#top" aria-label="Sincerity home">
                <SincerityLogo size={32} />
                <SincerityWordmark width={140} />
              </a>
              <p>Technology. Built with purpose.</p>
            </div>
            <nav
              className="footer-column"
              aria-label="Products and technologies"
            >
              <h3>Technologies</h3>
              <a href="#technologies">Our products</a>
              {products.map((product) => (
                <button key={product.name} onClick={() => setDetail(product)}>
                  {product.name}
                </button>
              ))}
              <button
                onClick={() =>
                  openEnquiry({ kind: "business", service: "AI & Research" })
                }
              >
                AI &amp; Research
              </button>
              <button
                onClick={() =>
                  openEnquiry({ kind: "business", service: "Cloud & SaaS" })
                }
              >
                Cloud &amp; SaaS
              </button>
            </nav>
            <nav className="footer-column" aria-label="Business services">
              <h3>Services</h3>
              <button
                onClick={() =>
                  openEnquiry({ kind: "business", service: "Web development" })
                }
              >
                Web development
              </button>
              <button
                onClick={() =>
                  openEnquiry({ kind: "business", service: "App development" })
                }
              >
                App development
              </button>
              <button
                onClick={() =>
                  openEnquiry({ kind: "business", service: "SaaS development" })
                }
              >
                SaaS development
              </button>
              <button
                onClick={() =>
                  openEnquiry({ kind: "business", service: "Data management" })
                }
              >
                Data management
              </button>
              <button
                onClick={() =>
                  openEnquiry({
                    kind: "business",
                    service: "Project support",
                    topic: "support",
                  })
                }
              >
                Project support
              </button>
              <button
                onClick={() =>
                  openEnquiry({
                    kind: "business",
                    service: "Hiring & dedicated teams",
                    topic: "hiring",
                  })
                }
              >
                Hiring &amp; dedicated teams
              </button>
            </nav>
            <nav className="footer-column" aria-label="Company and help">
              <h3>Company &amp; help</h3>
              <a href="#company">About Sincerity</a>
              <button
                onClick={() =>
                  openEnquiry({
                    kind: "business",
                    service: "Career opportunities",
                    topic: "careers",
                  })
                }
              >
                Careers at Sincerity
              </button>
              <button
                onClick={() =>
                  openEnquiry({
                    kind: "business",
                    service: "News & media",
                    topic: "media",
                  })
                }
              >
                News &amp; media
              </button>
              <button
                onClick={() =>
                  openEnquiry({
                    kind: "business",
                    service: "Customer support",
                    topic: "support",
                  })
                }
              >
                Customer support
              </button>
              <a href="/privacy/">Privacy policy</a>
              <button onClick={() => openEnquiry({ kind: "business" })}>
                Contact us
              </button>
            </nav>
            <div className="footer-contact">
              <span>Start a conversation</span>
              <a href="mailto:contact@thesincerity.in">
                contact@thesincerity.in <ArrowRight size={14} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {copyrightYear} Sincerity (OPC) Private Limited</span>
            <div className="footer-bottom-links">
              <a href="/privacy/">Privacy policy</a>
              <span>India</span>
            </div>
          </div>
        </div>
      </footer>

      {modalOpen && (
        <dialog
          ref={dialog}
          className="enquiry-dialog"
          aria-labelledby="dialog-title"
          onCancel={(event) => {
            event.preventDefault();
            closeDialog();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              const bounds = event.currentTarget.getBoundingClientRect();
              if (
                event.clientX < bounds.left ||
                event.clientX > bounds.right ||
                event.clientY < bounds.top ||
                event.clientY > bounds.bottom
              )
                closeDialog();
            }
          }}
        >
          <button
            className="dialog-close"
            aria-label="Close dialog"
            onClick={closeDialog}
          >
            <X size={21} />
          </button>
          {detail ? (
            <div className="product-detail">
              <p className="eyebrow">
                SINCERITY TECHNOLOGIES · {detail.status.toUpperCase()}
              </p>
              <h2 id="dialog-title" tabIndex={-1}>
                {detail.name}
              </h2>
              <p className="detail-lead">{detail.description}</p>
              <p>{detail.detail}</p>
              <div className="detail-audience">
                <Check size={17} />
                {detail.audience}
              </div>
              <button
                className="button button-dark"
                onClick={() =>
                  openEnquiry({ kind: "product", product: detail })
                }
              >
                {detail.status === "Beta"
                  ? "Enquire about beta access"
                  : "Request a product demo"}
                <ArrowRight size={16} />
              </button>
            </div>
          ) : sent ? (
            <div className="success-state">
              <CheckCircle2 size={44} strokeWidth={1.5} />
              <p className="eyebrow">MESSAGE SENT</p>
              <h2 id="dialog-title" tabIndex={-1}>
                Thanks for reaching out.
              </h2>
              <p>
                Your message has been submitted. Our team will reply to the
                email address you provided.
              </p>
              <button className="button button-dark" onClick={closeDialog}>
                Back to Sincerity
              </button>
            </div>
          ) : (
            <>
              <p className="eyebrow">
                {enquiry?.kind === "product"
                  ? "PRODUCT ENQUIRY"
                  : enquiry?.kind === "business" && enquiry.topic === "careers"
                    ? "WORK WITH US"
                    : "SINCERITY SERVICES & GENERAL ENQUIRIES"}
              </p>
              <h2 id="dialog-title" tabIndex={-1}>
                {enquiry?.kind === "product"
                  ? `Let’s explore ${enquiry.product.name}.`
                  : enquiryTopic?.title || "Tell us what you have in mind."}
              </h2>
              <p className="dialog-intro">
                {enquiry?.kind === "product"
                  ? "Leave your details and we’ll get in touch to discuss the product."
                  : enquiryTopic?.intro ||
                    "Share a little about your business or project. We’ll take it from there."}
              </p>
              <form onSubmit={submit} aria-busy={sending}>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="enquiry-name">
                      Your name <span>(required)</span>
                    </label>
                    <input
                      id="enquiry-name"
                      name="name"
                      autoComplete="name"
                      maxLength={120}
                      required
                      disabled={sending}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="enquiry-email">
                      Email address <span>(required)</span>
                    </label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      required
                      disabled={sending}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="enquiry-company">
                    {enquiry?.kind === "business" && enquiry.topic === "careers"
                      ? "Portfolio or profile link"
                      : "Company"}{" "}
                    <span>(optional)</span>
                  </label>
                  <input
                    id="enquiry-company"
                    name="company"
                    autoComplete={
                      enquiry?.kind === "business" &&
                      enquiry.topic === "careers"
                        ? "url"
                        : "organization"
                    }
                    maxLength={160}
                    disabled={sending}
                  />
                </div>
                {enquiry?.kind === "business" && enquiry.service && (
                  <p className="service-context">
                    Regarding: <strong>{enquiry.service}</strong>
                  </p>
                )}
                <div className="form-field">
                  <label htmlFor="enquiry-message">
                    {enquiry?.kind === "product"
                      ? "What would you like to know?"
                      : enquiry?.kind === "business" &&
                          enquiry.topic === "careers"
                        ? "Tell us about yourself"
                        : "How can we help?"}{" "}
                    <span>(required)</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    name="message"
                    rows={4}
                    maxLength={5000}
                    required
                    disabled={sending}
                  />
                </div>
                <div className="honeypot" aria-hidden="true">
                  <label htmlFor="enquiry-website">Leave this empty</label>
                  <input
                    id="enquiry-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                {error && (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="button button-dark form-submit"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <Loader2 size={17} className="spinner" />
                      Sending message…
                    </>
                  ) : (
                    <>
                      Send{" "}
                      {enquiry?.kind === "product"
                        ? "product enquiry"
                        : "message"}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="form-note">
                  We’ll use your details to respond to your enquiry. Prefer
                  email?{" "}
                  <a href="mailto:contact@thesincerity.in">
                    contact@thesincerity.in
                  </a>
                </p>
              </form>
            </>
          )}
        </dialog>
      )}
    </div>
  );
}
