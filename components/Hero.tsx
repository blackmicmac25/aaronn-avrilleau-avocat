import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden bg-[#F2E8D8]">
      <div className="absolute top-0 right-0 w-full h-full bg-[#F2E8D8] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Modification : Centrage forcé (suppression de lg:items-start lg:text-left) */}
        <div className="space-y-8 md:space-y-10 text-center flex flex-col items-center">
          <div className="reveal inline-block px-4 py-2 md:px-6 md:py-2.5 border border-[#598BB3]/20 bg-[#598BB3]/5 rounded-full mb-2 md:mb-4">
            <span className="text-[#598BB3] text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold">
              Cabinet Montpellier
            </span>
          </div>
          
          <h1 className="reveal text-slate-900 flex flex-col items-center">
            <span className="block opacity-70 font-light text-lg md:text-2xl lg:text-3xl mb-2 serif">Maître</span>
            {/* Ajout de px-4 pour éviter que le 'A' majuscule en italique/gradient ne soit coupé */}
            <span className="brand-gradient serif py-2 px-4 text-4xl md:text-7xl lg:text-8xl leading-none tracking-tighter -mx-4">Aaronn</span>
            <span className="block uppercase tracking-[0.2em] text-xl md:text-4xl lg:text-5xl font-bold mt-2 md:mt-4">AVRILLEAU.</span>
          </h1>
          
          <div className="reveal space-y-4 md:space-y-6">
            <p className="text-slate-500 text-base md:text-xl max-w-xl leading-relaxed font-light mx-auto">
              Avocat en droit fiscal inscrit à la Cour d’appel de Montpellier
            </p>
            <p className="text-slate-400 text-sm md:text-lg font-medium serif italic">
              CABINET DOMICILIE A MONTPELLIER<br/>INTERVENTION SUR PERPIGNAN
            </p>
          </div>
          
          {/* Modification : Centrage des boutons (suppression de lg:justify-start) */}
          <div className="reveal flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 w-full justify-center">
            <Link to="/contact" className="px-8 py-5 md:px-12 md:py-6 bg-[#112056] text-white font-bold rounded-sm hover:bg-[#598BB3] transition-all text-center uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] shadow-2xl active:scale-95">
              Prendre rendez-vous
            </Link>
            <Link to="/quand-solliciter" className="px-8 py-5 md:px-12 md:py-6 border-2 border-slate-200 text-slate-700 hover:bg-white hover:border-[#598BB3] rounded-sm transition-all text-center uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] font-bold active:scale-95">
              Le Cabinet
            </Link>
          </div>
        </div>
        
        <div className="relative reveal hidden lg:block">
          <div className="aspect-[4/5] bg-white overflow-hidden rounded-sm relative shadow-2xl border border-slate-200/50 group">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1470&auto=format&fit=crop" 
              alt="Maître Aaronn AVRILLEAU" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-12 left-12 text-left p-2 transition-transform duration-700 group-hover:translate-x-4">
              <p className="text-3xl md:text-4xl font-bold serif text-white tracking-tight">Conseil & Défense</p>
              <p className="text-white uppercase tracking-[0.5em] text-[10px] font-bold mt-4 opacity-90">Expert en Droit Fiscal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;