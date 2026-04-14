import React, { useState } from 'react';
import { Receipt, Building2, FileSignature } from 'lucide-react';

const Fees: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Icônes Lucide Premium
  const Icons = {
    Fiscalite: () => <Receipt className="w-8 h-8" />,
    Societes: () => <Building2 className="w-8 h-8" />,
    Baux: () => <FileSignature className="w-8 h-8" />
  };

  const tableData = [
    { 
      cat: "En matière fiscale", 
      label: "Fiscalité",
      icon: <Icons.Fiscalite />,
      items: [
        { name: "Premier rendez-vous", price: "200 € HT", note: "Si le rendez-vous conduit à la signature d’une lettre de mission, le montant du rendez-vous fera l’objet d’une remise lors de la première facture." },
        { name: "Consultation orale ne nécessitant pas d’analyse de pièces, de recherches ou de rédaction de consultation", price: "200 € / heure", note: "" },
        { name: "Contrôle et contentieux fiscal", price: "160 € / heure + 8%", note: "Taux horaire de 160 € + honoraire de résultat de 8%" },
        { name: "Consultation fiscale", price: "250 € / heure ou forfait", note: "Taux horaire de 250 € ou forfait lorsque cela est possible" },
        { name: "Consultation patrimoniale", price: "Sur devis", note: "" },
        { name: "Déclaration d’impôt sur le revenu simple", price: "À partir de 500 €", note: "" },
        { name: "Déclaration d’impôt sur le revenu complexe", price: "À partir de 1.000 €", note: "" }
      ]
    },
    { 
      cat: "OPÉRATIONS AFFÉRENTES AUX SOCIÉTÉS", 
      label: "Sociétés",
      icon: <Icons.Societes />,
      items: [
        { name: "Constitution SCI", price: "800 €", note: "" },
        { name: "Constitution SAS / SARL opérationnelle en numéraire", price: "900 - 1.100 €", note: "" },
        { name: "Constitution SAS / SARL part apport en nature", price: "1.000 € + 500 €", note: "+ 500 € par apport en nature" },
        { name: "Pacte d’associé", price: "1.500 € - 2.500 €", note: "" },
        { name: "Approbation des comptes", price: "450 €", note: "" },
        { name: "Modifications statutaires (hors capital)", price: "450 €", note: "" },
        { name: "Augmentation de capital en numéraire", price: "750 €", note: "" },
        { name: "Augmentation de capital en nature", price: "800 € + 400 €", note: "+ 400 € par apport en nature" },
        { name: "Réduction du capital SCI", price: "800 €", note: "" },
        { name: "Réduction du capital SAS / SARL", price: "1.000 – 1.500 €", note: "" },
        { name: "Acte de cession de parts", price: "1.000 – 1.500 €", note: "" },
        { name: "Acte de cession d’action", price: "500 – 1.500 €", note: "" },
        { name: "Transformation régime sociétaire", price: "1.000 € - 1.500 €", note: "" },
        { name: "TUP intragroupe / fusion simplifiée", price: "1.750 €", note: "" },
        { name: "Fusion avec échange de titres", price: "2.500 €", note: "" },
        { name: "Dissolution de société", price: "750 € - 1.000 €", note: "" },
        { name: "Liquidation de société", price: "750 € - 1.000 €", note: "" },
        { name: "Suivi acquisition de sociétés tiers", price: "Selon devis", note: "" }
      ]
    },
    { 
      cat: "AUTRES OPÉRATIONS (Bail / Fonds / Garantie)", 
      label: "Baux Commerciaux",
      icon: <Icons.Baux />,
      items: [
        { name: "Bail commercial", price: "1.000 € - 3.000 €", note: "1 mois de loyer HT / 1.000 € minimum à 3.000 € maximum" },
        { name: "Promesse de bail commercial", price: "800 € min", note: "800 € minimum" },
        { name: "Avenant bail commercial", price: "À partir de 500 €", note: "" },
        { name: "Bail précaire", price: "800 € min", note: "1 mois de loyer HT (800 € minimum)" },
        { name: "Cession droit au bail", price: "1.500 € min", note: "1 à 3 % du prix de vente / 1.500 € minimum" },
        { name: "Compromis cession droit au bail", price: "1.000 €", note: "" },
        { name: "Cession fonds de commerce", price: "1.500 € min", note: "1 à 3 % du prix de vente / 1.500 € minimum" },
        { name: "Compromis de vente de fonds de commerce", price: "1.000 €", note: "" },
        { name: "Location gérance", price: "1.500 € min", note: "1 mois de loyer (1.500 € minimum)" },
        { name: "Avenant location gérance", price: "800 €", note: "" },
        { name: "Résiliation location gérance", price: "800 €", note: "" },
        { name: "Contrat de prêt / prise de garantie", price: "500 € + 250 €", note: "+ 250 € par garantie supplémentaire" }
      ]
    }
  ];

  return (
    <div className="bg-[#F2E8D8] pt-28 md:pt-36 pb-16 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 reveal">
          <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-4 block underline underline-offset-8">HONORAIRES</span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 serif uppercase mb-8">
            Comprendre <span className="text-slate-400 font-light">les honoraires.</span>
          </h1>
          <div className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto space-y-4 text-justify">
            <p>
              Les honoraires des prestations et diligences effectuées par le Cabinet AVRILLEAU AVOCAT sont en principe déterminés, conformément aux usages de notre profession, par référence au temps passé, à la nature et à la complexité du dossier, à l’impact de notre intervention, ainsi qu’aux conditions et aux objectifs de l’assistance sollicitée.
            </p>
            <p>
              La nature des prestations de l’avocat fait obstacle à une tarification universelle. Le cabinet pratique donc quatre modes de facturation.
            </p>
            <p>
              Ils sont formalisés dans un devis ou une proposition d’assistance et sont facturées mensuellement au fur et à mesure de l’accomplissement de la mission.
            </p>
          </div>
        </div>

        {/* Section Titre & Introduction - CENTRÉ */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* 1. L'HONORAIRE AU TEMPS PASSÉ */}
            <div className="h-full min-h-[20rem] lg:min-h-[30rem] p-8 md:p-14 bg-white border border-slate-200 shadow-xl border-l-4 md:border-l-8 border-l-[#598BB3] transition-transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-4 md:mb-6 font-serif uppercase tracking-tight">Le taux horaire</h3>
                <div className="text-sm md:text-base leading-relaxed text-slate-600 space-y-4 md:space-y-6 font-normal">
                  <p>Le recours au taux horaire est privilégié lorsqu’il n’est pas possible d’estimer de manière fiable le temps nécessaire au traitement du dossier, notamment en matière de contentieux fiscal.</p>
                  <p>Lorsque cela est possible, une fourchette indicative est communiquée en amont. Cette fourchette n’est jamais dépassée sans consultation préalable du client.</p>
                </div>
              </div>
              <p className="text-xs md:text-sm italic mt-6 text-slate-500">Un relevé des diligences est tenu et communiqué sur demande.</p>
            </div>

            {/* 2. LE FORFAIT */}
            <div className="h-full min-h-[20rem] lg:min-h-[30rem] p-8 md:p-14 bg-[#112056] text-white shadow-2xl border-l-4 md:border-l-8 border-l-[#598BB3] transition-transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                  <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6 font-serif text-[#598BB3] uppercase tracking-tight">Le forfait</h3>
                  <div className="text-sm md:text-base leading-relaxed space-y-4 md:space-y-6 font-normal">
                    <p>La facturation forfaitaire est utilisée pour les prestations dont le temps de réalisation peut être évalué de manière suffisamment précise, telles que : certaines consultations écrites, des actes juridiques déterminés, des constitutions de sociétés ou opérations assimilées.</p>
                    <p>Lorsque les enjeux du dossier le justifient, notamment en matière patrimoniale ou de structuration, une tarification spécifique peut être appliquée.</p>
                  </div>
              </div>
            </div>

            {/* 3. L'HONORAIRE DE RÉSULTAT */}
            <div className="h-full min-h-[20rem] lg:min-h-[30rem] p-8 md:p-14 bg-[#112056] text-white shadow-2xl border-l-4 md:border-l-8 border-l-[#598BB3] transition-transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-4 md:mb-6 font-serif text-[#598BB3] uppercase tracking-tight">L’honoraire de résultat</h3>
                <div className="text-sm md:text-base leading-relaxed text-slate-200 space-y-4 md:space-y-6 font-normal">
                  <p>L’honoraire de résultat est indexé sur le résultat obtenu, entendu comme les sommes récupérées ou l’économie réalisée au bénéfice du client.</p>
                  <p>Cet honoraire accompagne nécessairement un honoraire de base, conformément aux règles déontologiques applicables à la profession d’avocat.</p>
                </div>
              </div>
              <p className="text-xs md:text-sm italic opacity-70 mt-6">Il ne peut en aucun cas constituer l’unique mode de rémunération.</p>
            </div>

            {/* 4. L'ABONNEMENT */}
            <div className="h-full min-h-[20rem] lg:min-h-[30rem] p-8 md:p-14 bg-white border border-slate-200 shadow-xl border-l-4 md:border-l-8 border-l-slate-400 transition-transform hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-4 md:mb-6 font-serif uppercase tracking-tight">L’abonnement</h3>
                <div className="text-sm md:text-base leading-relaxed text-slate-600 space-y-4 md:space-y-6 font-normal">
                  <p>Pour les clients ayant des besoins réguliers, un abonnement peut être mis en place et comprend un volume d’heures.</p>
                  <p>Celui-ci permet au client de poser ses différentes questions à tout moment, sans qu’il soit nécessaire d’établir, pour chacune d’entre elles, une nouvelle proposition d’assistance.</p>
                </div>
              </div>
              <p className="font-bold text-[#112056] mt-6 text-sm md:text-base">Pour le client, c’est un budget maîtrisé et la liberté de solliciter le cabinet à la moindre question.</p>
            </div>

          </div>
        </div>

        {/* --- GRILLE TARIFAIRE GLOBALE --- */}
        <div className="mb-16 md:mb-24 reveal">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-xl md:text-3xl font-bold serif text-slate-900 mb-6 md:mb-8 uppercase tracking-tight">Grille tarifaire indicative</h3>
            <div className="h-1.5 w-32 md:w-48 bg-[#B6834A] mx-auto"></div>
            <p className="mt-8 md:mt-10 text-slate-500 max-w-3xl mx-auto text-sm md:text-base italic">
              Les tarifs indiqués ci-dessous ne se substituent pas à une lettre de mission. Ils sont hors taxes et n'incluent pas les débours (greffe, publicité, etc.).
            </p>
          </div>
          
          <div className="space-y-12 md:space-y-16">
            {tableData.map((section, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-100 shadow-xl overflow-hidden rounded-sm transition-all duration-700">
                  <div className="p-8 md:p-14 bg-[#112056] text-white flex flex-col md:flex-row justify-between md:items-center gap-6 border-b-4 border-[#B6834A]">
                      <div className="flex items-center gap-6">
                        <div className="text-[#B6834A] transform scale-110">{section.icon}</div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold serif tracking-tight leading-tight uppercase">{section.cat}</h3>
                      </div>
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[#B6834A] bg-[#B6834A]/10 px-4 py-2 rounded-sm border border-[#B6834A]/20">Tarification HT indicative</span>
                  </div>
                  
                  <div className="divide-y-2 divide-slate-50">
                      {section.items.map((item, i) => (
                          <div key={i} className="px-6 md:px-14 py-8 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#F2E8D8]/30 transition-all group gap-4">
                              <div className="mb-0 max-w-2xl">
                                  <p className="font-bold text-slate-900 text-base md:text-lg font-serif mb-2 group-hover:text-[#598BB3] leading-tight transition-colors">{item.name}</p>
                                  {item.note && <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold italic opacity-80 mt-2">Note : {item.note}</p>}
                              </div>
                              <div className="flex items-center">
                                <p className="text-[#598BB3] font-bold text-base md:text-xl font-serif tabular-nums tracking-tight whitespace-nowrap bg-slate-50 px-5 py-3 rounded-sm border border-slate-100 group-hover:border-[#598BB3]/40 transition-colors">
                                  {item.price.replace(' HT', '')}
                                </p>
                              </div>
                          </div>
                      ))}
                  </div>
                  {/* Footer only on the last table */}
                  {idx === tableData.length - 1 && (
                    <div className="p-8 md:p-12 bg-[#F2E8D8]/20 text-center border-t border-slate-100">
                        <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-bold mb-6">Document informatif — Devis définitif établi après analyse approfondie du dossier.</p>
                        <div className="max-w-2xl mx-auto text-xs md:text-sm text-slate-600 italic space-y-3">
                            <p>
                                Est ajouté aux honoraires de l'avocat des frais de chancellerie : <strong>5 % dans la limite 150 €</strong>.
                            </p>
                            <p className="opacity-80">
                                Ces frais couvrent les frais administratifs liés à la gestion du dossier (courriers, copies, télécommunications, signature électronique, archivage et conservation des documents).
                            </p>
                        </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;