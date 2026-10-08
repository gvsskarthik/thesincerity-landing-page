import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollCanvas from './components/ScrollCanvas';
import ScrollProgress from './components/ScrollProgress';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import TechnologyPage from './pages/TechnologyPage';
import VisionPage from './pages/VisionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Helper component to reset scroll position upon route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <ScrollCanvas />
      
      <div className="app-layout">
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
