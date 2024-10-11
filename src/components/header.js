import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import LoginButtom from '../components/modalPages/login/page';
import SignUpButton from './modalPages/singUp/signUp';
import UserHeaderProfile from './userProfile/userHeaderProfile';

export default function Header() {
  const { user } = useContext(AuthContext); 
  return (
    <header className="bg-primary-light text-white shadow-md ">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex-grow" /> 
        <div className="flex items-center space-x-4 h-8">
          {user ? (
            <UserHeaderProfile Profile={user}/>
          ) : (
            <>
            {/* <LoginButtom /> */}
            <SignUpButton />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
