import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu si on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  // Détection des pages où la barre doit être opaque par défaut (Articles)
  const isArticlePage = location.pathname.startsWith('/article/');
  // La barre est opaque si on a scrollé OU si on est sur une page article
  const isNavbarOpaque = scrolled || isArticlePage;

  // Restauration des libellés d'origine
  const navLinks = [
    { name: 'ACCUEIL - PRÉSENTATION', href: '/' },
    { name: 'VOTRE AVOCAT PRIVILÉGIÉ', href: '/votre-avocat-privilegie' },
    { name: 'QUAND FAIRE APPEL À UN AVOCAT EN DROIT FISCAL', href: '/quand-solliciter' },
    { name: 'COMPRENDRE LES HONORAIRES', href: '/honoraires' },
    { name: 'ARTICLES PERMANENTS', href: '/articles-permanents' },
    { name: 'ACTUALITÉS', href: '/actualites' },
    { name: 'CONTACT', href: '/contact', isButton: true },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${isNavbarOpaque && !isMenuOpen ? 'py-4 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' : 'py-6 md:py-10 bg-transparent'}`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 flex justify-between items-center relative z-[120]">
          
          {/* Logo - Ajout de z-index et relative pour éviter toute superposition accidentelle */}
          <Link to="/" className="relative z-[130] flex items-center space-x-3 md:space-x-4 group cursor-pointer transition-transform duration-500 hover:scale-[1.02] shrink-0" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="https://i.ibb.co/HDtb468b/jpeg-2-Copie.png" 
              alt="Logo Aaronn AVRILLEAU" 
              className={`h-8 md:h-12 w-auto object-contain transition-all duration-700 group-hover:rotate-6 ${isMenuOpen ? 'brightness-0 invert' : ''}`}
            />
            <div className="flex flex-col">
              <h1 className={`text-[10px] md:text-sm font-bold tracking-tight leading-none uppercase transition-colors duration-500 ${isMenuOpen ? 'text-white' : 'text-slate-900'}`}>
                Aaronn <span className="font-light">AVRILLEAU</span>
              </h1>
              <p className={`text-[6px] md:text-[8px] uppercase tracking-[0.2em] font-semibold mt-0.5 md:mt-1 transition-colors duration-500 ${isMenuOpen ? 'text-slate-400' : 'text-[#598BB3]'}`}>
                Droit Fiscal
              </p>
            </div>
          </Link>
          
          {/* Desktop Menu - Visible dès LG (Laptop) */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className={link.isButton 
                  ? "px-5 py-2 xl:px-6 xl:py-2.5 bg-[#112056] text-white hover:bg-[#598BB3] transition-all rounded-sm text-[8px] xl:text-[10px] uppercase tracking-widest font-bold shadow-xl active:scale-95 whitespace-nowrap"
                  : `text-[8px] xl:text-[10px] uppercase tracking-wider transition-colors font-semibold hover-underline whitespace-nowrap ${isActive(link.href) ? 'text-[#598BB3]' : 'text-slate-900 hover:text-black'}`
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Burger Button (Mobile & Tablet) - Visible uniquement en dessous de LG */}
          <button 
            className={`lg:hidden relative z-[130] p-2 focus:outline-none transition-colors duration-500 ${isMenuOpen ? 'text-white' : 'text-slate-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 transition-all duration-500 ${isMenuOpen ? 'bg-white w-6 translate-y-2 rotate-45' : 'bg-slate-900 w-6'}`}></span>
              <span className={`h-0.5 transition-all duration-500 ${isMenuOpen ? 'bg-white opacity-0' : 'bg-slate-900 w-4'}`}></span>
              <span className={`h-0.5 transition-all duration-500 ${isMenuOpen ? 'bg-white w-6 -translate-y-2.5 -rotate-45' : 'bg-slate-900 w-5'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay Mobile (Plein écran, opaque) - Visible en dessous de LG */}
      <div className={`fixed inset-0 bg-[#112056] z-[105] transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1) ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} lg:hidden flex flex-col items-center justify-center`}>
        {/* Décoration d'arrière-plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-[#598BB3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
             <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-[#598BB3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6 md:space-y-8 px-6 text-center w-full max-h-screen overflow-y-auto pt-24 pb-10 relative z-10">
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name}
              to={link.href}
              className={`text-sm md:text-xl font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:text-[#598BB3] transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${link.isButton ? 'bg-white text-[#112056] hover:bg-[#598BB3] hover:text-white px-8 py-4 rounded-sm mt-8 shadow-xl' : 'text-white'}`}
              style={{ transitionDelay: `${100 + idx * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className={`mt-12 pt-12 border-t border-white/10 w-24 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          
          <div className={`text-white/50 text-[10px] uppercase tracking-widest font-medium transition-all duration-700 delay-700 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Cabinet Avrilleau © 2026
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;