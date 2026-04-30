import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';

const permanentArticles = [
  { 
    title: "Présentation du contrôle et contentieux fiscal ?", 
    slug: "controle-fiscal",
    date: "Fondamentaux", 
    desc: "Comprendre les étapes clés d'un contrôle fiscal et les recours possibles en cas de redressement."
  },
  { 
    title: "Quand est-ce que la mise en place d'une société holding présente un intérêt ?", 
    slug: "holding",
    date: "Stratégie", 
    desc: "Analyse des avantages juridiques et fiscaux pour faciliter le développement de vos entreprises."
  },
  { 
    title: "L'importance d'anticiper la transmission de son patrimoine !", 
    slug: "transmission",
    date: "Patrimoine", 
    desc: "Découvrez les outils à votre disposition pour assurer une transmission sereine et optimisée fiscalement."
  },
  { 
    title: "Une demande d'ami sur vos réseaux ? Attention cela peut être l'administration fiscale !", 
    slug: "reseaux-sociaux",
    date: "Alerte Info", 
    desc: "L'utilisation des réseaux sociaux par l'administration dans le cadre de la recherche de la fraude fiscale."
  }
];

const Articles: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section id="articles" className="pt-28 md:pt-36 pb-12 md:pb-16 bg-[#F2E8D8]">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-0 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-4 block underline underline-offset-8">PUBLICATIONS</span>
              <h2 className="text-3xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase">
                Articles <span className="text-slate-400 font-light">Permanents.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

        {/* ARTICLES GRID */}
        <div className="border-t border-slate-200 pt-10 md:pt-16 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {permanentArticles.map((article, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white p-8 md:p-10 border border-slate-200 transition-all duration-500 group relative overflow-hidden flex flex-col h-full"
                    >
                        {/* Décoration d'arrière-plan */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full group-hover:bg-[#F2E8D8]/50 transition-colors duration-500"></div>

                        <div className="flex items-center gap-3 mb-4 relative z-10">
                            <span className="text-[10px] md:text-xs font-bold text-[#598BB3] uppercase tracking-widest">{article.date}</span>
                            <span className="bg-[#112056] text-white text-[8px] md:text-[9px] px-2 py-0.5 rounded-full uppercase tracking-tighter font-bold">Prochainement</span>
                        </div>
                        
                        <h4 className="font-bold text-slate-900 serif text-xl md:text-2xl mb-4 leading-tight relative z-10">{article.title}</h4>
                        
                        <p className="text-base text-slate-600 font-light leading-relaxed mb-8 flex-1 relative z-10">{article.desc}</p>
                        
                        <div className="flex items-center space-x-3 text-slate-400 mt-auto relative z-10">
                            <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Article en rédaction</span>
                            <div className="h-px w-8 bg-slate-200"></div>
                        </div>
                    </div>
                ))}
                
                {/* Case "Et bien d'autres" */}
                <div className="bg-slate-50/50 p-8 md:p-10 border border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                        <FileText className="w-6 h-6 text-[#598BB3]" />
                    </div>
                    <h4 className="font-bold text-slate-400 serif text-xl italic">Et bien d'autres...</h4>
                    <p className="text-sm text-slate-400 font-light italic">De nouveaux sujets d'actualité fiscale et patrimoniale sont régulièrement ajoutés.</p>
                </div>
            </div>
            
            <p className="text-center mt-16 text-slate-400 text-sm italic font-serif">
                Maître AVRILLEAU rédige actuellement ces contenus pour vous offrir une expertise précise et à jour.
            </p>
        </div>

          </div>
      </section>
    </div>
  );
};

export default Articles;
