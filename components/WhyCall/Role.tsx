import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ChevronLeft, Award, ShieldCheck, Gavel, HelpCircle } from 'lucide-react';

const Role: React.FC = () => {
  return (
    <div className="bg-[#F2E8D8] font-['Montserrat'] overflow-x-hidden min-h-screen pb-16">
      
      {/* HEADER SECTION - Sophisticated & Clean */}
      <section className="pt-28 md:pt-40 pb-20 px-6 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl reveal">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase mb-8">
              Le rôle de <span className="text-slate-400 font-light">l’avocat en droit fiscal</span>
            </h1>
            <p className="text-lg text-slate-500 font-serif italic max-w-2xl border-l-2 border-[#598BB3] pl-6 py-2">
              Un partenaire stratégique au service de votre sécurité et de la pérennité de vos projets.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Scale className="w-[500px] h-[500px]" />
        </div>
      </section>

      {/* CONTINUOUS CONTENT FLOW */}
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
        
        {/* Introduction Section - Unified Background */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12 text-slate-700 text-base md:text-xl font-normal leading-relaxed text-justify">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-4xl font-bold text-[#112056] serif mb-8 leading-tight">
                  Un partenaire stratégique pour votre sécurité fiscale
                </h2>
                <div className="h-1 w-24 bg-[#B6834A] mx-auto"></div>
              </div>
              
              <div className="space-y-8">
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
                  { t: "EN AMONT", d: "Pour sécuriser et anticiper les choix stratégiques.", icon: <ShieldCheck className="w-8 h-8"/> },
                  { t: "AU COURS", d: "D’une procédure, pour assister et défendre avec rigueur.", icon: <Scale className="w-8 h-8"/> },
                  { t: "EN AVAL", d: "Pour contester ou régulariser une situation complexe.", icon: <Gavel className="w-8 h-8"/> }
                ].map((item, i) => (
                  <div key={i} className="bg-white/40 p-10 border border-[#598BB3]/10 rounded-sm text-center space-y-4 hover:bg-white/80 transition-all duration-500 shadow-sm hover:shadow-xl">
                    <div className="text-[#598BB3] flex justify-center mb-4">{item.icon}</div>
                    <h4 className="text-xs font-bold tracking-[0.2em] text-[#112056] uppercase">{item.t}</h4>
                    <p className="text-sm md:text-base italic text-slate-600">{item.d}</p>
                  </div>
                ))}
              </div>

              <p className="pt-8 text-center italic text-slate-500 border-t border-slate-200">
                Faire appel à un avocat en droit fiscal ne doit pas être perçu uniquement comme une réponse à une difficulté, mais comme un outil d’aide à la décision et de prévention, au service d’une gestion fiscale maîtrisée et sécurisée.
              </p>

              {/* Transition Quote */}
              <div className="bg-white p-10 md:p-16 border-l-[12px] border-[#598BB3] shadow-2xl rounded-sm transition-transform hover:-translate-y-2 duration-700">
                <p className="text-xs uppercase tracking-[0.4em] font-bold text-[#598BB3] mb-8">Les mots de votre avocat</p>
                <p className="text-xl md:text-2xl font-serif text-[#112056] leading-relaxed italic border-b border-slate-100 pb-8 mb-8">
                  « Si l’expert-comptable peut être comparé au médecin généraliste du droit, l’avocat en droit des affaires représente l’un des praticiens vers lesquels il peut renvoyer. »
                </p>
                <p className="text-base text-slate-500 leading-relaxed font-normal">
                  « A l’image du secteur médical, le droit des affaires regroupe de nombreux praticiens, chacun intervenant dans des situations précises. »
                </p>
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
                    <h3 className="text-[#598BB3] text-xs md:text-sm uppercase tracking-widest font-bold">Rôle de conseil</h3>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-serif text-[#112056] mb-8 leading-tight">Intervenir en amont pour sécuriser les décisions</h4>
                  
                  <div className="text-slate-600 text-base md:text-lg leading-relaxed flex-grow space-y-6 text-justify">
                    <p className="italic font-medium text-[#112056]">Quand est-il pertinent de consulter un avocat en droit fiscal à titre de conseil ?</p>
                    <p>De nombreuses situations justifient une intervention en amont, avant qu’une difficulté n’apparaisse ou qu’un contrôle ne soit engagé. L’objectif est alors de sécuriser les choix envisagés et d’en mesurer les conséquences fiscales.</p>
                    <p>La mission de conseil de l’avocat en droit fiscal est préventive par nature. Elle consiste à analyser la situation du client, ses projets et ses contraintes, afin de proposer une structuration cohérente et juridiquement sécurisée.</p>
                    <p>Dans ce cadre, l’avocat veille à ce que les décisions prises soient conformes aux règles fiscales applicables et à ce que la fiscalité supportée soit limitée à ce qui est strictement nécessaire, sans exposition inutile au risque.</p>
                    
                    <div className="bg-[#F2E8D8]/30 p-8 rounded-sm mt-8">
                      <p className="font-bold text-[#112056] mb-6 uppercase text-sm tracking-widest">Intervenir à ce stade permet :</p>
                      <ul className="space-y-3 text-slate-700">
                        {["d’éviter des erreurs difficilement rattrapables a posteriori", "d’optimiser légalement l’impôt", "de prévenir un contrôle ou une remise en cause ultérieure", "de sécuriser des décisions engageant durablement le contribuable"].map((bullet, idx) => (
                          <li key={idx} className="flex gap-4 items-start">
                            <span className="w-1.5 h-1.5 bg-[#598BB3] rounded-full mt-2.5 shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </div>

              {/* CARD 2: CONTENTIEUX */}
              <div className="bg-white p-10 md:p-16 shadow-2xl border-t-8 border-[#112056] flex flex-col h-full rounded-sm hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-10 flex items-center gap-4">
                    <div className="bg-[#112056]/5 p-4 rounded-full text-[#112056]">
                      <Gavel className="w-8 h-8" />
                    </div>
                    <h3 className="text-[#112056] text-xs md:text-sm uppercase tracking-widest font-bold">Rôle contentieux</h3>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-serif text-[#112056] mb-8 leading-tight">Défendre les intérêts du contribuable</h4>
                  
                  <div className="text-slate-600 text-base md:text-lg leading-relaxed flex-grow space-y-6 text-justify">
                    <p className="italic font-medium text-[#112056]">Quand l’intervention de l’avocat devient-elle indispensable ?</p>
                    <p>Dès lors que l’administration fiscale engage des démarches et envisage de procéder à des rectifications, l’avocat en droit fiscal intervient pour assurer la défense de ses intérêts et veiller au respect de ses droits.</p>
                    
                    <div className="bg-[#112056]/5 p-8 rounded-sm my-8">
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

                    <p>Lorsque la position de l’administration fiscale est contestable ou contestée, l’avocat assure la représentation du contribuable devant les instances et juridictions compétentes, en s’appuyant sur une analyse juridique rigoureuse et une connaissance concrète des pratiques administratives.</p>
                  </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* MARQUEE SECTION - Smooth Transition Integration */}
      <div className="bg-[#112056] py-12 overflow-hidden border-y-4 border-[#598BB3] relative z-20 shadow-2xl mt-16">
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

      {/* NEXT STEPS / CTA SECTION */}
      <section className="py-24 md:py-32 bg-white text-center border-b border-slate-100">
         <div className="max-w-2xl mx-auto px-6">
            <HelpCircle className="w-12 h-12 text-[#598BB3] mx-auto mb-8 opacity-20" />
            <h3 className="text-2xl md:text-3xl font-serif text-[#112056] mb-8">Votre situation mérite-t-elle l'analyse d'un expert ?</h3>
            <p className="text-slate-500 mb-12 leading-relaxed">Le cabinet vous propose une première entrevue pour faire le point sur vos besoins et sécuriser vos projets.</p>
            <Link to="/contact" className="inline-block px-14 py-6 bg-[#112056] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#598BB3] transition-all shadow-2xl hover:-translate-y-1 rounded-sm">
                Prendre rendez-vous
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Role;
