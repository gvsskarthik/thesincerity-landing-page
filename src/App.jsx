import React, { useState, useEffect } from 'react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="brand-showcase-container">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      {/* Grid Pattern Overlay */}
      <div className="background-grid"></div>

      {/* Main Brand Card */}
      <div 
        className="brand-hero-card"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`
        }}
      >
        {/* Glow Ring Behind Logo */}
        <div className="logo-halo"></div>

        {/* 1. Brand Logo Icon (Image 1) */}
        <div className="logo-wrapper">
          <img 
            src="/logo-icon.png" 
            alt="SINCERITY Logo Icon" 
            className="brand-logo-img"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* 2. Brand Heading & Company Full Name (Image 2) */}
        <div className="brand-identity-wrapper">
          <h1 className="sr-only">SINCERITY (OPC) PRIVATE LIMITED</h1>
          <img 
            src="/sincerity-full-brand.png" 
            alt="SINCERITY (OPC) PRIVATE LIMITED" 
            className="brand-full-name-img"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </main>
  );
}
