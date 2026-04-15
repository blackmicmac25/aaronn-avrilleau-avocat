import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#F2E8D8] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold serif text-slate-900 mb-12 reveal visible">Gestion des Cookies</h1>
        
        <div className="space-y-12 text-slate-700 reveal visible delay-200">
          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">1. Qu'est-ce qu'un cookie ?</h2>
            <p className="leading-relaxed">
              Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone lors de votre visite sur un site internet. Il permet au site de mémoriser vos actions et préférences sur une période donnée.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">2. Cookies utilisés sur ce site</h2>
            <p className="leading-relaxed mb-4">
              Ce site utilise très peu de cookies. Les catégories de cookies utilisées sont :
            </p>
            <ul className="space-y-4 list-disc list-inside">
              <li><strong>Cookies techniques :</strong> Nécessaires au bon fonctionnement du site et de votre navigation.</li>
              <li><strong>Cookies analytiques :</strong> (Le cas échéant) Pour mesurer l'audience de notre site et améliorer nos services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">3. Gestion des cookies</h2>
            <p className="leading-relaxed mb-4">
              Lors de votre première visite, un bandeau vous informe de la présence de cookies. Vous pouvez à tout moment configurer votre navigateur pour bloquer les cookies :
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Pour Chrome : Menu &gt; Paramètres &gt; Confidentialité et sécurité.</li>
              <li>Pour Firefox : Menu &gt; Options &gt; Vie privée et sécurité.</li>
              <li>Pour Safari : Réglages &gt; Safari &gt; Confidentialité.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">4. Données personnelles</h2>
            <p className="leading-relaxed">
              Nous accordons une grande importance à la protection de vos données. En cas d'utilisation du formulaire de contact, les informations recueillies ne sont utilisées qu'à des fins de réponse à votre demande et ne sont jamais cédées à des tiers sans votre accord explicite.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
