import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? '#cbd5e1' : 'var(--surface-border)'}`,
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.03)' : 'none',
        transition: 'all 0.2s ease'
      }}
    >
      <div
        className="container"
        style={{
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px'
        }}
      >
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: 700,
            fontSize: '17px',
            letterSpacing: '0.06em',
            color: 'var(--text-main)'
          }}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              background: 'var(--text-main)',
              borderRadius: '6px',
              display: 'grid',
              placeItems: 'center',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 800
            }}
          >
            S
          </div>
          <span>SINCERITY</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px'
          }}
        >
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '13.5px',
              fontWeight: 500,
              color: isActive ? 'var(--brand)' : 'var(--text-muted)'
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '13.5px',
              fontWeight: 500,
              color: isActive ? 'var(--brand)' : 'var(--text-muted)'
            })}
          >
            Products
          </NavLink>
          <NavLink
            to="/technology"
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '13.5px',
              fontWeight: 500,
              color: isActive ? 'var(--brand)' : 'var(--text-muted)'
            })}
          >
            Technology
          </NavLink>
          <NavLink
            to="/vision"
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '13.5px',
              fontWeight: 500,
              color: isActive ? 'var(--brand)' : 'var(--text-muted)'
            })}
          >
            Vision
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            style={({ isActive }) => ({
              fontSize: '13.5px',
              fontWeight: 500,
              color: isActive ? 'var(--brand)' : 'var(--text-muted)'
            })}
          >
            About
          </NavLink>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/contact" className="btn btn-primary">
            Contact
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
