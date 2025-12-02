import React, { Suspense } from "react";
import UsersList from "mf_users/UsersList";

const UsersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          👥 Module Utilisateurs
        </h1>
        <p className="text-gray-600">
          Ce module est chargé dynamiquement depuis le micro frontend <code className="bg-gray-100 px-2 py-1 rounded">mf-users</code>
        </p>
      </div>
      
      <div className="micro-frontend-container">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-64 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200">
              <div className="text-center">
                <div className="loading-spinner size-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-3"></div>
                <p className="text-blue-600 font-medium">Chargement du module utilisateurs...</p>
                <p className="text-sm text-blue-500 mt-1">Module Federation en cours...</p>
              </div>
            </div>
          }
        >
          <UsersList />
        </Suspense>
      </div>
    </div>
  );
};

export default UsersPage;