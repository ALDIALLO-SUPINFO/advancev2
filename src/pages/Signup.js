//Signup.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const checkResponse = await axios.post('https://advancev2.onrender.com/api/checkUser', { email });
      if (checkResponse.data.userExists) {
        setError('Un compte existe déjà avec cet email');
        setIsLoading(false);
        return;
      }
      const response = await axios.post('https://advancev2.onrender.com/api/signup', {
        email,
        password,
        firstName
      });
      if (response.status === 201) navigate('/login');
    } catch (error) {
      setError('Erreur lors de l\'inscription');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-violet-950 via-blue-950 to-violet-950 flex items-center justify-center px-3">
      {/* Fond minimaliste */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"/>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"/>
        </div>
      </div>

      <div className="w-full max-w-[280px]">
        {/* Header compact */}
        <div className="text-center mb-5">
          <Link to="/" className="inline-block mb-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AdVance
            </h1>
          </Link>
          <h2 className="text-sm font-medium text-white">
            Commencez votre aventure
          </h2>
          <p className="text-xs text-white/60">
            Rejoignez la communauté AdVance
          </p>
        </div>

        {/* Formulaire compact */}
        <div className="backdrop-blur-xl bg-white/[0.07] rounded-xl border border-white/[0.05] p-4 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-3">
              {/* Champs de saisie compacts */}
              <div className="group relative">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-8 pl-3 pr-7 bg-white/[0.05] border border-white/[0.1] rounded-lg text-xs text-white placeholder-white/40 focus:outline-none focus:border-pink-500/50 transition-all"
                  placeholder="Votre prénom"
                  required
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/20 text-xs">
                  👤
                </div>
              </div>

              <div className="group relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-8 pl-3 pr-7 bg-white/[0.05] border border-white/[0.1] rounded-lg text-xs text-white placeholder-white/40 focus:outline-none focus:border-pink-500/50 transition-all"
                  placeholder="Votre email"
                  required
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-white/20 text-xs">
                  ✉️
                </div>
              </div>

              <div className="group relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-8 pl-3 pr-7 bg-white/[0.05] border border-white/[0.1] rounded-lg text-xs text-white placeholder-white/40 focus:outline-none focus:border-pink-500/50 transition-all"
                  placeholder="Mot de passe"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors text-xs"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-pink-400 text-xs bg-pink-400/10 rounded-lg py-1.5 px-2 text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white rounded-lg text-xs font-medium transition-all disabled:opacity-50 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    <span>Création...</span>
                  </>
                ) : "Commencer"}
              </span>
            </button>

            {/* Séparateur compact */}
            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.08]"/>
              </div>
              <div className="relative flex justify-center text-[10px]">
                <span className="px-2 bg-transparent text-white/40 uppercase tracking-wider">
                  ou
                </span>
              </div>
            </div>

            {/* Bouton Google compact */}
            <button
              type="button"
              onClick={() => window.location.href = 'https://advancev2.onrender.com/api/auth/google'}
              className="w-full h-8 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.05] text-white/90 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2 group"
            >
              <svg className="w-3 h-3 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
          </form>

          {/* Footer compact */}
          <div className="mt-4 text-center">
            <p className="text-xs">
              <span className="text-white/40">Déjà membre ?</span>
              {' '}
              <Link to="/login" className="text-white hover:text-pink-400 transition-colors">
                Connexion →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;