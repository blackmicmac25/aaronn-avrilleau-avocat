import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Briefcase, Handshake, Calendar, ShieldCheck, Check, ChevronRight, Award } from 'lucide-react';

const WhyCall: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Le Rôle", icon: <Scale className="w-5 h-5" /> },
    { id: 1, label: "Expertise", icon: <Briefcase className="w-5 h-5" /> },
    { id: 2, label: "Méthodologie", icon: <Handshake className="w-5 h-5" /> },
    { id: 3, label: "Suivi", icon: <Calendar className="w-5 h-5" /> }
  ];

  return (
    <div className="bg-[#F2E8D8] font-['Montserrat'] overflow-x-hidden min-h-screen">
      
      {/* HEADER SECTION (Always Visible) */}
      <section className="pt-28 md:pt-36 pb-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 reveal">
            <div className="max-w-4xl">
              <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-4 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 serif uppercase">
                Quand solliciter <span className="text-slate-400 font-light">le cabinet ?</span>
              </h1>
            </div>
          </div>

          {/* TAB NAVIGATION */}
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-3 px-6 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-[#112056] text-white shadow-xl scale-105' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TAB CONTENT */}
      <div className="transition-all duration-500">
        
        {/* --- TAB 0: LE RÔLE --- */}
        {activeTab === 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="py-16 md:py-24 px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-[#112056] mb-12 md:mb-16 serif text-center leading-tight">
                  Quand faire appel à un avocat en droit fiscal ?
                </h2>
                
                <div className="space-y-10 text-slate-700 text-base md:text-lg font-normal leading-relaxed text-justify">
                  <p>
                    Le droit fiscal accompagne de nombreuses décisions de la vie professionnelle et patrimoniale. Ses conséquences ne sont pas toujours immédiates, mais elles peuvent être durables et significatives.
                  </p>
                  <p>
                    L’avocat en droit fiscal intervient pour sécuriser les décisions, anticiper les risques fiscaux et, lorsque cela devient nécessaire, défendre les intérêts du contribuable face à l’administration fiscale.
                  </p>
                  <p>
                    Son rôle ne se limite pas aux situations de contrôle ou de contentieux. L’intervention de l’avocat en droit fiscal peut ainsi s’inscrire :
                  </p>
                  
                  <div className="pl-6 md:pl-8 border-l-2 border-slate-200 py-2">
                      <ul className="grid grid-cols-1 gap-y-2 gap-x-4 text-slate-500 text-base italic">
                          {[
                            "en amont, pour sécuriser et anticiper ;",
                            "au cours d’une procédure, pour assister et défendre ;",
                            "en aval, pour contester ou régulariser une situation lorsque cela s’impose."
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> 
                              <span>{item}</span>
                            </li>
                          ))}
                      </ul>
                  </div>

                  <p>
                    Faire appel à un avocat en droit fiscal ne doit pas être perçu uniquement comme une réponse à une difficulté, mais comme un outil d’aide à la décision et de prévention, au service d’une gestion fiscale maîtrisée et sécurisée.
                  </p>

                  <div className="bg-white p-8 md:p-12 border-l-[8px] border-[#598BB3] shadow-2xl rounded-sm">
                    <p className="text-xs uppercase tracking-widest font-bold text-[#598BB3] mb-4">Les mots de votre avocat</p>
                    <p className="text-lg md:text-xl font-serif text-[#112056] leading-relaxed italic">
                      « Si l’expert-comptable peut être comparé au médecin généraliste du droit, l’avocat en droit des affaires représente l’un des praticiens vers lesquels il peut renvoyer. A l’image du secteur médical, le droit des affaires regroupe de nombreux praticiens, chacun intervenant dans des situations précises. »
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-[#112056] text-white">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 group">
                      <h3 className="text-[#598BB3] text-xs uppercase tracking-widest mb-6 font-bold group-hover:text-white transition-colors duration-500">Le rôle de conseil : intervenir en amont pour sécuriser les décisions</h3>
                      <p className="text-lg md:text-xl font-serif mb-6 italic leading-relaxed text-slate-200 group-hover:text-white transition-colors duration-500">
                        Quand est-il pertinent de consulter un avocat en droit fiscal à titre de conseil ?
                      </p>
                      <div className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-500 space-y-4">
                        <p>De nombreuses situations justifient une intervention en amont, avant qu’une difficulté n’apparaisse ou qu’un contrôle ne soit engagé. L’objectif est alors de sécuriser les choix envisagés et d’en mesurer les conséquences fiscales.</p>
                        <p>La mission de conseil de l’avocat en droit fiscal est préventive par nature. Elle consiste à analyser la situation du client, ses projets et ses contraintes, afin de proposer une structuration cohérente et juridiquement sécurisée.</p>
                        <p>Dans ce cadre, l’avocat veille à ce que les décisions prises soient conformes aux règles fiscales applicables et à ce que la fiscalité supportée soit limitée à ce qui est strictement nécessaire, sans exposition inutile au risque.</p>
                        <p className="font-bold text-white mt-4">Intervenir à ce stade permet bien souvent :</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>d’éviter des erreurs difficilement rattrapables a posteriori,</li>
                          <li>d’optimiser légalement l’impôt,</li>
                          <li>de prévenir un contrôle ou une remise en cause ultérieure,</li>
                          <li>de sécuriser des décisions engageant durablement le contribuable,</li>
                        </ul>
                      </div>
                  </div>
                  <div className="p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 group">
                      <h3 className="text-[#598BB3] text-xs uppercase tracking-widest mb-6 font-bold group-hover:text-white transition-colors duration-500">Le rôle contentieux : défendre les intérêts du contribuable</h3>
                      <p className="text-lg md:text-xl font-serif mb-6 italic leading-relaxed text-slate-200 group-hover:text-white transition-colors duration-500">
                        Quand l’intervention de l’avocat devient-elle indispensable ?
                      </p>
                      <div className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-500 space-y-4">
                        <p>Dès lors que l’administration fiscale engage des démarches et envisage de procéder à des rectifications, l’avocat en droit fiscal intervient pour assurer la défense de ses intérêts et veiller au respect de ses droits.</p>
                        <p className="font-bold text-white mt-4">Son rôle consiste notamment à :</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>encadrer les échanges avec l’administration fiscale,</li>
                          <li>analyser la régularité de la procédure et le bien-fondé des rectifications envisagées,</li>
                          <li>organiser la réponse juridique la plus adaptée à la situation.</li>
                        </ul>
                        <p>Lorsque la position de l’administration fiscale est contestable ou contestée, l’avocat assure la représentation du contribuable devant les instances et juridictions compétentes, en s’appuyant sur une analyse juridique rigoureuse et une connaissance concrète des pratiques administratives.</p>
                      </div>
                  </div>
              </div>
            </section>
          </div>
        )}

        {/* --- TAB 1: EXPERTISE --- */}
        {activeTab === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="py-16 md:py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl mb-16 md:mb-20 mx-auto text-center">
                  <h2 className="text-2xl md:text-4xl font-bold serif text-slate-900 mb-8 uppercase leading-tight">Avocat en droit fiscal – Montpellier & Perpignan</h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                    Maître AVRILLEAU, avocat en droit fiscal, accompagne les dirigeants, entrepreneurs et particuliers principalement à Montpellier et Perpignan, en conseil comme en contentieux fiscal.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      d: "Maître AVRILLEAU assiste ses clients dans l’établissement et la sécurisation de leurs obligations déclaratives fiscales, qu’il s’agisse de l’impôt sur le revenu, de l’IFI, des plus-values ou de situations patrimoniales complexes. Cette assistance vise à prévenir les erreurs et à limiter les risques de remise en cause par l’administration fiscale." 
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
                      className="group border border-slate-200 p-10 bg-white hover:border-[#598BB3] hover:shadow-2xl transition-all duration-500 rounded-sm flex flex-col h-full"
                    >
                      <div className="w-12 h-1 bg-[#598BB3] mb-8 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <h4 className="text-xl font-bold serif text-slate-900 mb-6 group-hover:text-[#598BB3] transition-colors">{item.t}</h4>
                      {item.q && <p className="text-[#112056] font-semibold italic text-base mb-6">{item.q}</p>}
                      <p className="text-slate-600 text-sm leading-relaxed mt-auto pt-6 border-t border-slate-100">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* --- TAB 2: MÉTHODOLOGIE --- */}
        {activeTab === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="py-16 md:py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block text-center">APPROCHE PLURIDISCIPLINAIRE</span>
                <h2 className="text-2xl md:text-4xl font-bold serif text-slate-900 mb-12 md:mb-20 uppercase text-center leading-tight">Expertise transversale et approche collaborative</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                  <div className="space-y-8 text-slate-700 text-base md:text-lg leading-relaxed text-justify">
                      <p>Grâce à sa formation et à ses expériences professionnelles, Maître AVRILLEAU dispose d’une vision transversale du droit des affaires, allant au-delà de la seule fiscalité. Les stratégies qu’il recommande intègrent ainsi, lorsque cela est nécessaire, des dimensions relevant notamment du droit des sociétés et d’autres matières.</p>
                      <p>Dans la majorité des situations, Maître AVRILLEAU n’établit pas lui-même les actes juridiques. Ce choix assumé lui permet de se consacrer pleinement au droit fiscal, matière particulièrement technique et exigeante, tout en s’appuyant sur un réseau de confrères de confiance avec lesquels il a l’habitude de travailler.</p>
                      <p>Maître AVRILLEAU demeure l’interlocuteur central du client : il conçoit la stratégie, coordonne les intervenants et veille à la cohérence globale des opérations mises en œuvre.</p>
                  </div>
                  
                  <div className="bg-white p-10 md:p-14 border border-slate-100 shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#598BB3]/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
                      <h4 className="text-[#598BB3] font-bold uppercase tracking-widest text-[10px] mb-10 relative z-10">Les avantages pour le client :</h4>
                      <ul className="space-y-8 serif text-base md:text-lg text-slate-800 relative z-10">
                          {[
                            "Une stratégie guidée en priorité par l’analyse fiscale",
                            "Un interlocuteur unique pour l’ensemble du dossier",
                            "Une coordination efficace entre les différents professionnels",
                            "L’intervention ciblée de praticien lorsque cela est pertinent",
                            "Une facturation centralisée, sans surcoût inutile"
                          ].map((adv, idx) => (
                            <li key={idx} className="flex gap-5 items-start transform transition-transform duration-500 hover:translate-x-2">
                              <ChevronRight className="w-4 h-4 text-[#598BB3] mt-1.5 shrink-0" />
                              <span>{adv}</span>
                            </li>
                          ))}
                      </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* --- TAB 3: SUIVI --- */}
        {activeTab === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="py-16 md:py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block text-center">SUIVI PONCTUEL OU RÉGULIER ?</span>
                <h2 className="text-2xl md:text-4xl font-bold serif text-slate-900 mb-12 md:mb-20 uppercase text-center leading-tight">Suivi ponctuel ou suivi régulier ?</h2>
                <div className="text-center mb-12">
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                    Il n’existe pas de réponse universelle. Le choix entre un accompagnement ponctuel ou un suivi régulier dépend avant tout de votre situation et de vos besoins.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-slate-700 text-base md:text-lg leading-relaxed">
                  <div className="space-y-10 text-justify">
                      <h3 className="text-xl font-bold text-[#112056] uppercase tracking-widest">Le suivi ponctuel</h3>
                      <p>Un suivi ponctuel peut être pertinent lorsque vous souhaitez :</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>faire un point sur votre situation fiscale ou patrimoniale ;</li>
                        <li>obtenir une réponse à une question précise ;</li>
                        <li>sécuriser une décision ou une opération particulière ;</li>
                        <li>vérifier l’absence de risque ou d’incohérence fiscale.</li>
                      </ul>
                      <div className="p-10 bg-white border-l-8 border-[#598BB3] shadow-xl font-medium italic text-slate-800">
                        Dans certains cas, le rendez-vous peut simplement conduire à constater que la situation est satisfaisante et ne justifie pas d’intervention particulière ou un suivi récurrent.
                      </div>
                  </div>
                  <div className="space-y-10 text-justify">
                      <h3 className="text-xl font-bold text-[#112056] uppercase tracking-widest">Le suivi régulier</h3>
                      <p>Un suivi régulier est en revanche souvent adapté aux dirigeants d’entreprise et, plus généralement, aux situations exposées à des enjeux fiscaux évolutifs.</p>
                      <p>La fiscalité est une matière en constante évolution, notamment du fait :</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>du vote annuel de la loi de finances ;</li>
                        <li>des évolutions de la doctrine fiscale administrative ;</li>
                        <li>de la jurisprudence.</li>
                      </ul>
                      <p>Ces changements peuvent avoir des conséquences concrètes sur la situation de certains contribuables.</p>
                      <p>Un suivi régulier permet d’anticiper ces évolutions et d’ajuster la stratégie en amont, plutôt que de subir des choix contraints a posteriori.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* MARQUEE SECTION */}
      <div className="bg-[#112056] py-8 overflow-hidden border-y border-[#598BB3]/30 relative z-20">
        <div className="animate-scroll flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
             <div key={i} className="flex items-center gap-8 mx-8">
                <span className="text-white text-base md:text-xl font-serif italic tracking-wide">
                  L’anticipation est la clé de la stratégie fiscale et une entrevue régulière, la clé de l’anticipation.
                </span>
                <Award className="text-[#598BB3] w-6 h-6" />
             </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION (Always Visible) */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
         <Link to="/contact" className="inline-block px-12 py-6 bg-[#112056] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#598BB3] transition-all shadow-2xl hover:-translate-y-1 rounded-sm">
            Prendre rendez-vous
         </Link>
      </section>

    </div>
  );
};

export default WhyCall;
