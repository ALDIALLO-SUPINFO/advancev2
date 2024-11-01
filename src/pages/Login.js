import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../App';

const API_URL = 'https://advancev2.onrender.com';

// Composant Spinner personnalisé
const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        localStorage.setItem('token', response.data.token);
        await login(response.data.token, response.data.user);
        navigate('/dashboard');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-blue-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              AdVance
            </h1>
          </Link>
          <h2 className="mt-4 text-xl font-medium text-white/90">Bon retour parmi nous !</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/10 p-6 shadow-2xl shadow-purple-950/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 
                         focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 
                         transition-all duration-300"
                required
              />
            </div>

            <div className="relative group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/40 
                         focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 
                         transition-all duration-300"
                required
              />
            </div>

            {error && (
              <div className="text-red-300 text-sm text-center bg-red-400/10 rounded-xl py-2 px-3 border border-red-400/20">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 
                     text-white rounded-2xl font-medium transition-all duration-300 
                     shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/20 
                     disabled:opacity-70 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Spinner />
                  <span>Connexion...</span>
                </>
              ) : (
                'Se connecter'
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-white/60 text-sm">
            Pas encore de compte ?{' '}
            <Link
              to="/signup"
              className="text-white hover:text-purple-300 transition-colors font-medium underline decoration-2 underline-offset-2 decoration-purple-400/50"
            >
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;