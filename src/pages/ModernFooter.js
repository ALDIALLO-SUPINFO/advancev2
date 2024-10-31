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

  const quickLinks = [
    { title: 'Produits', path: '/products' },
    { title: 'Solutions', path: '/solutions' },
    { title: 'Tarifs', path: '/pricing' },
    { title: 'À propos', path: '/about' }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:contact@advance.com";
  };

  return (
    <footer className="relative pt-32 pb-16 overflow-hidden">
      {/* Background Gradient and Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 to-blue-950"/>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"/>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"/>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              AdVance
            </h2>
            <p className="text-white/70 leading-relaxed">
              Propulsez votre e-commerce vers de nouveaux sommets avec notre solution tout-en-un.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all group"
              >
                <IconTwitter />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all group"
              >
                <IconLinkedin />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all group"
              >
                <IconInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-4">
              {['Produits', 'Solutions', 'Tarifs', 'À propos'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="group flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <span>{item}</span>
                    <IconArrow className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          
          <div>
            <h3 className="text-white font-semibold mb-6">Mentions légales</h3>
            <ul className="space-y-4">
              {legalPages.map((page) => (
                <li key={page.title}>
                  <button
                    onClick={() => navigate(page.path)}
                    className="group flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    <span>{page.title}</span>
                    <svg 
                      className="ml-1 w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      fill="none" 
                      strokeWidth="2"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={handleEmailClick}
                  className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <IconMail />
                  <span>contact@advance.com</span>
                </button>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <IconMap />
                <span>42 rue de l'Innovation<br/>75001 Paris, France</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <IconPhone />
                <span>+33 O6O6O6O6O6</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-2xl -z-10" />
          <div className="p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Restez informé
                </h3>
                <p className="text-white/70">
                  Recevez nos dernières actualités et offres spéciales
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input 
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/10 rounded-l-xl text-white placeholder:text-white/50 focus:outline-none focus:border-pink-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-r-xl font-medium transition-all">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2024 AdVance. Tous droits réservés
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <IconGlobe />
              <span>France</span>
              <span className="mx-2">|</span>
              <select className="bg-transparent text-white/60 hover:text-white focus:outline-none cursor-pointer">
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