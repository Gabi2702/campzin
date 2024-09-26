import React from 'react';
import Card from './card';
import { Link } from 'react-router-dom';

export default function CardOptionSidebar({ urlLink, title, icon, isExpanded }) {
  return (
    <li className="flex items-center p-2 rounded-md hover:bg-secondary-light transition-all duration-300">
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
          <a href={urlLink} className='font-semibold'>{title}</a>
        </div>
      )}
    </li>
  );
}
