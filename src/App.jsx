import React, { useState, useEffect, useRef } from 'react';
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
  Sliders
} from 'lucide-react';

export default function App() {
  // Navigation & View State
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'products' | 'api' | 'telemetry' | 'corporate'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);
  const [apiLanguage, setApiLanguage] = useState('curl'); // 'curl' | 'node' | 'python'
  
  // Interactive SSDC Labs Diagnostic State
  const [patientName, setPatientName] = useState('Johnathan Doe');
  const [hbLevel, setHbLevel] = useState(13.8);
  const [glucose, setGlucose] = useState(98);
  const [isCompilingReport, setIsCompilingReport] = useState(false);
  const [reportTimestamp, setReportTimestamp] = useState('11:42:09 AM');

  // Interactive WACentral Gateway State
  const [recipientNumber, setRecipientNumber] = useState('+91 98765 43210');
  const [dispatchStatus, setDispatchStatus] = useState('idle'); // 'idle' | 'sending' | 'delivered'
  const [gatewayLogs, setGatewayLogs] = useState([
    { id: 1, time: '23:30:12', method: 'POST', endpoint: '/v1/webhook/verify', status: 200, latency: '12ms' },
    { id: 2, time: '23:31:05', method: 'POST', endpoint: '/v1/dispatch/template', status: 202, latency: '19ms' },
    { id: 3, time: '23:32:40', method: 'GET', endpoint: '/v1/system/health', status: 200, latency: '8ms' },
  ]);

  // Interactive WA Connect State
  const [cartCount, setCartCount] = useState(2);
  const [checkoutStatus, setCheckoutStatus] = useState(false);

  // Live Clock Effect
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
      const now = new Date();
      setReportTimestamp(now.toLocaleTimeString());
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
          status: 200, 
          latency: `${Math.floor(Math.random() * 15) + 10}ms` 
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
    "template": "diagnostic_alert",
    "parameters": {
      "patient_name": "${patientName}",
      "status": "Verified"
    }
  }'`,
    node: `import { SincerityClient } from '@sincerity/sdk';

const client = new SincerityClient({
  apiKey: process.env.SINCERITY_API_KEY
});

const response = await client.dispatch.send({
  channel: 'whatsapp',
  recipient: '${recipientNumber}',
  template: 'diagnostic_alert',
  parameters: {
    patient_name: '${patientName}',
    status: 'Verified'
  }
});

console.log('Dispatched ID:', response.id);`,
    python: `from sincerity import SincerityClient

client = SincerityClient(api_key="sk_live_sincerity_982a1")

response = client.dispatch.send(
    channel="whatsapp",
    recipient="${recipientNumber}",
    template="diagnostic_alert",
    parameters={
        "patient_name": "${patientName}",
        "status": "Verified"
    }
)

print(f"Message status: {response.status}")`
  };

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[apiLanguage]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="dashboard-app">
      {/* Top Navigation Header */}
      <header className="dash-header">
        <div className="header-left">
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="brand-identity-box">
            <img 
              src="/logo-icon.png" 
              alt="SINCERITY" 
              className="dash-brand-logo" 
            />
            <div className="brand-title-group">
              <span className="brand-main-title">SINCERITY</span>
              <span className="brand-sub-badge">COMMAND CONSOLE</span>
            </div>
          </div>
        </div>

        <div className="header-center">
          <div className="system-status-indicator">
            <span className="status-pulse-dot"></span>
            <span className="status-label">ALL SYSTEMS OPERATIONAL</span>
            <span className="status-divider">•</span>
            <span className="status-uptime">99.99% Uptime</span>
          </div>
        </div>

        <div className="header-right">
          <div className="live-clock font-mono">
            <Activity size={14} className="text-brand" />
            <span>{currentTime || '00:00:00 IST'}</span>
          </div>

          <a 
            href="mailto:contact@thesincerity.in" 
            className="dash-action-btn"
          >
            <Mail size={15} />
            <span>Support</span>
          </a>
        </div>
      </header>

      <div className="dash-layout-body">
        {/* Left Sidebar Navigation */}
        <aside className={`dash-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-section-title">PLATFORM MODULES</div>
          <nav className="sidebar-nav">
            <button 
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => { setActiveTab('overview'); setMobileMenuOpen(false); }}
            >
              <Layers size={18} />
              <span>Overview & KPIs</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => { setActiveTab('products'); setMobileMenuOpen(false); }}
            >
              <Cpu size={18} />
              <span>Products & Workflows</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'api' ? 'active' : ''}`}
              onClick={() => { setActiveTab('api'); setMobileMenuOpen(false); }}
            >
              <Terminal size={18} />
              <span>API Gateway Sandbox</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'telemetry' ? 'active' : ''}`}
              onClick={() => { setActiveTab('telemetry'); setMobileMenuOpen(false); }}
            >
              <BarChart3 size={18} />
              <span>Telemetry & Health</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'corporate' ? 'active' : ''}`}
              onClick={() => { setActiveTab('corporate'); setMobileMenuOpen(false); }}
            >
              <Building2 size={18} />
              <span>Corporate Entity</span>
            </button>
          </nav>

          <div className="sidebar-brand-card">
            <img 
              src="/sincerity-full-brand.png" 
              alt="SINCERITY (OPC) PRIVATE LIMITED" 
              className="sidebar-full-brand-img"
            />
            <div className="sidebar-meta-text">
              Incorporated 18 Sept 2026<br />
              Govt. of India Registered
            </div>
          </div>
        </aside>

        {/* Main Dashboard Content Area */}
        <main className="dash-main-viewport">
          
          {/* TAB 1: OVERVIEW & SYSTEM KPIS */}
          {activeTab === 'overview' && (
            <div className="view-content fade-in">
              {/* Hero Company Banner */}
              <div className="hero-banner-card">
                <div className="banner-text-content">
                  <div className="banner-badge-row">
                    <span className="pill-badge pill-gold">
                      <Sparkles size={13} /> SINCERITY OPC PVT LTD
                    </span>
                    <span className="pill-badge pill-slate">
                      Production Infrastructure
                    </span>
                  </div>
                  <h1 className="banner-heading">
                    Engineered for reliability, built with transparent software architecture.
                  </h1>
                  <p className="banner-desc">
                    SINCERITY creates foundational technology products across diagnostic laboratory systems, high-throughput WhatsApp automation gateways, and fault-tolerant software backends.
                  </p>
                </div>
                <div className="banner-quick-stats">
                  <div className="stat-box">
                    <div className="stat-number">99.99%</div>
                    <div className="stat-label">Deterministic SLA</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number">&lt; 20ms</div>
                    <div className="stat-label">Gateway Latency</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Code Integrity</div>
                  </div>
                </div>
              </div>

              {/* Core Metric Cards Grid */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-card-header">
                    <div className="metric-icon-box bg-blue-subtle">
                      <HeartPulse size={20} className="text-blue" />
                    </div>
                    <span className="metric-tag">HEALTHCARE LIS</span>
                  </div>
                  <h3 className="metric-title">SSDC Labs Diagnostic Suite</h3>
                  <p className="metric-summary">
                    Pathology lab management, automated report generation, and compliant clinical diagnostic workflow engine.
                  </p>
                  <div className="metric-footer">
                    <span className="link-text" onClick={() => setActiveTab('products')}>
                      Launch Simulator <ChevronRight size={14} />
                    </span>
                    <a href="https://ssdclabs.online" target="_blank" rel="noopener noreferrer" className="ext-link">
                      ssdclabs.online <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-card-header">
                    <div className="metric-icon-box bg-green-subtle">
                      <Terminal size={20} className="text-green" />
                    </div>
                    <span className="metric-tag">GATEWAY INFRASTRUCTURE</span>
                  </div>
                  <h3 className="metric-title">WACentral Dispatch Engine</h3>
                  <p className="metric-summary">
                    Multi-tenant WhatsApp Business Cloud API routing, dynamic webhooks, cryptographic payload signing, and retry queuing.
                  </p>
                  <div className="metric-footer">
                    <span className="link-text" onClick={() => setActiveTab('api')}>
                      Test Endpoint <ChevronRight size={14} />
                    </span>
                    <a href="https://wa.ssdclabs.online" target="_blank" rel="noopener noreferrer" className="ext-link">
                      wa.ssdclabs.online <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-card-header">
                    <div className="metric-icon-box bg-gold-subtle">
                      <ShoppingCart size={20} className="text-gold" />
                    </div>
                    <span className="metric-tag">CONVERSATIONAL COMMERCE</span>
                  </div>
                  <h3 className="metric-title">WA Connect Storefront</h3>
                  <p className="metric-summary">
                    Automated WhatsApp conversational product discovery, cart synchronization, and real-time order broadcast.
                  </p>
                  <div className="metric-footer">
                    <span className="link-text" onClick={() => setActiveTab('products')}>
                      View Catalog Demo <ChevronRight size={14} />
                    </span>
                    <span className="status-pill-subtle">Active Pipeline</span>
                  </div>
                </div>
              </div>

              {/* System Architecture Section */}
              <div className="card-panel">
                <div className="panel-header">
                  <div className="panel-title-group">
                    <Layers size={18} className="text-brand" />
                    <h2 className="panel-title">Ecosystem Stack Architecture</h2>
                  </div>
                  <span className="panel-badge">Multi-Tier Integration</span>
                </div>
                
                <div className="stack-table-wrapper">
                  <table className="dash-table">
                    <thead>
                      <tr>
                        <th>Layer</th>
                        <th>Architecture Vector</th>
                        <th>Core Functionality</th>
                        <th>Operating Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-mono font-bold text-accent">L1 - Domain SaaS</td>
                        <td><strong>SSDC Labs (Pathology LIS)</strong></td>
                        <td>Patient registration, barcode indexing, reference range validation, PDF generation</td>
                        <td><span className="badge-status-online">Operational</span></td>
                      </tr>
                      <tr>
                        <td className="font-mono font-bold text-accent">L2 - Communication</td>
                        <td><strong>WACentral API & WA Connect</strong></td>
                        <td>High-throughput WhatsApp messaging, Webhooks ingestion, payment callbacks</td>
                        <td><span className="badge-status-online">Operational</span></td>
                      </tr>
                      <tr>
                        <td className="font-mono font-bold text-accent">L3 - Intelligence</td>
                        <td><strong>Automated Triage & ML Pipelines</strong></td>
                        <td>Deterministic anomaly flags, natural language routing, structured ETL</td>
                        <td><span className="badge-status-pipeline">Under Development</span></td>
                      </tr>
                      <tr>
                        <td className="font-mono font-bold text-accent">L4 - Edge Systems</td>
                        <td><strong>Physical Controllers & Hardware IoT</strong></td>
                        <td>Embedded diagnostic device telemetry, hardware controllers, firmware bridge</td>
                        <td><span className="badge-status-research">Research Vector</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS & INTERACTIVE WORKFLOWS */}
          {activeTab === 'products' && (
            <div className="view-content fade-in">
              <div className="view-header-row">
                <div>
                  <h2 className="view-title">Software Product Suites</h2>
                  <p className="view-desc">Live interactive testbeds for SINCERITY proprietary platforms.</p>
                </div>
              </div>

              {/* Product 1: SSDC Labs Simulator */}
              <div className="card-panel mb-6">
                <div className="panel-header">
                  <div className="panel-title-group">
                    <HeartPulse size={20} className="text-red-500" />
                    <h3 className="panel-title">SSDC Labs — Pathology Diagnostic Engine</h3>
                  </div>
                  <a href="https://ssdclabs.online" target="_blank" rel="noopener noreferrer" className="live-btn">
                    Visit Live System <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="simulator-split-layout">
                  <div className="sim-form-pane">
                    <h4 className="pane-heading">Interactive Parameter Configurator</h4>
                    <div className="form-group">
                      <label>Patient Full Name</label>
                      <input 
                        type="text" 
                        value={patientName} 
                        onChange={(e) => setPatientName(e.target.value)} 
                        className="dash-input"
                      />
                    </div>

                    <div className="form-group">
                      <div className="slider-label-row">
                        <label>Hemoglobin (Hb)</label>
                        <span className="font-mono font-bold text-brand">{hbLevel} g/dL</span>
                      </div>
                      <input 
                        type="range" 
                        min="8.0" 
                        max="18.0" 
                        step="0.1" 
                        value={hbLevel}
                        onChange={(e) => setHbLevel(parseFloat(e.target.value))}
                        className="dash-slider"
                      />
                    </div>

                    <div className="form-group">
                      <div className="slider-label-row">
                        <label>Fasting Blood Sugar</label>
                        <span className="font-mono font-bold text-brand">{glucose} mg/dL</span>
                      </div>
                      <input 
                        type="range" 
                        min="60" 
                        max="240" 
                        step="1" 
                        value={glucose}
                        onChange={(e) => setGlucose(parseInt(e.target.value))}
                        className="dash-slider"
                      />
                    </div>

                    <button 
                      className="btn-primary-action w-full"
                      onClick={handleSimulateReport}
                      disabled={isCompilingReport}
                    >
                      <RefreshCw size={15} className={isCompilingReport ? 'spin' : ''} />
                      <span>{isCompilingReport ? 'Recalculating...' : 'Validate Diagnostic Ranges'}</span>
                    </button>
                  </div>

                  <div className="sim-report-pane">
                    <div className="mock-report-sheet">
                      <div className="report-header">
                        <div>
                          <div className="report-brand">SSDC LABS MEDICAL DIAGNOSTICS</div>
                          <div className="report-sub">ISO-Engineered Laboratory Management System</div>
                        </div>
                        <div className="report-timestamp font-mono">{reportTimestamp}</div>
                      </div>

                      <div className="report-patient-bar">
                        <span><strong>Patient:</strong> {patientName || 'Anonymous'}</span>
                        <span><strong>Sample ID:</strong> #SSDC-2026-9812</span>
                      </div>

                      <table className="report-table">
                        <thead>
                          <tr>
                            <th>Parameter</th>
                            <th>Result</th>
                            <th>Reference Interval</th>
                            <th>Flag</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Hemoglobin (Hb)</td>
                            <td className="font-mono font-bold">{hbLevel} g/dL</td>
                            <td>12.0 - 16.0 g/dL</td>
                            <td>
                              <span className={`tag-flag ${hbLevel >= 12 && hbLevel <= 16 ? 'normal' : 'warning'}`}>
                                {hbLevel >= 12 && hbLevel <= 16 ? 'NORMAL' : 'OUT OF RANGE'}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>Fasting Blood Sugar</td>
                            <td className="font-mono font-bold">{glucose} mg/dL</td>
                            <td>70 - 100 mg/dL</td>
                            <td>
                              <span className={`tag-flag ${glucose <= 100 ? 'normal' : 'warning'}`}>
                                {glucose <= 100 ? 'NORMAL' : 'ELEVATED'}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="report-footer font-mono">
                        ✓ Digital Signature Digest Verified • Linked to WACentral Delivery Engine
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 2: WA Connect Storefront */}
              <div className="card-panel">
                <div className="panel-header">
                  <div className="panel-title-group">
                    <ShoppingCart size={20} className="text-gold" />
                    <h3 className="panel-title">WA Connect — WhatsApp Commerce Flow</h3>
                  </div>
                  <span className="pill-badge pill-gold">Commerce Suite</span>
                </div>

                <div className="commerce-demo-grid">
                  <div className="catalog-column">
                    <h4 className="pane-heading">Sample Service Packages</h4>
                    <div className="catalog-card-item">
                      <div>
                        <strong>Complete Comprehensive Health Profile</strong>
                        <div className="text-muted text-sm">62 Vital Health Parameters Included</div>
                      </div>
                      <span className="font-mono font-bold text-accent">₹1,499</span>
                    </div>
                    <div className="catalog-card-item">
                      <div>
                        <strong>Diabetes Monitoring Matrix (HbA1c + Lipid)</strong>
                        <div className="text-muted text-sm">Targeted Metabolic Screening</div>
                      </div>
                      <span className="font-mono font-bold text-accent">₹799</span>
                    </div>
                  </div>

                  <div className="chat-preview-column">
                    <h4 className="pane-heading">Customer WhatsApp Message Feed</h4>
                    <div className="chat-box">
                      <div className="chat-bubble bubble-in">
                        Hello SINCERITY, I would like to schedule home sample collection for the Health Profile.
                      </div>
                      <div className="chat-bubble bubble-out">
                        <strong>WA Connect Bot:</strong><br />
                        Booking confirmed! Your order total is ₹1,499. Our certified phlebotomist is scheduled for tomorrow at 08:00 AM.
                      </div>
                    </div>
                    <button 
                      className="btn-primary-action w-full mt-3"
                      onClick={() => {
                        setCheckoutStatus(true);
                        setTimeout(() => setCheckoutStatus(false), 2500);
                      }}
                    >
                      <Send size={15} />
                      <span>{checkoutStatus ? '✓ Booking Transmitted via API' : 'Simulate Customer Order Dispatch'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: API GATEWAY SANDBOX */}
          {activeTab === 'api' && (
            <div className="view-content fade-in">
              <div className="view-header-row">
                <div>
                  <h2 className="view-title">WACentral API & Integration Console</h2>
                  <p className="view-desc">Simulate live HTTP requests, test webhooks, and inspect raw JSON payloads.</p>
                </div>
              </div>

              <div className="card-panel mb-6">
                <div className="panel-header">
                  <div className="panel-title-group">
                    <Terminal size={18} className="text-brand" />
                    <h3 className="panel-title">Multi-Language Code Generator</h3>
                  </div>
                  <div className="lang-selector-group">
                    <button 
                      className={`lang-btn ${apiLanguage === 'curl' ? 'active' : ''}`}
                      onClick={() => setApiLanguage('curl')}
                    >
                      cURL
                    </button>
                    <button 
                      className={`lang-btn ${apiLanguage === 'node' ? 'active' : ''}`}
                      onClick={() => setApiLanguage('node')}
                    >
                      Node.js
                    </button>
                    <button 
                      className={`lang-btn ${apiLanguage === 'python' ? 'active' : ''}`}
                      onClick={() => setApiLanguage('python')}
                    >
                      Python
                    </button>
                  </div>
                </div>

                <div className="code-editor-container">
                  <div className="code-editor-top">
                    <div className="window-dots">
                      <span className="dot dot-r"></span>
                      <span className="dot dot-y"></span>
                      <span className="dot dot-g"></span>
                    </div>
                    <button className="copy-code-btn" onClick={copyCodeToClipboard}>
                      {copiedCode ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                      <span>{copiedCode ? 'Copied to Clipboard' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="code-viewport font-mono">
                    <code>{codeSnippets[apiLanguage]}</code>
                  </pre>
                </div>
              </div>

              {/* Interactive Endpoint Dispatcher */}
              <div className="card-panel">
                <div className="panel-header">
                  <div className="panel-title-group">
                    <Send size={18} className="text-brand" />
                    <h3 className="panel-title">Interactive Dispatch Tester</h3>
                  </div>
                </div>

                <div className="dispatch-tester-grid">
                  <div className="tester-form">
                    <label className="form-label">Destination WhatsApp Phone Number</label>
                    <input 
                      type="text" 
                      value={recipientNumber} 
                      onChange={(e) => setRecipientNumber(e.target.value)} 
                      className="dash-input font-mono"
                    />
                    <button 
                      className="btn-primary-action w-full mt-4"
                      onClick={handleSimulateDispatch}
                      disabled={dispatchStatus === 'sending'}
                    >
                      <Zap size={15} />
                      <span>{dispatchStatus === 'sending' ? 'Transmitting Payload...' : 'Execute Live API Call'}</span>
                    </button>
                  </div>

                  <div className="tester-logs">
                    <div className="logs-header font-mono">
                      <span>TIMESTAMP</span>
                      <span>METHOD / ENDPOINT</span>
                      <span>STATUS</span>
                      <span>LATENCY</span>
                    </div>
                    <div className="logs-list font-mono">
                      {gatewayLogs.map(log => (
                        <div key={log.id} className="log-row">
                          <span className="text-muted">{log.time}</span>
                          <span className="text-accent">{log.method} {log.endpoint}</span>
                          <span className="log-status-badge">{log.status}</span>
                          <span className="text-green">{log.latency}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TELEMETRY & HEALTH */}
          {activeTab === 'telemetry' && (
            <div className="view-content fade-in">
              <div className="view-header-row">
                <div>
                  <h2 className="view-title">System Telemetry & Health Monitoring</h2>
                  <p className="view-desc">Real-time status indicators across SINCERITY production server clusters.</p>
                </div>
              </div>

              <div className="telemetry-grid">
                <div className="card-panel">
                  <div className="panel-header">
                    <h3 className="panel-title">Cluster Load & Utilization</h3>
                    <span className="badge-status-online">Healthy</span>
                  </div>
                  <div className="telemetry-bars">
                    <div className="telemetry-item">
                      <div className="telemetry-label-row">
                        <span>CPU Compute Core Load</span>
                        <span className="font-mono font-bold">14.2%</span>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: '14.2%' }}></div>
                      </div>
                    </div>
                    <div className="telemetry-item">
                      <div className="telemetry-label-row">
                        <span>RAM Memory Allocation</span>
                        <span className="font-mono font-bold">28.7%</span>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: '28.7%' }}></div>
                      </div>
                    </div>
                    <div className="telemetry-item">
                      <div className="telemetry-label-row">
                        <span>Webhook Queue Backlog</span>
                        <span className="font-mono font-bold">0 Pending</span>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" style={{ width: '3%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-panel">
                  <div className="panel-header">
                    <h3 className="panel-title">Security & Cryptographic Health</h3>
                    <ShieldCheck size={20} className="text-green" />
                  </div>
                  <div className="security-checks-list">
                    <div className="security-check-item">
                      <CheckCircle2 size={16} className="text-green" />
                      <span>TLS 1.3 Strict Transport Security Active</span>
                    </div>
                    <div className="security-check-item">
                      <CheckCircle2 size={16} className="text-green" />
                      <span>SHA-256 HMAC Webhook Payload Signing</span>
                    </div>
                    <div className="security-check-item">
                      <CheckCircle2 size={16} className="text-green" />
                      <span>Zero Plaintext Token Storage Policy</span>
                    </div>
                    <div className="security-check-item">
                      <CheckCircle2 size={16} className="text-green" />
                      <span>Automated Daily Snapshot Backups</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CORPORATE ENTITY */}
          {activeTab === 'corporate' && (
            <div className="view-content fade-in">
              <div className="view-header-row">
                <div>
                  <h2 className="view-title">Corporate Governance & Entity Information</h2>
                  <p className="view-desc">Official registry and legal identification for SINCERITY OPC Private Limited.</p>
                </div>
              </div>

              <div className="corporate-card-detailed">
                <div className="corporate-header-brand">
                  <img 
                    src="/logo-icon.png" 
                    alt="SINCERITY Logo" 
                    className="corp-logo-img"
                  />
                  <div>
                    <h3 className="corp-company-name">SINCERITY OPC PRIVATE LIMITED</h3>
                    <p className="corp-subtitle">Registered Indian Technology Company • Incorporated 18 Sept 2026</p>
                  </div>
                </div>

                <div className="corp-info-grid">
                  <div className="info-cell">
                    <span className="cell-title">Legal Entity Name</span>
                    <span className="cell-value">SINCERITY OPC PRIVATE LIMITED</span>
                  </div>
                  <div className="info-cell">
                    <span className="cell-title">Incorporation Date</span>
                    <span className="cell-value">18 September 2026</span>
                  </div>
                  <div className="info-cell">
                    <span className="cell-title">Jurisdiction</span>
                    <span className="cell-value">India (Ministry of Corporate Affairs)</span>
                  </div>
                  <div className="info-cell">
                    <span className="cell-title">Primary Domain</span>
                    <span className="cell-value font-mono">thesincerity.in</span>
                  </div>
                  <div className="info-cell">
                    <span className="cell-title">Engineering Verticals</span>
                    <span className="cell-value">Vertical SaaS, WhatsApp APIs, Clinical LIS</span>
                  </div>
                  <div className="info-cell">
                    <span className="cell-title">Direct Inquiries</span>
                    <span className="cell-value">
                      <a href="mailto:contact@thesincerity.in" className="text-accent">contact@thesincerity.in</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer Bar */}
      <footer className="dash-footer">
        <div className="footer-left">
          <span>© 2026 SINCERITY OPC PRIVATE LIMITED. All rights reserved.</span>
        </div>
        <div className="footer-right">
          <span className="font-mono">thesincerity.in</span>
          <span>•</span>
          <span className="text-muted">Technology Built With Purpose</span>
        </div>
      </footer>
    </div>
  );
}
