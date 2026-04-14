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
    <section id="articles" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-[#F2E8D8] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl reveal">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-4 block underline underline-offset-8">PUBLICATIONS</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase">
              Articles <span className="text-slate-400 font-light">Permanents.</span>
            </h2>
          </div>
        </div>

        {/* ARTICLES GRID (Même design que LinkedIn mais pour des articles internes) */}
        <div className="border-t border-slate-200 pt-10 md:pt-16 reveal">
            <div className="flex items-center gap-4 mb-10 md:mb-12">
                <div className="h-px bg-slate-200 flex-1"></div>
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#598BB3] shrink-0 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Articles de Fond
                </h3>
                <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {permanentArticles.map((article, idx) => (
                    <Link 
                        key={idx} 
                        to={`/article/${article.slug}`} 
                        className="bg-white p-8 md:p-10 border border-slate-200 hover:border-[#112056] hover:shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full transform hover:-translate-y-2"
                    >
                        {/* Décoration d'arrière-plan au survol */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full group-hover:bg-[#F2E8D8]/50 transition-colors duration-500"></div>

                        <span className="text-[10px] md:text-xs font-bold text-[#598BB3] uppercase tracking-widest mb-4 block relative z-10">{article.date}</span>
                        <h4 className="font-bold text-slate-900 serif text-xl md:text-2xl mb-4 group-hover:text-[#112056] transition-colors leading-tight relative z-10">{article.title}</h4>
                        
                        <p className="text-base text-slate-600 font-light leading-relaxed mb-8 flex-1 relative z-10">{article.desc}</p>
                        
                        <div className="flex items-center space-x-3 text-[#112056]/60 group-hover:text-[#B6834A] transition-colors mt-auto relative z-10">
                            <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Lire l'article</span>
                            <div className="h-px w-8 bg-current transition-all group-hover:w-16"></div>
                            <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                    </Link>
                ))}
            </div>
            
            <p className="text-center mt-16 text-slate-400 text-sm italic font-serif">
                De nouveaux articles sont rédigés régulièrement pour vous tenir informés.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Articles;
