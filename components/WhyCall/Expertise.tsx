import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ChevronLeft, Award, MoveRight } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <div className="bg-[#F2E8D8] font-['Montserrat'] overflow-x-hidden min-h-screen pb-16">
      
      {/* HEADER SECTION - Aligned with the new section style */}
      <section className="pt-28 md:pt-40 pb-20 px-6 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl reveal">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase mb-8">
              Domaines <span className="text-slate-400 font-light">d'intervention</span>
            </h1>
            <p className="text-lg text-slate-500 font-serif italic max-w-2xl border-l-2 border-[#598BB3] pl-6 py-2">
                Un accompagnement spécialisé en droit fiscal pour Montpellier, Perpignan et au-delà.
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Briefcase className="w-[500px] h-[500px]" />
        </div>
      </section>

      {/* CONTENT FLOW */}
      <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
        
        {/* Intro Section - Fluid Transition with Personal Image */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* New side-by-side intro layout with image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center mb-20 md:mb-32">
                {/* Image Column */}
                <div className="lg:col-span-5 reveal">
                    <div className="relative group">
                        {/* Decorative background element - Now Centered */}
                        <div className="absolute -inset-4 border-2 border-[#B6834A] rounded-sm -z-10 transition-transform group-hover:scale-[1.02] duration-500"></div>
                        <div className="shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm overflow-hidden">
                            <img 
                                src="https://i.ibb.co/S2y6Rjh/1-1.jpg" 
                                alt="Maître AVRILLEAU" 
                                className="w-full h-auto transition-all duration-700 hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Column */}
                <div className="lg:col-span-7 reveal">
                    <span className="text-[#598BB3] uppercase tracking-widest text-sm font-bold mb-6 block">EXPERTISE & PRÉCISION</span>
                    <h2 className="text-3xl md:text-5xl font-bold serif text-[#112056] mb-10 uppercase leading-tight">
                        Expertise en <span className="text-slate-400">Droit Fiscal</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-[#B6834A] mb-10"></div>
                    <p className="text-slate-700 text-lg md:text-2xl leading-relaxed italic font-serif mb-8 text-justify">
                        Maître AVRILLEAU, avocat en droit fiscal, accompagne les dirigeants, entrepreneurs et particuliers principalement à Montpellier et Perpignan, en conseil comme en contentieux fiscal.
                    </p>
                    <div className="p-8 bg-white/40 border-l-4 border-[#598BB3] shadow-sm italic text-slate-600">
                        Une approche rigoureuse et personnalisée pour chaque dossier, alliant expertise technique et vision stratégique.
                    </div>
                </div>
            </div>

            {/* Grid of Expertise Cards - High-end style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              {[
                { 
                  t: "Contrôle et contentieux fiscal", 
                  q: "Vous faites l’objet d’une demande de renseignements, de justifications ou d’éclaircissements, d’un examen de situation fiscale personnelle (ESFP), d’une vérification de comptabilité ou d’un redressement fiscal ?",
                  d: "Maître AVRILLEAU intervient à tous les stades du contrôle fiscal et du contentieux afin de défendre vos intérêts face à l’administration et de sécuriser la procédure. Son expérience, notamment acquise au sein de la chambre fiscale du tribunal administratif de Montpellier, lui permet d’anticiper les arguments de l’administration fiscale et d’identifier les leviers de contestation pertinents." 
                },
                { 
                  t: "Conseil en structuration et restructuration juridique et fiscale", 
                  q: "Vous souhaitez structurer ou restructurer votre activité, optimiser un schéma de détention existant, acquérir ou céder une entreprise ? Vous assurer que votre organisation juridique et fiscale est toujours adaptée à votre situation ?",
                  d: "Maître AVRILLEAU accompagne les dirigeants dans la définition et la mise en œuvre de structures juridiques et fiscales adaptées à leurs objectifs, en tenant compte des enjeux économiques, patrimoniaux et fiscaux." 
                },
                { 
                  t: "Ingénierie patrimoniale et optimisation fiscale de la transmission", 
                  q: "Vous souhaitez anticiper la transmission de votre patrimoine privé ou professionnel ? Connaitre les conséquences fiscales de la transmission de votre patrimoine ?",
                  d: "Maître AVRILLEAU vous assiste dans la préparation et l’organisation de la transmission, avec pour objectif de limiter la charge fiscale et de sécuriser les choix opérés dans la durée." 
                },
                { 
                  t: "Fiscalité internationale", 
                  q: "Votre situation comporte des éléments d’extranéités et vous vous posez des questions sur votre résidence fiscale, sur un établissement stable, des flux transfrontaliers ou sur les modalités déclaratives de vos revenus ?",
                  d: "Maître AVRILLEAU conseille les particuliers et les entreprises confrontés à des problématiques de fiscalité internationale, notamment en matière de résidence fiscale, d’établissement stable ou d’activités transfrontalières. Il intervient afin d’identifier les risques fiscaux, de sécuriser les situations et d’éviter toute double imposition ou requalification ultérieure." 
                },
                { 
                  t: "Assistance en matière de déclarations fiscales", 
                  q: "Vous souhaitez vous faire accompagner pour la réalisation de vos déclarations d’impôt sur le revenu et d’impôts sur la fortune immobilière ?",
                  d: "Maître AVRILLEAU assiste ses clients dans l’établissement et la sécurisation de leurs obligations déclaratives fiscales, qu’il s’agase de l’impôt sur le revenu, de l’IFI, des plus-values ou de situations patrimoniales complexes. Cette assistance vise à prévenir les erreurs et à limiter les risques de remise en cause par l’administration fiscale." 
                },
                { 
                  t: "Fiscalité de l’activité professionnelle et optimisation de la rémunération du dirigeant", 
                  q: "Votre mode de rémunération est-il réellement optimisé au regard de votre situation personnelle et de celle de votre entreprise ? Vous hésitez entre rémunération, dividendes ?",
                  d: "Maître AVRILLEAU accompagne les dirigeants dans l’analyse fiscale de leur activité et dans la structuration de leur rémunération (rémunération, dividendes, dispositifs d’épargne salariale, etc.). L’objectif est d’optimiser la situation du dirigeant tout en assurant la cohérence et la conformité avec la situation de l’entreprise." 
                },
                { 
                  t: "Régularisation de situations fiscales", 
                  q: "Vous avez identifié une erreur ou une omission dans vos déclarations fiscales passées ? Vous souhaitez régulariser votre situation avant toute intervention de l’administration ?",
                  d: "Maître AVRILLEAU intervient dans le cadre de la régularisation de situations fiscales particulières, notamment en cas d’omissions ou d’erreurs déclaratives. Il vous accompagne dans la définition d’une stratégie adaptée, en tenant compte des risques encourus et des possibilités de sécurisation." 
                },
                { 
                  t: "T.V.A", 
                  q: "Vous vous interrogez sur le régime de TVA applicable à certaines opérations ? Faites-vous face à des difficultés liées à la territorialité, au droit à déduction ou à un contrôle en matière de TVA ?",
                  d: "Maître AVRILLEAU conseille et assiste ses clients sur l’ensemble des problématiques liées à la TVA : qualification des opérations, territorialité, droit à déduction, régularisations et contrôles. Une attention particulière est portée à la prévention des risques de redressement et à la sécurisation des pratiques." 
                },
                { 
                  t: "Audit fiscal", 
                  q: "Vous réalisez une opération d’acquisition et vous souhaitez évaluer la présence ou non d’un risque fiscal se rapportant à la cible ?",
                  d: "Maître AVRILLEAU réalise des audits fiscaux ciblés, notamment dans le cadre d’opérations d’acquisition, de reprise ou de restructuration d’entreprise. L’audit fiscal a pour objectif : d’identifier les risques fiscaux existants ou latents, d’évaluer la conformité des pratiques fiscales. Il constitue un outil d’aide à la décision essentiel avant toute opération d’acquisition d’une activité tiers." 
                },
                { 
                  t: "Formation et sensibilisation en matière fiscale", 
                  q: "Vous souhaitez avoir une formation pour vous ou vos équipes sur des sujets de fiscalités ? Pour les lois de finances ?",
                  d: "Maitre AVRILLEAU est également intervenu à la faculté de droit de Montpellier dans des cadres pédagogique. Il a notamment dispensé les travaux dirigés aux étudiants de Master I et est intervenu auprès des élèves en magistère DJCE. Il propose des actions de formation et de sensibilisation en matière fiscale à destination des dirigeants, associés ou équipes internes. Ces interventions visent à renforcer la compréhension des enjeux fiscaux, à prévenir les erreurs courantes et à sécuriser la prise de décision au quotidien." 
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="group bg-white p-10 md:p-14 border-t-8 border-t-[#112056] shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm flex flex-col h-full hover:-translate-y-1"
                >
                  <span className="text-[#598BB3] font-bold uppercase tracking-widest text-[10px] mb-8 block opacity-60">DOMAINE D'INTERVENTION {i + 1}</span>
                  <h4 className="text-2xl font-bold serif text-slate-900 mb-8 group-hover:text-[#598BB3] transition-colors leading-tight">{item.t}</h4>
                  {item.q && <p className="text-[#112056] font-serif italic text-base md:text-lg mb-8 bg-[#F2E8D8]/30 p-6 rounded-sm border-l-2 border-[#112056]/10">{item.q}</p>}
                  <p className="text-slate-600 text-base leading-relaxed mt-auto pt-8 border-t border-slate-100">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* MARQUEE SECTION - Smooth Transition Integration */}
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
         <div className="max-w-2xl mx-auto px-6">
            <h3 className="text-2xl md:text-4xl font-serif text-[#112056] mb-12">Besoin d'une analyse fiscale rigoureuse ?</h3>
            <Link to="/contact" className="inline-block px-14 py-6 bg-[#112056] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#598BB3] transition-all shadow-2xl hover:-translate-y-1 rounded-sm">
                Prendre rendez-vous
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Expertise;
