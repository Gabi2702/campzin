import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
    const token = Cookies.get('token');  // Verifica o token do cookie

    if (!token) {
        return <Navigate to="/login" />;  // Redireciona para login se não houver token
    }

    return children;  // Renderiza o conteúdo protegido
};

export default ProtectedRoute;
