import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Bienvenue dans notre Système Micro Frontend
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Une architecture modulaire avec React, TypeScript et Module Federation
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              ✅ React 18
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              ✅ TypeScript
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              ✅ Module Federation
            </div>
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-lg font-semibold mb-2">Gestion des Utilisateurs</h3>
            <p className="text-gray-600 mb-4">
              Module indépendant pour gérer les utilisateurs avec des données en temps réel.
            </p>
            <a
              href="/users"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Voir les utilisateurs →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="text-3xl mb-4">🛒</div>
            <h3 className="text-lg font-semibold mb-2">Catalogue Produits</h3>
            <p className="text-gray-600 mb-4">
              Module séparé pour la gestion du catalogue avec filtres avancés.
            </p>
            <a
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Voir les produits →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-lg font-semibold mb-2">Architecture Modulaire</h3>
            <p className="text-gray-600 mb-4">
              Chaque module peut être développé et déployé indépendamment.
            </p>
            <span className="text-gray-500 font-medium">En savoir plus →</span>
          </div>
        </div>

        {/* Status Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">📊 État des Micro Frontends</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-green-500 text-2xl mb-2">🟢</div>
              <h3 className="font-medium">Shell Application</h3>
              <p className="text-sm text-gray-600">Orchestrateur principal</p>
              <span className="text-green-600 text-sm font-medium">✅ Opérationnel</span>
            </div>
            
            <div className="text-center">
              <div className="text-green-500 text-2xl mb-2">🟢</div>
              <h3 className="font-medium">MF Users</h3>
              <p className="text-sm text-gray-600">Module utilisateurs</p>
              <span className="text-green-600 text-sm font-medium">✅ Chargé</span>
            </div>
            
            <div className="text-center">
              <div className="text-green-500 text-2xl mb-2">🟢</div>
              <h3 className="font-medium">MF Products</h3>
              <p className="text-sm text-gray-600">Module produits</p>
              <span className="text-green-600 text-sm font-medium">✅ Chargé</span>
            </div>
          </div>
        </div>

        {/* Technical Info */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-4">🛠️ Technologies Utilisées</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React 18", "TypeScript", "Webpack 5", "Module Federation",
              "Tailwind CSS v4", "shadcn/ui", "Docker", "pnpm Workspaces"
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;