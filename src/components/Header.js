import React from 'react';
import NewBadge from './NewBadge';
import ProfileMenu from './ProfileMenu';

const Header = ({ user }) => (
  <header className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo et navigation principale */}
        <div className="flex items-center space-x-8">
          <a href="/dashboard" className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            AdVance
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/annonces" className="text-white/80 hover:text-white transition-colors">
              Annonces
            </a>
            <a href="/boutiques" className="text-white/80 hover:text-white transition-colors">
              Boutiques
            </a>
            <a href="/produits" className="text-white/80 hover:text-white transition-colors flex items-center">
              Produits
              <NewBadge />
            </a>
            <div className="relative group">
              <button className="text-white/80 hover:text-white transition-colors flex items-center">
                Magic Search
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="/success-radar" className="text-white/80 hover:text-white transition-colors">
              Success Radar
            </a>
          </nav>
        </div>

        {/* Actions utilisateur */}
        <div className="flex items-center space-x-6">
          <a href="/academy" className="flex items-center px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
            <span className="mr-2">🎓</span>
            Academy
          </a>
          
          <button className="px-3 py-2 border border-white/20 rounded-xl flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <span>🇫🇷</span>
            <span className="hidden sm:inline text-white/80">Français</span>
          </button>

          <a href="/mes-listes" className="text-white/80 hover:text-white transition-colors">
            Mes listes
          </a>

          <ProfileMenu user={user} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;