import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ChevronLeft, Award, ChevronRight, Share2, ArrowRight } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <div className="bg-white font-['Montserrat'] overflow-x-hidden min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="pt-28 md:pt-40 pb-20 px-6 bg-[#F2E8D8] border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase mb-8">
              Approche <span className="text-slate-400 font-light">pluridisciplinaire</span>
            </h1>
            <p className="text-lg text-slate-500 font-serif italic max-w-2xl border-l-2 border-[#598BB3] pl-6 py-2">
                Une vision transversale pour une stratégie fiscale cohérente et globale.
            </p>
          </div>
        </div>

      </section>

      {/* CONTENT FLOW */}
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
        
        {/* Continuous Narrative Section */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block">EXPERTISE TRANSVERSALE</span>
                <h2 className="text-2xl md:text-5xl font-bold serif text-[#112056] mb-10 uppercase leading-tight">Expertise transversale et approche collaborative</h2>
                <div className="h-1.5 w-32 bg-[#B6834A] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-10 text-slate-700 text-base md:text-xl leading-relaxed text-justify">
                  <p>Grâce à sa formation et à ses expériences professionnelles, Maître AVRILLEAU dispose d’une vision transversale du droit des affaires, allant au-delà de la seule fiscalité. Les stratégies qu’il recommande intègrent ainsi, lorsque cela est nécessaire, des dimensions relevant notamment du droit des sociétés et d’autres matières.</p>
                  
                  <div className="bg-white/50 p-8 border-l-4 border-[#598BB3] italic text-slate-600 shadow-sm">
                    <p>Dans la majorité des situations, Maître AVRILLEAU n’établit pas lui-même les actes juridiques. Ce choix assumé lui permet de se consacrer pleinement au droit fiscal, matière particulièrement technique et exigeante, tout en s’appuyant sur un réseau de confrères de confiance avec lesquels il a l’habitude de travailler.</p>
                  </div>

                  <p>Maître AVRILLEAU demeure l’interlocuteur central du client : il conçoit la stratégie, coordonne les intervenants et veille à la cohérence globale des opérations mises en œuvre.</p>
              </div>
              
              {/* High-End Benefits Card */}
              <div className="bg-white p-10 md:p-16 border-t-8 border-t-[#112056] shadow-2xl relative overflow-hidden group rounded-sm">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#598BB3]/5 rounded-bl-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150"></div>
                  
                  <div className="flex items-center gap-6 mb-12 relative z-10">
                    <div className="bg-[#112056]/5 p-4 rounded-full text-[#112056]">
                        <Share2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-[#598BB3] font-bold uppercase tracking-[0.3em] text-xs">Les avantages pour le client :</h4>
                  </div>

                  <ul className="space-y-10 serif text-lg md:text-xl text-slate-800 relative z-10">
                      {[
                        "Un interlocuteur unique pour l’ensemble du dossier",
                        "L’intervention de plusieurs praticiens exigeants lorsque cela est pertinent",
                        "Une coordination efficace entre les différents professionnels",
                        "Une tarification unique pour le client"
                      ].map((adv, idx) => (
                        <li key={idx} className="flex gap-6 items-start transform transition-transform duration-500 hover:translate-x-3 group/item">
                          <ChevronRight className="w-5 h-5 text-[#598BB3] mt-1.5 shrink-0 transition-transform group-hover/item:translate-x-1" />
                          <span className="leading-snug">{adv}</span>
                        </li>
                      ))}
                  </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- SECTION APPEL À L'ACTION (Consistent with Home) --- */}
      <section className="py-16 lg:py-24 bg-[#112056] reveal relative overflow-hidden text-white group/cta">
        <div className="absolute inset-0 opacity-10 transition-opacity duration-1000 group-hover/cta:opacity-25">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#598BB3] via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 lg:space-y-16 relative z-10">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold serif leading-tight tracking-tighter max-w-5xl mx-auto transition-transform duration-1000 group-hover/cta:scale-105 uppercase">
            Besoin d’une expertise transversale <br /><span className="text-[#598BB3]">pour votre situation ?</span>
          </h2>
          
          <div className="flex flex-col justify-center items-center gap-12">
            <Link to="/contact" className="group flex items-center gap-6 lg:gap-10 px-8 lg:px-12 py-4 lg:py-6 bg-white text-[#112056] font-bold uppercase tracking-[0.3em] text-sm lg:text-base hover:bg-[#598BB3] hover:text-white transition-all rounded-sm shadow-2xl active:scale-95">
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-4 transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Methodology;
