import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cookie, BarChart, Target, UserCheck } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false
  });

  useEffect(() => {
    // Petit délai avant d'afficher la bannière
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setShowBanner(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allPreferences));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRefuseAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(minimalPreferences));
    setShowBanner(false);
  };

  const cookieTypes = [
    {
      id: 'necessary',
      icon: Shield,
      title: 'Cookies nécessaires',
      description: 'Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.',
      disabled: true,
      alwaysOn: true
    },
    {
      id: 'analytics',
      icon: BarChart,
      title: 'Cookies analytiques',
      description: "Nous permettent de mesurer l'audience et d'améliorer votre expérience."
    },
    {
      id: 'marketing',
      icon: Target,
      title: 'Cookies marketing',
      description: 'Utilisés pour vous proposer des publicités pertinentes.'
    },
    {
      id: 'personalization',
      icon: UserCheck,
      title: 'Cookies de personnalisation',
      description: 'Permettent de personnaliser votre expérience sur notre site.'
    }
  ];

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.3 }}
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-white/10 shadow-2xl">
            {!showPreferences ? (
              // Bannière principale
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center">
                      <Cookie className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow text-center lg:text-left">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Votre vie privée est importante
                    </h3>
                    <p className="text-white/80">
                      Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic de notre site.
                      Vous pouvez personnaliser vos préférences à tout moment.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <button
                      onClick={handleRefuseAll}
                      className="px-6 py-2.5 text-white/90 hover:text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-medium whitespace-nowrap"
                    >
                      Refuser tout
                    </button>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-6 py-2.5 text-white/90 hover:text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-medium whitespace-nowrap"
                    >
                      Personnaliser
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl transition-all text-sm font-medium whitespace-nowrap"
                    >
                      Tout accepter
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Panneau des préférences
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center">
                      <Cookie className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Préférences des cookies
                    </h3>
                  </div>
                </div>

                <div className="grid gap-4 mb-6">
                  {cookieTypes.map(({ id, icon: Icon, title, description, disabled, alwaysOn }) => (
                    <div 
                      key={id}
                      className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Icon className="h-5 w-5 text-pink-400" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <label className="font-medium text-white flex items-center">
                              {title}
                              {alwaysOn && (
                                <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded-full">
                                  Toujours actif
                                </span>
                              )}
                            </label>
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={preferences[id]}
                                onChange={(e) => setPreferences({...preferences, [id]: e.target.checked})}
                                disabled={disabled}
                                className="w-4 h-4 rounded border-white/20 bg-white/10 text-pink-500 focus:ring-pink-500 focus:ring-offset-0"
                              />
                            </div>
                          </div>
                          <p className="text-sm text-white/70">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-3 border-t border-white/10 pt-6">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-6 py-2.5 text-white/90 hover:text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl transition-all text-sm font-medium"
                  >
                    Enregistrer mes préférences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;