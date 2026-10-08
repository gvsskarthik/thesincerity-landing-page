import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Mail, 
  Globe, 
  ShieldCheck, 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Sparkles,
  HeartPulse,
  MessageSquareShare,
  Compass
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top-accent"></div>
      
      <div className="container footer-inner">
        <div className="footer-grid">
          {/* Brand & Corporate Overview */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="brand footer-brand">
              <span className="brand-badge">S</span>
              <div className="brand-text">
                <span className="brand-title">SINCERITY</span>
                <span className="brand-tag">OPC PVT LTD</span>
              </div>
            </Link>

            <p className="footer-desc">
              Building foundational software, communication infrastructure, and practical automated systems engineered with architectural clarity, purpose, and integrity.
            </p>

            <div className="corporate-meta-card">
              <div className="meta-row">
                <span className="meta-label">Legal Entity:</span>
                <span className="meta-val">SINCERITY OPC Pvt Ltd</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Incorporated:</span>
                <span className="meta-val">18 September 2026</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Jurisdiction:</span>
                <span className="meta-val">India (MCA Registered)</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">CIN:</span>
                <span className="meta-val font-mono">CIN_PLACEHOLDER</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">
              <Layers size={16} /> Navigation
            </h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Overview & Core</Link></li>
              <li><Link to="/products">Product Portfolio</Link></li>
              <li><Link to="/technology">Technology & Engineering</Link></li>
              <li><Link to="/vision">Long-Term Vision</Link></li>
              <li><Link to="/about">About SINCERITY</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Active Product Developments */}
          <div className="footer-col">
            <h4 className="footer-heading">
              <Sparkles size={16} /> Active Developments
            </h4>
            <ul className="footer-nav-list">
              <li>
                <a href="https://ssdclabs.online" target="_blank" rel="noopener noreferrer" className="external-item">
                  <HeartPulse size={14} className="accent-icon" />
                  <span>SSDC Labs</span>
                  <ArrowUpRight size={12} className="link-arrow" />
                </a>
                <span className="sub-note">Diagnostics & Lab Management</span>
              </li>
              <li>
                <a href="https://wa.ssdclabs.online" target="_blank" rel="noopener noreferrer" className="external-item">
                  <MessageSquareShare size={14} className="accent-icon" />
                  <span>WACentral</span>
                  <ArrowUpRight size={12} className="link-arrow" />
                </a>
                <span className="sub-note">WhatsApp API & Dispatch Engine</span>
              </li>
              <li>
                <Link to="/products" className="external-item">
                  <Compass size={14} className="accent-icon" />
                  <span>WA Connect</span>
                  <ArrowUpRight size={12} className="link-arrow" />
                </Link>
                <span className="sub-note">Commerce & Business Automation</span>
              </li>
            </ul>
          </div>

          {/* Contact & Verification */}
          <div className="footer-col">
            <h4 className="footer-heading">
              <ShieldCheck size={16} /> Contact & Inquiries
            </h4>
            <ul className="footer-nav-list contact-list">
              <li>
                <a href="mailto:contact@thesincerity.in" className="contact-link">
                  <Mail size={15} />
                  <span>contact@thesincerity.in</span>
                </a>
              </li>
              <li>
                <a href="https://thesincerity.in" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Globe size={15} />
                  <span>https://thesincerity.in</span>
                </a>
              </li>
              <li className="location-item">
                <Building2 size={15} />
                <span>Incorporated in India • One Person Company</span>
              </li>
            </ul>

            <div className="verification-pill">
              <ShieldCheck size={14} />
              <span>Zero Fabricated Data Standard</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} <strong>SINCERITY OPC Pvt Ltd</strong>. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/about">Corporate Structure</Link>
            <span className="sep">•</span>
            <Link to="/vision">Engineering Principles</Link>
            <span className="sep">•</span>
            <Link to="/contact">Official Communications</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
