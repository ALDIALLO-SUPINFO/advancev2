import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MenuItem = ({ to, icon, children, onClick, className = "" }) => (
  to ? (
    <Link 
      to={to} 
      className={`flex items-center px-2 py-1.5 text-xs rounded-md text-white/90 hover:bg-white/10 transition-colors ${className}`}
    >
      <span className="text-sm mr-2">{icon}</span>
      {children}
    </Link>
  ) : (
    <button 
      onClick={onClick}
      className={`flex items-center px-2 py-1.5 text-xs rounded-md w-full text-left transition-colors ${className}`}
    >
      <span className="text-sm mr-2">{icon}</span>
      {children}
    </button>
  )
);

const menuItems = [
  { icon: "👤", label: "Mon compte", path: "/compte" },
  { icon: "⭐", label: "Premium", path: "/premium" },
  { icon: "✉️", label: "Inviter", path: "/invite" },
  { icon: "🏪", label: "Boutiques", path: "/boutiques" },
  { icon: "🎧", label: "Support", path: "/support" }
];

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await axios.get('https://advancev2.onrender.com/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserData(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!userData) {
    return <div className="w-6 h-6 rounded-full bg-white/10 animate-pulse"/>;
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center focus:outline-none"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 p-[1px]">
          <div className="w-full h-full rounded-full border border-black bg-black overflow-hidden">
            <img
              src={userData?.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${userData.email}`}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 w-48 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl overflow-hidden z-50">
            {/* Email */}
            <div className="px-2 py-1.5 border-b border-white/10">
              <div className="text-[10px] text-white/70 truncate">{userData.email}</div>
            </div>

            {/* Menu Items */}
            <div className="p-1">
              {menuItems.map((item, index) => (
                <MenuItem key={index} to={item.path} icon={item.icon}>
                  {item.label}
                </MenuItem>
              ))}
            </div>

            {/* Credits */}
            <div className="px-2 py-1.5 border-t border-white/10">
              <div className="flex items-center text-xs text-white/90">
                <span className="text-sm mr-2">💎</span>
                {userData.credits || 0} crédits
              </div>
              <Link to="/credits/help" className="text-[10px] text-white/50 hover:text-white/80 ml-6 block mt-0.5">
                Comment ça marche ?
              </Link>
            </div>

            {/* Club & Logout */}
            <div className="p-1 border-t border-white/10">
              <MenuItem to="/club" icon="👥">AdVance Club</MenuItem>
              <MenuItem 
                onClick={handleLogout}
                icon="🚪"
                className="text-red-400 hover:bg-red-400/10"
              >
                Déconnexion
              </MenuItem>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileMenu;