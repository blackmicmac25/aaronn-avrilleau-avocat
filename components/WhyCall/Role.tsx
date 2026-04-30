import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ChevronLeft, Award, ShieldCheck, Gavel, HelpCircle, Search, ArrowRight } from 'lucide-react';

const Role: React.FC = () => {
  return (
    <div className="bg-white font-['Montserrat'] overflow-x-hidden min-h-screen">
      
      {/* HEADER SECTION - Sophisticated & Clean */}
      <section className="pt-28 md:pt-40 pb-20 px-6 bg-[#F2E8D8] border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
            <h1 className="text-2xl md:text-6xl font-light leading-tight serif uppercase mb-8">
              <span className="font-bold text-slate-900">Le rôle</span> <span className="text-slate-400 font-light">de l’avocat en droit fiscal</span>
            </h1>

          </div>
        </div>

      </section>

      {/* CONTINUOUS CONTENT FLOW */}
      <div className="animate-in fade-in duration-1000">
        
        {/* Introduction Section - Unified Background */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-slate-700 text-base md:text-xl font-normal leading-relaxed text-justify">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-[#112056] serif mb-8 leading-tight">
                  Un partenaire stratégique pour votre sécurité juridique et fiscale
                </h2>
                <div className="h-1 w-24 bg-[#B6834A] mx-auto"></div>
              </div>
              
              <div className="space-y-6">
                <p>
                  Le droit fiscal accompagne de nombreuses décisions de la vie professionnelle et patrimoniale. Ses conséquences ne sont pas toujours immédiates, mais elles peuvent être durables et significatives.
                </p>
                <p>
                  L’avocat en droit fiscal intervient pour sécuriser les décisions, anticiper les risques fiscaux et, lorsque cela devient nécessaire, défendre les intérêts du contribuable face à l’administration fiscale.
                </p>
                <p>
                  Son rôle ne se limite pas aux situations de contrôle ou de contentieux. L’intervention de l’avocat en droit fiscal peut ainsi s’inscrire :
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 font-serif">
                {[
                  { t: "EN AMONT", d: "Pour sécuriser et anticiper les choix stratégiques." },
                  { t: "AU COURS", d: "D’une procédure, pour assister et défendre avec rigueur." },
                  { t: "EN AVAL", d: "Pour contester ou régulariser une situation complexe." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/40 p-10 border border-[#598BB3]/10 rounded-sm text-center space-y-6 hover:bg-white/80 transition-all duration-500 shadow-sm hover:shadow-xl">
                    <h4 className="text-lg font-bold tracking-[0.2em] text-[#112056] uppercase">{item.t}</h4>
                    <p className="text-base italic text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <p>
                  Faire appel à un avocat en droit fiscal ne doit pas être perçu uniquement comme une réponse à une difficulté, mais comme un outil d’aide à la décision et de prévention, au service d’une gestion fiscale maîtrisée et sécurisée.
                </p>
              </div>

              {/* Transition Quote - Refined Styling */}
              <div className="mt-16 bg-slate-50 p-10 md:p-14 border-l-[6px] border-[#B6834A] rounded-sm transition-all duration-700">
                <p className="text-xl md:text-2xl uppercase tracking-[0.3em] font-bold text-[#B6834A] mb-10">Les mots de votre avocat</p>
                <div className="space-y-6 text-lg md:text-xl font-serif text-[#112056] leading-relaxed italic opacity-90">
                  <p>
                    « Si l’expert-comptable peut être comparé au médecin généraliste du droit, l’avocat en droit fiscal représente l’un des praticiens vers lesquels il peut renvoyer. »
                  </p>
                  <p>
                    « À l’image du secteur médical, le droit fiscal regroupe de nombreux praticiens, chacun intervenant dans des situations précises. »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Roles Section - DUAL CARD LAYOUT on Unified Background */}
        <section className="py-20 md:py-32 px-6 bg-white/30 border-y border-white/40 shadow-inner">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
              
              {/* CARD 1: CONSEIL */}
              <div className="bg-white p-10 md:p-16 shadow-2xl border-t-8 border-[#598BB3] flex flex-col h-full rounded-sm hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-10 flex items-center gap-4">
                    <div className="bg-[#598BB3]/10 p-4 rounded-full text-[#598BB3]">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-[#598BB3] text-sm md:text-xl uppercase tracking-widest font-bold">Rôle de conseil</h3>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-serif text-[#112056] mb-8 leading-tight">Intervenir en amont pour sécuriser les décisions</h4>
                  
                  <div className="text-slate-600 text-base md:text-lg leading-relaxed flex-grow space-y-6 text-justify">
                    <p className="italic font-medium text-[#112056]">Quand est-il pertinent de consulter un avocat en droit fiscal à titre de conseil ?</p>
                    <p>De nombreuses situations justifient une intervention en amont, avant qu’une difficulté n’apparaisse ou qu’un contrôle ne soit engagé. L’objectif est alors de sécuriser les choix envisagés et d’en mesurer les conséquences fiscales.</p>
                    <p>La mission de conseil de l’avocat en droit fiscal est préventive par nature. Elle consiste à analyser la situation du client, ses projets et ses contraintes, afin de proposer une structuration cohérente et juridiquement sécurisée.</p>
                    <p>Dans ce cadre, l’avocat veille à ce que les décisions prises soient conformes aux règles fiscales applicables et à ce que la fiscalité supportée soit limitée à ce qui est strictement nécessaire, sans exposition inutile au risque.</p>
                  </div>
                    
                  <div className="bg-[#F2E8D8]/30 p-8 rounded-sm mt-10">
                    <p className="font-bold text-[#112056] mb-6 uppercase text-sm tracking-widest">Intervenir à ce stade permet :</p>
                    <ul className="space-y-4 text-slate-700 font-medium">
                      {["d’éviter des erreurs difficilement rattrapables a posteriori", "d’optimiser légalement l’impôt", "de prévenir un contrôle ou une remise en cause ultérieure", "de sécuriser des décisions engageant durablement le contribuable"].map((bullet, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="w-2 h-2 bg-[#B6834A] rounded-full mt-2.5 shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>

              {/* CARD 2: CONTENTIEUX */}
              <div className="bg-white p-10 md:p-16 shadow-2xl border-t-8 border-[#112056] flex flex-col h-full rounded-sm hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-10 flex items-center gap-4">
                    <div className="bg-[#112056]/5 p-4 rounded-full text-[#112056]">
                      <Gavel className="w-8 h-8" />
                    </div>
                    <h3 className="text-[#112056] text-sm md:text-xl uppercase tracking-widest font-bold">Rôle contentieux</h3>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-serif text-[#112056] mb-8 leading-tight">Défendre les intérêts du contribuable</h4>
                  
                  <div className="text-slate-600 text-base md:text-lg leading-relaxed flex-grow space-y-6 text-justify">
                    <p className="italic font-medium text-[#112056]">Quand l’intervention de l’avocat devient-elle indispensable ?</p>
                    <p>Dès lors que l’administration fiscale engage des démarches et envisage de procéder à des rectifications, l’avocat en droit fiscal intervient pour assurer la défense de ses intérêts et veiller au respect de ses droits.</p>
                    
                    <p>Lorsque la position de l’administration fiscale est contestable ou contestée, l’avocat assure la représentation du contribuable devant les instances et juridictions compétentes, en s’appuyant sur une analyse juridique rigoureuse et une connaissance concrète des pratiques administratives.</p>
                  </div>

                  <div className="bg-[#F2E8D8]/30 p-8 rounded-sm mt-10">
                    <p className="font-bold text-[#112056] mb-6 uppercase text-sm tracking-widest">Son rôle consiste notamment à :</p>
                    <ul className="space-y-4 text-slate-700 font-medium">
                      {["encadrer les échanges avec l’administration fiscale", "analyser la régularité de la procédure et le bien-fondé des rectifications envisagées", "organiser la réponse juridique la plus adaptée à la situation"].map((bullet, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="w-2 h-2 bg-[#B6834A] rounded-full mt-2.5 shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* --- SECTION APPEL À L'ACTION (Consistent with Home) --- */}
      <section className="py-16 lg:py-24 bg-[#112056] relative overflow-hidden text-white group/cta">
        <div className="absolute inset-0 opacity-10 transition-opacity duration-1000 group-hover/cta:opacity-25">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#598BB3] via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 lg:space-y-16 relative z-10">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold serif leading-tight tracking-tighter max-w-5xl mx-auto transition-transform duration-1000 group-hover/cta:scale-105 uppercase">
            Votre situation nécessite <br /><span className="text-[#598BB3]">l’intervention d’un avocat en droit fiscal ?</span>
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

export default Role;
