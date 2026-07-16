import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  React.useEffect(() => {
    const handleRipple = (e) => {
      const btn = e.target.closest('.ripple-btn');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const wave = document.createElement('span');
      wave.className = 'ripple-wave';
      wave.style.width = wave.style.height = `${size}px`;
      wave.style.left = `${e.clientX - rect.left}px`;
      wave.style.top = `${e.clientY - rect.top}px`;
      btn.appendChild(wave);
      wave.addEventListener('animationend', () => wave.remove());
    };
    document.addEventListener('click', handleRipple);
    return () => document.removeEventListener('click', handleRipple);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
