import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Briefcase, Handshake, Calendar, ArrowRight, Award } from 'lucide-react';

const WhyCall: React.FC = () => {
  const rubrics = [
    {
      title: "Le rôle de l’avocat en droit fiscal",
      path: "/quand-solliciter/role-avocat",
      icon: <Scale className="w-8 h-8" />,
      description: "Intervenir en amont pour sécuriser les décisions ou défendre les intérêts du contribuable face à l’administration."
    },
    {
      title: "Domaine d’intervention",
      path: "/quand-solliciter/domaine-intervention",
      icon: <Briefcase className="w-8 h-8" />,
      description: "Contrôle fiscal, structuration, ingénierie patrimoniale et fiscalité internationale."
    },
    {
      title: "Approche pluridisciplinaire",
      path: "/quand-solliciter/approche-pluridisciplinaire",
      icon: <Handshake className="w-8 h-8" />,
      description: "Une vision transversale du droit des affaires et une collaboration efficace avec d'autres praticiens."
    },
    {
      title: "Suivi régulier ou ponctuel",
      path: "/quand-solliciter/suivi-regularite",
      icon: <Calendar className="w-8 h-8" />,
      description: "Un accompagnement sur mesure adapté à l'évolution constante de la législation fiscale."
    }
  ];

  return (
    <div className="bg-white font-['Montserrat'] overflow-x-hidden min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="pt-28 md:pt-40 pb-16 px-6 bg-[#F2E8D8] border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-4 block underline underline-offset-8">QUAND FAIRE APPEL À UN AVOCAT</span>
            <h1 className="text-2xl md:text-5xl font-bold leading-tight text-slate-900 serif uppercase">
              Quand solliciter <span className="text-slate-400 font-light">le cabinet ?</span>
            </h1>
            <p className="mt-8 text-slate-600 text-lg md:text-xl font-serif italic max-w-2xl leading-relaxed">
              "Choisir d'être accompagné en droit fiscal, c'est avant tout choisir d'anticiper pour mieux sécuriser."
            </p>
          </div>
        </div>
      </section>

      {/* RUBRICS GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {rubrics.map((rubric, idx) => (
              <Link 
                key={idx}
                to={rubric.path}
                className="group relative bg-white p-10 md:p-14 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden flex flex-col items-start min-h-[320px]"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#598BB3]/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
                
                <div className="bg-[#112056] text-white p-4 rounded-sm mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#598BB3] shadow-lg">
                  {rubric.icon}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold serif text-slate-900 mb-6 leading-tight group-hover:text-[#598BB3] transition-colors">
                  {rubric.title}
                </h2>
                
                <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed italic">
                  {rubric.description}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-[#112056] font-bold uppercase tracking-widest text-xs border-b-2 border-transparent group-hover:border-[#598BB3] transition-all pb-1">
                  Découvrir cette rubrique
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {/* CTA SECTION */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
         <Link to="/contact" className="inline-block px-12 py-6 bg-[#112056] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#598BB3] transition-all shadow-2xl hover:-translate-y-1 rounded-sm">
            Prendre rendez-vous
         </Link>
      </section>

    </div>
  );
};

export default WhyCall;
