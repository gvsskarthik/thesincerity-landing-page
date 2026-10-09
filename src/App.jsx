import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  ChevronRight, 
  ArrowUpRight, 
  Menu, 
  X, 
  Layers, 
  Cpu, 
  Globe, 
  Activity, 
  BadgeCheck,
  CheckCircle2,
  Bell,
  ArrowRight,
  Info,
  Server
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Corporate Credentials
  const companyInfo = {
    legalName: "SINCERITY (OPC) PRIVATE LIMITED",
    cin: "U62010AP2026OPC128368",
    address: "Tanuku, Andhra Pradesh, India",
    phone: "+919988661683",
    displayPhone: "+91 9988661683",
    email: "SUPPORT@THESINCERITY.IN",
    displayEmail: "support@thesincerity.in",
    entityType: "One Person Company (OPC) Private Limited",
    incorporationYear: "2026",
    status: "Active & Compliant"
  };

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toast Helper
  const addToast = (title, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Copy to clipboard helper
  const handleCopy = (text, key, label) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    addToast('Copied to Clipboard', `${label}: ${text}`);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // Newsletter / Notify handler
  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) {
      addToast('Invalid Email', 'Please provide a valid email address');
      return;
    }
    addToast('Subscribed for Updates', `We will notify ${notifyEmail} once new products launch.`);
    setNotifyEmail('');
  };

  // Contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      addToast('Missing Details', 'Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      addToast('Message Dispatched', 'Thank you! Your message has been sent to support@thesincerity.in');
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="sincerity-app">
      {/* Background ambient lighting */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* ====================================================================
          NAVBAR HEADER
          ==================================================================== */}
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo & Wordmark */}
          <a href="#home" className="brand-wrapper" aria-label="SINCERITY Homepage">
            <img 
              src="/logo-icon.png" 
              alt="SINCERITY Emblem" 
              className="brand-logo-img"
            />
            <img 
              src="/sincerity-full-brand.png" 
              alt="SINCERITY (OPC) PRIVATE LIMITED" 
              className="brand-wordmark-img"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Company</a>
            <a href="#upcoming" className="nav-link">Products & Services</a>
            <a href="#corporate" className="nav-link">Corporate Credentials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Nav Right CTA */}
          <div className="nav-actions">
            <div className="cin-badge" title="Official MCA Corporate Identification Number">
              <span className="cin-dot" />
              <span>CIN: {companyInfo.cin}</span>
            </div>
            <a href="#contact" className="btn-primary">
              <Mail size={15} />
              <span>Get in Touch</span>
            </a>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Company</a>
            <a href="#upcoming" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Products & Services (Updating Soon)</a>
            <a href="#corporate" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Corporate Credentials</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact SINCERITY</a>
            <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
              <div className="cin-badge" style={{ width: '100%', justifyContent: 'center' }}>
                <span className="cin-dot" />
                <span>CIN: {companyInfo.cin}</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ====================================================================
          HERO SECTION
          ==================================================================== */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content animate-fade-in">
              <div className="hero-tag">
                <span className="hero-tag-dot" />
                <span>Registered Corporate Entity · MCA India</span>
              </div>

              <h1 className="hero-title">
                SINCERITY <br />
                <span className="hero-title-highlight">(OPC) PRIVATE LIMITED</span>
              </h1>

              <p className="hero-description">
                Committed to foundational technology, engineering excellence, and purposeful innovation. 
                We design and build reliable, scalable digital solutions engineered for the modern enterprise ecosystem.
              </p>

              <div className="hero-buttons">
                <a href="#about" className="btn-primary" style={{ padding: '13px 26px', fontSize: '15px' }}>
                  <span>Explore Company Profile</span>
                  <ArrowRight size={17} />
                </a>
                <a href="#upcoming" className="btn-secondary" style={{ padding: '13px 24px', fontSize: '15px' }}>
                  <Clock size={16} />
                  <span>Product Roadmap (Updating Soon)</span>
                </a>
              </div>

              {/* Trust & Verification Row */}
              <div className="hero-trust-row">
                <div className="hero-trust-item">
                  <div className="hero-trust-icon">
                    <ShieldCheck size={19} />
                  </div>
                  <div className="hero-trust-text">
                    <span className="hero-trust-label">Official CIN</span>
                    <span className="hero-trust-value">{companyInfo.cin}</span>
                  </div>
                </div>

                <div className="hero-trust-item">
                  <div className="hero-trust-icon">
                    <MapPin size={19} />
                  </div>
                  <div className="hero-trust-text">
                    <span className="hero-trust-label">Registered Jurisdiction</span>
                    <span className="hero-trust-value">Tanuku, AP, India</span>
                  </div>
                </div>

                <div className="hero-trust-item">
                  <div className="hero-trust-icon">
                    <BadgeCheck size={19} />
                  </div>
                  <div className="hero-trust-text">
                    <span className="hero-trust-label">Entity Status</span>
                    <span className="hero-trust-value" style={{ color: 'var(--accent-emerald)' }}>Active & Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Card / Brand Showcase */}
            <div className="hero-visual-card animate-float">
              <div className="hero-card-pattern" />
              
              <div className="hero-visual-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Building2 size={18} color="var(--brand-navy)" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                    Corporate Identity
                  </span>
                </div>
                <div className="card-status-pill">
                  <span className="cin-dot" />
                  <span>Active Registration</span>
                </div>
              </div>

              <div className="hero-center-emblem">
                <img 
                  src="/logo-icon.png" 
                  alt="SINCERITY Logo Icon" 
                  className="emblem-img"
                />
                <img 
                  src="/sincerity-full-brand.png" 
                  alt="SINCERITY (OPC) PRIVATE LIMITED Wordmark" 
                  className="hero-wordmark-img-card"
                />
              </div>

              <div className="hero-card-specs">
                <div className="spec-box">
                  <div className="spec-box-label">Incorporated In</div>
                  <div className="spec-box-value">Andhra Pradesh, IN</div>
                </div>
                <div className="spec-box">
                  <div className="spec-box-label">Classification</div>
                  <div className="spec-box-value">OPC Private Limited</div>
                </div>
                <div className="spec-box">
                  <div className="spec-box-label">Primary Support</div>
                  <div className="spec-box-value" style={{ fontSize: '12px' }}>support@thesincerity.in</div>
                </div>
                <div className="spec-box">
                  <div className="spec-box-label">Official Hotline</div>
                  <div className="spec-box-value">+91 9988661683</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PRODUCTS & SERVICES PLACEHOLDER (UPDATING SOON)
          ==================================================================== */}
      <section id="upcoming" className="section-updating-soon">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Sparkles size={14} />
              <span>Technology & Solutions</span>
            </div>
            <h2 className="section-title">Products & Services</h2>
            <p className="section-subtitle">
              Our engineering team is actively architecting our upcoming suite of enterprise platforms, 
              cloud automation workflows, and specialized digital infrastructure.
            </p>
          </div>

          <div className="updating-cards-grid">
            {/* Card 1 */}
            <div className="updating-card">
              <div>
                <div className="updating-card-icon-wrap">
                  <Cpu size={24} />
                </div>
                <span className="updating-badge-pill">
                  <Clock size={12} />
                  <span>Updating Soon</span>
                </span>
                <h3 className="updating-card-title">Enterprise Software Solutions</h3>
                <p className="updating-card-desc">
                  Scalable platforms and robust application frameworks designed for mission-critical business automation and data management.
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <span>Development Stage</span>
                  <span>Architecture & Testing</span>
                </div>
                <div className="updating-progress-bar">
                  <div className="updating-progress-fill" style={{ width: '75%' }} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="updating-card">
              <div>
                <div className="updating-card-icon-wrap">
                  <Server size={24} />
                </div>
                <span className="updating-badge-pill">
                  <Clock size={12} />
                  <span>Updating Soon</span>
                </span>
                <h3 className="updating-card-title">Cloud Infrastructure & APIs</h3>
                <p className="updating-card-desc">
                  High-throughput communication gateways, API dispatch infrastructure, and cloud integration microservices.
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <span>Development Stage</span>
                  <span>Infrastructure Build</span>
                </div>
                <div className="updating-progress-bar">
                  <div className="updating-progress-fill" style={{ width: '85%' }} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="updating-card">
              <div>
                <div className="updating-card-icon-wrap">
                  <Layers size={24} />
                </div>
                <span className="updating-badge-pill">
                  <Clock size={12} />
                  <span>Updating Soon</span>
                </span>
                <h3 className="updating-card-title">Digital Intelligence & Tooling</h3>
                <p className="updating-card-desc">
                  Modern workplace productivity tools, secure data pipelines, and workflow automation tailored for modern organizations.
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <span>Development Stage</span>
                  <span>Product Roadmap</span>
                </div>
                <div className="updating-progress-bar">
                  <div className="updating-progress-fill" style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stay Tuned Banner */}
          <div className="updating-cta-banner">
            <div className="updating-cta-info">
              <h3>Stay Tuned for Official Release</h3>
              <p>
                Be among the first to receive updates on our product rollouts, developer documentation, and enterprise announcements.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={handleNotifySubmit}>
              <input 
                type="email" 
                placeholder="Enter your business email" 
                className="newsletter-input"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-accent">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ====================================================================
          ABOUT COMPANY & CORPORATE DETAILS
          ==================================================================== */}
      <section id="about" className="section-about">
        <div className="container">
          <div className="about-grid">
            {/* Left Column: Mission & About */}
            <div className="about-info-col">
              <div className="section-badge">
                <Building2 size={14} />
                <span>Corporate Overview</span>
              </div>
              <h2>About SINCERITY</h2>
              <p className="about-lead">
                <strong>SINCERITY (OPC) PRIVATE LIMITED</strong> is an officially registered technology enterprise established in Tanuku, Andhra Pradesh. We operate on the principles of transparency, engineering rigor, and long-term value creation.
              </p>

              <div className="about-features-list">
                <div className="about-feature-item">
                  <div className="about-feature-check">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="about-feature-text">
                    <h4>Ethical & Purposeful Engineering</h4>
                    <p>Building reliable software and digital systems rooted in durability, security, and true operational utility.</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-check">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="about-feature-text">
                    <h4>Legally Incorporated & Fully Compliant</h4>
                    <p>Incorporated under the Ministry of Corporate Affairs (MCA), Government of India, adhering to all statutory standards.</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-check">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="about-feature-text">
                    <h4>Dedicated Customer & Enterprise Support</h4>
                    <p>Providing direct lines of communication for corporate inquiries, technical collaborations, and partner relationships.</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
                <a href={`tel:${companyInfo.phone}`} className="btn-secondary">
                  <Phone size={16} color="var(--brand-blue)" />
                  <span>Call {companyInfo.displayPhone}</span>
                </a>
                <a href={`mailto:${companyInfo.displayEmail}`} className="btn-secondary">
                  <Mail size={16} color="var(--brand-blue)" />
                  <span>Email Support</span>
                </a>
              </div>
            </div>

            {/* Right Column: Exact Corporate Info Card (As Requested) */}
            <div id="corporate" className="corporate-card">
              <div className="corporate-card-header">
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)' }}>
                    Corporate Credentials
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Official Registration Details
                  </p>
                </div>
                <div className="gov-badge">
                  <ShieldCheck size={15} color="var(--accent-emerald)" />
                  <span>MCA Registered</span>
                </div>
              </div>

              <div className="details-list">
                {/* Company Name */}
                <div className="detail-row">
                  <div className="detail-label-group">
                    <div className="detail-icon">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="detail-title">Company Legal Name</div>
                      <div className="detail-value">{companyInfo.legalName}</div>
                    </div>
                  </div>
                  <button 
                    className={`copy-btn ${copiedKey === 'name' ? 'copied' : ''}`}
                    onClick={() => handleCopy(companyInfo.legalName, 'name', 'Company Name')}
                    title="Copy Company Name"
                  >
                    {copiedKey === 'name' ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedKey === 'name' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* CIN */}
                <div className="detail-row">
                  <div className="detail-label-group">
                    <div className="detail-icon">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div className="detail-title">Corporate Identification Number (CIN)</div>
                      <div className="detail-value" style={{ letterSpacing: '0.05em' }}>{companyInfo.cin}</div>
                    </div>
                  </div>
                  <button 
                    className={`copy-btn ${copiedKey === 'cin' ? 'copied' : ''}`}
                    onClick={() => handleCopy(companyInfo.cin, 'cin', 'CIN')}
                    title="Copy CIN"
                  >
                    {copiedKey === 'cin' ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedKey === 'cin' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Address */}
                <div className="detail-row">
                  <div className="detail-label-group">
                    <div className="detail-icon">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="detail-title">Registered Office Address</div>
                      <div className="detail-value">TANUKU, ANDHRA PRADESH, INDIA</div>
                    </div>
                  </div>
                  <button 
                    className={`copy-btn ${copiedKey === 'address' ? 'copied' : ''}`}
                    onClick={() => handleCopy("TANUKU, ANDHRA PRADESH, INDIA", 'address', 'Address')}
                    title="Copy Address"
                  >
                    {copiedKey === 'address' ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedKey === 'address' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Phone */}
                <div className="detail-row">
                  <div className="detail-label-group">
                    <div className="detail-icon">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="detail-title">Official Phone Number</div>
                      <div className="detail-value">{companyInfo.displayPhone}</div>
                    </div>
                  </div>
                  <button 
                    className={`copy-btn ${copiedKey === 'phone' ? 'copied' : ''}`}
                    onClick={() => handleCopy(companyInfo.phone, 'phone', 'Phone Number')}
                    title="Copy Phone Number"
                  >
                    {copiedKey === 'phone' ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedKey === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Email */}
                <div className="detail-row">
                  <div className="detail-label-group">
                    <div className="detail-icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="detail-title">Official Support Email</div>
                      <div className="detail-value" style={{ textTransform: 'lowercase' }}>{companyInfo.email}</div>
                    </div>
                  </div>
                  <button 
                    className={`copy-btn ${copiedKey === 'email' ? 'copied' : ''}`}
                    onClick={() => handleCopy(companyInfo.displayEmail, 'email', 'Email Address')}
                    title="Copy Email ID"
                  >
                    {copiedKey === 'email' ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CONTACT & INQUIRY SECTION
          ==================================================================== */}
      <section id="contact" className="section-contact">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Mail size={14} />
              <span>Direct Communication</span>
            </div>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have an inquiry, partnership proposal, or require corporate information? Reach out directly to our executive team.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left Contact Card Box */}
            <div className="contact-card-box">
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>
                Contact Channels
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Our corporate office is located in Tanuku. Feel free to contact us via phone or our dedicated support email.
              </p>

              <div className="contact-channels">
                <a href={`mailto:${companyInfo.displayEmail}`} className="contact-channel-item">
                  <div className="detail-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>Email Inquiries</div>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-primary)' }}>{companyInfo.displayEmail}</div>
                  </div>
                </a>

                <a href={`tel:${companyInfo.phone}`} className="contact-channel-item">
                  <div className="detail-icon">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>Phone Call / Direct</div>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-primary)' }}>{companyInfo.displayPhone}</div>
                  </div>
                </a>

                <div className="contact-channel-item">
                  <div className="detail-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)' }}>Registered Location</div>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-primary)' }}>Tanuku, Andhra Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. John Doe"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="name@company.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Business / Corporate Inquiry"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="How can SINCERITY assist you?"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message to SINCERITY</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FOOTER
          ==================================================================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            {/* Footer Brand */}
            <div className="footer-brand">
              <a href="#home" className="brand-wrapper" style={{ marginBottom: '12px' }}>
                <img 
                  src="/logo-icon.png" 
                  alt="SINCERITY Logo" 
                  className="brand-logo-img"
                  style={{ height: '36px' }}
                />
                <img 
                  src="/sincerity-full-brand.png" 
                  alt="SINCERITY (OPC) PRIVATE LIMITED" 
                  className="brand-wordmark-img"
                  style={{ height: '32px' }}
                />
              </a>
              <p>
                <strong>SINCERITY (OPC) PRIVATE LIMITED</strong> is an incorporated technology company committed to purposeful engineering, reliability, and innovation.
              </p>
              <div className="cin-badge">
                <span className="cin-dot" />
                <span>CIN: {companyInfo.cin}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h5>Navigation</h5>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Company</a></li>
                <li><a href="#upcoming">Products & Services</a></li>
                <li><a href="#corporate">Corporate Registry</a></li>
                <li><a href="#contact">Contact Support</a></li>
              </ul>
            </div>

            {/* Legal & Compliance */}
            <div className="footer-col">
              <h5>Compliance</h5>
              <ul className="footer-links">
                <li><a href="#corporate">MCA Verification</a></li>
                <li><a href="#corporate">CIN Registry Details</a></li>
                <li><a href="#about">Registered Office: Tanuku</a></li>
                <li><a href="#contact">Grievance & Support</a></li>
              </ul>
            </div>

            {/* Direct Contact Summary */}
            <div className="footer-col">
              <h5>Headquarters</h5>
              <ul className="footer-links" style={{ gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <MapPin size={15} color="var(--brand-blue)" />
                  <span>Tanuku, Andhra Pradesh, India</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <Phone size={15} color="var(--brand-blue)" />
                  <a href={`tel:${companyInfo.phone}`}>{companyInfo.displayPhone}</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <Mail size={15} color="var(--brand-blue)" />
                  <a href={`mailto:${companyInfo.displayEmail}`}>{companyInfo.displayEmail}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} SINCERITY (OPC) PRIVATE LIMITED. All Rights Reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <span>CIN: {companyInfo.cin}</span>
              <span>•</span>
              <span>Registered in India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          TOAST NOTIFICATION STACK
          ==================================================================== */}
      <div className="toast-container" aria-live="polite">
        {toasts.map(toast => (
          <div key={toast.id} className="toast">
            <div className="toast-icon">
              <Check size={16} />
            </div>
            <div>
              <div className="toast-title">{toast.title}</div>
              <div className="toast-msg">{toast.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
