import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ChevronLeft, Award, MoveRight, ArrowRight } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <div className="bg-white font-['Montserrat'] overflow-x-hidden min-h-screen">
      
      {/* HEADER SECTION - Aligned with the new section style */}
      <section className="pt-28 md:pt-40 pb-20 px-6 bg-[#F2E8D8] border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase mb-8">
              Domaines <span className="text-slate-400 font-light">d'intervention</span>
            </h1>

          </div>
        </div>

      </section>

      {/* CONTENT FLOW */}
      <div className="animate-in fade-in duration-1000">
        
        {/* Intro Section - Fluid Transition with Personal Image */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* New side-by-side intro layout with image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center mb-20 md:mb-32">
                {/* Image Column */}
                <div className="lg:col-span-6">
                    <div className="relative group">
                        {/* Decorative background element - Now Centered */}
                        <div className="absolute -inset-4 border-2 border-[#B6834A] rounded-sm -z-10 transition-transform group-hover:scale-[1.02] duration-500"></div>
                        <div className="shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-sm overflow-hidden">
                            <img loading="lazy" decoding="async" 
                                src="https://i.ibb.co/S2y6Rjh/1-1.jpg" 
                                alt="Maître AVRILLEAU" 
                                className="w-full h-auto transition-all duration-700 hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Column */}
                <div className="lg:col-span-6">

                    <h2 className="text-3xl md:text-5xl font-bold serif text-[#112056] mb-10 uppercase leading-tight">
                        Expertise en <span className="text-slate-400">Droit Fiscal</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-[#B6834A] mb-10"></div>
                    <p className="text-slate-700 text-lg md:text-2xl leading-relaxed italic font-serif mb-8 text-justify">
                        Maître AVRILLEAU, avocat en droit fiscal, accompagne les dirigeants, entrepreneurs et particuliers principalement à Montpellier et Perpignan, en conseil comme en contentieux fiscal.
                    </p>

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
                  <span className="text-[#598BB3] font-bold uppercase tracking-widest text-[10px] mb-8 block opacity-60">DOMAINE D'INTERVENTION</span>
                  <h4 className="text-2xl font-bold serif text-slate-900 mb-8 group-hover:text-[#598BB3] transition-colors leading-tight">{item.t}</h4>
                  {item.q && <p className="text-[#112056] font-serif italic text-base md:text-lg mb-8 bg-[#F2E8D8]/30 p-6 rounded-sm border-l-2 border-[#112056]/10">{item.q}</p>}
                  <p className="text-slate-600 text-base leading-relaxed mt-auto pt-8 border-t border-slate-100">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- SECTION APPEL À L'ACTION (Consistent with Home & Role) --- */}
      <section className="py-16 lg:py-24 bg-[#112056] relative overflow-hidden text-white group/cta">
        <div className="absolute inset-0 opacity-10 transition-opacity duration-1000 group-hover/cta:opacity-25">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#598BB3] via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 lg:space-y-16 relative z-10">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold serif leading-tight tracking-tighter max-w-5xl mx-auto transition-transform duration-1000 group-hover/cta:scale-105 uppercase">
            Besoin d’une analyse <br /><span className="text-[#598BB3]">fiscale rigoureuse ?</span>
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

export default Expertise;
