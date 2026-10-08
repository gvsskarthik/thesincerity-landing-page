import React, { useState } from 'react';
import { 
  HeartPulse, 
  MessageSquareShare, 
  Compass, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  ShoppingCart, 
  Server, 
  ShieldCheck, 
  Cpu, 
  RefreshCw,
  Send,
  Zap,
  Clock,
  Layers,
  FileText
} from 'lucide-react';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState('ssdc'); // 'ssdc' | 'wacentral' | 'waconnect'

  // SSDC Labs interactive demo state
  const [testType, setTestType] = useState('cbc'); // 'cbc' | 'lipid' | 'thyroid'
  const [labDoctor, setLabDoctor] = useState('Dr. A. Sharma, MD (Path)');
  const [testDate] = useState(new Date().toLocaleDateString('en-GB'));
  const [isSimulatingReport, setIsSimulatingReport] = useState(false);

  // WACentral demo state
  const [selectedEvent, setSelectedEvent] = useState('report_ready');
  const [apiLog, setApiLog] = useState([
    { code: 200, method: 'POST', endpoint: '/v1/messages', latency: '42ms', time: '12:40:02' },
    { code: 200, method: 'POST', endpoint: '/v1/webhooks/status', latency: '19ms', time: '12:40:05' }
  ]);

  const handleTriggerApi = () => {
    const newEntry = {
      code: 202,
      method: 'POST',
      endpoint: selectedEvent === 'report_ready' ? '/v1/templates/diagnostic_dispatch' : '/v1/templates/payment_receipt',
      latency: `${Math.floor(Math.random() * 30 + 20)}ms`,
      time: new Date().toLocaleTimeString()
    };
    setApiLog(prev => [newEntry, ...prev.slice(0, 4)]);
  };

  return (
    <div className="page products-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="badge-pill">OFFICIAL PRODUCT PORTFOLIO</span>
          <h1 className="page-title">Software engineered for real-world operations</h1>
          <p className="page-subtitle max-w-2xl">
            Explore SINCERITY's active software developments across medical diagnostics management, communication API infrastructure, and conversational business automation.
          </p>

          {/* Product Tab Switcher */}
          <div className="product-tab-bar">
            <button 
              className={`product-tab ${activeTab === 'ssdc' ? 'active' : ''}`}
              onClick={() => setActiveTab('ssdc')}
            >
              <HeartPulse size={18} />
              <div className="tab-text">
                <span className="tab-name">SSDC Labs</span>
                <span className="tab-sub">Diagnostic Lab Management</span>
              </div>
            </button>

            <button 
              className={`product-tab ${activeTab === 'wacentral' ? 'active' : ''}`}
              onClick={() => setActiveTab('wacentral')}
            >
              <MessageSquareShare size={18} />
              <div className="tab-text">
                <span className="tab-name">WACentral</span>
                <span className="tab-sub">WhatsApp API & Dispatch Engine</span>
              </div>
            </button>

            <button 
              className={`product-tab ${activeTab === 'waconnect' ? 'active' : ''}`}
              onClick={() => setActiveTab('waconnect')}
            >
              <Compass size={18} />
              <div className="tab-text">
                <span className="tab-name">WA Connect</span>
                <span className="tab-sub">WhatsApp Business Commerce</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Product Content Sections */}
      <div className="container product-container">
        {/* PRODUCT 1: SSDC LABS */}
        {activeTab === 'ssdc' && (
          <div className="product-detail-card">
            <div className="product-hero-bar">
              <div className="product-badge-group">
                <span className="product-status-tag active-tag">In Active Development</span>
                <span className="product-category-tag">Healthcare & Diagnostic Systems</span>
              </div>
              <div className="product-actions-bar">
                <a 
                  href="https://ssdclabs.online" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <span>Visit ssdclabs.online</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="product-overview-grid">
              <div className="product-desc-col">
                <h2 className="product-main-heading">SSDC Labs — Complete Medical Diagnostic & Pathology Management</h2>
                <p className="product-lead-text">
                  SSDC Labs is a purpose-built software platform designed to streamline laboratory workflows from sample collection and accessioning to automated report generation and direct-to-patient digital dispatch.
                </p>

                <h3 className="sub-heading">Core Architectural Capabilities:</h3>
                <ul className="feature-checklist">
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Automated Patient Registration & Billing:</strong> Fast accessioning with barcode tracking, fee schedules, and receipt generation.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Dynamic Parameter & Reference Range Engine:</strong> Customized normal ranges based on patient age, gender, and clinical history.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Pathologist Verification & Digital Signatures:</strong> Secure verification workflow ensuring reports are signed off by accredited specialists.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Integrated WACentral Delivery:</strong> Instant PDF delivery directly to patients' WhatsApp numbers the moment results are verified.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Interactive Simulator */}
              <div className="product-demo-col">
                <div className="interactive-console-card">
                  <div className="console-card-header">
                    <div className="console-window-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <span className="font-mono text-xs text-muted">SSDC Labs Report Simulator</span>
                  </div>

                  <div className="console-card-body">
                    <div className="p-3 bg-canvas rounded-md border mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm">Select Diagnostic Panel:</span>
                        <select 
                          value={testType} 
                          onChange={(e) => setTestType(e.target.value)}
                          className="sim-select"
                        >
                          <option value="cbc">Complete Blood Count (CBC)</option>
                          <option value="lipid">Lipid Profile</option>
                          <option value="thyroid">Thyroid Function (T3, T4, TSH)</option>
                        </select>
                      </div>

                      <div className="text-xs text-muted">
                        Consultant: <strong>{labDoctor}</strong> • Date: <strong>{testDate}</strong>
                      </div>
                    </div>

                    <div className="report-mockup">
                      <div className="report-header">
                        <div>
                          <div className="report-lab-name">SSDC DIAGNOSTIC & RESEARCH LABS</div>
                          <div className="report-meta">Accredited Laboratory Information System</div>
                        </div>
                        <div className="report-barcode font-mono">||| |||| || |||||</div>
                      </div>

                      <table className="sheet-table mt-3">
                        <thead>
                          <tr>
                            <th>Investigation</th>
                            <th>Observed Value</th>
                            <th>Reference Unit</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {testType === 'cbc' && (
                            <>
                              <tr>
                                <td>Hemoglobin (Hb)</td>
                                <td className="font-bold">14.2</td>
                                <td>13.0 - 17.0 g/dL</td>
                                <td><span className="status-tag normal">Normal</span></td>
                              </tr>
                              <tr>
                                <td>Total Leukocyte Count (WBC)</td>
                                <td className="font-bold">6,800</td>
                                <td>4,000 - 11,000 /cumm</td>
                                <td><span className="status-tag normal">Normal</span></td>
                              </tr>
                              <tr>
                                <td>Platelet Count</td>
                                <td className="font-bold">2.4</td>
                                <td>1.5 - 4.5 Lakhs/cumm</td>
                                <td><span className="status-tag normal">Normal</span></td>
                              </tr>
                            </>
                          )}
                          {testType === 'lipid' && (
                            <>
                              <tr>
                                <td>Total Cholesterol</td>
                                <td className="font-bold">182</td>
                                <td>&lt; 200 mg/dL</td>
                                <td><span className="status-tag normal">Desirable</span></td>
                              </tr>
                              <tr>
                                <td>Triglycerides</td>
                                <td className="font-bold">135</td>
                                <td>&lt; 150 mg/dL</td>
                                <td><span className="status-tag normal">Normal</span></td>
                              </tr>
                              <tr>
                                <td>HDL Cholesterol (Good)</td>
                                <td className="font-bold">48</td>
                                <td>&gt; 40 mg/dL</td>
                                <td><span className="status-tag normal">Optimal</span></td>
                              </tr>
                            </>
                          )}
                          {testType === 'thyroid' && (
                            <>
                              <tr>
                                <td>TSH (Ultrasensitive)</td>
                                <td className="font-bold">2.35</td>
                                <td>0.35 - 4.94 µIU/mL</td>
                                <td><span className="status-tag normal">Euthyroid</span></td>
                              </tr>
                              <tr>
                                <td>Total T3</td>
                                <td className="font-bold">1.12</td>
                                <td>0.58 - 1.59 ng/mL</td>
                                <td><span className="status-tag normal">Normal</span></td>
                              </tr>
                              <tr>
                                <td>Total T4</td>
                                <td className="font-bold">7.8</td>
                                <td>4.87 - 11.72 µg/dL</td>
                                <td><span className="status-tag normal">Normal</span></td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>

                      <div className="report-sign-block">
                        <div className="sign-line">Electronically Verified by {labDoctor}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCT 2: WACENTRAL */}
        {activeTab === 'wacentral' && (
          <div className="product-detail-card">
            <div className="product-hero-bar">
              <div className="product-badge-group">
                <span className="product-status-tag active-tag">In Active Development</span>
                <span className="product-category-tag">Developer Infrastructure & Messaging API</span>
              </div>
              <div className="product-actions-bar">
                <a 
                  href="https://wa.ssdclabs.online" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <span>Visit wa.ssdclabs.online</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="product-overview-grid">
              <div className="product-desc-col">
                <h2 className="product-main-heading">WACentral — Enterprise WhatsApp API & Automation Gateway</h2>
                <p className="product-lead-text">
                  WACentral provides a high-reliability messaging backend that allows applications to trigger transactional WhatsApp notifications, media attachments, diagnostic reports, and interactive templates with millisecond latency.
                </p>

                <h3 className="sub-heading">Key Technical Features:</h3>
                <ul className="feature-checklist">
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>RESTful API Architecture:</strong> Simple JSON endpoints to send text, documents, templates, and rich interactive lists.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Bidirectional Webhook Streams:</strong> Real-time delivery receipts (sent, delivered, read) and incoming customer responses.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Fault-Tolerant Queue Manager:</strong> Built-in rate limiting, exponential backoff retries, and network failure resilience.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Encrypted Payload Transmission:</strong> TLS 1.3 encryption for all data in transit with strict header verification.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Interactive API console */}
              <div className="product-demo-col">
                <div className="interactive-console-card">
                  <div className="console-card-header">
                    <div className="console-window-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <span className="font-mono text-xs text-muted">WACentral HTTP REST Simulator</span>
                  </div>

                  <div className="console-card-body">
                    <div className="api-trigger-bar mb-3">
                      <select 
                        value={selectedEvent} 
                        onChange={(e) => setSelectedEvent(e.target.value)}
                        className="sim-select"
                      >
                        <option value="report_ready">Template: Diagnostic Report PDF Delivery</option>
                        <option value="payment_receipt">Template: Transactional Payment Receipt</option>
                      </select>

                      <button 
                        onClick={handleTriggerApi}
                        className="btn btn-sm btn-primary"
                      >
                        <Zap size={14} />
                        <span>Send Request</span>
                      </button>
                    </div>

                    <div className="code-block font-mono mb-3">
                      <pre>{`POST /api/v1/messages/template
Authorization: Bearer wac_live_8f3d...
Content-Type: application/json

{
  "to": "+919876543210",
  "template": "${selectedEvent}",
  "components": [
    { "type": "header", "parameters": [{ "type": "document" }] },
    { "type": "body", "parameters": [{ "text": "SSDC-2026-9812" }] }
  ]
}`}</pre>
                    </div>

                    <div className="api-log-viewer">
                      <div className="text-xs font-bold text-muted mb-1 flex items-center gap-1">
                        <Clock size={12} /> Recent Dispatch Logs:
                      </div>
                      <div className="log-entries font-mono text-xs">
                        {apiLog.map((log, i) => (
                          <div key={i} className="log-row">
                            <span className="log-status-200">{log.code}</span>
                            <span className="log-method">{log.method}</span>
                            <span className="log-ep">{log.endpoint}</span>
                            <span className="log-lat">{log.latency}</span>
                            <span className="log-ts">{log.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCT 3: WA CONNECT */}
        {activeTab === 'waconnect' && (
          <div className="product-detail-card">
            <div className="product-hero-bar">
              <div className="product-badge-group">
                <span className="product-status-tag active-tag">In Active Development</span>
                <span className="product-category-tag">Conversational Commerce & Business Automation</span>
              </div>
            </div>

            <div className="product-overview-grid">
              <div className="product-desc-col">
                <h2 className="product-main-heading">WA Connect — WhatsApp Conversational Commerce Engine</h2>
                <p className="product-lead-text">
                  WA Connect empowers businesses and clinical services to turn WhatsApp conversations into automated storefronts, handling product catalogs, appointment booking, and order lifecycle management without manual overhead.
                </p>

                <h3 className="sub-heading">Key Technical Features:</h3>
                <ul className="feature-checklist">
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Native WhatsApp Catalog Sync:</strong> Synchronize inventory, services, and diagnostic packages directly into WhatsApp multi-product messages.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Automated Cart-to-Payment Pipeline:</strong> Instant UPI & payment gateway integration directly inside conversation sessions.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Automated Appointment Booking:</strong> Real-time doctor/lab slot reservation with instant reminder alerts.
                    </div>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="check-icon" />
                    <div>
                      <strong>Multi-Agent Collaborative Inbox:</strong> Seamless handoff between automated decision trees and human customer support representatives.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Conversational Storefront Simulator */}
              <div className="product-demo-col">
                <div className="interactive-console-card">
                  <div className="console-card-header">
                    <div className="console-window-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <span className="font-mono text-xs text-muted">WA Connect Conversation Flow</span>
                  </div>

                  <div className="console-card-body">
                    <div className="chat-interface-wrapper">
                      <div className="chat-header-bar">
                        <div className="avatar-circle">SC</div>
                        <div>
                          <div className="chat-title">SINCERITY Automated Assistant</div>
                          <div className="chat-status">Online • Verified Business</div>
                        </div>
                      </div>

                      <div className="chat-bubbles-body">
                        <div className="chat-bubble bot-bubble">
                          <p>Welcome! What service would you like to schedule today?</p>
                          <div className="quick-actions-list">
                            <span className="quick-btn">1. Full Body Checkup (₹1,499)</span>
                            <span className="quick-btn">2. Blood Glucose Screening (₹150)</span>
                            <span className="quick-btn">3. Home Sample Collection</span>
                          </div>
                        </div>

                        <div className="chat-bubble user-bubble">
                          I want to schedule Option 1 for tomorrow morning.
                        </div>

                        <div className="chat-bubble bot-bubble">
                          <p>✓ <strong>Full Body Checkup</strong> selected.</p>
                          <p className="text-xs text-muted">Slot reserved for 08:30 AM tomorrow. A phlebotomist will arrive with sterile sample kits.</p>
                          <div className="order-summary-box">
                            <div className="flex justify-between">
                              <span>Amount Due:</span>
                              <span className="font-bold font-mono">₹1,499</span>
                            </div>
                            <span className="upi-pill">Instant UPI Link Sent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cross-Product Integration Matrix */}
      <section className="section bg-card-surface border-t mt-12">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill">CROSS-SYSTEM ARCHITECTURE</span>
            <h2 className="section-title">How our products function as a unified ecosystem</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              SSDC Labs, WACentral, and WA Connect are engineered with unified protocols for complete interoperability.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-badge">STEP 1</div>
              <h3 className="card-title">Patient / Client Intake</h3>
              <p className="card-text">
                Bookings initiated via <strong>WA Connect</strong> conversational flows or direct accessioning inside <strong>SSDC Labs</strong>.
              </p>
            </div>

            <div className="card">
              <div className="card-badge">STEP 2</div>
              <h3 className="card-title">Processing & Validation</h3>
              <p className="card-text">
                Diagnostics, pathology reference testing, and digital pathologist signature verified within <strong>SSDC Labs</strong>.
              </p>
            </div>

            <div className="card">
              <div className="card-badge">STEP 3</div>
              <h3 className="card-title">Automated Dispatch</h3>
              <p className="card-text">
                <strong>WACentral</strong> API triggers authenticated, encrypted delivery directly to the end user with delivery confirmation receipts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
