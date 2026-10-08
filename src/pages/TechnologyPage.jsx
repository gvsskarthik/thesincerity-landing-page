import React from 'react';
import { 
  Code2, 
  Workflow, 
  BrainCircuit, 
  HeartPulse, 
  MessageSquareShare, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Database, 
  Server, 
  Lock, 
  Terminal,
  Zap,
  Radio,
  CheckCircle2
} from 'lucide-react';

export default function TechnologyPage() {
  const techPillars = [
    {
      id: 'software',
      icon: <Code2 size={24} />,
      badge: 'AREA 01',
      title: 'Modern Software Engineering',
      description: 'Building clean, modular, maintainable software architectures with high performance, resilience, and horizontal scalability.',
      points: [
        'Modular microservice and decoupled monolithic architectures',
        'Strict type safety and robust API contract specifications',
        'Automated CI/CD pipelines with deterministic testing regimes',
        'Optimized data serialization and low-overhead memory consumption'
      ]
    },
    {
      id: 'automation',
      icon: <Workflow size={24} />,
      badge: 'AREA 02',
      title: 'Automation & Workflow Systems',
      description: 'Streamlining complex, multi-step human operations through intelligent task queues, event dispatchers, and state machine architectures.',
      points: [
        'Event-driven asynchronous messaging and task processing',
        'State-machine validated workflow transitions',
        'Low-overhead webhook ingest and bi-directional synchronizers',
        'Self-healing retry queues with exponential backoff handling'
      ]
    },
    {
      id: 'ai',
      icon: <BrainCircuit size={24} />,
      badge: 'AREA 03',
      title: 'Applied AI & Practical Intelligence',
      description: 'Designing purpose-driven machine learning and intelligent data extraction systems for real operational tasks, strictly avoiding vanity AI gimmicks.',
      points: [
        'Structured clinical data parsing and OCR extraction',
        'Deterministic rule-augmented natural language understanding',
        'Context-aware conversational routing and intention analysis',
        'Zero hallucination architectural safeguards for mission-critical workflows'
      ]
    },
    {
      id: 'healthcare',
      icon: <HeartPulse size={24} />,
      badge: 'AREA 04',
      title: 'Healthcare & Diagnostic Systems',
      description: 'Developing reliable, compliant, and privacy-first software platforms for diagnostic laboratories, clinical workflows, and patient communications.',
      points: [
        'Secure multi-tenant pathology accessioning and testing engines',
        'Dynamic clinical reference calculation by demographic profiles',
        'Encrypted electronic report generation and verifiable audit trails',
        'Direct patient-accessible delivery channels via authenticated messaging'
      ]
    },
    {
      id: 'communication',
      icon: <MessageSquareShare size={24} />,
      badge: 'AREA 05',
      title: 'Communication & Messaging Tech',
      description: 'High-throughput transactional messaging gateways engineered for instant customer notifications, document transfer, and verified channels.',
      points: [
        'Official Meta WhatsApp Business Cloud API integrations',
        'Sub-second transactional message routing and template verification',
        'Automated document compilation and instant PDF streaming',
        'Comprehensive webhook ingestion with signature verification'
      ]
    },
    {
      id: 'hardware',
      icon: <Cpu size={24} />,
      badge: 'AREA 06',
      title: 'Future Hardware & Connected Devices',
      description: 'Long-term research into physical computing, edge intelligence controllers, and seamless software-to-hardware interfaces.',
      points: [
        'Edge device sensor data ingestion protocols',
        'Microcontroller telemetry and real-time status monitoring',
        'Low-power communication stacks (BLE, LoRa, MQTT)',
        'Embedded Linux runtime environments and hardware security modules'
      ]
    }
  ];

  return (
    <div className="page technology-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="badge-pill">ENGINEERING & ARCHITECTURE</span>
          <h1 className="page-title">Technical Foundations & Core Focus Areas</h1>
          <p className="page-subtitle max-w-2xl">
            SINCERITY approaches technology with a rigorous engineering mindset — focusing on performance, maintainability, and real-world operational execution.
          </p>
        </div>
      </section>

      {/* Focus Area Grid */}
      <section className="section">
        <div className="container">
          <div className="tech-cards-grid">
            {techPillars.map((pillar) => (
              <div key={pillar.id} className="card tech-detail-card">
                <div className="tech-card-top">
                  <div className="card-icon-box">{pillar.icon}</div>
                  <span className="tech-badge">{pillar.badge}</span>
                </div>

                <h3 className="card-title mt-4">{pillar.title}</h3>
                <p className="card-text mb-4">{pillar.description}</p>

                <div className="tech-points-list">
                  <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-2">Key Technical Capabilities:</span>
                  {pillar.points.map((pt, idx) => (
                    <div key={idx} className="point-item">
                      <CheckCircle2 size={15} className="point-icon" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards Matrix */}
      <section className="section bg-card-surface border-t">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge-pill">QUALITY PROTOCOLS</span>
            <h2 className="section-title">Our Architecture & Security Protocols</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Every line of code written at SINCERITY complies with strict technical standards.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-icon-box">
                <Lock size={20} />
              </div>
              <h3 className="card-title">End-to-End Cryptography</h3>
              <p className="card-text">
                Strict TLS 1.3 encryption for data in motion, AES-256 for data at rest, and authenticated webhook signatures for all external communications.
              </p>
            </div>

            <div className="card">
              <div className="card-icon-box">
                <Server size={20} />
              </div>
              <h3 className="card-title">Zero-Downtime Deployments</h3>
              <p className="card-text">
                Immutable infrastructure containers, rolling blue-green deployments, and automated health probing across all service endpoints.
              </p>
            </div>

            <div className="card">
              <div className="card-icon-box">
                <ShieldCheck size={20} />
              </div>
              <h3 className="card-title">Deterministic Integrity</h3>
              <p className="card-text">
                Database ACID compliance, idempotent transaction logs, and strict validation schemas preventing malformed or corrupt state transitions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
