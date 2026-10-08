import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Terminal, 
  Activity, 
  MessageSquare, 
  ShoppingCart, 
  Shield, 
  CheckCircle2, 
  Code2, 
  Flame, 
  Workflow, 
  ExternalLink,
  ChevronRight,
  Database,
  Server,
  Zap,
  Building2,
  HeartPulse,
  Send,
  RefreshCw,
  Sliders
} from 'lucide-react';

export default function HomePage() {
  // Interactive preview state
  const [activeConsole, setActiveConsole] = useState('ssdc'); // 'ssdc' | 'wacentral' | 'waconnect'

  // SSDC Labs interactive demo state
  const [patientName, setPatientName] = useState('Johnathan Doe');
  const [hbLevel, setHbLevel] = useState(13.8);
  const [glucose, setGlucose] = useState(98);
  const [cholesterol, setCholesterol] = useState(175);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [reportTimestamp, setReportTimestamp] = useState(new Date().toLocaleTimeString());

  // WACentral interactive demo state
  const [endpointTemplate, setEndpointTemplate] = useState('diagnostic_alert');
  const [recipientNumber, setRecipientNumber] = useState('+91 98765 43210');
  const [dispatchStatus, setDispatchStatus] = useState('idle'); // 'idle' | 'sending' | 'delivered'
  const [responseLog, setResponseLog] = useState([
    { time: '00:01:14', event: 'WACentral Gateway initialized', status: 'ready' },
    { time: '00:01:15', event: 'Webhooks verification completed', status: '200 OK' }
  ]);

  // WA Connect interactive state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Standard Health Screening Package', price: 1200, qty: 1 },
    { id: 2, name: 'Glycated Hemoglobin (HbA1c) Profile', price: 650, qty: 1 }
  ]);
  const [waOrderSent, setWaOrderSent] = useState(false);

  const handleSimulateReport = () => {
    setIsGeneratingReport(true);
    setTimeout(() => {
      setIsGeneratingReport(false);
      setReportTimestamp(new Date().toLocaleTimeString());
    }, 600);
  };

  const handleSimulateDispatch = () => {
    setDispatchStatus('sending');
    setTimeout(() => {
      setDispatchStatus('delivered');
      const now = new Date().toLocaleTimeString();
      setResponseLog(prev => [
        { time: now, event: `Payload dispatched to ${recipientNumber} via WACentral Engine`, status: '202 Accepted' },
        ...prev
      ]);
    }, 800);
  };

  const totalCart = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge pulse-badge">
                <span className="pulse-dot"></span>
                SINCERITY OPC PVT LTD
              </span>
              <span className="hero-badge-secondary">
                Incorporated 18 Sept 2026 • India
              </span>
            </div>

            <h1 className="hero-title">
              Technology built with purpose, engineered with <span className="text-gradient">sincerity</span>.
            </h1>

            <p className="hero-subtitle">
              We design and construct foundational software, high-throughput communication infrastructure, and automated intelligent systems built for uncompromising operational integrity.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary">
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/technology" className="btn btn-secondary">
                <Code2 size={16} />
                <span>Technology Architecture</span>
              </Link>
              <Link to="/vision" className="btn btn-tertiary">
                <Sparkles size={16} />
                <span>Long-Term Vision</span>
              </Link>
            </div>

            {/* Quick trust/reality indicator */}
            <div className="hero-reality-strip">
              <div className="reality-item">
                <CheckCircle2 size={16} className="reality-icon" />
                <span>Verified Independent Engineering</span>
              </div>
              <div className="reality-item">
                <CheckCircle2 size={16} className="reality-icon" />
                <span>Zero Fabricated Statistics</span>
              </div>
              <div className="reality-item">
                <CheckCircle2 size={16} className="reality-icon" />
                <span>Production-Ready Architectures</span>
              </div>
            </div>
          </div>

          {/* Hero Interactive Console Preview */}
          <div className="hero-console-wrapper">
            <div className="interactive-console-card">
              <div className="console-card-header">
                <div className="console-window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="console-tab-buttons">
                  <button 
                    className={`console-tab-btn ${activeConsole === 'ssdc' ? 'active' : ''}`}
                    onClick={() => setActiveConsole('ssdc')}
                  >
                    <HeartPulse size={14} />
                    <span>SSDC Labs</span>
                  </button>
                  <button 
                    className={`console-tab-btn ${activeConsole === 'wacentral' ? 'active' : ''}`}
                    onClick={() => setActiveConsole('wacentral')}
                  >
                    <Terminal size={14} />
                    <span>WACentral API</span>
                  </button>
                  <button 
                    className={`console-tab-btn ${activeConsole === 'waconnect' ? 'active' : ''}`}
                    onClick={() => setActiveConsole('waconnect')}
                  >
                    <ShoppingCart size={14} />
                    <span>WA Connect</span>
                  </button>
                </div>
              </div>

              <div className="console-card-body">
                {/* SSDC Labs Interactive Console */}
                {activeConsole === 'ssdc' && (
                  <div className="console-view console-ssdc">
                    <div className="console-view-header">
                      <div>
                        <div className="console-tag">DIAGNOSTIC WORKFLOW SIMULATOR</div>
                        <h3 className="console-title">SSDC Labs — Pathology & Report Engine</h3>
                      </div>
                      <a href="https://ssdclabs.online" target="_blank" rel="noopener noreferrer" className="live-link-pill">
                        ssdclabs.online <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="simulator-grid">
                      <div className="sim-controls">
                        <label className="sim-label">
                          <span>Patient Identification:</span>
                          <input 
                            type="text" 
                            value={patientName} 
                            onChange={(e) => setPatientName(e.target.value)}
                            className="sim-input" 
                          />
                        </label>

                        <div className="sim-slider-group">
                          <div className="slider-header">
                            <span>Hemoglobin (Hb):</span>
                            <span className="font-mono font-bold text-accent">{hbLevel} g/dL</span>
                          </div>
                          <input 
                            type="range" 
                            min="8.0" 
                            max="18.0" 
                            step="0.1" 
                            value={hbLevel}
                            onChange={(e) => setHbLevel(parseFloat(e.target.value))}
                            className="sim-slider" 
                          />
                        </div>

                        <div className="sim-slider-group">
                          <div className="slider-header">
                            <span>Fasting Blood Sugar:</span>
                            <span className="font-mono font-bold text-accent">{glucose} mg/dL</span>
                          </div>
                          <input 
                            type="range" 
                            min="60" 
                            max="250" 
                            step="1" 
                            value={glucose}
                            onChange={(e) => setGlucose(parseInt(e.target.value))}
                            className="sim-slider" 
                          />
                        </div>

                        <button 
                          className="btn btn-sm btn-primary w-full"
                          onClick={handleSimulateReport}
                          disabled={isGeneratingReport}
                        >
                          <RefreshCw size={14} className={isGeneratingReport ? 'spin' : ''} />
                          <span>{isGeneratingReport ? 'Compiling Verification...' : 'Recalculate Reference Values'}</span>
                        </button>
                      </div>

                      <div className="sim-preview-sheet">
                        <div className="sheet-header">
                          <span className="sheet-brand">SSDC LABS CLINICAL REPORT</span>
                          <span className="sheet-time font-mono">{reportTimestamp}</span>
                        </div>
                        <div className="sheet-patient">
                          <strong>Patient:</strong> {patientName || 'Anonymous Patient'} • <strong>ID:</strong> #SSDC-2026-9812
                        </div>
                        <table className="sheet-table">
                          <thead>
                            <tr>
                              <th>Parameter</th>
                              <th>Result</th>
                              <th>Normal Range</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Hemoglobin</td>
                              <td className="font-mono font-bold">{hbLevel} g/dL</td>
                              <td>12.0 - 16.0</td>
                              <td>
                                <span className={`status-tag ${hbLevel >= 12 && hbLevel <= 16 ? 'normal' : 'flagged'}`}>
                                  {hbLevel >= 12 && hbLevel <= 16 ? 'Optimal' : 'Flagged'}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Fasting Glucose</td>
                              <td className="font-mono font-bold">{glucose} mg/dL</td>
                              <td>70 - 100</td>
                              <td>
                                <span className={`status-tag ${glucose <= 100 ? 'normal' : glucose <= 125 ? 'borderline' : 'flagged'}`}>
                                  {glucose <= 100 ? 'Normal' : glucose <= 125 ? 'Pre-diabetic' : 'Elevated'}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Cholesterol</td>
                              <td className="font-mono font-bold">{cholesterol} mg/dL</td>
                              <td>&lt; 200</td>
                              <td><span className="status-tag normal">Desirable</span></td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="sheet-footer font-mono">
                          ✓ Digital Signature Verified • Automated Delivery via WACentral Engine
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* WACentral Interactive Console */}
                {activeConsole === 'wacentral' && (
                  <div className="console-view console-wacentral">
                    <div className="console-view-header">
                      <div>
                        <div className="console-tag">WHATSAPP API & AUTOMATION GATEWAY</div>
                        <h3 className="console-title">WACentral — Multi-Channel Dispatch</h3>
                      </div>
                      <a href="https://wa.ssdclabs.online" target="_blank" rel="noopener noreferrer" className="live-link-pill">
                        wa.ssdclabs.online <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="wacentral-grid">
                      <div className="json-editor-pane">
                        <div className="pane-title">
                          <Terminal size={14} />
                          <span>HTTP POST /api/v1/dispatch/template</span>
                        </div>
                        <div className="code-block font-mono">
                          <pre>{`{
  "provider": "wacentral_v1",
  "recipient": "${recipientNumber}",
  "template": "clinical_diagnostic_dispatch",
  "payload": {
    "patient_id": "SSDC-2026-9812",
    "delivery_channel": "whatsapp_secure_pdf",
    "signature_digest": "sha256:7f9b8c2a...",
    "auto_retry": true
  }
}`}</pre>
                        </div>
                        <div className="dispatch-controls">
                          <input 
                            type="text" 
                            value={recipientNumber} 
                            onChange={(e) => setRecipientNumber(e.target.value)}
                            placeholder="Destination Mobile Number"
                            className="sim-input"
                          />
                          <button 
                            className="btn btn-sm btn-primary"
                            onClick={handleSimulateDispatch}
                            disabled={dispatchStatus === 'sending'}
                          >
                            <Send size={14} />
                            <span>{dispatchStatus === 'sending' ? 'Dispatching...' : 'Simulate API Call'}</span>
                          </button>
                        </div>
                      </div>

                      <div className="log-viewer-pane">
                        <div className="pane-title">
                          <Activity size={14} />
                          <span>Real-time Gateway Logs</span>
                        </div>
                        <div className="log-list font-mono">
                          {responseLog.map((log, idx) => (
                            <div key={idx} className="log-item">
                              <span className="log-time">{log.time}</span>
                              <span className="log-event">{log.event}</span>
                              <span className="log-status">{log.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* WA Connect Interactive Console */}
                {activeConsole === 'waconnect' && (
                  <div className="console-view console-waconnect">
                    <div className="console-view-header">
                      <div>
                        <div className="console-tag">WHATSAPP COMMERCE & BUSINESS AUTOMATION</div>
                        <h3 className="console-title">WA Connect — Conversational Storefront</h3>
                      </div>
                      <span className="badge-in-dev">Active Development</span>
                    </div>

                    <div className="waconnect-grid">
                      <div className="catalog-pane">
                        <div className="pane-title">
                          <ShoppingCart size={14} />
                          <span>Interactive Service Catalog</span>
                        </div>
                        <div className="cart-item-list">
                          {cartItems.map(item => (
                            <div key={item.id} className="cart-card">
                              <div className="cart-info">
                                <div className="cart-name">{item.name}</div>
                                <div className="cart-price font-mono font-bold">₹{item.price}</div>
                              </div>
                              <div className="cart-qty-ctrl">
                                <button 
                                  onClick={() => setCartItems(items => items.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))}
                                  className="qty-btn"
                                >-</button>
                                <span className="font-mono">{item.qty}</span>
                                <button 
                                  onClick={() => setCartItems(items => items.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))}
                                  className="qty-btn"
                                >+</button>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="cart-total-bar">
                          <span>Total Amount:</span>
                          <span className="font-mono font-bold text-accent">₹{totalCart}</span>
                        </div>
                      </div>

                      <div className="chat-preview-pane">
                        <div className="pane-title">
                          <MessageSquare size={14} />
                          <span>WhatsApp Conversational Preview</span>
                        </div>
                        <div className="chat-bubbles">
                          <div className="chat-bubble user-bubble">
                            Hi! I would like to book the health packages from your catalog.
                          </div>
                          <div className="chat-bubble bot-bubble">
                            <div className="bot-header">WA Connect Bot:</div>
                            Order created for ₹{totalCart}! We have locked your slots and transmitted the confirmation to your verified WhatsApp number.
                          </div>
                        </div>
                        <button 
                          className="btn btn-sm btn-primary w-full mt-3"
                          onClick={() => {
                            setWaOrderSent(true);
                            setTimeout(() => setWaOrderSent(false), 2000);
                          }}
                        >
                          <Send size={14} />
                          <span>{waOrderSent ? '✓ Notification Dispatched' : 'Simulate Customer Checkout'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="section bg-card-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill">ENGINEERING PHILOSOPHY</span>
            <h2 className="section-title">Built with architectural honesty and functional clarity</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We reject vanity metrics, inflated AI claims, and fragile prototypes. SINCERITY focuses on rock-solid systems that deliver real utility.
            </p>
          </div>

          <div className="grid-3">
            <div className="card feature-card">
              <div className="card-icon-box">
                <Shield size={24} />
              </div>
              <h3 className="card-title">Foundational Reliability</h3>
              <p className="card-text">
                Every software system is architected around deterministic fault-tolerance, robust error recovery, and zero tolerance for single points of failure.
              </p>
            </div>

            <div className="card feature-card">
              <div className="card-icon-box">
                <Workflow size={24} />
              </div>
              <h3 className="card-title">Pragmatic Automation</h3>
              <p className="card-text">
                Automation should simplify complex human workflows, not complicate them. We build low-latency pipeline integrations designed for seamless real-world operations.
              </p>
            </div>

            <div className="card feature-card">
              <div className="card-icon-box">
                <Cpu size={24} />
              </div>
              <h3 className="card-title">Long-Term Systems Horizon</h3>
              <p className="card-text">
                From microservices and messaging APIs today to autonomous intelligence and physical devices tomorrow, our roadmap is structured for sustained technological evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture Matrix */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">ECOSYSTEM BLUEPRINT</span>
            <h2 className="section-title">The SINCERITY Technology Stack</h2>
            <p className="section-subtitle">
              How our products, infrastructure, and research vectors interconnect.
            </p>
          </div>

          <div className="architecture-matrix">
            <div className="matrix-layer">
              <div className="layer-badge">LAYER 01</div>
              <div className="layer-details">
                <h4 className="layer-title">Application Layer & Vertical SaaS</h4>
                <p className="layer-desc">
                  Specialized domain applications including <strong>SSDC Labs</strong> for healthcare diagnostics and lab operations management.
                </p>
              </div>
              <div className="layer-status">Active In Dev</div>
            </div>

            <div className="matrix-layer">
              <div className="layer-badge">LAYER 02</div>
              <div className="layer-details">
                <h4 className="layer-title">Communication & Gateway Infrastructure</h4>
                <p className="layer-desc">
                  <strong>WACentral</strong> API gateway and <strong>WA Connect</strong> for WhatsApp business commerce, webhooks, and transactional delivery.
                </p>
              </div>
              <div className="layer-status">Active In Dev</div>
            </div>

            <div className="matrix-layer">
              <div className="layer-badge">LAYER 03</div>
              <div className="layer-details">
                <h4 className="layer-title">Intelligent Automation & AI Integration</h4>
                <p className="layer-desc">
                  Structured data analysis, natural language process automation, and intelligent triage systems.
                </p>
              </div>
              <div className="layer-status">Roadmap Vector</div>
            </div>

            <div className="matrix-layer">
              <div className="layer-badge">LAYER 04</div>
              <div className="layer-details">
                <h4 className="layer-title">Physical Systems & Future Hardware</h4>
                <p className="layer-desc">
                  Long-term research into intelligent connected devices, edge computing, and custom hardware controllers.
                </p>
              </div>
              <div className="layer-status">Research Horizon</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/technology" className="btn btn-secondary">
              <span>View Full Technology Deep Dive</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Metadata & Reality Verification */}
      <section className="section bg-card-surface border-y">
        <div className="container">
          <div className="verified-corporate-banner">
            <div className="banner-icon">
              <Building2 size={32} />
            </div>
            <div className="banner-content">
              <h3 className="banner-title">SINCERITY OPC Private Limited</h3>
              <p className="banner-text">
                An Indian technology company incorporated on <strong>18 September 2026</strong>. Dedicated to transparent, high-integrity engineering.
              </p>
            </div>
            <div className="banner-actions">
              <Link to="/about" className="btn btn-sm btn-primary">
                <span>About Corporate Entity</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="cta-title">Ready to explore our platforms?</h2>
          <p className="cta-subtitle max-w-xl mx-auto">
            Discover our active software developments, explore our engineering philosophy, or get in touch directly.
          </p>
          <div className="cta-actions">
            <Link to="/products" className="btn btn-primary btn-lg">
              <span>View Product Lineup</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              <span>Contact SINCERITY</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
