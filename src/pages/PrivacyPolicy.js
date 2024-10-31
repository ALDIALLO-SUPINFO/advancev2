import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900 to-blue-900"/>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-white/80 leading-relaxed">
              Chez AdVance, nous prenons la protection de vos données personnelles très au sérieux. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et 
              protégeons vos informations personnelles conformément au Règlement Général sur la 
              Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Collecte des Données</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Nous collectons les informations suivantes :
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li>Informations d'identification (nom, prénom, email)</li>
              <li>Données de connexion et d'utilisation</li>
              <li>Informations de paiement</li>
              <li>Préférences de communication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Utilisation des Données</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li>Fournir et améliorer nos services</li>
              <li>Personnaliser votre expérience</li>
              <li>Communiquer avec vous concernant votre compte</li>
              <li>Assurer la sécurité de nos services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Protection des Données</h2>
            <p className="text-white/80 leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
              appropriées pour protéger vos données personnelles contre tout accès non autorisé, 
              modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Vos Droits</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-white/80 space-y-2">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p className="text-white/80 leading-relaxed">
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez 
              contrôler l'utilisation des cookies dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p className="text-white/80 leading-relaxed">
              Pour toute question concernant notre politique de confidentialité ou pour exercer 
              vos droits, contactez notre Délégué à la Protection des Données à : 
              <a href="mailto:dpo@advance.com" className="text-pink-400 hover:text-pink-300 ml-1">
                dpo@advance.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            Dernière mise à jour : 31 octobre 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;