import React, { useEffect, useState, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

// Lazy load components for performance
const Home = lazy(() => import('./components/Home'));
const WhyCall = lazy(() => import('./components/WhyCall'));
const News = lazy(() => import('./components/News'));
const Articles = lazy(() => import('./components/Articles'));
const ArticlePage = lazy(() => import('./components/ArticlePage'));
const Contact = lazy(() => import('./components/Contact'));
const Fees = lazy(() => import('./components/Fees'));
const LegalNotice = lazy(() => import('./components/LegalNotice'));
const CookiePolicy = lazy(() => import('./components/CookiePolicy'));
const Accessibility = lazy(() => import('./components/Accessibility'));
const Role = lazy(() => import('./components/WhyCall/Role'));
const Expertise = lazy(() => import('./components/WhyCall/Expertise'));
const Methodology = lazy(() => import('./components/WhyCall/Methodology'));
const FollowUp = lazy(() => import('./components/WhyCall/FollowUp'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#F2E8D8] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#112056] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppContent: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother scroll progress updates
      requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        setScrollProgress(progress);
      });
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
    // Removed the 500ms delay to improve perceived performance

    return () => observer.disconnect();
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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quand-solliciter" element={<WhyCall />} />
              <Route path="/quand-solliciter/role-avocat" element={<Role />} />
              <Route path="/quand-solliciter/domaine-intervention" element={<Expertise />} />
              <Route path="/quand-solliciter/approche-pluridisciplinaire" element={<Methodology />} />
              <Route path="/quand-solliciter/suivi-regularite" element={<FollowUp />} />
              <Route path="/honoraires" element={<Fees />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/articles-permanents" element={<Articles />} />
              <Route path="/article/:slug" element={<ArticlePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/accessibilite" element={<Accessibility />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <CookieBanner />
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