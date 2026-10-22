import React, { useState, useEffect } from 'react';
import SincerityLogo from './components/SincerityLogo';
import SincerityWordmark from './components/SincerityWordmark';
import ExplorePage from './components/ExplorePage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'splash' | 'explore'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/explore' || hash === '#explore') {
        return 'explore';
      }
    }
    return 'splash';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === '/explore' || hash === '#explore') {
        setCurrentPage('explore');
      } else {
        setCurrentPage('splash');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: 'splash' | 'explore') => {
    setCurrentPage(page);
    if (page === 'explore') {
      window.history.pushState({ page: 'explore' }, '', '/explore');
      window.scrollTo(0, 0);
    } else {
      window.history.pushState({ page: 'splash' }, '', '/');
    }
  };

  if (currentPage === 'explore') {
    return <ExplorePage onBackToSplash={() => navigateTo('splash')} />;
  }

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        minHeight: '100dvh',
        background: 'radial-gradient(ellipse at 50% 36%, rgba(240, 246, 255, 0.85) 0%, rgba(250, 252, 255, 0.4) 45%, #ffffff 75%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Central Floating Stage */}
      <div
        className="hero-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 20px',
          width: '100%',
          maxWidth: '860px',
        }}
      >
        {/* Floating 3D Logo Unit */}
        <div
          className="floating-logo-group"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            cursor: 'default',
            marginBottom: '0px',
          }}
        >
          <div
            style={{
              transition: 'transform 0.4s ease',
              width: 'min(310px, 68vw)',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <SincerityLogo size="100%" />
          </div>
        </div>

        {/* Realistic Ambient Floor Shadow */}
        <div
          className="floating-shadow"
          style={{
            width: 'min(230px, 50vw)',
            height: '22px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(7, 21, 36, 0.35) 0%, rgba(7, 21, 36, 0.10) 42%, rgba(0, 0, 0, 0) 72%)',
            marginTop: '-6px',
            marginBottom: '26px',
          }}
        />

        {/* Razor-Sharp Leveled Wordmark & Executive Branding */}
        <div
          style={{
            width: 'min(470px, 80vw)',
            display: 'flex',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
          }}
        >
          <SincerityWordmark width="100%" />
        </div>

        {/* Explore Button in Blue */}
        <button
          type="button"
          className="explore-btn"
          aria-label="Explore Sincerity"
          onClick={() => navigateTo('explore')}
        >
          <span>Explore</span>
          <svg
            width="17"
            height="17"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{ display: 'inline-block' }}
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default App;
