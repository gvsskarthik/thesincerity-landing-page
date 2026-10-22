import { ArrowRight } from "lucide-react";
import "./SeoPages.css";
export default function NotFoundPage() {
  return (
    <main className="not-found">
      <a href="/" className="not-found-brand">
        Sincerity
      </a>
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>
        Let’s find
        <br />
        your next step.
      </h1>
      <p>This page is no longer here, or the address may be incorrect.</p>
      <nav aria-label="Find a page">
        <a className="button button-dark" href="/">
          Sincerity home
          <ArrowRight size={16} />
        </a>
        <a href="/services/">Explore services</a>
        <a href="/#technologies">Explore products</a>
      </nav>
    </main>
  );
}
