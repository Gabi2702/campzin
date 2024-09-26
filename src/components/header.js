import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import LoginButtom from '../components/modalPages/login/page';

export default function Header() {
  const { user, logoutUser } = useContext(AuthContext); // Usa o contexto

  return (
    <header className="bg-primary-light text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex-grow" /> {/* Espaço vazio à esquerda */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              <span>Bem-vindo, {user.email}!</span>
              <button 
                onClick={logoutUser} 
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <LoginButtom />
          )}
        </div>
      </nav>
    </header>
  );
}
