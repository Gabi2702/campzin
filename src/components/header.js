import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import LoginButtom from '../components/modalPages/login/page';
import SignUpButton from './modalPages/singUp/signUp';

export default function Header() {
  const { user, logoutUser } = useContext(AuthContext); 
  return (
    <header className="bg-primary-light text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex-grow" /> 
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              <span>Bem-vindo, {user.email}!</span>
              <img src={user.user_metadata.avatar_url} className='w-8 h-8'></img>
              <button 
                onClick={logoutUser} 
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
            <LoginButtom />
            <SignUpButton />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
