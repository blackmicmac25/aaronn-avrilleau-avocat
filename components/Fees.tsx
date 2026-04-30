import React, { useState } from 'react';
import { Receipt, Building2, FileSignature, Scale, Calculator, ClipboardCheck, History } from 'lucide-react';

const Fees: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fiscalite' | 'societes-baux'>('fiscalite');

  // Icônes Lucide Premium
  const Icons = {
    Fiscalite: () => <Receipt className="w-8 h-8" />,
    Societes: () => <Building2 className="w-8 h-8" />,
    Baux: () => <FileSignature className="w-8 h-8" />,
    Scale: () => <Scale className="w-6 h-6" />,
    Calculator: () => <Calculator className="w-6 h-6" />,
    Clipboard: () => <ClipboardCheck className="w-6 h-6" />,
    History: () => <History className="w-6 h-6" />
  };

  const tableData = [
    { 
      id: 'fiscalite',
      cat: "En matière fiscale", 
      label: "Fiscalité",
      icon: <Icons.Fiscalite />,
      items: [
        { name: "Premier rendez-vous", price: "200 € HT", note: "Montant déduit de la mission en cas de signature d’une lettre de mission." },
        { name: "Consultation orale ne nécessitant pas d’analyse de pièces, de recherches ou de rédaction de consultation", price: "200 € / heure", note: "" },
        { name: "Contrôle et contentieux fiscal", price: "160 € / heure + 8% sur le résultat", note: "" },
        { name: "Consultation fiscale", price: "250 € / heure ou forfait", note: "Taux horaire de 250 € ou forfait lorsque cela est possible" },
        { name: "Consultation patrimoniale", price: "Sur devis", note: "" },
        { name: "Déclaration d’impôt sur le revenu simple", price: "À partir de 500 €", note: "" },
        { name: "Déclaration d’impôt sur le revenu complexe", price: "À partir de 1.000 €", note: "" }
      ]
    },
    { 
      id: 'societes-baux',
      cat: "SOCIÉTÉ ET COMMERCIALE", 
      label: "Société",
      icon: <Icons.Societes />,
      items: [
        { name: "Constitution SCI", price: "900 €", note: "" },
        { name: "Constitution SAS / SARL opérationnelle en numéraire", price: "1000 - 1200 €", note: "" },
        { name: "Constitution SAS / SARL part apport en nature", price: "À partir de 1500 €", note: "" },
        { name: "Pacte d’associé", price: "1.500 € - 2.500 €", note: "" },
        { name: "Approbation des comptes", price: "À partir de", note: "" },
        { name: "Modifications statutaires (hors capital)", price: "À partir de", note: "" },
        { name: "Augmentation de capital en numéraire", price: "800 €", note: "" },
        { name: "Augmentation de capital en nature", price: "900 € + 400 € par apport en nature", note: "" },
        { name: "Réduction du capital SCI", price: "800 €", note: "" },
        { name: "Réduction du capital SAS / SARL", price: "1.000 – 1.500 €", note: "" },
        { name: "Acte de cession de parts", price: "1.000 – 1.500 €", note: "" },
        { name: "Acte de cession d’action", price: "500 – 1.500 €", note: "" },
        { name: "Transformation régime sociétaire", price: "1.000 € - 1.500 €", note: "" },
        { name: "TUP intragroupe / fusion simplifiée", price: "1.750 €", note: "" },
        { name: "Fusion avec échange de titres", price: "2.500 €", note: "" },
        { name: "Dissolution de société", price: "1000 €", note: "" },
        { name: "Liquidation de société", price: "1000 €", note: "" },
        { name: "Suivi acquisition de sociétés tiers", price: "Selon devis", note: "" }
      ]
    },
    { 
      id: 'societes-baux',
      cat: "AUTRES OPÉRATIONS (Bail / Fonds / Garantie)", 
      label: "Baux Commerciaux",
      icon: <Icons.Baux />,
      items: [
        { name: "Bail commercial", price: "1.000 € - 3.000 €", note: "1 mois de loyer (min 1 000 € / max 3 000 €)" },
        { name: "Promesse de bail commercial", price: "800 € min", note: "800 € minimum" },
        { name: "Avenant bail commercial", price: "À partir de 500 €", note: "" },
        { name: "Bail précaire", price: "1,5 à 3% du prix de vente / 1.500 € minimum", note: "" },
        { name: "Cession droit au bail", price: "1.500 € min", note: "1 à 3 % du prix (minimum 1 500 €)" },
        { name: "Compromis cession droit au bail", price: "1.000 €", note: "" },
        { name: "Cession fonds de commerce", price: "1,5 à 3% du prix de vente / 1.500 € minimum", note: "" },
        { name: "Compromis de vente de fonds de commerce", price: "1.000 €", note: "" },
        { name: "Location gérance", price: "1.500 € min", note: "1 mois de loyer (1.500 € minimum)" },
        { name: "Avenant location gérance", price: "800 €", note: "" },
        { name: "Résiliation location gérance", price: "800 €", note: "" },
        { name: "Contrat de prêt / prise de garantie", price: "500 € + 250 €", note: "+ 250 € par garantie supplémentaire" }
      ]
    }
  ];

  return (
    <div className="bg-white font-['Montserrat'] min-h-screen">
      <section className="bg-[#F2E8D8] pt-28 md:pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-0 md:mb-0">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-6 block underline underline-offset-8">HONORAIRES</span>
            <h1 className="text-2xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase mb-10">
              Comprendre <span className="text-slate-400 font-light">les honoraires.</span>
            </h1>
            
            <div className="text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto space-y-6 mb-0">
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
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Modes de Facturation - PRO ALIGNMENT: Icons and titles aligned from the top */}
          <div className="max-w-6xl mx-auto mb-20 md:mb-32 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* 1. L'HONORAIRE AU TEMPS PASSÉ */}
            <div className="group min-h-[500px] p-8 md:p-16 bg-white border border-slate-100 shadow-xl border-t-8 border-t-[#598BB3] hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#598BB3]/10 text-[#598BB3] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform flex-shrink-0">
                <Icons.History />
              </div>
              <h3 className="font-bold text-slate-900 text-xl md:text-2xl mb-10 font-serif uppercase tracking-tight text-center flex-shrink-0 min-h-[3rem] flex items-center">
                Le taux horaire
              </h3>
              <div className="text-base md:text-lg leading-relaxed text-slate-600 space-y-6 font-normal max-w-md text-center flex-grow">
                <p>Le recours au taux horaire est privilégié lorsqu’il n’est pas possible d’estimer de manière fiable le temps nécessaire au traitement du dossier, notamment en matière de contentieux fiscal.</p>
                <p>Lorsque cela est possible, une fourchette indicative est communiquée en amont. Cette fourchette n’est jamais dépassée sans consultation préalable du client.</p>
              </div>
              <p className="text-xs md:text-sm italic mt-12 text-slate-400 uppercase tracking-widest font-bold flex-shrink-0">Un relevé des diligences est tenu et communiqué sur demande.</p>
            </div>

            {/* 2. LE FORFAIT */}
            <div className="group min-h-[500px] p-8 md:p-16 bg-white border border-slate-100 shadow-xl border-t-8 border-t-[#112056] hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#112056]/5 text-[#112056] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform flex-shrink-0">
                <Icons.Calculator />
              </div>
              <h3 className="font-bold text-slate-900 text-xl md:text-2xl mb-10 font-serif uppercase tracking-tight text-center flex-shrink-0 min-h-[3rem] flex items-center">
                Le forfait
              </h3>
              <div className="text-base md:text-lg leading-relaxed text-slate-600 space-y-6 font-normal max-w-md text-center flex-grow">
                <p>La facturation forfaitaire est utilisée pour les prestations dont le temps de réalisation peut être évalué de manière suffisamment précise, telles que : certaines consultations écrites, des actes juridiques déterminés, des constitutions de sociétés ou opérations assimilées.</p>
                <p>Lorsque les enjeux du dossier le justifient, notamment en matière patrimoniale ou de structuration, une tarification spécifique peut être appliquée.</p>
              </div>
            </div>

            {/* 3. L'HONORAIRE DE RÉSULTAT */}
            <div className="group min-h-[500px] p-8 md:p-16 bg-white border border-slate-100 shadow-xl border-t-8 border-t-[#B6834A] hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#B6834A]/10 text-[#B6834A] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform flex-shrink-0">
                <Icons.Scale />
              </div>
              <h3 className="font-bold text-slate-900 text-xl md:text-2xl mb-10 font-serif uppercase tracking-tight text-center flex-shrink-0 min-h-[3rem] flex items-center">
                L’honoraire de résultat
              </h3>
              <div className="text-base md:text-lg leading-relaxed text-slate-600 space-y-6 font-normal max-w-md text-center flex-grow">
                <p>L’honoraire de résultat est indexé sur le résultat obtenu, entendu comme les sommes récupérées ou l’économie réalisée au bénéfice du client.</p>
                <p>Cet honoraire accompagne nécessairement un honoraire de base, conformément aux règles déontologiques applicables à la profession d’avocat.</p>
              </div>
              <p className="text-xs md:text-sm italic text-slate-400 mt-12 uppercase tracking-widest font-bold flex-shrink-0">Il ne peut en aucun cas constituer l’unique mode de rémunération.</p>
            </div>

            {/* 4. L'ABONNEMENT */}
            <div className="group min-h-[500px] p-8 md:p-16 bg-white border border-slate-100 shadow-xl border-t-8 border-t-slate-400 hover:shadow-2xl transition-all duration-500 flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform flex-shrink-0">
                <Icons.Clipboard />
              </div>
              <h3 className="font-bold text-slate-900 text-xl md:text-2xl mb-10 font-serif uppercase tracking-tight text-center flex-shrink-0 min-h-[3rem] flex items-center">
                L’abonnement
              </h3>
              <div className="text-base md:text-lg leading-relaxed text-slate-600 space-y-6 font-normal max-w-md text-center flex-grow">
                <p>Pour les clients ayant des besoins réguliers, un abonnement peut être mis en place et comprend un volume d’heures.</p>
                <p>Celui-ci permet au client de poser ses différentes questions à tout moment, sans qu’il soit nécessaire d’établir, pour chacune d’entre elles, une nouvelle proposition d’assistance.</p>
              </div>
              <p className="font-bold text-[#112056] mt-12 text-sm md:text-base uppercase tracking-tighter flex-shrink-0">Budget maîtrisé & Liberté totale</p>
            </div>

          </div>
        </div>

        {/* --- GRILLE TARIFAIRE AVEC ONGLETS --- */}
        <div className="mb-24 md:mb-32 reveal" id="prices">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-2xl md:text-4xl font-bold serif text-slate-900 mb-6 uppercase tracking-tight">Grille tarifaire indicative</h3>
            <div className="h-1 w-24 bg-[#B6834A] mx-auto mb-10"></div>
            
            {/* SÉLECTEUR D'ONGLETS PREMIUM */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 max-w-2xl mx-auto px-4 mt-12">
              <button 
                onClick={() => setActiveTab('fiscalite')}
                className={`flex-1 px-8 py-5 rounded-sm font-serif text-lg tracking-widest transition-all duration-500 border-2 ${
                  activeTab === 'fiscalite' 
                  ? 'bg-[#112056] text-white border-[#112056] shadow-xl' 
                  : 'bg-transparent text-slate-400 border-slate-200 hover:border-[#598BB3] hover:text-[#598BB3]'
                }`}
              >
                FISCALITÉ
              </button>
              <button 
                onClick={() => setActiveTab('societes-baux')}
                className={`flex-1 px-8 py-5 rounded-sm font-serif text-lg tracking-widest transition-all duration-500 border-2 ${
                  activeTab === 'societes-baux' 
                  ? 'bg-[#112056] text-white border-[#112056] shadow-xl' 
                  : 'bg-transparent text-slate-400 border-slate-200 hover:border-[#598BB3] hover:text-[#598BB3]'
                }`}
              >
                SOCIETE ET COMMERCIALE
              </button>
            </div>
            
            <p className="mt-12 text-slate-500 max-w-3xl mx-auto text-sm md:text-base italic">
              Les tarifs indiqués ci-dessous ne se substituent pas à une lettre de mission. Ils sont hors taxes et n'incluent pas les débours (greffe, publicité, etc.).
            </p>
          </div>
          
          <div className="space-y-12 transition-all duration-700">
            {tableData.filter(section => section.id === activeTab).map((section, idx) => (
              <div key={`${activeTab}-${idx}`} className="bg-white border-2 border-slate-100 shadow-xl overflow-hidden rounded-sm">
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
                              <div className="mb-0 max-w-2xl flex-grow">
                                  <p className="font-bold text-slate-900 text-base md:text-lg font-serif mb-1 group-hover:text-[#598BB3] leading-tight transition-colors">{item.name}</p>
                                  {item.note && item.name === "Premier rendez-vous" && (
                                    <p className="text-[11px] md:text-xs text-slate-400 font-medium leading-relaxed mt-2 max-w-2xl">
                                      {item.note}
                                    </p>
                                  )}
                              </div>
                              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                                <div className="text-[#598BB3] font-bold text-base md:text-xl font-serif tabular-nums tracking-tight bg-slate-50 px-6 py-4 rounded-sm border border-slate-100 group-hover:border-[#598BB3]/40 transition-colors min-w-[140px] text-center shadow-sm">
                                  {item.price.replace(' HT', '')}
                                </div>
                                {item.note && item.name !== "Premier rendez-vous" && (
                                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold italic opacity-80 text-center max-w-[220px]">
                                    {item.note}
                                  </p>
                                )}
                              </div>
                          </div>
                      ))}
                  </div>
                  
                  {/* Footer on each tabbed table to keep context clear */}
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
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fees;