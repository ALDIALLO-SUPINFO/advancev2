import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../App'; // Importez le hook useAuth
import { login } from '../utils/api';

const API_URL = 'https://advancev2.onrender.com'; // URL de production

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
      const response = await axios.post(`${API_URL}/api/login`, 
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      if (response.data.success) {
        // Stockage du token
        localStorage.setItem('token', response.data.token);
        
        // Mise à jour du contexte d'authentification
        await login(response.data.token, response.data.user);
        
        // Redirection
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Identifiants incorrects');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      if (error.response) {
        // Erreur avec réponse du serveur
        setError(error.response.data.message || 'Erreur de connexion');
      } else if (error.request) {
        // Erreur sans réponse du serveur
        setError('Impossible de contacter le serveur. Veuillez réessayer.');
      } else {
        // Autre type d'erreur
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              AdVance
            </h1>
          </Link>
          <h2 className="mt-6 text-2xl font-bold text-white">Content de te revoir</h2>
          <p className="mt-2 text-white/60">Entre tes identifiants pour te connecter</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nom@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-pink-500 transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-pink-500 transition-colors"
                required
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-400/10 rounded-lg py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Se connecter
            </button>
          </form>

          <p className="mt-6 text-center text-white/80">
            Tu n'as pas de compte ?{' '}
            <Link to="/signup" className="text-white hover:text-pink-400 transition-colors font-medium">
              Inscris-toi
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;