import React from 'react';
import { Link } from 'react-router-dom';
import { Tent } from 'lucide-react';

export default function Logo({ isExpanded }) {
  return (
    <div className="text-2xl font-bold ">
      <Link to="/">
        <div className="justify-center text-center p-4 flex items-center">
          {isExpanded ? (
            <div className="flex items-center transition-transform duration- ease-in-out transform">
              <Tent />
              <p 
                className={`text-sm transition-opacity duration-300 ease-in-out ml-2 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
              >
                CAMPZIN
              </p>
            </div>
          ) : (
            <Tent />
          )}
        </div>
      </Link>
    </div>
  );
}
