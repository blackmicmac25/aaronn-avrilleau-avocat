import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
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
    setActiveDropdown(null);
    setActiveMobileSubmenu(null);
  }, [location]);

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  // Détection des pages où la barre doit être opaque par défaut
  const isArticlePage = location.pathname.startsWith('/article/');
  const isNavbarOpaque = scrolled || isArticlePage;

  const whyCallSubLinks = [
    { name: 'Le rôle de l’avocat en droit fiscal', href: '/quand-solliciter/role-avocat' },
    { name: 'Domaine d’intervention', href: '/quand-solliciter/domaine-intervention' },
    { name: 'Approche pluridisciplinaire', href: '/quand-solliciter/approche-pluridisciplinaire' },
    { name: 'Suivi régulier ou ponctuel', href: '/quand-solliciter/suivi-regularite' },
  ];

  const publicationsSubLinks = [
    { name: 'Articles Permanents', href: '/articles-permanents' },
    { name: 'Actualités', href: '/actualites' },
  ];

  const navLinks = [
    { name: 'ACCUEIL - PRÉSENTATION', href: '/' },
    { 
      id: 'why-call',
      name: 'QUAND FAIRE APPEL À UN AVOCAT', 
      href: '/quand-solliciter', 
      hasDropdown: true,
      subLinks: whyCallSubLinks
    },
    { name: 'COMPRENDRE LES HONORAIRES', href: '/honoraires' },
    { 
      id: 'publications',
      name: 'PUBLICATIONS', 
      href: '/articles-permanents', 
      hasDropdown: true,
      subLinks: publicationsSubLinks
    },
    { name: 'CONTACT', href: '/contact', isButton: true },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-500 ${isNavbarOpaque && !isMenuOpen ? 'py-4 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100' : 'py-6 md:py-10 bg-transparent'}`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 flex justify-between items-center relative z-[120]">
          
          <Link to="/" className="relative z-[130] flex items-center space-x-3 md:space-x-4 group cursor-pointer transition-transform duration-500 hover:scale-[1.02] shrink-0" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="https://i.ibb.co/HDtb468b/jpeg-2-Copie.png" 
              alt="Logo Aaronn AVRILLEAU" 
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className={`h-8 md:h-12 w-auto object-contain transition-all duration-700 group-hover:rotate-6 ${isMenuOpen ? 'brightness-0 invert' : ''}`}
            />
            <div className={`h-8 md:h-12 w-[2px] transition-colors duration-500 ${isMenuOpen ? 'bg-white/30' : 'bg-[#112056]'}`}></div>
            <div className="flex flex-col justify-center">
              <h1 className={`text-[12px] md:text-base font-bold tracking-wide leading-none uppercase transition-colors duration-500 ${isMenuOpen ? 'text-white' : 'text-[#112056]'}`}>
                AVRILLEAU
              </h1>
              <h2 className={`text-[12px] md:text-base font-bold tracking-wide leading-none uppercase mt-0.5 md:mt-1 transition-colors duration-500 ${isMenuOpen ? 'text-slate-400' : 'text-[#112056]'}`}>
                AVOCAT
              </h2>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.id} 
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(link.id || null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className={`text-[9px] xl:text-[11px] uppercase tracking-wider transition-colors font-bold flex items-center gap-1 hover:text-black py-2 whitespace-nowrap ${isActive(link.href) || link.subLinks?.some(sl => isActive(sl.href)) ? 'text-[#598BB3]' : 'text-slate-900'}`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-0 w-72 bg-white shadow-2xl border border-slate-100 rounded-sm py-4 transition-all duration-300 origin-top transform ${activeDropdown === link.id ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className={`block px-6 py-3 text-[10px] uppercase tracking-widest font-bold transition-all hover:bg-slate-50 hover:text-[#598BB3] ${isActive(sub.href) ? 'text-[#598BB3] bg-slate-50/50' : 'text-slate-600'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className={link.isButton 
                    ? "px-5 py-2 xl:px-6 xl:py-2.5 bg-[#112056] text-white hover:bg-[#598BB3] transition-all rounded-sm text-[9px] xl:text-[11px] uppercase tracking-widest font-bold shadow-xl active:scale-95 whitespace-nowrap ml-4"
                    : `text-[9px] xl:text-[11px] uppercase tracking-wider transition-colors font-bold hover-underline whitespace-nowrap ${isActive(link.href) ? 'text-[#598BB3]' : 'text-slate-900 hover:text-black'}`
                  }
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

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

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#112056] z-[105] transition-all duration-700 cubic-bezier(0.7, 0, 0.3, 1) ${isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto visible' : '-translate-y-full opacity-0 pointer-events-none invisible'} lg:hidden flex flex-col items-center justify-center`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-[#598BB3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
             <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-[#598BB3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 md:space-y-6 px-6 text-center w-full max-h-screen overflow-y-auto pt-24 pb-10 relative z-10">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="flex flex-col items-center w-full">
              {link.hasDropdown ? (
                <>
                  <button 
                    onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === link.id ? null : (link.id || null))}
                    className={`text-lg md:text-2xl font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-2 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isActive(link.href) || link.subLinks?.some(sl => isActive(sl.href)) ? 'text-[#598BB3]' : 'text-white'}`}
                    style={{ transitionDelay: `${100 + idx * 50}ms` }}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMobileSubmenu === link.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-500 ease-in-out ${activeMobileSubmenu === link.id ? 'grid-rows-[1fr] opacity-100 mt-4 mb-2' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden flex flex-col gap-3">
                      {link.subLinks?.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className={`text-[10px] md:text-sm font-medium uppercase tracking-widest transition-all ${isActive(sub.href) ? 'text-[#598BB3]' : 'text-slate-400'}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={link.href}
                  className={`text-lg md:text-2xl font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:text-[#598BB3] transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${link.isButton ? 'bg-white text-[#112056] hover:bg-[#598BB3] hover:text-white px-8 py-4 rounded-sm mt-8 shadow-xl' : (isActive(link.href) ? 'text-[#598BB3]' : 'text-white')}`}
                  style={{ transitionDelay: `${100 + idx * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className={`mt-8 pt-8 border-t border-white/10 w-24 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          
          <div className={`text-white/50 text-[10px] uppercase tracking-widest font-medium transition-all duration-700 delay-700 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Cabinet Avrilleau © 2026
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;