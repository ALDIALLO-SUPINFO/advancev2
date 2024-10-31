import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// Import des pages
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
// Création du contexte d'authentification
const AuthContext = createContext(null);

// Hook personnalisé pour utiliser le contexte d'auth
export const useAuth = () => useContext(AuthContext);

// Provider d'authentification
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Vérifier la validité du token avec le backend
          const response = await fetch('http://localhost:5000/api/user/profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            localStorage.removeItem('token');
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Erreur d\'authentification:', error);
        localStorage.removeItem('token');
        setUser(null);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Composant PrivateRoute amélioré
const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [navigate, user, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-violet-900 to-blue-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return user ? element : null;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Routes publiques */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          
          {/* Routes protégées */}
          <Route 
            path="/dashboard" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          <Route 
            path="/annonces" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          <Route 
            path="/boutiques" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          <Route 
            path="/produits" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          <Route 
            path="/magic-search" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          <Route 
            path="/success-radar" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          <Route 
            path="/academy" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          <Route 
            path="/mes-listes" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />

          {/* Route par défaut - redirection vers l'accueil */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;