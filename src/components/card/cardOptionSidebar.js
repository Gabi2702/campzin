import React from 'react';
import Card from './card';
import { Link, useLocation } from 'react-router-dom';

export default function CardOptionSidebar({ urlLink, title, icon, isExpanded }) {
  const location = useLocation(); // Usando useLocation para obter a URL atual
  const isActive = location.pathname === urlLink; // Verifica se o item está ativo

  return (
    <li 
      className={`mt-2 flex items-center p-2 transition-all duration-300 ${isActive ? 'bg-primary-dark text-white rounded-l-lg' : 'hover:bg-secondary-light rounded-md '}`}
    >
      <Card className="flex items-center">
        <Link to={urlLink} className="block">
          <div className='flex justify-center items-center w-8 h-8'>
            {icon}
          </div>
        </Link>
      </Card>
      {isExpanded && (
        <div
          className="pl-4 overflow-hidden transition-all duration-300 ease-in-out opacity-100 max-w-xs"
          style={{ transitionProperty: 'max-width, opacity' }}
        >
          <Link to={urlLink} className='font-semibold'>
            {title}
          </Link>
        </div>
      )}
    </li>
  );
}
