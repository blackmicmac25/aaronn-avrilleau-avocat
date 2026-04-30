import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronLeft, Award, Clock, History, HelpCircle, ArrowRight } from 'lucide-react';

const FollowUp: React.FC = () => {
  return (
    <div className="bg-white font-['Montserrat'] overflow-x-hidden min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="pt-28 md:pt-40 pb-20 px-6 bg-[#F2E8D8] border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase mb-8">
              Suivi <span className="text-slate-400 font-light">régulier ou ponctuel</span>
            </h1>
            <p className="text-lg text-slate-500 font-serif italic max-w-2xl border-l-2 border-[#598BB3] pl-6 py-2">
                Un accompagnement sur mesure, adapté au rythme de vos besoins et de vos enjeux fiscaux.
            </p>
          </div>
        </div>

      </section>

      {/* CONTENT FLOW */}
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
        
        {/* Intro Section - Unified Background */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block">ACCOMPAGNEMENT SUR MESURE</span>
                <h2 className="text-2xl md:text-5xl font-bold serif text-[#112056] mb-10 uppercase leading-tight">Suivi ponctuel ou suivi régulier ?</h2>
                <div className="h-1.5 w-32 bg-[#B6834A] mx-auto mb-12"></div>
                <p className="text-slate-700 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto italic font-serif">
                    Il n’existe pas de réponse universelle. Le choix entre un accompagnement ponctuel ou un suivi régulier dépend avant tout de votre situation et de vos besoins.
                </p>
            </div>

            {/* Dual Cards for Follow-up Options */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
              
              {/* CARD 1: PONCTUEL */}
              <div className="bg-white p-10 md:p-16 shadow-2xl border-t-8 border-[#598BB3] flex flex-col h-full rounded-sm hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-12 flex items-center gap-6">
                    <div className="bg-[#598BB3]/10 p-5 rounded-full text-[#598BB3]">
                      <Clock className="w-8 h-8" />
                    </div>
                    <h3 className="text-[#598BB3] text-sm md:text-base uppercase tracking-widest font-bold">Le suivi ponctuel</h3>
                  </div>
                  
                  <div className="text-slate-700 text-base md:text-lg leading-relaxed flex-grow space-y-8 text-justify">
                    <p className="font-semibold text-[#112056]">Un suivi ponctuel peut être pertinent lorsque vous souhaitez :</p>
                    <ul className="space-y-4">
                      {[
                        "faire un point sur votre situation fiscale ou patrimoniale\u00A0;",
                        "obtenir une réponse à une question précise\u00A0;",
                        "sécuriser une décision ou une opération particulière\u00A0;",
                        "vérifier l’absence de risque ou d’incohérence fiscale."
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="w-1.5 h-1.5 bg-[#598BB3] rounded-full mt-2.5 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-12 p-8 bg-[#F2E8D8]/30 border-l-4 border-[#112056] font-serif italic text-slate-800 text-base md:text-lg shadow-sm">
                      Dans certains cas, le rendez-vous peut simplement conduire à constater que la situation est satisfaisante et ne justifie pas d’intervention particulière ou un suivi récurrent.
                    </div>
                  </div>
              </div>

              {/* CARD 2: RÉGULIER */}
              <div className="bg-white p-10 md:p-16 shadow-2xl border-t-8 border-[#112056] flex flex-col h-full rounded-sm hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-12 flex items-center gap-6">
                    <div className="bg-[#112056]/5 p-5 rounded-full text-[#112056]">
                      <History className="w-8 h-8" />
                    </div>
                    <h3 className="text-[#112056] text-sm md:text-base uppercase tracking-widest font-bold">Le suivi régulier</h3>
                  </div>
                  
                  <div className="text-slate-700 text-base md:text-lg leading-relaxed flex-grow space-y-8 text-justify">
                    <p className="font-semibold text-[#112056]">Un suivi régulier est en revanche souvent adapté aux dirigeants d’entreprise et, plus généralement, aux situations exposées à des enjeux fiscaux évolutifs.</p>
                    
                    <p>La fiscalité est une matière en constante évolution, notamment du fait :</p>
                    <ul className="space-y-4">
                      {[
                        "du vote annuel de la loi de finances\u00A0;",
                        "des évolutions de la doctrine fiscale administrative\u00A0;",
                        "de la jurisprudence."
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="w-1.5 h-1.5 bg-[#B6834A] rounded-full mt-2.5 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p>Ces changements peuvent avoir des conséquences concrètes sur la situation de certains contribuables.</p>
                    <p>Un suivi régulier permet d’anticiper ces évolutions et d’ajuster la stratégie en amont, plutôt que de subir des choix contraints a posteriori.</p>
                  </div>
              </div>

            </div>
          </div>
        </section>

        {/* Transition Quote - Refined Styling */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
            <div className="bg-slate-50 p-10 md:p-16 border-l-[6px] border-[#B6834A] rounded-sm transition-all duration-700">
                <p className="text-xl md:text-2xl uppercase tracking-[0.3em] font-bold text-[#B6834A] mb-10">Les mots de votre avocat</p>
                <div className="space-y-6 text-lg md:text-xl font-serif text-[#112056] leading-[1.8] italic opacity-90 text-justify">
                    <p>
                        « Anticiper pour mieux sécuriser : c’est tout l’enjeu d’un accompagnement régulier, permettant de transformer la contrainte fiscale en un levier de stratégie maîtrisée. »
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* --- SECTION APPEL À L'ACTION (Consistent with Home) --- */}
      <section className="py-16 lg:py-24 bg-[#112056] reveal relative overflow-hidden text-white group/cta">
        <div className="absolute inset-0 opacity-10 transition-opacity duration-1000 group-hover/cta:opacity-25">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#598BB3] via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 lg:space-y-16 relative z-10">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold serif leading-tight tracking-tighter max-w-5xl mx-auto transition-transform duration-1000 group-hover/cta:scale-105 uppercase">
            Votre situation mérite-t-elle <br /><span className="text-[#598BB3]">un suivi ?</span>
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

export default FollowUp;
