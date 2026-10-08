import React, { useState } from 'react';
import { 
  Mail, 
  Globe, 
  Building2, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  MessageSquare, 
  Clock,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'product_inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const faqs = [
    {
      q: 'What is SINCERITY OPC Pvt Ltd?',
      a: 'SINCERITY is an Indian technology company incorporated on 18 September 2026. We focus on building foundational software platforms, WhatsApp communication infrastructure, and automated systems.'
    },
    {
      q: 'Are SSDC Labs and WACentral currently live?',
      a: 'Both SSDC Labs (ssdclabs.online) and WACentral (wa.ssdclabs.online) are in active engineering development. You can explore their live interfaces and documentation directly through their dedicated domains.'
    },
    {
      q: 'How can our laboratory or business integrate with your platforms?',
      a: 'You can submit an inquiry via the form on this page or email contact@thesincerity.in with your operational requirements.'
    },
    {
      q: 'Does SINCERITY offer custom software engineering or advisory?',
      a: 'We selectively collaborate on mission-critical software architectures, high-volume messaging gateways, and healthcare automation pipelines.'
    }
  ];

  return (
    <div className="page contact-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="badge-pill">OFFICIAL COMMUNICATIONS</span>
          <h1 className="page-title">Contact SINCERITY OPC Pvt Ltd</h1>
          <p className="page-subtitle max-w-2xl">
            Reach out for product inquiries, architectural collaborations, or general questions regarding our technology platforms.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Contact Form */}
            <div className="card contact-form-card">
              <h2 className="card-title text-xl mb-2">Send an Official Message</h2>
              <p className="card-text mb-6">
                Fill out the details below. Messages are routed directly to our engineering and corporate team.
              </p>

              {isSubmitted ? (
                <div className="form-success-box">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={32} className="text-success" />
                  </div>
                  <h3 className="text-lg font-bold">Message Transmitted Successfully</h3>
                  <p className="text-sm text-muted my-2">
                    Thank you for reaching out to SINCERITY OPC Pvt Ltd. Our team will review your inquiry and follow up at <strong>{formData.email}</strong>.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'product_inquiry', message: '' });
                    }}
                    className="btn btn-sm btn-secondary mt-4"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name / Organization *</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Kumar or Apex Diagnostic Labs"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Official Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@example.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject / Inquiry Area *</label>
                    <select 
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-select"
                    >
                      <option value="product_inquiry">SSDC Labs / Diagnostic Software Inquiry</option>
                      <option value="wacentral_api">WACentral / WhatsApp API Integration</option>
                      <option value="waconnect_commerce">WA Connect / Commerce Automation</option>
                      <option value="corporate">Corporate & Legal Communications</option>
                      <option value="other">General Engineering Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message Description *</label>
                    <textarea 
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your workflow, platform questions, or technical integration requirements..."
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Transmitting Message...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact & Details */}
            <div className="contact-details-col">
              <div className="card direct-info-card mb-6">
                <h3 className="card-title text-lg mb-4">Official Contact Channels</h3>

                <div className="direct-channels-list">
                  <div className="channel-item">
                    <div className="channel-icon-box">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="channel-title">Corporate Inquiries</div>
                      <a href="mailto:contact@thesincerity.in" className="channel-value">
                        contact@thesincerity.in
                      </a>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon-box">
                      <Globe size={18} />
                    </div>
                    <div>
                      <div className="channel-title">Primary Domain</div>
                      <a href="https://thesincerity.in" target="_blank" rel="noopener noreferrer" className="channel-value">
                        https://thesincerity.in
                      </a>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon-box">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <div className="channel-title">Corporate Entity</div>
                      <div className="channel-value text-muted">
                        SINCERITY OPC Pvt Ltd (India)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card response-guarantee-card">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={18} className="text-accent" />
                  <h4 className="font-bold text-sm">Response Timeframe</h4>
                </div>
                <p className="text-xs text-muted">
                  Official communications received at <strong>contact@thesincerity.in</strong> are reviewed by our core engineering team within 24–48 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section bg-card-surface border-t">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Common Questions Regarding SINCERITY</h2>
          </div>

          <div className="faq-grid max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card faq-card">
                <h4 className="faq-q font-bold mb-2 flex items-start gap-2">
                  <HelpCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="faq-a text-muted text-sm pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
