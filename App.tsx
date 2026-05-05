import React, { useEffect, useState, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

// Page Loader Component
const PageLoader = () => (
  <div className="min-h-screen bg-[#F2E8D8] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#112056] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Progress Bar Component (Isolated to prevent full app re-renders)
const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-[#598BB3] z-[110] transition-all duration-100 ease-out" 
      style={{ width: `${progress}%` }}
    />
  );
};

// Lazy load components
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

const AppContent: React.FC = () => {
  const location = useLocation();
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  // Use useEffect for scroll - more stable across browsers
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target); 
          }
        });
      }, { threshold: 0.01, rootMargin: '0px 0px 50px 0px' });
    }

    const refreshReveal = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        } else {
          observerRef.current?.observe(el);
        }
      });
    };

    const timeoutId = setTimeout(refreshReveal, 100);
    const timeoutId2 = setTimeout(refreshReveal, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F2E8D8] text-slate-900 selection:bg-[#598BB3] selection:text-white overflow-x-hidden flex flex-col">
        <ProgressBar />
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