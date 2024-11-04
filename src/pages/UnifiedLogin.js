import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../App';

const API_URL = 'https://advancev2.onrender.com';

// Composant Spinner modernisé avec animation plus fluide
const Spinner = () => (
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
    <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
  </svg>
);

// Icône Google modernisée
const GoogleIcon = () => (
  <svg className="w-5 h-5 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const UnifiedLogin = ({ isModal = false, onClose = null }) => {
       const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      const [rememberMe, setRememberMe] = useState(false);
      const [error, setError] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const navigate = useNavigate();
      const { login } = useAuth();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
    
        try {
          const response = await axios.post(
            `${API_URL}/api/login`,
            { email, password },
            {
              headers: {
                'Content-Type': 'application/json'
              },
              withCredentials: true
            }
          );
    
          if (response.data.success) {
            if (rememberMe) {
              localStorage.setItem('token', response.data.token);
            }
            await login(response.data.token, response.data.user);
            if (isModal && onClose) {
              onClose();
            } else {
              navigate('/dashboard');
            }
          } else {
            setError(response.data.message || 'Identifiants incorrects');
          }
        } catch (error) {
          console.error('Erreur de connexion:', error);
          if (error.response) {
            setError(error.response.data.message || 'Erreur de connexion');
          } else if (error.request) {
            setError('Impossible de contacter le serveur. Veuillez réessayer.');
          } else {
            setError('Une erreur est survenue. Veuillez réessayer.');
          }
        } finally {
          setIsLoading(false);
        }
      };
    
      const handleGoogleLogin = () => {
        window.location.href = `${API_URL}/api/auth/google`;
      };
  
    const content = (
      <div className={`${isModal ? 'w-full max-w-sm' : 'w-full max-w-xs'} px-4 sm:px-0`}>
        {/* Header plus compact et moderne */}
        <div className="text-center mb-6 transform hover:scale-105 transition-transform duration-300">
          <Link to="/">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient">
              AdVance
            </h1>
          </Link>
          <h2 className="mt-2 text-base font-medium text-white/90">
            {isModal ? 'Connectez-vous' : 'Bon retour !'}
          </h2>
        </div>
  
        {/* Card principale compacte et moderne */}
        <div className="relative overflow-hidden bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 
                      transform transition-all duration-300
                      hover:bg-white/[0.15] hover:border-white/30
                      before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:rounded-2xl before:-z-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Inputs plus compacts */}
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 
                           focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/10 
                           transition-all duration-300 hover:border-white/20 text-sm"
                  required
                  disabled={isLoading}
                />
              </div>
  
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 
                           focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/10 
                           transition-all duration-300 hover:border-white/20 text-sm"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors text-sm"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
  
            {/* Message d'erreur compact */}
            {error && (
              <div className="text-red-300 text-xs text-center bg-red-400/10 rounded-lg py-2 px-3 border border-red-400/20
                            animate-shake">
                {error}
              </div>
            )}
  
            {/* Options de connexion plus compactes */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center text-white/80 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded-md border-white/20 bg-white/5 text-purple-500 
                           focus:ring-1 focus:ring-purple-400/30
                           transition-all duration-300 group-hover:border-white/30"
                  disabled={isLoading}
                />
                <span className="ml-2 group-hover:text-white transition-colors">Se souvenir</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-white/80 hover:text-white transition-colors hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
  
            {/* Bouton de connexion modernisé */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 
                       text-white rounded-xl text-sm font-medium transition-all duration-300
                       shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-0.5
                       disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                       flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <>
                  <Spinner />
                  <span>Connexion...</span>
                </>
              ) : (
                <span className="group-hover:scale-105 transition-transform duration-300">Se connecter</span>
              )}
            </button>
  
            {/* Séparateur minimaliste */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
                <span className="px-3 bg-transparent text-white/40 font-medium">ou</span>
              </div>
            </div>
  
            {/* Bouton Google compact */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-medium 
                       transition-all duration-300 border border-white/10 hover:border-white/20
                       flex items-center justify-center gap-3 group hover:-translate-y-0.5"
              disabled={isLoading}
            >
              <GoogleIcon />
              <span className="group-hover:scale-105 transition-transform duration-300">
                Google
              </span>
            </button>
  
            {/* Lien d'inscription compact */}
            <p className="mt-6 text-center text-white/60 text-xs">
              Pas encore de compte ?{' '}
              <Link
                to="/signup"
                className="text-white hover:text-purple-300 transition-colors font-medium 
                         underline decoration-1 underline-offset-4 decoration-purple-400/50
                         hover:decoration-purple-400"
              >
                S'inscrire
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  
    if (isModal) {
      return (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4
                     animate-fadeIn"
          onClick={onClose}
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="animate-slideUp"
          >
            {content}
          </div>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-blue-950 
                      flex items-center justify-center p-4 animate-fadeIn">
        {content}
      </div>
    );
  };
  
  export default UnifiedLogin;