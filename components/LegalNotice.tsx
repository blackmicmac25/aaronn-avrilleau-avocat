import React from 'react';

const LegalNotice: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#F2E8D8] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold serif text-slate-900 mb-12 reveal visible">Mentions Légales</h1>
        
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
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">4. Droit applicable</h2>
            <p className="leading-relaxed">
              Tout litige en relation avec l’utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Montpellier.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
