import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const PrivilegedLawyer: React.FC = () => {
  return (
    <div className="bg-[#F2E8D8] font-['Montserrat'] overflow-x-hidden min-h-screen">
      <section className="pt-28 md:pt-36 pb-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-4 block underline underline-offset-8">VOTRE AVOCAT PRIVILÉGIÉ</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 serif uppercase">
              Un accompagnement juridique et fiscal <span className="text-slate-400 font-light">au quotidien</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="text-center">
            <p className="text-xl md:text-2xl font-serif text-[#112056] leading-relaxed italic">
              Un accompagnement sur-mesure pour les dirigeants
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-slate-700 text-base md:text-lg leading-relaxed text-justify space-y-4">
              <p>L’offre « Votre avocat privilégié » a été pensée pour répondre aux besoins spécifiques des dirigeants de TPE et PME, qui manquent souvent de temps et d’interlocuteurs dédiés pour sécuriser leurs décisions juridiques et fiscales au quotidien.</p>
              <p>Cette offre repose sur un principe simple : vous offrir la disponibilité et l’expertise d’un avocat en droit des affaires, comme si vous disposiez d’un directeur juridique en interne, mais avec la flexibilité d’un accompagnement externalisé.</p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 border-l-[8px] border-[#598BB3] shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold serif text-slate-900 uppercase mb-6">Pourquoi choisir cette offre ?</h2>
            <div className="text-slate-700 text-base md:text-lg leading-relaxed text-justify space-y-6">
              <p><span className="font-bold text-[#112056]">Un interlocuteur unique et disponible :</span> Vous bénéficiez d’un accès direct à votre avocat pour échanger sur vos problématiques, lever un doute ou valider une décision avant sa mise en œuvre.</p>
              <p><span className="font-bold text-[#112056]">Une approche préventive :</span> L’objectif est d’anticiper les risques (fiscaux, sociaux, commerciaux) plutôt que de les subir.</p>
              <p><span className="font-bold text-[#112056]">Une facturation transparente et maîtrisée :</span> L’accompagnement prend la forme d’un abonnement mensuel ou annuel, défini à l’avance en fonction de vos besoins. Pas de mauvaise surprise ni de facturation au temps passé imprévue.</p>
              <p><span className="font-bold text-[#112056]">Une vision globale de votre entreprise :</span> En vous accompagnant dans la durée, votre avocat acquiert une connaissance fine de votre activité, de vos enjeux et de vos objectifs, ce qui lui permet de vous conseiller de manière beaucoup plus pertinente et personnalisée.</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold serif text-slate-900 uppercase">Comment ça marche ?</h2>
            <div className="text-slate-700 text-base md:text-lg leading-relaxed text-justify space-y-4">
              <ul className="space-y-4">
                {[
                  "Nous définissons ensemble, lors d’un premier rendez-vous, le périmètre de l’accompagnement souhaité (volume d’heures, types de questions traitées, fréquence des échanges).",
                  "Une convention d’honoraires annuelle est régularisée.",
                  "Vous disposez d’une ligne directe et d’une adresse email prioritaire pour contacter votre avocat.",
                  "Des points réguliers (mensuels ou trimestriels) peuvent être programmés pour faire un tour d’horizon de votre actualité et anticiper les échéances à venir."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Check className="w-5 h-5 text-[#598BB3] mt-1 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-bold serif text-slate-900 uppercase mb-6">Exemples d’interventions incluses dans l’abonnement :</h2>
            <ul className="space-y-4 text-slate-700 text-base md:text-lg">
              {[
                "Validation d’un contrat commercial ou d’un devis",
                "Réponse à une question fiscale ponctuelle (TVA, IS, impôts locaux)",
                "Assistance lors de la rupture d’un contrat de travail ou d’un litige avec un salarié",
                "Relecture d’un bail commercial avant signature",
                "Conseil sur la structuration de la rémunération du dirigeant"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <ArrowRight className="w-5 h-5 text-[#598BB3] mt-1 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#112056] text-white p-10 md:p-12 shadow-2xl text-center">
            <p className="text-lg md:text-xl font-serif leading-relaxed italic">
              L’offre « Votre avocat privilégié » est la garantie d’un accompagnement juridique et fiscal de qualité, accessible et adapté à la réalité de votre quotidien d’entrepreneur.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100 text-center">
         <Link to="/contact" className="inline-block px-12 py-6 bg-[#112056] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#598BB3] transition-all shadow-2xl hover:-translate-y-1 rounded-sm">
            Prendre rendez-vous
         </Link>
      </section>
    </div>
  );
};

export default PrivilegedLawyer;
