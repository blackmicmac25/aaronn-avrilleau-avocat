import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Hero from './Hero';

const Home: React.FC = () => {






  return (
    <>
      <Hero />

      {/* --- BOUTON LINKEDIN FLOTTANT SUR LE CÔTÉ - Visibilité améliorée --- */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col animate-in slide-in-from-right-10 duration-1000">
        <a 
          href="https://www.linkedin.com/in/aaronn-avrilleau" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center bg-[#0077b5] text-white p-4 rounded-l-xl shadow-2xl hover:bg-[#112056] transition-all duration-500 hover:pr-8"
          title="Consulter mon profil LinkedIn"
        >
          <img loading="lazy" decoding="async" 
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
            alt="LinkedIn" 
            className="w-6 h-6 object-contain"
          />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-white">
            LinkedIn
          </span>
        </a>
      </div>


      {/* --- SECTION LOGOS DÉFILANTS --- */}
      <section className="py-12 bg-white border-y border-slate-200/40 overflow-hidden reveal">
        <div className="animate-scroll flex items-center gap-24 lg:gap-48 px-12">
          {[
            "https://i.ibb.co/BH0QSsH6/barreau-mtp-transparent.png",
            "https://i.ibb.co/HLTqbb23/djce-poppins.png",
            "https://i.ibb.co/xS8DwfcK/edacs.png",
            "https://i.ibb.co/Qvq0vdrv/Logo-Couleur-fac-de-droit-montpellier.png",
            "https://i.ibb.co/BH0QSsH6/barreau-mtp-transparent.png",
            "https://i.ibb.co/HLTqbb23/djce-poppins.png",
            "https://i.ibb.co/xS8DwfcK/edacs.png",
            "https://i.ibb.co/Qvq0vdrv/Logo-Couleur-fac-de-droit-montpellier.png",
            "https://i.ibb.co/BH0QSsH6/barreau-mtp-transparent.png",
            "https://i.ibb.co/HLTqbb23/djce-poppins.png",
            "https://i.ibb.co/xS8DwfcK/edacs.png",
            "https://i.ibb.co/Qvq0vdrv/Logo-Couleur-fac-de-droit-montpellier.png"
          ].map((logo, index) => (
            <div key={index} className="flex items-center justify-center shrink-0">
              <img loading="lazy" decoding="async" 
                src={logo} 
                alt="Partenaire Institutionnel" 
                className={`${logo.includes('edacs') ? 'h-16 md:h-20 scale-110' : 'h-10 md:h-14'} w-auto transition-all duration-1000 hover:scale-110 object-contain`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- NOUVEL ENCART : LES MOTS DE VOTRE AVOCAT (STYLE UNIFORMIZÉ) --- */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden reveal border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="bg-slate-50 p-10 md:p-16 border-l-[6px] border-[#B6834A] rounded-sm transition-all duration-700">
                <p className="text-xl md:text-2xl uppercase tracking-[0.3em] font-bold text-[#B6834A] mb-10 text-center md:text-left">Les mots de votre avocat</p>
                <div className="space-y-6 text-lg md:text-xl font-serif text-[#112056] leading-[1.8] italic opacity-90 text-center md:text-left">
                    <p>
                        « Maître AVRILLEAU accompagne ses clients avec une vision transversale du droit des affaires, garantissant une stratégie fiscale cohérente et sécurisée. »
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION APPEL À L'ACTION --- */}
      <section className="py-16 lg:py-24 bg-[#112056] reveal relative overflow-hidden text-white group/cta">
        <div className="absolute inset-0 opacity-10 transition-opacity duration-1000 group-hover/cta:opacity-25">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#598BB3] via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 lg:space-y-16 relative z-10">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold serif leading-tight tracking-tighter max-w-5xl mx-auto transition-transform duration-1000 group-hover/cta:scale-105 uppercase">
            Construisons votre stratégie <br /><span className="text-[#598BB3]">de demain.</span>
          </h2>
          
          <div className="flex flex-col justify-center items-center gap-12">
            <Link to="/contact" className="group flex items-center gap-6 lg:gap-10 px-8 lg:px-12 py-4 lg:py-6 bg-white text-[#112056] font-bold uppercase tracking-[0.3em] text-sm lg:text-base hover:bg-[#598BB3] hover:text-white transition-all rounded-sm shadow-2xl active:scale-95">
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-4 transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;