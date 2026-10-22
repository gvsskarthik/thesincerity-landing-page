import React, { useState } from 'react';
import './ExplorePage.css';
import {
  ArrowRight,
  Play,
  X as CloseIcon,
  Target,
  Lightbulb,
  Box,
  Database,
  Headphones,
  TrendingUp,
  Cpu,
  Cloud,
  Radio,
  Zap,
  Code,
  Server,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  Activity,
  Sparkles,
} from 'lucide-react';

import laptopImg from '../assets/p2_laptop.png';
import phoneWACentralImg from '../assets/p2_phone_wacentral.png';
import dualPhonesImg from '../assets/p2_dual_phones.png';
import phoneSinkAppImg from '../assets/p2_phone_sinkapp.png';
import cloudServersImg from '../assets/p2_cloud_servers.png';
import iconAiImg from '../assets/p2_icon_ai.png';
import iconCloudImg from '../assets/p2_icon_cloud.png';
import iconElectronicsImg from '../assets/p2_icon_electronics.png';
import iconIotImg from '../assets/p2_icon_iot.png';
import iconSemiconductorsImg from '../assets/p2_icon_semiconductors.png';
import iotDeviceImg from '../assets/p2_iot_device.png';
import chipResearchImg from '../assets/p2_chip_research.png';
import logoM4SpaceBlackSrc from '../assets/sincerity_logo_m4_space_black_v11.png';
import SincerityLogo from './SincerityLogo';
import SincerityWordmark from './SincerityWordmark';

interface ExplorePageProps {
  onBackToSplash?: () => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({ onBackToSplash }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: 'Optimedicate (SSDC)',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openDemoModal = (productName?: string) => {
    const prod = productName || 'Optimedicate (SSDC)';
    setFormData((prev) => ({ ...prev, product: prod }));
    setIsSuccess(false);
    setDemoModalOpen(true);
  };

  const handleSubmitDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      product: formData.product,
      message: formData.message || 'Requested live product demo',
      _subject: `🚀 New Demo Request: ${formData.product} from ${formData.name}`,
    };

    try {
      try {
        const stored = JSON.parse(localStorage.getItem('sincerity_demo_leads') || '[]');
        stored.push({ ...payload, date: new Date().toISOString() });
        localStorage.setItem('sincerity_demo_leads', JSON.stringify(stored));
      } catch (e) {
        // ignore
      }

      await fetch('https://formsubmit.co/ajax/contact@thesincerity.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setIsSuccess(true);
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    'All',
    'Products',
    'AI & Research',
    'Cloud',
    'Electronics',
    'IoT',
    'Semiconductors',
  ];

  const devProjects = [
    {
      id: 'optimedicate',
      title: 'Optimedicate (SSDC)',
      subtitle: 'Medical Lab Management System',
      category: 'Products',
      badge: 'Live',
      badgeClass: 'badge-live',
      img: laptopImg,
    },
    {
      id: 'wacentral',
      title: 'WACentral',
      subtitle: 'WhatsApp API Gateway',
      category: 'Products',
      badge: 'Live',
      badgeClass: 'badge-live',
      img: phoneWACentralImg,
    },
    {
      id: 'waconnect',
      title: 'WA Connect',
      subtitle: 'Business on WhatsApp',
      category: 'Products',
      badge: 'Beta',
      badgeClass: 'badge-beta',
      img: dualPhonesImg,
    },
    {
      id: 'iotdevices',
      title: 'IoT Lab Devices',
      subtitle: 'Smart Monitoring Systems',
      category: 'IoT',
      badge: 'In Development',
      badgeClass: 'badge-dev',
      img: iotDeviceImg,
    },
    {
      id: 'chipresearch',
      title: 'Custom Chip Research',
      subtitle: 'Semiconductor Research & Development',
      category: 'Semiconductors',
      badge: 'Research',
      badgeClass: 'badge-research',
      img: chipResearchImg,
    },
  ];

  const filteredProjects =
    activeTab === 'All'
      ? devProjects
      : devProjects.filter((p) => {
          if (activeTab === 'Products') return p.category === 'Products';
          if (activeTab === 'IoT') return p.category === 'IoT';
          if (activeTab === 'Semiconductors') return p.category === 'Semiconductors';
          return true;
        });

  return (
    <div className="explore-page-wrapper">
      {/* 1. Header / Navbar */}
      <header className="site-header">
        <div className="header-inner">
          {/* Logo brand */}
          <div
            className="brand-logo"
            onClick={onBackToSplash}
            title="Return to Home"
            role="button"
            tabIndex={0}
          >
            <img
              src={logoM4SpaceBlackSrc}
              alt="Sincerity Logo"
              className="brand-emblem"
              width={34}
              height={32}
            />
            <div className="brand-wordmark-container">
              <SincerityWordmark width={140} />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            <a href="#technologies" className="nav-link">Technologies</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#about" className="nav-link">About</a>
          </nav>

          {/* Right Action */}
          <div className="header-actions">
            <button
              type="button"
              className="btn-dark-pill"
              onClick={() => openDemoModal('General Demo & Inquiry')}
            >
              Get in Touch <ArrowRight size={14} className="ml-1" />
            </button>
            <button
              type="button"
              className="menu-toggle-btn"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle menu"
              title="Menu"
            >
              <div className="menu-icon-bars">
                <span className="bar-line" />
                <span className="bar-line" />
              </div>
            </button>
          </div>
        </div>

        {/* Sliding Executive Navigation Drawer */}
        {drawerOpen && (
          <div className="nav-drawer-backdrop" onClick={() => setDrawerOpen(false)}>
            <div className="nav-drawer-card" onClick={(e) => e.stopPropagation()}>
              <div className="drawer-header">
                <div className="drawer-brand">
                  <img src={logoM4SpaceBlackSrc} alt="Sincerity" width={28} height={26} />
                  <span className="drawer-brand-title">Sincerity Directory</span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setDrawerOpen(false)}
                >
                  <CloseIcon size={18} />
                </button>
              </div>

              <div className="drawer-links-group">
                <a href="#technologies" onClick={() => setDrawerOpen(false)}>Technologies</a>
                <a href="#services" onClick={() => setDrawerOpen(false)}>Services</a>
                <a href="#products" onClick={() => setDrawerOpen(false)}>Products</a>
                <a href="#tech-domains" onClick={() => setDrawerOpen(false)}>Technology Domains</a>
                <a href="#roadmap" onClick={() => setDrawerOpen(false)}>Roadmap &amp; Research</a>
                <a href="#about" onClick={() => setDrawerOpen(false)}>Why Sincerity</a>
                <a href="#contact" onClick={() => setDrawerOpen(false)}>Contact &amp; Location</a>
              </div>

              <div className="drawer-footer-actions">
                <button
                  type="button"
                  className="btn-dark-pill w-full"
                  onClick={() => {
                    setDrawerOpen(false);
                    openDemoModal('General Demo & Inquiry');
                  }}
                >
                  Get in Touch <ArrowRight size={14} className="ml-1" />
                </button>
                {onBackToSplash && (
                  <button
                    type="button"
                    className="btn-light-pill w-full mt-2"
                    onClick={() => {
                      setDrawerOpen(false);
                      onBackToSplash();
                    }}
                  >
                    Return to Splash Screen
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-text-col">
            <div className="tag-overline">TECHNOLOGY &middot; INNOVATION &middot; POSSIBILITIES</div>
            <h1 className="hero-title">
              Building a<br />
              Smarter<br />
              <span className="hero-title-accent">Tomorrow.</span>
            </h1>
            <p className="hero-subtitle">
              We create products and provide technology services that make life and business simpler, smarter and more connected.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn-dark-pill btn-lg">
                Explore Our Work <ArrowRight size={15} />
              </a>
              <button
                type="button"
                className="btn-video"
                onClick={() => setVideoModalOpen(true)}
              >
                <span className="btn-video-icon">
                  <Play size={13} fill="#071524" color="#071524" />
                </span>
                Watch Video
              </button>
            </div>
          </div>

          <div className="hero-media-col">
            <div className="hero-keynote-stage">
              {/* Subtle ambient back aura */}
              <div className="hero-stage-aura" />

              {/* Top Keynote Platform Badge */}
              <div className="hero-stage-header">
                <div className="hero-stage-status">
                  <span className="hero-pulse-dot" />
                  <span className="hero-stage-status-text">SINCERITY CORE ECOSYSTEM</span>
                </div>
                <span className="hero-stage-version-pill">v2.4 Live</span>
              </div>

              {/* Center Emblem Visual with subtle glass pedestal */}
              <div className="hero-stage-centerpiece">
                <div className="hero-stage-emblem-wrap">
                  <SincerityLogo size={200} />
                </div>
                <div className="hero-stage-pedestal" />
              </div>

              {/* Floating Glass Telemetry Micro-Cards */}
              <div
                className="hero-floating-card card-top-left"
                onClick={() => openDemoModal('Optimedicate (SSDC)')}
                role="button"
                tabIndex={0}
                title="Click to request demo"
              >
                <div className="floating-card-icon icon-medical">
                  <Activity size={13} />
                </div>
                <div className="floating-card-content">
                  <span className="floating-card-title">Optimedicate SSDC</span>
                  <span className="floating-card-meta">Diagnostic Intelligence · Live</span>
                </div>
              </div>

              <div
                className="hero-floating-card card-bottom-right"
                onClick={() => openDemoModal('WACentral')}
                role="button"
                tabIndex={0}
                title="Click to request demo"
              >
                <div className="floating-card-icon icon-whatsapp">
                  <Zap size={13} />
                </div>
                <div className="floating-card-content">
                  <span className="floating-card-title">WACentral Gateway</span>
                  <span className="floating-card-meta">&lt;45ms Cloud API Latency</span>
                </div>
              </div>

              {/* Bottom platform capability ribbon */}
              <div className="hero-stage-ribbon">
                <span className="stage-ribbon-item">● 5 Tech Domains</span>
                <span className="stage-ribbon-divider" />
                <span className="stage-ribbon-item">● Distributed Cloud</span>
                <span className="stage-ribbon-divider" />
                <span className="stage-ribbon-item">● Silicon &amp; IoT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Strip */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Software Products</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technology Domains</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">&infin;</div>
            <div className="stat-label">Future Possibilities</div>
          </div>
        </div>
      </section>

      {/* 4. Dual Highlight Cards: Technologies & Services */}
      <section id="technologies" className="dual-cards-section">
        <div className="container dual-cards-grid">
          {/* Card 1: Technologies */}
          <div className="feature-highlight-card">
            <div className="f-card-content">
              <div className="f-card-num">01 &mdash;&mdash;</div>
              <h2 className="f-card-title">Technologies</h2>
              <p className="f-card-desc">
                Explore our proprietary platforms, multi-domain research, and advanced software ecosystems.
              </p>
              <a href="#tech-domains" className="f-card-action-btn">
                <span>Explore Technologies</span>
                <ArrowRight size={14} className="f-btn-arrow" />
              </a>
            </div>
            <div className="f-card-visual">
              <div className="f-capsule-widget">
                <div className="widget-header">
                  <div className="widget-header-left">
                    <span className="widget-pulse-dot blue" />
                    <span className="widget-heading">TECH DOMAINS</span>
                  </div>
                  <span className="widget-pill blue">Active Stack</span>
                </div>
                <div className="widget-items-grid">
                  <div
                    className="widget-domain-row"
                    onClick={() => openDemoModal('Artificial Intelligence')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-domain-icon blue"><Cpu size={14} /></div>
                    <div className="widget-domain-meta">
                      <span className="widget-domain-name">AI & Machine Learning</span>
                      <span className="widget-domain-sub">Neural Research & Models</span>
                    </div>
                    <ArrowRight size={12} className="widget-row-arrow" />
                  </div>
                  <div
                    className="widget-domain-row"
                    onClick={() => openDemoModal('Cloud & SaaS')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-domain-icon sky"><Cloud size={14} /></div>
                    <div className="widget-domain-meta">
                      <span className="widget-domain-name">Cloud & SaaS Systems</span>
                      <span className="widget-domain-sub">Distributed Architecture</span>
                    </div>
                    <ArrowRight size={12} className="widget-row-arrow" />
                  </div>
                  <div
                    className="widget-domain-row"
                    onClick={() => openDemoModal('IoT Lab Devices')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-domain-icon purple"><Radio size={14} /></div>
                    <div className="widget-domain-meta">
                      <span className="widget-domain-name">IoT & Embedded Edge</span>
                      <span className="widget-domain-sub">Smart Hardware Telemetry</span>
                    </div>
                    <ArrowRight size={12} className="widget-row-arrow" />
                  </div>
                  <div
                    className="widget-domain-row"
                    onClick={() => openDemoModal('Custom Chip Research')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-domain-icon amber"><Zap size={14} /></div>
                    <div className="widget-domain-meta">
                      <span className="widget-domain-name">Semiconductors & Chips</span>
                      <span className="widget-domain-sub">Custom Silicon & VLSI</span>
                    </div>
                    <ArrowRight size={12} className="widget-row-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Services */}
          <div id="services" className="feature-highlight-card">
            <div className="f-card-content">
              <div className="f-card-num">02 &mdash;&mdash;</div>
              <h2 className="f-card-title">Services</h2>
              <p className="f-card-desc">
                End-to-end software engineering, high-volume cloud systems, and dedicated technical teams.
              </p>
              <button
                type="button"
                className="f-card-action-btn"
                onClick={() => openDemoModal('Enterprise Services Consultation')}
              >
                <span>Consult Our Engineers</span>
                <ArrowRight size={14} className="f-btn-arrow" />
              </button>
            </div>
            <div className="f-card-visual">
              <div className="f-capsule-widget">
                <div className="widget-header">
                  <div className="widget-header-left">
                    <span className="widget-pulse-dot green" />
                    <span className="widget-heading">SOLUTIONS SUITE</span>
                  </div>
                  <span className="widget-pill green">End-to-End SLA</span>
                </div>
                <div className="widget-items-grid">
                  <div
                    className="widget-domain-row"
                    onClick={() => openDemoModal('Web & App Engineering')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-domain-icon green"><Code size={14} /></div>
                    <div className="widget-domain-meta">
                      <span className="widget-domain-name">Web & App Engineering</span>
                      <span className="widget-domain-sub">Full-Stack Platforms & Apps</span>
                    </div>
                    <ArrowRight size={12} className="widget-row-arrow" />
                  </div>
                  <div
                    className="widget-domain-row"
                    onClick={() => openDemoModal('Custom SaaS Development')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-domain-icon teal"><Server size={14} /></div>
                    <div className="widget-domain-meta">
                      <span className="widget-domain-name">Custom SaaS Development</span>
                      <span className="widget-domain-sub">Enterprise Scalable Systems</span>
                    </div>
                    <ArrowRight size={12} className="widget-row-arrow" />
                  </div>
                  <div
                    className="widget-domain-row"
                    onClick={() => openDemoModal('Cloud & Data Management')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-domain-icon indigo"><Database size={14} /></div>
                    <div className="widget-domain-meta">
                      <span className="widget-domain-name">Cloud & Data Management</span>
                      <span className="widget-domain-sub">High-Volume DevOps & DBs</span>
                    </div>
                    <ArrowRight size={12} className="widget-row-arrow" />
                  </div>
                  <div
                    className="widget-domain-row"
                    onClick={() => openDemoModal('Dedicated Tech Teams')}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-domain-icon emerald"><ShieldCheck size={14} /></div>
                    <div className="widget-domain-meta">
                      <span className="widget-domain-name">Dedicated Tech Teams</span>
                      <span className="widget-domain-sub">Ongoing Support & Guidance</span>
                    </div>
                    <ArrowRight size={12} className="widget-row-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Products */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="section-overline">OUR PRODUCTS</div>
              <h2 className="section-title">Products Built for Real Needs</h2>
            </div>
            <a href="#roadmap" className="section-header-link">
              View All Products <ArrowRight size={14} />
            </a>
          </div>

          <div className="cards-scroll-grid">
            {/* 1. Optimedicate */}
            <div
              className="product-card"
              onClick={() => openDemoModal('Optimedicate (SSDC)')}
              role="button"
              tabIndex={0}
            >
              <div className="product-category-row">
                <span className="product-category-pill pill-healthcare">Healthcare OS</span>
              </div>
              <div className="product-card-img-wrap wrap-healthcare">
                <img src={laptopImg} alt="Optimedicate SSDC" className="product-card-img" />
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">Optimedicate (SSDC)</h3>
                <p className="product-card-desc">Medical Lab Diagnostic &amp; Operations OS</p>
                <div className="product-card-footer">
                  <div className="product-cta-pill">
                    <span>Request Demo</span>
                    <ArrowRight size={12} className="cta-arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. WACentral */}
            <div
              className="product-card"
              onClick={() => openDemoModal('WACentral')}
              role="button"
              tabIndex={0}
            >
              <div className="product-category-row">
                <span className="product-category-pill pill-api">WhatsApp API</span>
              </div>
              <div className="product-card-img-wrap wrap-api">
                <img src={phoneWACentralImg} alt="WACentral" className="product-card-img phone-fit" />
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">WACentral</h3>
                <p className="product-card-desc">High-Throughput WhatsApp API Cloud Gateway</p>
                <div className="product-card-footer">
                  <div className="product-cta-pill">
                    <span>Request Demo</span>
                    <ArrowRight size={12} className="cta-arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. WA Connect */}
            <div
              className="product-card"
              onClick={() => openDemoModal('WA Connect')}
              role="button"
              tabIndex={0}
            >
              <div className="product-category-row">
                <span className="product-category-pill pill-messaging">Omnichannel</span>
              </div>
              <div className="product-card-img-wrap wrap-messaging">
                <img src={dualPhonesImg} alt="WA Connect" className="product-card-img" />
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">WA Connect</h3>
                <p className="product-card-desc">Multi-Agent Business Communication Platform</p>
                <div className="product-card-footer">
                  <div className="product-cta-pill">
                    <span>Request Demo</span>
                    <ArrowRight size={12} className="cta-arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. SinkApp */}
            <div
              className="product-card"
              onClick={() => openDemoModal('SinkApp')}
              role="button"
              tabIndex={0}
            >
              <div className="product-category-row">
                <span className="product-category-pill pill-app">SuperApp</span>
              </div>
              <div className="product-card-img-wrap wrap-app">
                <img src={phoneSinkAppImg} alt="SinkApp" className="product-card-img phone-fit" />
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">SinkApp</h3>
                <p className="product-card-desc">Unified Lifestyle, Utilities &amp; Services Ecosystem</p>
                <div className="product-card-footer">
                  <div className="product-cta-pill">
                    <span>Request Demo</span>
                    <ArrowRight size={12} className="cta-arrow" />
                  </div>
                </div>
              </div>
            </div>

            {/* 5. SINCERITY Cloud */}
            <div
              className="product-card"
              onClick={() => openDemoModal('SINCERITY Cloud')}
              role="button"
              tabIndex={0}
            >
              <div className="product-category-row">
                <span className="product-category-pill pill-cloud">Cloud Storage</span>
              </div>
              <div className="product-card-img-wrap wrap-cloud">
                <img src={cloudServersImg} alt="SINCERITY Cloud" className="product-card-img" />
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">SINCERITY Cloud</h3>
                <p className="product-card-desc">Low-Cost Resilient Object Storage Architecture</p>
                <div className="product-card-footer">
                  <div className="product-cta-pill">
                    <span>Request Demo</span>
                    <ArrowRight size={12} className="cta-arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technology Domains */}
      <section id="tech-domains" className="domains-section">
        <div className="container">
          <div className="section-header-row">
            <div>
              <div className="section-overline">TECHNOLOGY DOMAINS</div>
              <h2 className="section-title">Research. Develop. Build for the Future.</h2>
            </div>
            <a href="#roadmap" className="section-header-link">
              Explore All Technologies <ArrowRight size={14} />
            </a>
          </div>

          <div className="cards-scroll-grid">
            {/* Domain 1: AI */}
            <div
              className="domain-card"
              onClick={() => openDemoModal('Artificial Intelligence')}
              role="button"
              tabIndex={0}
            >
              <div className="domain-icon-wrap glow-ai">
                <img src={iconAiImg} alt="Artificial Intelligence" className="domain-icon-img" />
              </div>
              <h3 className="domain-card-title">Artificial Intelligence</h3>
              <p className="domain-card-subtitle">Neural Models &amp; Diagnostics</p>
              <div className="domain-card-footer">
                <div className="domain-cta-pill">
                  <span>Explore Domain</span>
                  <ArrowRight size={11} className="cta-arrow" />
                </div>
              </div>
            </div>

            {/* Domain 2: Cloud */}
            <div
              className="domain-card"
              onClick={() => openDemoModal('Cloud & SaaS')}
              role="button"
              tabIndex={0}
            >
              <div className="domain-icon-wrap glow-cloud">
                <img src={iconCloudImg} alt="Cloud & SaaS" className="domain-icon-img" />
              </div>
              <h3 className="domain-card-title">Cloud &amp; SaaS</h3>
              <p className="domain-card-subtitle">Distributed Scalable Backends</p>
              <div className="domain-card-footer">
                <div className="domain-cta-pill">
                  <span>Explore Domain</span>
                  <ArrowRight size={11} className="cta-arrow" />
                </div>
              </div>
            </div>

            {/* Domain 3: Electronics */}
            <div
              className="domain-card"
              onClick={() => openDemoModal('Electronics & Devices')}
              role="button"
              tabIndex={0}
            >
              <div className="domain-icon-wrap glow-electronics">
                <img src={iconElectronicsImg} alt="Electronics & Devices" className="domain-icon-img" />
              </div>
              <h3 className="domain-card-title">Electronics &amp; Devices</h3>
              <p className="domain-card-subtitle">Embedded Systems &amp; Hardware</p>
              <div className="domain-card-footer">
                <div className="domain-cta-pill">
                  <span>Explore Domain</span>
                  <ArrowRight size={11} className="cta-arrow" />
                </div>
              </div>
            </div>

            {/* Domain 4: IoT */}
            <div
              className="domain-card"
              onClick={() => openDemoModal('IoT & Automation')}
              role="button"
              tabIndex={0}
            >
              <div className="domain-icon-wrap glow-iot">
                <img src={iconIotImg} alt="IoT & Automation" className="domain-icon-img" />
              </div>
              <h3 className="domain-card-title">IoT &amp; Automation</h3>
              <p className="domain-card-subtitle">Edge Telemetry &amp; Sensors</p>
              <div className="domain-card-footer">
                <div className="domain-cta-pill">
                  <span>Explore Domain</span>
                  <ArrowRight size={11} className="cta-arrow" />
                </div>
              </div>
            </div>

            {/* Domain 5: Semiconductors */}
            <div
              className="domain-card"
              onClick={() => openDemoModal('Semiconductors & Chips')}
              role="button"
              tabIndex={0}
            >
              <div className="domain-icon-wrap glow-semiconductors">
                <img src={iconSemiconductorsImg} alt="Semiconductors & Chips" className="domain-icon-img" />
              </div>
              <h3 className="domain-card-title">Semiconductors &amp; Chips</h3>
              <p className="domain-card-subtitle">Custom Silicon &amp; VLSI</p>
              <div className="domain-card-footer">
                <div className="domain-cta-pill">
                  <span>Explore Domain</span>
                  <ArrowRight size={11} className="cta-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Current Technologies & What's In Development (Roadmap) */}
      <section id="roadmap" className="roadmap-section">
        <div className="container">
          <div className="roadmap-top-row">
            <div>
              <div className="section-overline">CURRENT TECHNOLOGIES &amp; WHAT'S IN DEVELOPMENT</div>
            </div>
            <a href="#contact" className="section-header-link">
              View Full Roadmap <ArrowRight size={14} />
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs-row">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filtered Cards Row */}
          <div className="cards-scroll-grid mt-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="product-card"
                onClick={() => openDemoModal(p.title)}
                role="button"
                tabIndex={0}
              >
                <div className="badge-row">
                  <span className={`status-badge ${p.badgeClass}`}>
                    <span className="status-badge-dot" />
                    {p.badge}
                  </span>
                </div>
                <div className="product-card-img-wrap">
                  <img src={p.img} alt={p.title} className="product-card-img" />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{p.title}</h3>
                  <p className="product-card-desc">{p.subtitle}</p>
                  <div className="product-card-footer">
                    <div className="product-cta-pill">
                      <span>{p.badge === 'Live' || p.badge === 'Beta' ? 'Request Demo' : 'Inquire Access'}</span>
                      <ArrowRight size={12} className="cta-arrow" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Sincerity */}
      <section id="about" className="why-sincerity-section">
        <div className="container why-grid">
          {/* Left Column */}
          <div className="why-text-col">
            <div className="section-overline">WHY SINCERITY</div>
            <h2 className="why-main-title">
              Technology<br />
              with Purpose.
            </h2>
            <p className="why-desc">
              We build practical technology solutions that help businesses, professionals and individuals work better, simpler and faster.
            </p>
            <button
              type="button"
              className="btn-dark-pill"
              onClick={() => openDemoModal('General Demo & Inquiry')}
            >
              About SINCERITY <ArrowRight size={14} className="ml-1" />
            </button>
          </div>

          {/* Right 3x2 Grid (3 across, 2 rows) */}
          <div className="why-features-grid-3col">
            {/* Feature 1 */}
            <div className="why-feature-card">
              <div className="why-icon-box">
                <Target size={20} color="#2563EB" />
              </div>
              <div className="why-feature-content">
                <h4 className="why-feature-title">Real-World Focus</h4>
                <p className="why-feature-text">High-utility products engineered to solve actual workflow and operational challenges.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="why-feature-card">
              <div className="why-icon-box">
                <Lightbulb size={20} color="#2563EB" />
              </div>
              <div className="why-feature-content">
                <h4 className="why-feature-title">Innovation Driven</h4>
                <p className="why-feature-text">Continuous research and development in AI, cloud systems, and edge semiconductors.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="why-feature-card">
              <div className="why-icon-box">
                <Box size={20} color="#2563EB" />
              </div>
              <div className="why-feature-content">
                <h4 className="why-feature-title">End-to-End Capability</h4>
                <p className="why-feature-text">Holistic stack execution spanning custom silicon, embedded IoT, cloud SaaS, and apps.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="why-feature-card">
              <div className="why-icon-box">
                <Database size={20} color="#2563EB" />
              </div>
              <div className="why-feature-content">
                <h4 className="why-feature-title">Affordable Solutions</h4>
                <p className="why-feature-text">High-efficiency, cost-optimized architectures built for sustainable business scaling.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="why-feature-card">
              <div className="why-icon-box">
                <Headphones size={20} color="#2563EB" />
              </div>
              <div className="why-feature-content">
                <h4 className="why-feature-title">Reliable Support</h4>
                <p className="why-feature-text">Long-term SLA-backed product maintenance, engineering consultations, and updates.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="why-feature-card">
              <div className="why-icon-box">
                <TrendingUp size={20} color="#2563EB" />
              </div>
              <div className="why-feature-content">
                <h4 className="why-feature-title">Future Ready</h4>
                <p className="why-feature-text">Future-proof engineering designed for next-generation intelligence and connectivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Let's Work Together CTA Banner */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-aura" />
            <div className="cta-banner-text">
              <div className="cta-banner-overline">LET'S WORK TOGETHER</div>
              <h3 className="cta-banner-title">Let's Build a Smarter Tomorrow Together.</h3>
              <p className="cta-banner-desc">
                Whether you're an enterprise, healthcare provider, or innovative startup, our engineering team is ready to deploy solutions tailored to your scale.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <button
                type="button"
                className="btn-white-pill"
                onClick={() => openDemoModal('General Demo & Inquiry')}
              >
                Schedule a Demo <ArrowRight size={14} className="ml-1" />
              </button>
              <a href="#products" className="btn-outline-white">
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer id="contact" className="site-footer">
        <div className="container footer-grid">
          {/* Col 1: Brand & Socials */}
          <div className="footer-col brand-col">
            <div
              className="footer-brand"
              onClick={onBackToSplash}
              role="button"
              tabIndex={0}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={logoM4SpaceBlackSrc}
                alt="Sincerity Logo"
                className="footer-emblem"
                width={36}
                height={34}
              />
              <div className="footer-wordmark">
                <SincerityWordmark width={150} />
              </div>
            </div>
            <p className="footer-tagline">Technology. Innovation. Possibilities.</p>

            <div className="footer-socials">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77A26.38 26.38 0 0 0 2 12c0 1.62.14 3.23.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.38 26.38 0 0 0 22 12c0-1.62-.14-3.23-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z"/>
                </svg>
              </a>
              {/* X */}
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="social-icon-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon-btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Technologies */}
          <div className="footer-col">
            <h4 className="footer-col-title">Technologies</h4>
            <ul className="footer-links">
              <li><a href="#products">Products</a></li>
              <li><a href="#tech-domains">AI &amp; Research</a></li>
              <li><a href="#tech-domains">Electronics</a></li>
              <li><a href="#tech-domains">Cloud &amp; SaaS</a></li>
              <li><a href="#tech-domains">IoT &amp; Automation</a></li>
              <li><a href="#tech-domains">Semiconductors</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col" id="services-list">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#contact">Web Development</a></li>
              <li><a href="#contact">App Development</a></li>
              <li><a href="#contact">SaaS Development</a></li>
              <li><a href="#contact">Data Management</a></li>
              <li><a href="#contact">Project Support</a></li>
              <li><a href="#contact">Hire People</a></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Careers</a></li>
              <li><a href="#contact">News</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 5: Legal & Contact */}
          <div className="footer-col legal-col">
            <button
              type="button"
              className="btn-dark-pill mb-4"
              onClick={() => openDemoModal('General Demo & Inquiry')}
            >
              Get in Touch <ArrowRight size={14} className="ml-1" />
            </button>
            <div className="footer-legal-text">
              <p className="font-semibold text-gray-900">SINCERITY (OPC) Private Limited</p>
              <p className="text-gray-500">India</p>
              <p className="text-xs text-gray-400 mt-4">
                &copy; 2026 SINCERITY. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Dynamic Request a Demo / Contact Modal */}
      {demoModalOpen && (
        <div className="modal-backdrop" onClick={() => setDemoModalOpen(false)}>
          <div className="modal-card demo-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-brand">
                <span className="demo-pill-badge">Live Demonstration</span>
                <h3 className="modal-title">Request a Product Demo</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                aria-label="Close"
                onClick={() => setDemoModalOpen(false)}
              >
                <CloseIcon size={20} />
              </button>
            </div>

            {isSuccess ? (
              <div className="demo-success-box">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={52} color="#16a34a" />
                </div>
                <h4 className="success-title">Demo Request Received!</h4>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Your request for <strong>{formData.product}</strong> has been successfully submitted.
                </p>
                <div className="success-meta-card">
                  <span>Our technical specialist will contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 24 hours to schedule your session.</span>
                </div>
                <button
                  type="button"
                  className="btn-dark-pill w-full mt-4"
                  onClick={() => setDemoModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="demo-priority-badge">
                  <Sparkles size={13} color="#2563eb" />
                  <span>Direct 1-on-1 walkthrough with the Sincerity technical team</span>
                </div>
                <p className="modal-subtitle">
                  Experience Sincerity's software firsthand. Fill in your details below and our team will reach out to schedule your personalized live demo session.
                </p>
                <form className="modal-form" onSubmit={handleSubmitDemo}>
                  <div className="form-group">
                    <label className="form-label">Product / Solution *</label>
                    <select
                      className="form-input form-select"
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      required
                    >
                      <option value="Optimedicate (SSDC)">Optimedicate (SSDC) — Medical Lab System</option>
                      <option value="WACentral">WACentral — WhatsApp API Gateway</option>
                      <option value="WA Connect">WA Connect — Business on WhatsApp</option>
                      <option value="SinkApp">SinkApp — All-in-one Application</option>
                      <option value="SINCERITY Cloud">SINCERITY Cloud — Storage Platform</option>
                      <option value="IoT Lab Devices">IoT Lab Devices — Hardware & Edge</option>
                      <option value="Custom Chip Research">Custom Chip Research — Silicon & VLSI</option>
                      <option value="Enterprise Services">Enterprise Software & Development Services</option>
                      <option value="General Inquiry">General Partnership & Inquiry</option>
                    </select>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Rajesh Kumar"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Preferred Demo Time (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you'd like to see or your preferred date/time..."
                      className="form-input"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-dark-pill w-full mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Demo Request...
                      </span>
                    ) : (
                      <span>Schedule Live Demo &rarr;</span>
                    )}
                  </button>
                  <p className="form-privacy-note">
                    🔒 Sincerity respects your privacy. We will never spam or share your contact details.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="modal-card video-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">Sincerity Overview</h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setVideoModalOpen(false)}
              >
                <CloseIcon size={18} />
              </button>
            </div>
            <div className="video-player-box">
              <div className="video-placeholder">
                <Play size={48} color="#2563EB" />
                <p className="mt-4 text-sm font-medium text-gray-700">
                  Sincerity Corporate Showcase Video
                </p>
                <p className="text-xs text-gray-500">
                  Building next-generation software, semiconductors &amp; IoT solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
