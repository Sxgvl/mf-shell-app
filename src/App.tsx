import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-16">
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-96">
                <div className="loading-spinner size-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                <span className="ml-3 text-gray-600">Chargement...</span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default App;