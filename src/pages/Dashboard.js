import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileMenu from '../components/ProfileMenu';

const NewBadge = () => (
  <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-amber-400 text-black rounded-full">
    NEW
  </span>
);

const Card = ({ type, image, credits, title, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all">
      <div className="aspect-video relative overflow-hidden">
        {type === 'live' && (
          <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full bg-red-500 text-white text-sm font-medium z-10">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            LIVE
          </span>
        )}
        <span className="absolute top-3 right-3 inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium z-10">
          +{credits} crédits
        </span>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
        <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-4 py-2 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm font-medium">
          En savoir plus
        </button>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [currentUser] = useState({
    name: 'John Doe',
    avatar: '/api/placeholder/40/40'
  });

  const cards = [
    {
      type: 'live',
      image: '/api/placeholder/600/400',
      credits: 100,
      title: 'Session Q&A en direct',
      description: 'Rejoignez notre session live pour poser vos questions à nos experts'
    },
    {
      type: 'formation',
      image: '/api/placeholder/600/400',
      credits: 1000,
      title: 'Formation Dropshipping',
      description: 'Apprenez les bases du dropshipping avec notre formation complète'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900 to-blue-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"/>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}/>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}/>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Header/Navigation */}
      <header className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo et navigation principale */}
            <div className="flex items-center space-x-8">
              <Link to="/dashboard" className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                AdVance
              </Link>
              
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/annonces" className="text-white/80 hover:text-white transition-colors">
                  Annonces
                </Link>
                <Link to="/boutiques" className="text-white/80 hover:text-white transition-colors">
                  Boutiques
                </Link>
                <Link to="/produits" className="text-white/80 hover:text-white transition-colors flex items-center">
                  Produits
                  <NewBadge />
                </Link>
                <div className="relative group">
                  <button className="text-white/80 hover:text-white transition-colors flex items-center">
                    Magic Search
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <Link to="/success-radar" className="text-white/80 hover:text-white transition-colors">
                  Success Radar
                </Link>
              </nav>
            </div>

            {/* Actions utilisateur */}
            <div className="flex items-center space-x-6">
              <Link to="/academy" className="flex items-center px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                <span className="mr-2">🎓</span>
                Academy
              </Link>
              
              <button className="px-3 py-2 border border-white/20 rounded-xl flex items-center space-x-2 hover:bg-white/10 transition-colors">
                <span>🇫🇷</span>
                <span className="hidden sm:inline text-white/80">Français</span>
              </button>

              <Link to="/mes-listes" className="text-white/80 hover:text-white transition-colors">
                Mes listes
              </Link>

              <ProfileMenu user={currentUser} />
            </div>
          </div>
        </div>
      </header>

      {/* Reste du code du Dashboard... */}
      <main className="pt-24 px-6 pb-12 max-w-7xl mx-auto">
        {/* ... reste du contenu ... */}
        {/* Section Cartes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        {/* Timer Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 p-[2px]">
                <img 
                  src="/api/placeholder/50/50" 
                  alt="Challenge E-com"
                  className="w-full h-full rounded-full border-2 border-black object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Challenge E-com 100% GRATUIT sur 3 jours
                </h2>
                <p className="text-white/70">
                  Apprends à atteindre les 1000€ par jour avec Jonathan Ecom
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 font-mono text-2xl text-white">
                03:16:47:25
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl transition-all shadow-lg hover:shadow-xl font-medium">
                👉 Je m'inscris
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;