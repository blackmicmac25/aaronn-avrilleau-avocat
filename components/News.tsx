import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ExternalLink } from 'lucide-react';



// SECTION LINKEDIN (Sans images factices, uniquement le contenu textuel)
const linkedInNews = [
  {
    title: "PLF 2026 : Fiscalité & Entrepreneurs",
    date: "Post récent",
    url: "https://www.linkedin.com/posts/aaronn-avrilleau_plf2026-fiscalitaez-entrepreneurs-activity-7421797880593543168-wkSZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAxrHs8BsHW6qgNNAI1h36xCz7zVD-aOCQE",
    desc: "Décryptage des enjeux majeurs du Projet de Loi de Finances 2026 pour les dirigeants d'entreprise."
  },
  {
    title: "Fiscalité des Dividendes & PLFSS 2026",
    date: "Post récent",
    url: "https://www.linkedin.com/posts/aaronn-avrilleau_fiscalitaez-dividendes-plfss2026-activity-7407087667084943361-u5G0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAxrHs8BsHW6qgNNAI1h36xCz7zVD-aOCQE",
    desc: "Analyse des impacts du Projet de Loi de Financement de la Sécurité Sociale sur la distribution de dividendes."
  },
  {
    title: "Droit Fiscal : L'expertise à Montpellier",
    date: "Post récent",
    url: "https://www.linkedin.com/posts/aaronn-avrilleau_fiscalitaez-droitfiscal-montpellier-activity-7406936941335564288-o-CG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAxrHs8BsHW6qgNNAI1h36xCz7zVD-aOCQE",
    desc: "Focus sur l'actualité fiscale locale et l'accompagnement des contribuables en région Occitanie."
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-[#F2E8D8]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl reveal">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-4 block underline underline-offset-8">PUBLICATIONS</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase">
              Actualités <span className="text-slate-400 font-light">& Veille.</span>
            </h2>
          </div>
          <a href="https://www.linkedin.com/in/aaronn-avrilleau" target="_blank" className="flex items-center gap-3 px-6 py-3 bg-[#0077b5] text-white hover:bg-[#112056] hover:text-white transition-all rounded-sm group shadow-md hover:-translate-y-1">
            <Linkedin className="w-5 h-5" fill="currentColor" />
            <span className="font-bold uppercase tracking-widest text-[10px]">Suivez-moi sur LinkedIn</span>
          </a>
        </div>

        {/* SECTION LINKEDIN (EN PREMIER) */}
        <div className="mb-16 md:mb-24 reveal">
            <div className="flex items-center gap-4 mb-10 md:mb-12">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#0077b5] shrink-0 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0077b5] animate-pulse"></span>
                    En direct de LinkedIn
                </h3>
                <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {linkedInNews.map((news, idx) => (
                    <a 
                        key={idx} 
                        href={news.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white p-8 border border-slate-200 hover:border-[#0077b5] hover:shadow-lg transition-all group relative overflow-hidden flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 p-4 text-[#0077b5] group-hover:text-slate-200 transition-colors">
                            <Linkedin className="w-6 h-6" fill="currentColor" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 block">{news.date}</span>
                        <h4 className="font-bold text-slate-900 serif text-xl mb-3 group-hover:text-[#0077b5] transition-colors leading-tight">{news.title}</h4>
                        <p className="text-base text-slate-600 font-light leading-relaxed mb-6 flex-1">{news.desc}</p>
                        <span className="text-[10px] uppercase font-bold text-[#0077b5] flex items-center gap-2 mt-auto">
                            Voir le post 
                            <ExternalLink className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                ))}
            </div>
            
            <p className="text-center mt-12 text-slate-400 text-sm italic font-serif">
                Retrouvez l'intégralité de la veille juridique sur <a href="https://www.linkedin.com/in/aaronn-avrilleau" target="_blank" className="underline hover:text-[#0077b5]">mon profil LinkedIn</a>.
            </p>
        </div>



      </div>
    </section>
  );
};

export default News;