import React from 'react';

import { useNavigate } from 'react-router-dom';

// Les composants d'icônes SVG restent les mêmes...
// [Les composants IconTwitter, IconLinkedin, etc. sont identiques au code précédent]


  











// Composants d'icônes SVG inline
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconMap = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ModernFooter = () => {
    const navigate = useNavigate();

    const legalPages = [
        { title: 'Confidentialité', path: '/privacy' },
        { title: 'Conditions générales', path: '/terms' },
        { title: 'Cookies', path: '/cookies' },
        { title: 'Mentions légales', path: '/legal' }
    ];

    const handleEmailClick = () => {
        window.location.href = "mailto:contact@advance.com";
    };

    return (
        <footer className="relative pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 overflow-hidden">
            {/* Background avec meilleure adaptation mobile */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 to-blue-950"/>
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
                <div className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"/>
                <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"/>
            </div>

            {/* Contenu principal avec meilleure structure responsive */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grille responsive améliorée */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 md:mb-24">
                    {/* Colonne marque */}
                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                            AdVance
                        </h2>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                            Propulsez votre e-commerce vers de nouveaux sommets avec notre solution tout-en-un.
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Icônes sociales plus adaptatives */}
                            {[IconTwitter, IconLinkedin, IconInstagram].map((Icon, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div className="sm:pl-4">
                        <h3 className="text-lg sm:text-xl text-white font-semibold mb-4 sm:mb-6">Liens rapides</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {['Produits', 'Solutions', 'Tarifs', 'À propos'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                                        <span>{item}</span>
                                        <IconArrow className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mentions légales */}
                    <div>
                        <h3 className="text-lg sm:text-xl text-white font-semibold mb-4 sm:mb-6">Mentions légales</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {legalPages.map((page) => (
                                <li key={page.title}>
                                    <button
                                        onClick={() => navigate(page.path)}
                                        className="group flex items-center text-sm sm:text-base text-white/70 hover:text-white transition-colors"
                                    >
                                        <span>{page.title}</span>
                                        <IconArrow className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg sm:text-xl text-white font-semibold mb-4 sm:mb-6">Contact</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li>
                                <button
                                    onClick={handleEmailClick}
                                    className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70 hover:text-white transition-colors"
                                >
                                    <IconMail />
                                    <span>contact@advance.com</span>
                                </button>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70">
                                <IconMap />
                                <span>42 rue de l'Innovation<br/>75001 Paris, France</span>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70">
                                <IconPhone />
                                <span>+33 O6O6O6O6O6</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section newsletter responsive */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl -z-10" />
                    <div className="p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                                    Restez informé
                                </h3>
                                <p className="text-sm sm:text-base text-white/70">
                                    Recevez nos dernières actualités et offres spéciales
                                </p>
                            </div>
                            <div className="flex w-full md:w-auto">
                                <input 
                                    type="email"
                                    placeholder="Votre email"
                                    className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/10 rounded-l-xl text-sm sm:text-base text-white placeholder:text-white/50 focus:outline-none focus:border-pink-500"
                                />
                                <button className="px-4 sm:px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-r-xl text-sm sm:text-base font-medium transition-all whitespace-nowrap">
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Barre de bas de page responsive */}
                <div className="mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
                            © 2024 AdVance. Tous droits réservés
                        </p>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                            <IconGlobe />
                            <span>France</span>
                            <span className="mx-2">|</span>
                            <select className="bg-transparent text-white/60 hover:text-white focus:outline-none cursor-pointer text-xs sm:text-sm">
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;