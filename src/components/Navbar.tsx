import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Home, Settings, LogOut, Info, Calculator, HelpCircle, PenTool as Tools } from 'lucide-react';
import { useAdminStore } from '../store/adminStore';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout, settings } = useAdminStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinks = [
    { path: '/', icon: Calculator, label: 'Calculator' },
    { path: '/tools', icon: Tools, label: 'Tools' },
    { path: '/about', icon: HelpCircle, label: 'Why Us' },
    { path: '/factors', icon: Info, label: 'Cost Factors' },
  ];

  return (
    <>
      <div className="h-16" />
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
            >
              {settings.logoUrl ? (
                <img 
                  src={settings.logoUrl} 
                  alt={settings.siteName}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <Home className="w-8 h-8" style={{ color: settings.brandColor }} />
              )}
              <span 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${settings.brandColor}, ${settings.brandColor}dd)`
                }}
              >
                {settings.siteName}
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-6">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/admin"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Settings className="w-5 h-5" />
                    <span className="font-medium">Admin Panel</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Admin Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Development Banner */}
      <div className="bg-yellow-400/90 backdrop-blur-sm fixed top-16 left-0 right-0 z-40">
        <div className="relative overflow-hidden h-8">
          <div className="absolute whitespace-nowrap animate-marquee">
            <span className="inline-block py-1 px-4 font-medium text-yellow-900">
              🚧 This calculator is currently under development. Data and calculations are being refined for better accuracy. 
              Your feedback helps us improve! 🚧
            </span>
          </div>
        </div>
      </div>
    </>
  );
}