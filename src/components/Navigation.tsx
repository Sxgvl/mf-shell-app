import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "🏠 Accueil", icon: "🏠" },
    { path: "/users", label: "👥 Utilisateurs", icon: "👥" },
    { path: "/products", label: "🛒 Produits", icon: "🛒" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              🚀 Micro Frontend System
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label.replace(item.icon + " ", "")}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;