import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 bg-[#F2E8D8]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold serif text-slate-900 reveal visible">Confidentialité & Cookies</h1>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
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
            <h2 className="text-xl font-bold text-[#112056] mb-4 uppercase tracking-widest">4. Politique de Confidentialité (RGPD)</h2>
            <p className="leading-relaxed mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), Maître Aaronn AVRILLEAU s'engage à ce que la collecte et le traitement de vos données soient conformes à la réglementation.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Responsable du traitement</h3>
                <p>Maître Aaronn AVRILLEAU, 27 Rue de l'Aiguillerie, 34000 Montpellier.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Données collectées</h3>
                <p>Les données collectées via le formulaire de contact (nom, email, objet, message) sont uniquement destinées au traitement de votre demande par le cabinet.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Durée de conservation</h3>
                <p>Vos données sont conservées pendant la durée nécessaire à l'instruction de votre demande ou pour la durée légale de conservation des dossiers de consultation juridique.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Vos droits</h3>
                <p>Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ces droits, vous pouvez nous contacter à l'adresse du cabinet ou via le formulaire de contact.</p>
              </div>
            </div>
          </section>
        </div>
          </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
