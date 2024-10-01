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

  const fetchUserData = async () => {
    const token = Cookies.get('token'); // Obtém o token do cookie
    if (token) {
      const { data, error } = await supabase.auth.getUser(token);
      if (!error) {
        setUser(data.user); // Define o estado do usuário
      } else {
        setUser(null); // Caso haja erro, reseta o estado
      }
    }
    setLoading(false); // Finaliza o carregamento
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const logoutUser = () => {
    Cookies.remove('token'); 
    setUser(null); 
  };

  // Função de login
  const loginUser = async (loginData) => {
    const { data, error } = await supabase.auth.signInWithPassword(loginData);
    if (error) {
      ToastError("Usuário ou senha incorretos")
      throw new Error("Login falhou");
    }
    Cookies.set('token', data.session.access_token, { expires: new Date(data.session.expires_at * 1000) });
    setUser(data.user); 
    ToastSucess("Logado com sucesso!")
  };


  const value = {
    user,
    loading,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Só renderiza os filhos após o carregamento */}
    </AuthContext.Provider>
  );
};
