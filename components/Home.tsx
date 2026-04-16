import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Hero from './Hero';

const Home: React.FC = () => {


  const diplomas = [
    "CAPA – Certificat d’aptitude à la profession d’avocat",
    "Certificat d’études spécialisée en droit fiscal",
    "Magistère et Master DJCE – Diplôme de Juriste Conseil d’Entreprise",
    "Diplôme universitaire de gestion de patrimoine"
  ];



  return (
    <>
      <Hero />

      {/* --- BOUTON LINKEDIN FLOTTANT SUR LE CÔTÉ - Visibilité améliorée --- */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col animate-in slide-in-from-right-10 duration-1000">
        <a 
          href="https://www.linkedin.com/in/aaronn-avrilleau" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center bg-[#0077b5] text-white p-4 rounded-l-xl shadow-2xl hover:bg-[#112056] transition-all duration-500 hover:pr-8"
          title="Consulter mon profil LinkedIn"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
            alt="LinkedIn" 
            className="w-6 h-6 object-contain"
          />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-white">
            LinkedIn
          </span>
        </a>
      </div>

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
              <div className="relative group max-w-md mx-auto lg:max-w-none">
                {/* Image Container - Vertical format, full color, no effects */}
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-slate-200/50 bg-white relative">
                  <img 
                    src="https://i.ibb.co/rfRqYM6j/211c4b96-7f3a-4c02-9abb-470e2859fced.png" 
                    alt="Maître Aaronn AVRILLEAU" 
                    className="w-full h-full object-cover object-[80%_center] transition-none"
                  />
                </div>
                {/* Location Info Box - Perfectly Centered for balance */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#112056] p-6 lg:p-10 text-white shadow-2xl w-[90%] md:w-auto md:min-w-[280px] lg:min-w-[340px] text-center transition-transform duration-700 group-hover:-translate-y-2">
                  <p className="serif text-xl lg:text-3xl font-bold leading-tight text-white mb-2 tracking-tight">AVOCAT EN <br/> DROIT FISCAL</p>
                  <p className="text-[10px] lg:text-[12px] uppercase tracking-[0.2em] font-bold text-[#598BB3]">Conseil et Contentieux</p>
                </div>
              </div>

              <div className="mt-16 lg:mt-24 p-8 lg:p-12 bg-white border border-slate-200/50 reveal shadow-sm hover:shadow-xl transition-all duration-700 group">
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
              <div className="space-y-6">
                <span className="text-[#598BB3] uppercase tracking-[0.3em] text-xs font-bold block">PRÉSENTATION</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tighter serif">
                  Maître Aaronn <br />
                  <span className="serif font-light text-slate-400">AVRILLEAU.</span>
                </h2>
                <p className="text-[#598BB3] uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mt-4 border-l-2 border-[#598BB3] pl-4">
                  Avocat en droit fiscal inscrit à la Cour d’appel de Montpellier
                </p>
              </div>
              
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

                  {/* Nouveau bloc CTA harmonieux */}
                  <div className="mt-12 lg:mt-20 pt-12 border-t border-slate-200/50 reveal">
                    <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-12 border border-slate-200/50 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#598BB3]/5 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:bg-[#598BB3]/10 transition-colors duration-700"></div>
                      <div className="relative z-10 space-y-8">
                        <h3 className="text-2xl md:text-4xl font-bold serif text-[#112056] leading-tight tracking-tight">
                          Construisons votre stratégie <br/>
                          <span className="text-[#598BB3]">de demain.</span>
                        </h3>
                        <Link to="/contact" className="group/btn inline-flex items-center gap-6 px-10 py-5 bg-[#112056] text-white font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs hover:bg-[#598BB3] transition-all rounded-sm shadow-lg active:scale-95">
                          Prendre rendez-vous
                          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform duration-500" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      
      {/* --- SECTION LOGOS DÉFILANTS --- */}
      <section className="py-12 bg-white border-y border-slate-200/40 overflow-hidden reveal">
        <div className="animate-scroll flex items-center gap-24 lg:gap-48 px-12">
          {[
            "https://i.ibb.co/BH0QSsH6/barreau-mtp-transparent.png",
            "https://i.ibb.co/HLTqbb23/djce-poppins.png",
            "https://i.ibb.co/xS8DwfcK/edacs.png",
            "https://i.ibb.co/Qvq0vdrv/Logo-Couleur-fac-de-droit-montpellier.png",
            "https://i.ibb.co/BH0QSsH6/barreau-mtp-transparent.png",
            "https://i.ibb.co/HLTqbb23/djce-poppins.png",
            "https://i.ibb.co/xS8DwfcK/edacs.png",
            "https://i.ibb.co/Qvq0vdrv/Logo-Couleur-fac-de-droit-montpellier.png",
            "https://i.ibb.co/BH0QSsH6/barreau-mtp-transparent.png",
            "https://i.ibb.co/HLTqbb23/djce-poppins.png",
            "https://i.ibb.co/xS8DwfcK/edacs.png",
            "https://i.ibb.co/Qvq0vdrv/Logo-Couleur-fac-de-droit-montpellier.png"
          ].map((logo, index) => (
            <div key={index} className="flex items-center justify-center shrink-0">
              <img 
                src={logo} 
                alt="Partenaire Institutionnel" 
                className={`${logo.includes('edacs') ? 'h-16 md:h-20 scale-110' : 'h-10 md:h-14'} w-auto transition-all duration-1000 hover:scale-110 object-contain`}
              />
            </div>
          ))}
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
            <Link to="/contact" className="group flex items-center gap-6 lg:gap-10 px-8 lg:px-12 py-4 lg:py-6 bg-white text-[#112056] font-bold uppercase tracking-[0.3em] text-sm lg:text-base hover:bg-[#598BB3] hover:text-white transition-all rounded-sm shadow-2xl active:scale-95">
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-4 transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;