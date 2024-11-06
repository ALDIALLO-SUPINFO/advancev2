import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// Import des pages
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import UnifiedLogin from './pages/UnifiedLogin';
import SignupPage from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PinterestAuth from './pages/PinterestAuth';
import PinterestCallback from './pages/PinterestCallback';
import PinterestCampaigns from './pages/PinterestCampaigns'; // Nouvelle page

// Context et Provider restent identiques...
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Vérifier la validité du token avec le backend
          const response = await fetch('https://advancev2.onrender.com/api/user/profile', {
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

// PrivateRoute avec vérification Pinterest
const PrivateRoute = ({ element, requiresPinterest = false }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();
  const [pinterestChecked, setPinterestChecked] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }

    // Vérifier la connexion Pinterest si nécessaire
    if (requiresPinterest && user) {
      const checkPinterestAuth = async () => {
        try {
          const pinterestToken = localStorage.getItem('pinterest_token');
          if (!pinterestToken) {
            navigate('/pinterest/auth');
            return;
          }

          // Vérifier si le token Pinterest est valide
          const response = await fetch('https://advancev2.onrender.com/api/pinterest/verify-token', {
            headers: {
              'Authorization': `Bearer ${pinterestToken}`
            }
          });

          if (!response.ok) {
            localStorage.removeItem('pinterest_token');
            navigate('/pinterest/auth');
          }
        } catch (error) {
          console.error('Erreur de vérification Pinterest:', error);
          navigate('/pinterest/auth');
        } finally {
          setPinterestChecked(true);
        }
      };

      checkPinterestAuth();
    } else {
      setPinterestChecked(true);
    }
  }, [navigate, user, isLoading, requiresPinterest]);

  if (isLoading || (requiresPinterest && !pinterestChecked)) {
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
          <Route path="/login" element={<UnifiedLogin />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          
          {/* Routes Pinterest */}
          <Route path="/pinterest/auth" element={<PinterestAuth />} />
          <Route path="/pinterest/callback" element={<PinterestCallback />} />
          <Route 
            path="/campaigns/pinterest" 
            element={<PrivateRoute element={<PinterestCampaigns />} requiresPinterest={true} />} 
          />
          <Route 
            path="/campaigns/pinterest/new" 
            element={<PrivateRoute element={<PinterestCampaigns />} requiresPinterest={true} />} 
          />

          {/* Routes protégées existantes */}
          <Route 
            path="/dashboard" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          <Route 
            path="/annonces" 
            element={<PrivateRoute element={<Dashboard />} />} 
          />
          {/* ... autres routes protégées ... */}

          {/* Route par défaut */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;