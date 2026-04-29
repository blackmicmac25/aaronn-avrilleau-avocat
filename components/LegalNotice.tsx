import React from 'react';

const LegalNotice: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 bg-[#F2E8D8]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold serif text-slate-900 reveal visible">Mentions Légales</h1>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 text-slate-700 reveal visible delay-200">
          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">1. Présentation du site</h2>
            <p className="leading-relaxed">
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <a href="https://avrilleau-avocat.fr" className="text-[#598BB3] underline">avrilleau-avocat.fr</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li><strong>Propriétaire :</strong> Maître Aaronn AVRILLEAU – Avocat au Barreau de Montpellier</li>
              <li><strong>Directeur de la publication :</strong> Maître Aaronn AVRILLEAU</li>
              <li><strong>Hébergeur :</strong> Hostinger International Ltd. – 61 Lordou Vironos Street, 6023 Larnaca, Chypre</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">2. Propriété intellectuelle</h2>
            <p className="leading-relaxed">
              Maître Aaronn AVRILLEAU est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Maître Aaronn AVRILLEAU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">3. Limitation de responsabilité</h2>
            <p className="leading-relaxed">
              Le site a pour objet de fournir une information concernant l’ensemble des activités du cabinet. Maître Aaronn AVRILLEAU s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">4. Médiation de la consommation</h2>
            <p className="leading-relaxed">
              Conformément aux dispositions des articles L.612-1 et suivants du Code de la consommation, vous avez la possibilité, en cas de litige avec un avocat, de recourir gratuitement au Médiateur de la consommation de la profession d'avocat : 
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li><strong>Adresse :</strong> 180 boulevard Haussmann, 75008 Paris</li>
              <li><strong>Site internet :</strong> <a href="https://mediateur-consommation-avocat.fr" target="_blank" rel="noopener noreferrer" className="text-[#598BB3] underline">mediateur-consommation-avocat.fr</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">5. Droit applicable</h2>
            <p className="leading-relaxed">
              Tout litige en relation avec l’utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Montpellier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">6. Accessibilité</h2>
            <p className="leading-relaxed">
              Le site est conçu pour être accessible au plus grand nombre. Nous nous efforçons d'améliorer continuellement l'expérience utilisateur et d'appliquer les standards d'accessibilité pertinents. Pour plus d'informations, consultez notre <a href="#/accessibilite" className="text-[#598BB3] underline">déclaration d'accessibilité</a>.
            </p>
          </section>
        </div>
          </div>
      </section>
    </div>
  );
};

export default LegalNotice;
