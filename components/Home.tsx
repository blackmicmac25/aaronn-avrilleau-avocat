import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Hero from './Hero';

const Home: React.FC = () => {
  const institutionLogos = [
    "https://i.ibb.co/BH0QSsH6/barreau-mtp-transparent.png",
    "https://i.ibb.co/HLTqbb23/djce-poppins.png",
    "https://i.ibb.co/xS8DwfcK/edacs.png",
    "https://i.ibb.co/Qvq0vdrv/Logo-Couleur-fac-de-droit-montpellier.png"
  ];

  const institutions = [...institutionLogos, ...institutionLogos, ...institutionLogos];

  const diplomas = [
    "CAPA – Certificat d’aptitude à la profession d’avocat",
    "Certificat d’études spécialisée en droit fiscal",
    "Magistère et Master DJCE – Diplôme de Juriste Conseil d’Entreprise",
    "Diplôme universitaire de gestion de patrimoine"
  ];

  const expertiseCards = [
    {
      num: "01",
      title: "CONTRÔLE ET CONTENTIEUX",
      desc: "Défense face à l'administration fiscale et expertise devant la chambre fiscale du tribunal administratif de Montpellier."
    },
    {
      num: "02",
      title: "STRUCTURATION JURIDIQUE",
      desc: "Il propose des solutions adaptées afin d’optimiser la structuration juridique et fiscale des entreprises."
    },
    {
      num: "03",
      title: "INGÉNIERIE PATRIMONIALE",
      desc: "Il accompagne ses clients dans la préparation et l’organisation de la transmission du patrimoine."
    },
    {
      num: "04",
      title: "FISCALITÉ INTERNATIONALE",
      desc: "Conseil sur les enjeux liés à la fiscalité internationale (résidence fiscale, établissement stable, etc.)."
    },
    {
      num: "05",
      title: "ASSISTANCE DÉCLARATIVE",
      desc: "Assistance en matière de déclarations d’impôt IR, IFI, etc. pour vous décharger de cette obligation."
    },
    {
      num: "06",
      title: "FISCALITÉ PROFESSIONNELLE",
      desc: "Gestion fiscale de l'activité professionnelle et conseil en optimisation de la rémunération du dirigeant."
    },
    {
      num: "07",
      title: "RÉGULARISATION",
      desc: "Intervention dans le cadre de la régularisation de situations fiscales particulières."
    },
    {
      num: "08",
      title: "T.V.A.",
      desc: "Conseil sur les problématiques liées à la TVA et veille à leur bonne gestion."
    }
  ];

  return (
    <>
      <Hero />

      {/* --- SECTION PRÉSENTATION COMPLÈTE --- */}
      <section className="py-12 md:py-20 lg:py-32 bg-[#F2E8D8] border-t border-slate-200/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10" />
        <div className="absolute -top-24 -left-24 text-[30rem] lg:text-[45rem] font-serif text-slate-200/20 select-none -z-10 pointer-events-none leading-none">
          A
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-slate-200/30 -z-10 translate-x-32 translate-y-32" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 reveal order-2 lg:order-1">
              <div className="relative group cursor-crosshair max-w-md mx-auto lg:max-w-none">
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-slate-200/50 bg-white relative">
                  <img 
                    src="https://i.ibb.co/fV2G8jVf/885A6096.jpg" 
                    alt="Maître Aaronn AVRILLEAU" 
                    className="w-full h-full object-cover img-premium-hover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-bottom-10 lg:-right-6 bg-[#112056] p-6 lg:p-10 text-white shadow-2xl max-w-[280px] lg:max-w-[340px] transition-transform duration-700 group-hover:translate-y-2">
                  <p className="text-[8px] lg:text-[10px] uppercase tracking-normal font-bold text-[#598BB3] mb-2 lg:mb-4">Inscrit à la Cour d’appel</p>
                  <p className="serif text-xl lg:text-2xl font-bold leading-tight text-white mb-2 tracking-tight">Montpellier</p>
                  <p className="text-[7px] lg:text-[9px] opacity-60 uppercase tracking-wider font-bold">Cabinet principal (Hérault)</p>
                </div>
              </div>

              <div className="mt-12 lg:mt-16 p-8 lg:p-12 bg-white border border-slate-200/50 reveal shadow-sm hover:shadow-xl transition-all duration-700 group">
                <h4 className="text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold text-[#598BB3] mb-8 border-b border-[#598BB3]/20 pb-6 group-hover:border-[#598BB3] transition-colors">Diplômes & Certifications</h4>
                <ul className="space-y-6 lg:space-y-8">
                  {diplomas.map((dip, i) => (
                    <li key={i} className="flex gap-4 lg:gap-5 items-start group/item">
                      <ChevronRight className="w-4 h-4 text-[#598BB3] mt-1.5 shrink-0 transition-transform duration-500 group-hover/item:scale-125" />
                      <span className="text-slate-800 font-semibold serif text-sm lg:text-base leading-snug group-hover/item:text-[#598BB3] transition-colors">{dip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8 lg:space-y-12 reveal order-1 lg:order-2">
              <span className="text-[#598BB3] uppercase tracking-[0.3em] text-xs font-bold block">PRÉSENTATION</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tighter serif">
                Maître Aaronn <br />
                <span className="serif font-light text-slate-400">AVRILLEAU.</span>
              </h2>
              
              <div className="space-y-6 lg:space-y-8 text-slate-700 leading-relaxed font-normal text-sm md:text-base lg:text-lg text-justify">
                <p>
                  Originaire des Pyrénées-Orientales, Maître Aaronn AVRILLEAU a grandi dans les Albères avant de réaliser son parcours universitaire à Montpellier.
                </p>
                <p>
                  Titulaire du DJCE – Diplôme de juriste conseil d’entreprise, formation exigeante et reconnue en droit des affaires, il est également titulaire du certificat d’études spécialisées en droit fiscal.
                </p>
                <p>
                  Après plusieurs expériences professionnelles, notamment au sein des cabinets Fidal et Deloitte, ainsi qu’à la chambre fiscale du tribunal administratif de Montpellier, il a choisi de mettre cette expertise au service de sa clientèle personnelle.
                </p>
                <p>
                  Avec un pied d’attache à Montpellier et à Perpignan, il accompagne principalement les dirigeants de TPE et de PME dans leurs problématiques juridiques et fiscales.
                </p>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-8 gap-6">
                    <div className="text-left opacity-60">
                      <p className="font-serif text-3xl text-slate-400 italic leading-none">Aaronn Avrilleau</p>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#598BB3] font-bold mt-2">Avocat au Barreau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* --- NOUVEL ENCART : LES MOTS DE VOTRE AVOCAT (STYLE ÉPURÉ AWWWARDS) --- */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden reveal border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
            {/* Ligne verticale élégante centrée */}
            <div className="flex flex-col items-center mb-8 md:mb-12">
                <div className="w-px h-12 md:h-16 bg-gradient-to-b from-transparent to-[#B6834A]/50 mb-4"></div>
                <span className="text-[#B6834A] uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-bold">Le mot de votre avocat</span>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl font-serif text-[#112056] font-light leading-[1.8] text-center md:text-justify max-w-3xl mx-auto">
                <p>
                  « Je constate que de nombreuses TPE et PME sont insuffisamment accompagnées sur le plan juridique et fiscal.
                </p>
                <p className="text-[#598BB3]">
                  Trop souvent, j’interviens au moment du contrôle, lorsque les décisions ont déjà été prises et que les marges de manœuvre sont limitées.
                </p>
                <p className="font-semibold text-[#112056]">
                  C’est pourquoi je suis convaincu de l’importance de disposer, au quotidien, d’un avocat avec lequel un dialogue direct et de confiance est possible. »
                </p>
            </div>

            <div className="mt-10 md:mt-12 flex justify-center">
                <Link to="/votre-avocat-privilegie" className="group relative inline-flex items-center gap-4 text-[#112056] font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:text-[#598BB3] transition-colors duration-500">
                  <span className="relative z-10 pb-2">Découvrez l’offre « Privilège »</span>
                  {/* Ligne animée sous le texte façon awwwards */}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#112056] origin-right transform transition-transform duration-500 ease-out group-hover:scale-x-0"></span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#598BB3] origin-left transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                  <ArrowRight className="w-4 h-4 mb-2 transform group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
            </div>
        </div>
      </section>

      {/* --- SECTION SLIDER INSTITUTIONNEL (Déplacé ici) --- */}
      <section className="py-12 bg-white border-y border-slate-200/40 overflow-hidden reveal">
        <div className="animate-scroll flex items-center gap-24 lg:gap-64 px-12">
          {institutions.map((logo, i) => {
            const isEdacs = logo.includes('edacs');
            return (
              <div key={i} className="flex items-center justify-center shrink-0">
                  <img 
                    src={logo} 
                    alt="Partenaire Institutionnel" 
                    className={`${isEdacs ? 'h-16 md:h-20 lg:h-32 scale-110' : 'h-12 md:h-16 lg:h-24'} w-auto transition-all duration-1000 hover:scale-110 hover:rotate-3 object-contain`}
                  />
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION DOMAINES D'INTERVENTION --- */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#F2E8D8] relative overflow-hidden border-t border-slate-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative mb-16 lg:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 lg:gap-12">
            <div className="reveal">
              <span className="text-[#598BB3] uppercase tracking-[0.3em] text-xs font-bold mb-6 lg:mb-10 block">Domaines d'intervention</span>
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-none serif text-slate-900 tracking-tighter">
                Conseil
              </h2>
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-none serif text-slate-400 mt-2 lg:mt-4 tracking-tighter">
                et Contentieux.
              </h2>
            </div>
            
            <div className="reveal hidden md:block border-l-2 border-slate-200 pl-10 mb-4 transition-transform duration-700 hover:translate-x-2">
              <div className="text-[11px] uppercase tracking-[0.6em] text-slate-400 font-bold leading-loose">
                CABINET <br /> <span className="text-slate-900">AARONN AVRILLEAU</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-slate-100 border border-slate-100">
            {expertiseCards.map((card, idx) => (
              <Link 
                key={idx} 
                to="/quand-solliciter"
                className={`
                  ${idx >= 6 ? 'lg:col-span-3' : 'lg:col-span-2'}
                  bg-white p-8 md:p-10 lg:p-12 reveal h-full flex flex-col transition-all duration-700 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-2 group relative z-10 
                  cursor-pointer overflow-hidden
                `}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#598BB3] scale-x-100 transition-transform duration-700 origin-left"></div>
                
                <span className="text-5xl lg:text-6xl font-serif italic text-[#598BB3]/30 mb-8 lg:mb-10 block transition-all duration-700 group-hover:translate-x-4">
                  {card.num}
                </span>
                <h3 className="text-base lg:text-lg font-bold text-[#112056] tracking-widest mb-6 lg:mb-8 font-sans transition-colors duration-500 leading-relaxed uppercase break-words hyphens-auto group-hover:text-[#598BB3]">
                  {card.title}
                </h3>
                <p className="text-[#598BB3] text-sm lg:text-base leading-relaxed font-medium transition-colors duration-500 group-hover:text-[#112056]">
                  {card.desc}
                </p>
                
                <div className="mt-auto pt-10 lg:pt-12 opacity-100 transition-all duration-700 flex items-center gap-4">
                  <span className="text-[10px] font-bold text-[#598BB3] uppercase tracking-[0.4em]">En savoir plus</span>
                  <ArrowRight className="w-5 h-5 text-[#598BB3] transition-all duration-700 group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
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
            <Link to="/contact" className="group flex items-center gap-6 lg:gap-10 px-10 lg:px-16 py-6 lg:py-8 bg-white text-[#112056] font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs hover:bg-[#598BB3] hover:text-white transition-all rounded-sm shadow-2xl active:scale-95">
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-4 transition-transform duration-700" />
            </Link>

            <div className="opacity-40 hover:opacity-100 transition-opacity duration-700">
               <img 
                 src="https://i.ibb.co/HDtb468b/jpeg-2-Copie.png" 
                 alt="Logo Cabinet" 
                 className="h-16 md:h-24 w-auto object-contain brightness-0 invert" 
               />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;