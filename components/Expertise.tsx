import React from 'react';

const Expertise: React.FC = () => {
  const expertises = [
    { title: "Contrôle et contentieux fiscal", desc: "Défense face à l'administration (ESFP, vérification de comptabilité), assistance devant le tribunal administratif." },
    { title: "Conseil en structuration", desc: "Optimisation des schémas de détention, restructuration de sociétés, holding, acquisition ou cession d'activité." },
    { title: "Ingénierie patrimoniale", desc: "Anticipation et organisation de la transmission du patrimoine pour limiter la charge fiscale successorale." },
    { title: "Fiscalité internationale", desc: "Enjeux liés à la résidence fiscale, établissement stable et présence à l'étranger pour particuliers et entreprises." },
    { title: "Déclarations d'impôt", desc: "Assistance pour les obligations déclaratives complexes (IR, IFI, revenus fonciers, revenus étrangers)." },
    { title: "Fiscalité professionnelle", desc: "Gestion fiscale de l'activité quotidienne et optimisation de la rémunération globale du dirigeant." },
    { title: "Régularisation", desc: "Accompagnement dans le cadre de la régularisation de situations fiscales particulières et complexes." },
    { title: "T.V.A.", desc: "Conseil sur les problématiques de TVA nationales et intracommunautaires pour sécuriser vos flux." }
  ];

  return (
    <section id="expertise" className="py-20 md:py-24 bg-[#F2E8D8] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mb-16 reveal">
          <span className="text-[#598BB3] uppercase tracking-[0.3em] text-base font-bold mb-8 block underline underline-offset-[12px] decoration-4">Domaines d'Intervention</span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 serif tracking-tight uppercase">
            Expertise <span className="text-slate-400 font-light">stratégique.</span>
          </h2>
          <p className="mt-10 text-slate-700 text-2xl md:text-3xl font-normal leading-relaxed serif italic">
            Maître AVRILLEAU intègre les enjeux du droit des sociétés dans chaque recommandation fiscale pour une protection juridique totale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expertises.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-14 border-2 border-slate-100 hover:border-[#598BB3] hover:shadow-2xl transition-all duration-500 group reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-10">
                <span className="text-5xl font-serif text-slate-100 group-hover:text-[#598BB3]/30 transition-colors">0{idx + 1}</span>
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-4xl font-bold text-slate-900 font-serif group-hover:text-[#598BB3] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;