import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ChevronLeft, Award, ChevronRight, Share2 } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <div className="bg-[#F2E8D8] font-['Montserrat'] overflow-x-hidden min-h-screen pb-16">
      
      {/* HEADER SECTION */}
      <section className="pt-28 md:pt-40 pb-20 px-6 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl reveal">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase mb-8">
              Approche <span className="text-slate-400 font-light">pluridisciplinaire</span>
            </h1>
            <p className="text-lg text-slate-500 font-serif italic max-w-2xl border-l-2 border-[#598BB3] pl-6 py-2">
                Une vision transversale pour une stratégie fiscale cohérente et globale.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Handshake className="w-[500px] h-[500px]" />
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
                        "Une stratégie guidée en priorité par l’analyse fiscale",
                        "Un interlocuteur unique pour l’ensemble du dossier",
                        "Une coordination efficace entre les différents professionnels",
                        "L’intervention ciblée de praticien lorsque cela est pertinent",
                        "Une facturation centralisée, sans surcoût inutile"
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

      {/* MARQUEE SECTION */}
      <div className="bg-[#112056] py-12 overflow-hidden border-y-4 border-[#598BB3] relative z-20 shadow-2xl">
        <div className="animate-scroll flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
             <div key={i} className="flex items-center gap-12 mx-12">
                <span className="text-white text-lg md:text-2xl font-serif italic tracking-wide">
                  L’anticipation est la clé de la stratégie fiscale et une entrevue régulière, la clé de l’anticipation.
                </span>
                <Award className="text-[#598BB3] w-10 h-10" />
             </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-white text-center border-b border-slate-100">
         <div className="max-w-2xl mx-auto px-6 text-center">
            <Link to="/contact" className="inline-block px-14 py-6 bg-[#112056] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#598BB3] transition-all shadow-2xl hover:-translate-y-1 rounded-sm">
                Prendre rendez-vous
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Methodology;
