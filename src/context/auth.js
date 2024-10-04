import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { supabase } from '../services/supabase/client';
import ToastError from '../components/toast/toastError';
import ToastSucess from '../components/toast/toastSucess';


// Cria o contexto
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [sessionProvider,setSessionProvider] = useState(null);

  const fetchUserData = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (!error) {
      setUser(data.user);
      ToastSucess("Logado com sucesso!") 
    } else {
      setUser(null); 
    }
    setLoading(false); 
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const logoutUser = async () => {
    await supabase.auth.signOut()
    setUser(null)
  };

  const loginUser = async (loginData) => {
    const { data, error } = await supabase.auth.signInWithPassword(loginData);
    if (error) {
      ToastError("Usuário ou senha incorretos")
      throw new Error("Login falhou");
    }
    Cookies.set('token', data.session.access_token, { expires: new Date(data.session.expires_at * 1000) });
    setUser(data.user); 
  };

  const signUpUser = async (signUpUser) =>{
    const {data,error} = await supabase.auth.signUp(signUpUser);
    if (error) {
      ToastError("Usuário ou senha incorretos")
      throw new Error("Login falhou");
    }
    await loginUser(signUpUser)
  }

  const signUpUserWithProvider = async (signUpUserProvider) =>{
    const {data,error} = await supabase.auth.signInWithOAuth(signUpUserProvider);
    if (error) {
      ToastError("Usuário ou senha incorretos")
      throw new Error("Login falhou");
    }
  }

  const value = {
    user,
    loading,
    loginUser,
    logoutUser,
    signUpUser,
    signUpUserWithProvider
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Só renderiza os filhos após o carregamento */}
    </AuthContext.Provider>
  );
};
