import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Calendar, 
  Globe, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Award, 
  Lock, 
  Sparkles,
  Compass
} from 'lucide-react';

export default function AboutPage() {
  const corporatePrinciples = [
    {
      title: 'Radical Engineering Integrity',
      desc: 'We refuse to publish inflated metrics, fake customer logos, or exaggerated capabilities. Every statement made by SINCERITY represents verified reality.'
    },
    {
      title: 'Architectural Craftsmanship',
      desc: 'We treat software design as an enduring craft. Codebases are built to be self-documenting, resilient to failure, and straightforward to maintain.'
    },
    {
      title: 'Real-World Operational Value',
      desc: 'We focus our energy on tangible problems — such as making medical laboratories run smoother or simplifying WhatsApp messaging pipelines — where software yields direct productivity gains.'
    },
    {
      title: 'Long-Term Independence',
      desc: 'As a disciplined One Person Company (OPC), SINCERITY operates with focused autonomy, prioritizing long-term engineering depth over short-term vanity hype.'
    }
  ];

  return (
    <div className="page about-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="badge-pill">CORPORATE PROFILE</span>
          <h1 className="page-title">About SINCERITY OPC Pvt Ltd</h1>
          <p className="page-subtitle max-w-2xl">
            An Indian technology enterprise dedicated to building foundational software, automation infrastructure, and intelligent systems.
          </p>
        </div>
      </section>

      {/* Corporate Metadata Table & Overview */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-story-col">
              <h2 className="section-title">The Foundation of SINCERITY</h2>
              <p className="lead-paragraph">
                SINCERITY OPC Private Limited was incorporated on <strong>18 September 2026</strong> with a singular mission: to restore sincerity, clarity, and deep engineering discipline to modern software and automation systems.
              </p>
              <p className="body-paragraph">
                In an era dominated by superficial pitch decks and inflated AI promises, SINCERITY stands for disciplined execution. We believe that true technological value is created not through extravagant marketing, but through robust, well-architected platforms that solve actual operational challenges.
              </p>
              <p className="body-paragraph">
                Our active portfolio spans healthcare diagnostics (<strong>SSDC Labs</strong>), communication infrastructure (<strong>WACentral</strong>), and conversational commerce (<strong>WA Connect</strong>). Every product we build is crafted to the highest technical standards.
              </p>

              <div className="mt-6">
                <Link to="/products" className="btn btn-primary">
                  <span>View Our Active Products</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Corporate Fact Sheet Card */}
            <div className="about-fact-col">
              <div className="card corporate-fact-sheet">
                <div className="card-header border-b pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 size={20} className="text-accent" />
                    <h3 className="card-title text-lg">Official Corporate Identity</h3>
                  </div>
                  <span className="text-xs text-muted font-mono">Government of India • MCA</span>
                </div>

                <div className="fact-rows-list">
                  <div className="fact-row">
                    <span className="fact-label">Full Legal Name</span>
                    <span className="fact-value font-bold">SINCERITY OPC Private Limited</span>
                  </div>

                  <div className="fact-row">
                    <span className="fact-label">Brand Name</span>
                    <span className="fact-value">SINCERITY</span>
                  </div>

                  <div className="fact-row">
                    <span className="fact-label">Company Type</span>
                    <span className="fact-value">One Person Company (OPC)</span>
                  </div>

                  <div className="fact-row">
                    <span className="fact-label">Country of Incorporation</span>
                    <span className="fact-value">India</span>
                  </div>

                  <div className="fact-row">
                    <span className="fact-label">Date of Incorporation</span>
                    <span className="fact-value font-bold">18 September 2026</span>
                  </div>

                  <div className="fact-row">
                    <span className="fact-label">Corporate Identification No. (CIN)</span>
                    <span className="fact-value font-mono">CIN_PLACEHOLDER</span>
                  </div>

                  <div className="fact-row">
                    <span className="fact-label">Official Domain</span>
                    <span className="fact-value">
                      <a href="https://thesincerity.in" className="text-accent hover:underline">
                        https://thesincerity.in
                      </a>
                    </span>
                  </div>

                  <div className="fact-row">
                    <span className="fact-label">Primary Contact</span>
                    <span className="fact-value font-mono">contact@thesincerity.in</span>
                  </div>
                </div>

                <div className="fact-footer-tag">
                  <ShieldCheck size={14} />
                  <span>Verified Legal Entity • Ministry of Corporate Affairs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section bg-card-surface border-t">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill">GUIDING PRINCIPLES</span>
            <h2 className="section-title">The Principles We Code By</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              How our corporate philosophy translates into everyday architectural choices.
            </p>
          </div>

          <div className="grid-2">
            {corporatePrinciples.map((cp, idx) => (
              <div key={idx} className="card principle-card">
                <div className="principle-number">0{idx + 1}</div>
                <h3 className="card-title">{cp.title}</h3>
                <p className="card-text">{cp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
