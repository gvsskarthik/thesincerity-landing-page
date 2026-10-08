import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Workflow, 
  BrainCircuit, 
  Bot, 
  Cpu, 
  Radio, 
  Compass, 
  CheckCircle2, 
  Flame, 
  ShieldCheck 
} from 'lucide-react';

export default function VisionPage() {
  const roadmapSteps = [
    {
      step: '01',
      phase: 'CURRENT ACTIVE PHASE',
      title: 'Foundational Software Platforms',
      description: 'Building robust, production-grade applications that solve immediate operational challenges in healthcare pathology and conversational communications.',
      products: ['SSDC Labs (Diagnostic Management)', 'WACentral (WhatsApp API Gateway)', 'WA Connect (Conversational Commerce)'],
      status: 'In Active Development'
    },
    {
      step: '02',
      phase: 'NEAR HORIZON',
      title: 'Workflow Automation & Integration Engines',
      description: 'Connecting fragmented software systems into unified, low-latency, event-driven pipelines that reduce human administrative overhead.',
      products: ['Multi-system sync bridges', 'Automated document processing pipelines', 'Cross-channel webhook orchestrators'],
      status: 'Architectural Design'
    },
    {
      step: '03',
      phase: 'MEDIUM HORIZON',
      title: 'Applied AI & Practical Intelligence',
      description: 'Integrating deterministic machine learning models and intelligent data extractors into our software infrastructure to automate high-complexity analysis.',
      products: ['Clinical data normalization models', 'Intelligent triage engines', 'Predictive supply forecasting'],
      status: 'Research Vector'
    },
    {
      step: '04',
      phase: 'ADVANCED HORIZON',
      title: 'Autonomous Intelligent Systems',
      description: 'Building self-monitoring, self-optimizing operational platforms that can dynamically adapt to fluctuating workloads and system anomalies.',
      products: ['Autonomous workflow agents', 'Adaptive load re-balancers', 'Continuous compliance monitors'],
      status: 'Long-Term Research'
    },
    {
      step: '05',
      phase: 'ULTIMATE HORIZON',
      title: 'Physical Systems & Future Devices',
      description: 'Extending software intelligence into physical hardware controllers, dedicated edge computing appliances, and connected smart diagnostic instruments.',
      products: ['Edge diagnostic controllers', 'Embedded IoT telemetry gateways', 'Custom hardware integrations'],
      status: 'Future Vision'
    }
  ];

  return (
    <div className="page vision-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="badge-pill">STRATEGIC HORIZONS</span>
          <h1 className="page-title">The Long-Term Vision of SINCERITY</h1>
          <p className="page-subtitle max-w-2xl">
            A disciplined, multi-phase roadmap designed to take software from foundational daily utility to advanced physical systems.
          </p>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="section py-8">
        <div className="container">
          <div className="vision-manifesto-card">
            <div className="manifesto-badge">
              <Compass size={18} />
              <span>THE SINCERITY METHODOLOGY</span>
            </div>
            <h2 className="manifesto-title">
              "We do not build hype. We build foundations that endure."
            </h2>
            <p className="manifesto-text">
              The technology industry is crowded with premature claims and fragile prototypes. At SINCERITY, our philosophy is grounded in reality: we master the foundational software layer first. Only after building rock-solid operational platforms do we expand into automation, artificial intelligence, and physical devices.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Progression */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge-pill">PROGRESSION ROADMAP</span>
            <h2 className="section-title">From Code to Autonomous Physical Systems</h2>
            <p className="section-subtitle">
              Our phased approach to building enduring technological infrastructure.
            </p>
          </div>

          <div className="roadmap-timeline">
            {roadmapSteps.map((item, index) => (
              <div key={item.step} className="roadmap-card-row">
                <div className="roadmap-step-col">
                  <div className="step-circle">{item.step}</div>
                  {index < roadmapSteps.length - 1 && <div className="step-connector"></div>}
                </div>

                <div className="roadmap-body-col">
                  <div className="card roadmap-card">
                    <div className="roadmap-card-header">
                      <span className={`phase-tag ${item.step === '01' ? 'phase-active' : ''}`}>
                        {item.phase}
                      </span>
                      <span className="phase-status">{item.status}</span>
                    </div>

                    <h3 className="card-title text-xl mt-2">{item.title}</h3>
                    <p className="card-text my-3">{item.description}</p>

                    <div className="roadmap-products-list">
                      <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">Key Focus Vectors:</span>
                      <div className="product-tags-flex">
                        {item.products.map((prod, pIdx) => (
                          <span key={pIdx} className="prod-pill">
                            <CheckCircle2 size={12} className="prod-check" />
                            <span>{prod}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Physical Systems Research */}
      <section className="section bg-card-surface border-t">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill">HARDWARE RESEARCH VECTOR</span>
            <h2 className="section-title">The Physical Dimension</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Why our vision extends beyond cloud servers into edge hardware and connected devices.
            </p>
          </div>

          <div className="grid-2">
            <div className="card">
              <div className="card-icon-box">
                <Radio size={22} />
              </div>
              <h3 className="card-title">Edge Device Interoperability</h3>
              <p className="card-text">
                Medical diagnostics and industrial automation require edge controllers capable of functioning autonomously in disconnected environments and synchronizing securely when connectivity returns.
              </p>
            </div>

            <div className="card">
              <div className="card-icon-box">
                <Cpu size={22} />
              </div>
              <h3 className="card-title">Custom Telemetry & Hardware Gateways</h3>
              <p className="card-text">
                Developing proprietary communication modules that connect laboratory diagnostic analyzers directly to our cloud infrastructure without requiring brittle third-party intermediary software.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/contact" className="btn btn-primary">
              <span>Connect with Engineering</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
