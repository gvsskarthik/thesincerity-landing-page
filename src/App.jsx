import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Terminal, 
  Cpu, 
  Layers, 
  Server, 
  ShieldCheck, 
  Zap, 
  Send, 
  RefreshCw, 
  ExternalLink, 
  CheckCircle2, 
  HeartPulse, 
  MessageSquare, 
  ShoppingCart, 
  ChevronRight, 
  Copy, 
  Check, 
  Globe, 
  BarChart3, 
  Code2, 
  Building2, 
  Search, 
  Bell, 
  ArrowUpRight, 
  Sparkles,
  Menu,
  X,
  Database,
  Lock,
  Mail,
  Sliders,
  Award,
  Clock,
  Compass,
  FileText,
  HelpCircle,
  PhoneCall,
  UserCheck
} from 'lucide-react';

export default function App() {
  // Navigation State
  const [activeSection, setActiveSection] = useState('overview'); // 'overview' | 'products' | 'architecture' | 'telemetry' | 'corporate' | 'contact'
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Product Tab State
  const [activeProductTab, setActiveProductTab] = useState('ssdc'); // 'ssdc' | 'wacentral' | 'waconnect'

  // SSDC Labs Diagnostic State
  const [patientName, setPatientName] = useState('Johnathan Doe');
  const [hbLevel, setHbLevel] = useState(13.8);
  const [glucose, setGlucose] = useState(98);
  const [cholesterol, setCholesterol] = useState(175);
  const [isCompilingReport, setIsCompilingReport] = useState(false);
  const [reportTimestamp, setReportTimestamp] = useState('11:42:09 AM');

  // WACentral API State
  const [recipientNumber, setRecipientNumber] = useState('+91 98765 43210');
  const [dispatchStatus, setDispatchStatus] = useState('idle'); // 'idle' | 'sending' | 'delivered'
  const [apiLanguage, setApiLanguage] = useState('curl'); // 'curl' | 'node' | 'python'
  const [copiedCode, setCopiedCode] = useState(false);
  const [gatewayLogs, setGatewayLogs] = useState([
    { id: 1, time: '23:30:12', method: 'POST', endpoint: '/v1/webhook/verify', status: '200 OK', latency: '12ms' },
    { id: 2, time: '23:31:05', method: 'POST', endpoint: '/v1/dispatch/template', status: '202 Accepted', latency: '19ms' },
    { id: 3, time: '23:32:40', method: 'GET', endpoint: '/v1/system/health', status: '200 OK', latency: '8ms' },
  ]);

  // WA Connect State
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Comprehensive Health Screening Matrix', price: 1499, qty: 1 },
    { id: 2, name: 'Glycated Hemoglobin (HbA1c) Profile', price: 650, qty: 1 }
  ]);
  const [orderSent, setOrderSent] = useState(false);

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Live Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0] + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSimulateReport = () => {
    setIsCompilingReport(true);
    setTimeout(() => {
      setIsCompilingReport(false);
      setReportTimestamp(new Date().toLocaleTimeString());
    }, 600);
  };

  const handleSimulateDispatch = () => {
    setDispatchStatus('sending');
    setTimeout(() => {
      setDispatchStatus('delivered');
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      setGatewayLogs(prev => [
        { 
          id: Date.now(), 
          time: timeStr, 
          method: 'POST', 
          endpoint: `/v1/messages/outbound?to=${recipientNumber}`, 
          status: '200 OK', 
          latency: `${Math.floor(Math.random() * 12) + 8}ms` 
        },
        ...prev
      ]);
      setTimeout(() => setDispatchStatus('idle'), 3500);
    }, 800);
  };

  const codeSnippets = {
    curl: `curl -X POST https://api.thesincerity.in/v1/dispatch \\
  -H "Authorization: Bearer sk_live_sincerity_982a1" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "whatsapp",
    "recipient": "${recipientNumber}",
    "template": "clinical_diagnostic_dispatch",
    "parameters": {
      "patient_name": "${patientName}",
      "status": "Verified",
      "timestamp": "${reportTimestamp}"
    }
  }'`,
    node: `import { SincerityClient } from '@sincerity/sdk';

const client = new SincerityClient({
  apiKey: process.env.SINCERITY_API_KEY
});

const response = await client.dispatch.send({
  channel: 'whatsapp',
  recipient: '${recipientNumber}',
  template: 'clinical_diagnostic_dispatch',
  parameters: {
    patient_name: '${patientName}',
    status: 'Verified',
    timestamp: '${reportTimestamp}'
  }
});

console.log('Dispatch Confirmed:', response.id);`,
    python: `from sincerity import SincerityClient

client = SincerityClient(api_key="sk_live_sincerity_982a1")

response = client.dispatch.send(
    channel="whatsapp",
    recipient="${recipientNumber}",
    template="clinical_diagnostic_dispatch",
    parameters={
        "patient_name": "${patientName}",
        "status": "Verified",
        "timestamp": "${reportTimestamp}"
    }
)

print(f"Message Status: {response.status}")`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[apiLanguage]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const totalCart = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="app-container light-theme">
      {/* Top Navbar */}
      <header className="navbar-top">
        <div className="navbar-container">
          <div className="navbar-left">
            <button 
              className="sidebar-toggle-btn"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              aria-label="Toggle Navigation Sidebar"
            >
              {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="navbar-brand-link" onClick={() => setActiveSection('overview')}>
              <img 
                src="/logo-icon.png" 
                alt="SINCERITY Logo Icon" 
                className="navbar-brand-icon"
              />
              <div className="navbar-brand-titles">
                <span className="brand-primary-name">SINCERITY</span>
                <span className="brand-legal-suffix">OPC PRIVATE LIMITED</span>
              </div>
            </div>
          </div>

          <div className="navbar-center">
            <div className="navbar-status-pill">
              <span className="live-status-dot"></span>
              <span className="status-text-bold">SYSTEMS OPERATIONAL</span>
              <span className="status-sep">|</span>
              <span className="status-meta">99.99% Uptime SLA</span>
            </div>
          </div>

          <div className="navbar-right">
            <div className="time-display-pill font-mono">
              <Clock size={14} className="text-primary-blue" />
              <span>{currentTime || '00:00:00 IST'}</span>
            </div>

            <button 
              className="btn-header-cta"
              onClick={() => setActiveSection('contact')}
            >
              <Mail size={14} />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout: Sidebar + Content */}
      <div className="app-layout-body">
        {/* Left Professional Sidebar */}
        <aside className={`app-sidebar ${mobileSidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-scrollable-area">
            
            {/* Quick Navigation Group */}
            <div className="sidebar-group">
              <div className="sidebar-group-header">NAVIGATION</div>
              <nav className="sidebar-nav-list">
                <button 
                  className={`sidebar-nav-btn ${activeSection === 'overview' ? 'active' : ''}`}
                  onClick={() => { setActiveSection('overview'); setMobileSidebarOpen(false); }}
                >
                  <Layers size={17} />
                  <span>Executive Overview</span>
                </button>
                <button 
                  className={`sidebar-nav-btn ${activeSection === 'products' ? 'active' : ''}`}
                  onClick={() => { setActiveSection('products'); setMobileSidebarOpen(false); }}
                >
                  <Cpu size={17} />
                  <span>Proprietary Products</span>
                </button>
                <button 
                  className={`sidebar-nav-btn ${activeSection === 'architecture' ? 'active' : ''}`}
                  onClick={() => { setActiveSection('architecture'); setMobileSidebarOpen(false); }}
                >
                  <Code2 size={17} />
                  <span>Architecture & Stack</span>
                </button>
                <button 
                  className={`sidebar-nav-btn ${activeSection === 'telemetry' ? 'active' : ''}`}
                  onClick={() => { setActiveSection('telemetry'); setMobileSidebarOpen(false); }}
                >
                  <BarChart3 size={17} />
                  <span>System Telemetry</span>
                </button>
                <button 
                  className={`sidebar-nav-btn ${activeSection === 'corporate' ? 'active' : ''}`}
                  onClick={() => { setActiveSection('corporate'); setMobileSidebarOpen(false); }}
                >
                  <Building2 size={17} />
                  <span>Corporate Governance</span>
                </button>
                <button 
                  className={`sidebar-nav-btn ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => { setActiveSection('contact'); setMobileSidebarOpen(false); }}
                >
                  <Mail size={17} />
                  <span>Contact & Support</span>
                </button>
              </nav>
            </div>

            {/* Live Product Directory */}
            <div className="sidebar-group">
              <div className="sidebar-group-header">DEPLOYED PLATFORMS</div>
              <div className="sidebar-links-list">
                <a 
                  href="https://ssdclabs.online" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sidebar-ext-link"
                >
                  <div className="ext-link-left">
                    <HeartPulse size={14} className="text-red-icon" />
                    <span>SSDC Labs LIS</span>
                  </div>
                  <ArrowUpRight size={13} />
                </a>

                <a 
                  href="https://wa.ssdclabs.online" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sidebar-ext-link"
                >
                  <div className="ext-link-left">
                    <Terminal size={14} className="text-blue-icon" />
                    <span>WACentral Gateway</span>
                  </div>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Sidebar Brand Seal */}
            <div className="sidebar-corporate-seal">
              <img 
                src="/sincerity-full-brand.png" 
                alt="SINCERITY (OPC) PRIVATE LIMITED" 
                className="sidebar-brand-mark"
              />
              <div className="seal-caption font-mono">
                CIN Registered • India<br />
                Incorporated 18 Sept 2026
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Viewport */}
        <main className="app-main-content">
          
          {/* SECTION 1: EXECUTIVE OVERVIEW */}
          {activeSection === 'overview' && (
            <div className="content-view-wrapper fade-in">
              {/* Hero Showcase Card */}
              <section className="hero-overview-card">
                <div className="hero-text-side">
                  <div className="badge-row">
                    <span className="badge-gold">
                      <Sparkles size={12} /> SINCERITY OPC PRIVATE LIMITED
                    </span>
                    <span className="badge-neutral font-mono">
                      Incorporated 18 Sept 2026
                    </span>
                  </div>

                  <h1 className="hero-main-title">
                    Foundational Software Engineering Engineered with <span className="highlight-text">Sincerity</span>.
                  </h1>

                  <p className="hero-lead-text">
                    SINCERITY designs, constructs, and deploys high-reliability software products, automated clinical laboratory information systems, and high-throughput WhatsApp communication gateways built for mission-critical real-world operations.
                  </p>

                  <div className="hero-actions-row">
                    <button 
                      className="btn-primary-gradient"
                      onClick={() => setActiveSection('products')}
                    >
                      <span>Explore Software Platforms</span>
                      <ChevronRight size={16} />
                    </button>
                    <button 
                      className="btn-outline-neutral"
                      onClick={() => setActiveSection('architecture')}
                    >
                      <Code2 size={16} />
                      <span>Architecture Stack</span>
                    </button>
                  </div>
                </div>

                <div className="hero-visual-side">
                  <div className="hero-brand-glass-showcase">
                    <div className="showcase-glow-aura"></div>
                    <img 
                      src="/logo-icon.png" 
                      alt="SINCERITY 3D Logo" 
                      className="showcase-3d-logo"
                    />
                    <img 
                      src="/sincerity-full-brand.png" 
                      alt="SINCERITY Wordmark" 
                      className="showcase-brand-mark"
                    />
                    <div className="showcase-metrics-badge font-mono">
                      <ShieldCheck size={14} className="text-emerald" />
                      <span>100% Deterministic Code Architecture</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Verified Performance Metrics Strip */}
              <section className="metrics-strip-grid">
                <div className="metric-strip-card">
                  <div className="metric-label font-mono">SYSTEM UPTIME SLA</div>
                  <div className="metric-val">99.99%</div>
                  <div className="metric-note">Zero single-point-of-failure design</div>
                </div>

                <div className="metric-strip-card">
                  <div className="metric-label font-mono">GATEWAY LATENCY</div>
                  <div className="metric-val">&lt; 18ms</div>
                  <div className="metric-note">Optimized HTTP/2 & Webhook pipeline</div>
                </div>

                <div className="metric-strip-card">
                  <div className="metric-label font-mono">ACTIVE DEPLOYMENTS</div>
                  <div className="metric-val">Multi-Tenant</div>
                  <div className="metric-note">SSDC Labs LIS & WACentral Engine</div>
                </div>

                <div className="metric-strip-card">
                  <div className="metric-label font-mono">VERIFIED JURISDICTION</div>
                  <div className="metric-val">MCA India</div>
                  <div className="metric-note">Indian Corporate Entity Reg. 2026</div>
                </div>
              </section>

              {/* Core Engineering Pillars */}
              <section className="section-block">
                <div className="section-header-centered">
                  <span className="section-pill font-mono">ENGINEERING PRINCIPLES</span>
                  <h2 className="section-heading">Built with Architectural Honesty & Operational Clarity</h2>
                  <p className="section-subtext">
                    We eliminate vanity metrics, speculative buzzwords, and fragile prototypes in favor of deterministic software systems.
                  </p>
                </div>

                <div className="pillars-grid">
                  <div className="pillar-card">
                    <div className="pillar-icon-wrap bg-blue-light">
                      <ShieldCheck size={24} className="text-primary-blue" />
                    </div>
                    <h3 className="pillar-title">Deterministic Reliability</h3>
                    <p className="pillar-body">
                      Every service is architected around idempotent operations, structured recovery pipelines, and zero tolerance for data corruption.
                    </p>
                  </div>

                  <div className="pillar-card">
                    <div className="pillar-icon-wrap bg-gold-light">
                      <Zap size={24} className="text-gold-icon" />
                    </div>
                    <h3 className="pillar-title">Pragmatic Automation</h3>
                    <p className="pillar-body">
                      Automation must reduce friction in human workflows. We construct direct pipeline integrations for diagnostic labs and business communications.
                    </p>
                  </div>

                  <div className="pillar-card">
                    <div className="pillar-icon-wrap bg-emerald-light">
                      <Compass size={24} className="text-emerald" />
                    </div>
                    <h3 className="pillar-title">Long-Term Systems Horizon</h3>
                    <p className="pillar-body">
                      From microservices and API gateways today to embedded diagnostic hardware and autonomous triage tomorrow.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* SECTION 2: PROPRIETARY PRODUCTS */}
          {activeSection === 'products' && (
            <div className="content-view-wrapper fade-in">
              <div className="section-header-row">
                <div>
                  <h2 className="section-heading">Proprietary Software Products</h2>
                  <p className="section-subtext">Explore and interact with live simulations of SINCERITY production suites.</p>
                </div>

                <div className="product-tab-pill-switcher">
                  <button 
                    className={`tab-pill-btn ${activeProductTab === 'ssdc' ? 'active' : ''}`}
                    onClick={() => setActiveProductTab('ssdc')}
                  >
                    <HeartPulse size={15} />
                    <span>SSDC Labs LIS</span>
                  </button>
                  <button 
                    className={`tab-pill-btn ${activeProductTab === 'wacentral' ? 'active' : ''}`}
                    onClick={() => setActiveProductTab('wacentral')}
                  >
                    <Terminal size={15} />
                    <span>WACentral API</span>
                  </button>
                  <button 
                    className={`tab-pill-btn ${activeProductTab === 'waconnect' ? 'active' : ''}`}
                    onClick={() => setActiveProductTab('waconnect')}
                  >
                    <ShoppingCart size={15} />
                    <span>WA Connect</span>
                  </button>
                </div>
              </div>

              {/* Product 1: SSDC Labs LIS Simulator */}
              {activeProductTab === 'ssdc' && (
                <div className="product-showcase-panel">
                  <div className="panel-top-banner">
                    <div className="banner-left-info">
                      <div className="product-badge-tag">HEALTHCARE VERTICAL SAAS</div>
                      <h3 className="product-display-title">SSDC Labs — Pathology Diagnostic & Laboratory Information System</h3>
                      <p className="product-desc-text">
                        Comprehensive management for diagnostic centers, automated reference interval recalculation, barcoded sample indexing, and verified PDF delivery.
                      </p>
                    </div>
                    <a 
                      href="https://ssdclabs.online" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-live-launch"
                    >
                      <span>Open ssdclabs.online</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <div className="interactive-split-grid">
                    <div className="interactive-controls-card">
                      <h4 className="card-subtitle-bold">Clinical Parameter Simulator</h4>
                      
                      <div className="control-input-group">
                        <label>Patient Full Name</label>
                        <input 
                          type="text" 
                          value={patientName} 
                          onChange={(e) => setPatientName(e.target.value)} 
                          className="text-input-field"
                        />
                      </div>

                      <div className="control-slider-group">
                        <div className="slider-header-flex">
                          <span>Hemoglobin (Hb)</span>
                          <span className="font-mono font-bold text-primary-blue">{hbLevel} g/dL</span>
                        </div>
                        <input 
                          type="range" 
                          min="8.0" 
                          max="18.0" 
                          step="0.1" 
                          value={hbLevel} 
                          onChange={(e) => setHbLevel(parseFloat(e.target.value))}
                          className="range-slider"
                        />
                      </div>

                      <div className="control-slider-group">
                        <div className="slider-header-flex">
                          <span>Fasting Blood Glucose</span>
                          <span className="font-mono font-bold text-primary-blue">{glucose} mg/dL</span>
                        </div>
                        <input 
                          type="range" 
                          min="60" 
                          max="240" 
                          step="1" 
                          value={glucose} 
                          onChange={(e) => setGlucose(parseInt(e.target.value))}
                          className="range-slider"
                        />
                      </div>

                      <button 
                        className="btn-action-primary w-full mt-4"
                        onClick={handleSimulateReport}
                        disabled={isCompilingReport}
                      >
                        <RefreshCw size={15} className={isCompilingReport ? 'spin' : ''} />
                        <span>{isCompilingReport ? 'Calculating Intervals...' : 'Recalculate Reference Values'}</span>
                      </button>
                    </div>

                    <div className="interactive-result-card">
                      <div className="clinical-sheet-preview">
                        <div className="sheet-top-header">
                          <div>
                            <div className="sheet-title-bold">SSDC LABS MEDICAL DIAGNOSTICS</div>
                            <div className="sheet-sub-text">ISO Certified Pathology Laboratory Management Suite</div>
                          </div>
                          <div className="sheet-time font-mono">{reportTimestamp}</div>
                        </div>

                        <div className="sheet-patient-meta">
                          <span><strong>Patient:</strong> {patientName || 'Anonymous'}</span>
                          <span><strong>Accession ID:</strong> #SSDC-2026-9812</span>
                        </div>

                        <table className="sheet-results-table">
                          <thead>
                            <tr>
                              <th>Parameter</th>
                              <th>Observed Value</th>
                              <th>Standard Range</th>
                              <th>Clinical Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Hemoglobin (Hb)</td>
                              <td className="font-mono font-bold">{hbLevel} g/dL</td>
                              <td>12.0 - 16.0 g/dL</td>
                              <td>
                                <span className={`status-badge-pill ${hbLevel >= 12 && hbLevel <= 16 ? 'badge-normal' : 'badge-alert'}`}>
                                  {hbLevel >= 12 && hbLevel <= 16 ? 'NORMAL' : 'FLAGGED'}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Fasting Blood Sugar</td>
                              <td className="font-mono font-bold">{glucose} mg/dL</td>
                              <td>70 - 100 mg/dL</td>
                              <td>
                                <span className={`status-badge-pill ${glucose <= 100 ? 'badge-normal' : 'badge-alert'}`}>
                                  {glucose <= 100 ? 'NORMAL' : 'ELEVATED'}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Total Serum Cholesterol</td>
                              <td className="font-mono font-bold">{cholesterol} mg/dL</td>
                              <td>&lt; 200 mg/dL</td>
                              <td><span className="status-badge-pill badge-normal">DESIRABLE</span></td>
                            </tr>
                          </tbody>
                        </table>

                        <div className="sheet-footer-verification font-mono">
                          ✓ Digital Signature Hash: sha256:7f9b8c2a... • Automated Delivery via WACentral Engine
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product 2: WACentral API Gateway */}
              {activeProductTab === 'wacentral' && (
                <div className="product-showcase-panel">
                  <div className="panel-top-banner">
                    <div className="banner-left-info">
                      <div className="product-badge-tag">INFRASTRUCTURE & APIS</div>
                      <h3 className="product-display-title">WACentral — Enterprise WhatsApp API & Webhook Engine</h3>
                      <p className="product-desc-text">
                        Enterprise WhatsApp Business Cloud API integration with automatic template management, resilient retry queuing, and HMAC cryptographic signature validation.
                      </p>
                    </div>
                    <a 
                      href="https://wa.ssdclabs.online" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-live-launch"
                    >
                      <span>Open wa.ssdclabs.online</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <div className="interactive-split-grid">
                    <div className="interactive-controls-card">
                      <div className="card-top-actions">
                        <h4 className="card-subtitle-bold">SDK Code Generator</h4>
                        <div className="code-lang-tabs">
                          <button 
                            className={`lang-tab-pill ${apiLanguage === 'curl' ? 'active' : ''}`}
                            onClick={() => setApiLanguage('curl')}
                          >
                            cURL
                          </button>
                          <button 
                            className={`lang-tab-pill ${apiLanguage === 'node' ? 'active' : ''}`}
                            onClick={() => setApiLanguage('node')}
                          >
                            Node.js
                          </button>
                          <button 
                            className={`lang-tab-pill ${apiLanguage === 'python' ? 'active' : ''}`}
                            onClick={() => setApiLanguage('python')}
                          >
                            Python
                          </button>
                        </div>
                      </div>

                      <div className="code-block-wrapper">
                        <div className="code-block-header">
                          <span className="font-mono text-xs text-muted">POST /v1/dispatch/template</span>
                          <button className="copy-action-btn" onClick={copyCode}>
                            {copiedCode ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
                            <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                        <pre className="code-snippet-box font-mono">
                          <code>{codeSnippets[apiLanguage]}</code>
                        </pre>
                      </div>

                      <div className="dispatch-tester-box mt-4">
                        <label className="text-sm font-semibold mb-2 block">Simulate Live Destination Number</label>
                        <div className="input-with-button">
                          <input 
                            type="text" 
                            value={recipientNumber} 
                            onChange={(e) => setRecipientNumber(e.target.value)}
                            className="text-input-field font-mono"
                          />
                          <button 
                            className="btn-action-primary"
                            onClick={handleSimulateDispatch}
                            disabled={dispatchStatus === 'sending'}
                          >
                            <Zap size={14} />
                            <span>{dispatchStatus === 'sending' ? 'Sending...' : 'Test Send'}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="interactive-result-card">
                      <h4 className="card-subtitle-bold mb-3">Live Gateway Activity Stream</h4>
                      <div className="logs-stream-container">
                        <div className="logs-table-header font-mono">
                          <span>TIME</span>
                          <span>ENDPOINT</span>
                          <span>STATUS</span>
                          <span>LATENCY</span>
                        </div>
                        <div className="logs-table-body font-mono">
                          {gatewayLogs.map(log => (
                            <div key={log.id} className="log-row-item">
                              <span className="log-time">{log.time}</span>
                              <span className="log-endpoint">{log.method} {log.endpoint}</span>
                              <span className="log-status font-bold text-emerald">{log.status}</span>
                              <span className="log-latency">{log.latency}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product 3: WA Connect Storefront */}
              {activeProductTab === 'waconnect' && (
                <div className="product-showcase-panel">
                  <div className="panel-top-banner">
                    <div className="banner-left-info">
                      <div className="product-badge-tag">CONVERSATIONAL COMMERCE</div>
                      <h3 className="product-display-title">WA Connect — Conversational WhatsApp Storefront & Catalog</h3>
                      <p className="product-desc-text">
                        Allows end-customers to browse diagnostic packages, select services, synchronize carts, and trigger home phlebotomy bookings directly inside WhatsApp.
                      </p>
                    </div>
                    <span className="badge-gold">Active Development</span>
                  </div>

                  <div className="interactive-split-grid">
                    <div className="interactive-controls-card">
                      <h4 className="card-subtitle-bold mb-3">Diagnostic Service Catalog</h4>
                      <div className="catalog-items-list">
                        {cartItems.map(item => (
                          <div key={item.id} className="catalog-service-card">
                            <div className="service-info">
                              <div className="service-name">{item.name}</div>
                              <div className="service-price font-mono font-bold">₹{item.price}</div>
                            </div>
                            <div className="qty-controls">
                              <button 
                                className="qty-btn"
                                onClick={() => setCartItems(items => items.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))}
                              >-</button>
                              <span className="font-mono">{item.qty}</span>
                              <button 
                                className="qty-btn"
                                onClick={() => setCartItems(items => items.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))}
                              >+</button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="cart-total-summary">
                        <span>Total Payable Amount:</span>
                        <span className="font-mono font-bold text-primary-blue text-lg">₹{totalCart}</span>
                      </div>
                    </div>

                    <div className="interactive-result-card">
                      <h4 className="card-subtitle-bold mb-3">WhatsApp Customer Interaction</h4>
                      <div className="whatsapp-chat-mock">
                        <div className="chat-bubble chat-in">
                          Hi! I would like to book the health packages from your catalog for tomorrow morning.
                        </div>
                        <div className="chat-bubble chat-out">
                          <strong>WA Connect Bot:</strong><br />
                          Order received for ₹{totalCart}! We have secured your diagnostic slot and assigned a certified phlebotomist.
                        </div>
                      </div>

                      <button 
                        className="btn-action-primary w-full mt-4"
                        onClick={() => {
                          setOrderSent(true);
                          setTimeout(() => setOrderSent(false), 3000);
                        }}
                      >
                        <Send size={15} />
                        <span>{orderSent ? '✓ Notification Dispatched to WhatsApp' : 'Simulate Customer Checkout Dispatch'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SECTION 3: ARCHITECTURE & STACK */}
          {activeSection === 'architecture' && (
            <div className="content-view-wrapper fade-in">
              <div className="section-header-centered">
                <span className="section-pill font-mono">SYSTEM ARCHITECTURE</span>
                <h2 className="section-heading">Multi-Tier Resilient Architecture</h2>
                <p className="section-subtext">
                  How SINCERITY structures vertical software, high-throughput message brokers, and secure data backends.
                </p>
              </div>

              <div className="architecture-table-card">
                <table className="pro-data-table">
                  <thead>
                    <tr>
                      <th>LAYER</th>
                      <th>ARCHITECTURE DOMAIN</th>
                      <th>CORE RESPONSIBILITY</th>
                      <th>DEPLOYMENT STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="layer-tag">LAYER 01</span></td>
                      <td><strong>Application Layer & Vertical SaaS</strong><br /><span className="text-muted text-xs">SSDC Labs Diagnostic LIS</span></td>
                      <td>Patient intake, barcode indexing, reference range validation, PDF generation engines</td>
                      <td><span className="status-badge-pill badge-normal">Active In Production</span></td>
                    </tr>
                    <tr>
                      <td><span className="layer-tag">LAYER 02</span></td>
                      <td><strong>Communication Gateway Infrastructure</strong><br /><span className="text-muted text-xs">WACentral API & WA Connect</span></td>
                      <td>WhatsApp Cloud API webhook routing, message dispatch queue, cryptographic verification</td>
                      <td><span className="status-badge-pill badge-normal">Active In Production</span></td>
                    </tr>
                    <tr>
                      <td><span className="layer-tag">LAYER 03</span></td>
                      <td><strong>Automated Triage & ML Pipelines</strong><br /><span className="text-muted text-xs">Clinical Anomaly Flags</span></td>
                      <td>Deterministic rule engines, diagnostic outlier detection, structured ETL conversion</td>
                      <td><span className="status-badge-pill badge-gold">Under Active R&D</span></td>
                    </tr>
                    <tr>
                      <td><span className="layer-tag">LAYER 04</span></td>
                      <td><strong>Physical Systems & Diagnostic Hardware</strong><br /><span className="text-muted text-xs">Edge Hardware Controllers</span></td>
                      <td>Embedded microcontrollers, diagnostic analyzer interfaces, telemetry bridges</td>
                      <td><span className="status-badge-pill badge-neutral">Research Horizon</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Security Specification Grid */}
              <div className="security-spec-grid mt-6">
                <div className="spec-card">
                  <div className="spec-icon-box bg-emerald-light">
                    <Lock size={20} className="text-emerald" />
                  </div>
                  <h4 className="spec-title">End-to-End Cryptography</h4>
                  <p className="spec-desc">TLS 1.3 encryption across all communication endpoints with SHA-256 HMAC payload signatures.</p>
                </div>

                <div className="spec-card">
                  <div className="spec-icon-box bg-blue-light">
                    <Database size={20} className="text-primary-blue" />
                  </div>
                  <h4 className="spec-title">Zero Plaintext Secrets</h4>
                  <p className="spec-desc">Strict security policy ensuring zero persistent storage of unencrypted tokens or credentials.</p>
                </div>

                <div className="spec-card">
                  <div className="spec-icon-box bg-gold-light">
                    <Activity size={20} className="text-gold-icon" />
                  </div>
                  <h4 className="spec-title">Idempotent Webhook Routing</h4>
                  <p className="spec-desc">Deterministic message handling with deduplication filters to ensure zero duplicate dispatches.</p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 4: SYSTEM TELEMETRY */}
          {activeSection === 'telemetry' && (
            <div className="content-view-wrapper fade-in">
              <div className="section-header-centered">
                <span className="section-pill font-mono">INFRASTRUCTURE HEALTH</span>
                <h2 className="section-heading">Cluster Telemetry & Operational Metrics</h2>
                <p className="section-subtext">Real-time status indicators across SINCERITY production server clusters.</p>
              </div>

              <div className="telemetry-split-layout">
                <div className="pro-card">
                  <h3 className="card-subtitle-bold mb-4">Compute Core & Memory Utilization</h3>
                  
                  <div className="telemetry-bar-item">
                    <div className="bar-label-flex">
                      <span>Server Core Load</span>
                      <span className="font-mono font-bold text-primary-blue">14.2%</span>
                    </div>
                    <div className="bar-track-light">
                      <div className="bar-progress-fill" style={{ width: '14.2%' }}></div>
                    </div>
                  </div>

                  <div className="telemetry-bar-item">
                    <div className="bar-label-flex">
                      <span>RAM Allocation</span>
                      <span className="font-mono font-bold text-primary-blue">28.7%</span>
                    </div>
                    <div className="bar-track-light">
                      <div className="bar-progress-fill" style={{ width: '28.7%' }}></div>
                    </div>
                  </div>

                  <div className="telemetry-bar-item">
                    <div className="bar-label-flex">
                      <span>Webhook Queue Backlog</span>
                      <span className="font-mono font-bold text-emerald">0 Pending</span>
                    </div>
                    <div className="bar-track-light">
                      <div className="bar-progress-fill" style={{ width: '2%', background: '#10b981' }}></div>
                    </div>
                  </div>
                </div>

                <div className="pro-card">
                  <h3 className="card-subtitle-bold mb-4">Compliance & Security Checklist</h3>
                  <div className="security-checklist">
                    <div className="check-row">
                      <CheckCircle2 size={18} className="text-emerald" />
                      <span>TLS 1.3 Strict Transport Security Active</span>
                    </div>
                    <div className="check-row">
                      <CheckCircle2 size={18} className="text-emerald" />
                      <span>SHA-256 HMAC Webhook Cryptographic Signing</span>
                    </div>
                    <div className="check-row">
                      <CheckCircle2 size={18} className="text-emerald" />
                      <span>Zero Plaintext Token Storage Policy</span>
                    </div>
                    <div className="check-row">
                      <CheckCircle2 size={18} className="text-emerald" />
                      <span>Automated Redundant Daily Snapshots</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 5: CORPORATE GOVERNANCE */}
          {activeSection === 'corporate' && (
            <div className="content-view-wrapper fade-in">
              <div className="section-header-centered">
                <span className="section-pill font-mono">STATUTORY IDENTIFICATION</span>
                <h2 className="section-heading">Corporate Governance & Entity Information</h2>
                <p className="section-subtext">Official statutory registry for SINCERITY OPC Private Limited.</p>
              </div>

              <div className="corporate-sheet-card">
                <div className="corporate-seal-header">
                  <img 
                    src="/logo-icon.png" 
                    alt="SINCERITY Logo" 
                    className="corp-header-logo"
                  />
                  <div>
                    <h3 className="corp-header-title">SINCERITY OPC PRIVATE LIMITED</h3>
                    <p className="corp-header-desc">Registered Indian Technology Company • Incorporated 18 September 2026</p>
                  </div>
                </div>

                <div className="corporate-meta-grid">
                  <div className="meta-box">
                    <div className="meta-key font-mono">LEGAL ENTITY NAME</div>
                    <div className="meta-value">SINCERITY OPC PRIVATE LIMITED</div>
                  </div>
                  <div className="meta-box">
                    <div className="meta-key font-mono">DATE OF INCORPORATION</div>
                    <div className="meta-value">18 September 2026</div>
                  </div>
                  <div className="meta-box">
                    <div className="meta-key font-mono">JURISDICTION</div>
                    <div className="meta-value">India (Ministry of Corporate Affairs)</div>
                  </div>
                  <div className="meta-box">
                    <div className="meta-key font-mono">OFFICIAL DOMAIN</div>
                    <div className="meta-value font-mono font-bold text-primary-blue">thesincerity.in</div>
                  </div>
                  <div className="meta-box">
                    <div className="meta-key font-mono">CORE BUSINESS VERTICALS</div>
                    <div className="meta-value">Vertical SaaS, Diagnostic LIS, WhatsApp Communication Infrastructure</div>
                  </div>
                  <div className="meta-box">
                    <div className="meta-key font-mono">CONTACT EMAIL</div>
                    <div className="meta-value">
                      <a href="mailto:contact@thesincerity.in" className="text-primary-blue underline">contact@thesincerity.in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 6: CONTACT & SUPPORT */}
          {activeSection === 'contact' && (
            <div className="content-view-wrapper fade-in">
              <div className="section-header-centered">
                <span className="section-pill font-mono">DIRECT INQUIRIES</span>
                <h2 className="section-heading">Contact SINCERITY Engineering</h2>
                <p className="section-subtext">Reach out for platform deployments, API access, or enterprise collaborations.</p>
              </div>

              <div className="contact-form-layout">
                <div className="pro-card">
                  <h3 className="card-subtitle-bold mb-4">Send an Official Message</h3>
                  
                  {formSubmitted ? (
                    <div className="form-success-banner">
                      <CheckCircle2 size={24} className="text-emerald" />
                      <div>
                        <strong>Message Successfully Transmitted!</strong>
                        <p className="text-sm text-muted">Our engineering team will review your inquiry and respond to your email.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="contact-form-inner">
                      <div className="form-row-2">
                        <div className="form-field">
                          <label>Full Name</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="Your Name"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="text-input-field"
                          />
                        </div>
                        <div className="form-field">
                          <label>Email Address</label>
                          <input 
                            type="email" 
                            required 
                            placeholder="you@company.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="text-input-field"
                          />
                        </div>
                      </div>

                      <div className="form-field">
                        <label>Subject / Platform Area</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. SSDC Labs Deployment / WACentral API Access"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="text-input-field"
                        />
                      </div>

                      <div className="form-field">
                        <label>Message Content</label>
                        <textarea 
                          rows="4" 
                          required 
                          placeholder="Provide details about your project or inquiry..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="text-input-field textarea-field"
                        ></textarea>
                      </div>

                      <button type="submit" className="btn-primary-gradient w-full">
                        <Send size={15} />
                        <span>Transmit Message</span>
                      </button>
                    </form>
                  )}
                </div>

                <div className="pro-card contact-meta-card">
                  <h3 className="card-subtitle-bold mb-4">Corporate Channels</h3>
                  <div className="contact-meta-list">
                    <div className="contact-meta-item">
                      <Mail size={18} className="text-primary-blue" />
                      <div>
                        <div className="text-xs text-muted font-mono">PRIMARY INQUIRIES</div>
                        <a href="mailto:contact@thesincerity.in" className="font-semibold text-primary-blue">contact@thesincerity.in</a>
                      </div>
                    </div>

                    <div className="contact-meta-item">
                      <Globe size={18} className="text-primary-blue" />
                      <div>
                        <div className="text-xs text-muted font-mono">OFFICIAL DOMAIN</div>
                        <span className="font-semibold font-mono">thesincerity.in</span>
                      </div>
                    </div>

                    <div className="contact-meta-item">
                      <Building2 size={18} className="text-primary-blue" />
                      <div>
                        <div className="text-xs text-muted font-mono">REGISTERED ENTITY</div>
                        <span className="font-semibold">SINCERITY OPC PVT LTD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Professional Footer */}
      <footer className="navbar-bottom-footer">
        <div className="footer-container">
          <div className="footer-left-copy">
            <span>© 2026 SINCERITY OPC PRIVATE LIMITED. All rights reserved.</span>
          </div>
          <div className="footer-right-meta">
            <span className="font-mono">thesincerity.in</span>
            <span className="footer-bullet">•</span>
            <span className="text-muted">Technology Built With Purpose</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
