import React from 'react';

const Accessibility: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 bg-[#F2E8D8]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold serif text-slate-900 reveal visible">Déclaration d'accessibilité</h1>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 text-slate-700 reveal visible delay-200">
          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">Engagement du cabinet</h2>
            <p className="leading-relaxed">
              Maître Aaronn AVRILLEAU s'engage à rendre ses services de communication au public en ligne accessibles conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">État de conformité</h2>
            <p className="leading-relaxed">
              Le site avrilleau-avocat.fr est en cours d'optimisation pour être partiellement conforme au référentiel général d’amélioration de l’accessibilité (RGAA).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">Améliorations continues</h2>
            <p className="leading-relaxed mb-4">
              Nous portons une attention particulière aux points suivants lors du développement :
            </p>
            <ul className="space-y-4 list-disc list-inside">
              <li>Le contraste des couleurs</li>
              <li>La structure sémantique du code</li>
              <li>L'utilisation des balises alternatives pour les images</li>
              <li>La navigation au clavier</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">Retour d'information et contact</h2>
            <p className="leading-relaxed">
              Si vous n'arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le responsable du site pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme : 
              <br /><br />
              <strong>Email :</strong> via le formulaire de contact du site.
              <br />
              <strong>Adresse :</strong> 27 Rue de l'Aiguillerie, 34000 Montpellier.
            </p>
          </section>
        </div>
          </div>
      </section>
    </div>
  );
};

export default Accessibility;
