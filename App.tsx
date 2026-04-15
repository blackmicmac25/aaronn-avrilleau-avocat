import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyCall from './components/WhyCall';
import PrivilegedLawyer from './components/PrivilegedLawyer';
import News from './components/News';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';
import Contact from './components/Contact';
import Fees from './components/Fees';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LegalNotice from './components/LegalNotice';
import CookiePolicy from './components/CookiePolicy';

const AppContent: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 });

    const observeElements = () => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    observeElements();
    const timer = setTimeout(observeElements, 500); 

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [location.pathname]); 

  return (
    <div className="min-h-screen bg-[#F2E8D8] text-slate-900 selection:bg-[#598BB3] selection:text-white overflow-x-hidden flex flex-col">
        <ScrollToTop />
        <div 
          className="fixed top-0 left-0 h-1 bg-[#598BB3] z-[110] transition-all duration-100 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/votre-avocat-privilegie" element={<PrivilegedLawyer />} />
            <Route path="/quand-solliciter" element={<WhyCall />} />
            <Route path="/honoraires" element={<Fees />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/articles-permanents" element={<Articles />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;