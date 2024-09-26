import React, { useState, useContext } from 'react';
import CardOptionSidebar from './card/cardOptionSidebar';
import { Expand, Minimize, LayoutDashboard, UsersRound, Trophy, Crown, ShieldHalf } from 'lucide-react';
import Logo from './logo';
import { AuthContext } from '../context/auth';

export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { user } = useContext(AuthContext);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex min-h-screen`}>
      <div 
        className={`transition-all duration-300 ease-in-out ${isExpanded ? 'w-52 shadow-lg' : 'w-14'} bg-primary-light text-white`}
      >
        <Logo isExpanded={isExpanded} />
        <nav className="">
          <ul>
            <CardOptionSidebar urlLink="/dashboard" title="Dashboard" isExpanded={isExpanded} icon={<LayoutDashboard />} />
            <CardOptionSidebar urlLink="/teams" title="Times" isExpanded={isExpanded} icon={<UsersRound />} />
            <CardOptionSidebar urlLink="/tournaments" title="Torneios" isExpanded={isExpanded} icon={<Trophy />} />
            {user && (
              <>
                <hr className={`transition-all duration-300 ease-in-out ml-2 my-2 border-secondary-light ${isExpanded ? 'w-[90%]' : 'w-[70%]'}`} />
                <CardOptionSidebar urlLink={`/team/user/${user.id}`} title="Meus times" isExpanded={isExpanded} icon={<ShieldHalf />} />
                <CardOptionSidebar urlLink={`/tournaments/user/${user.id}`} title="Meus torneios" isExpanded={isExpanded} icon={<Crown />} />
              </>
            )}
          </ul>
        </nav>
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none flex justify-center items-center"
          >
            {isExpanded ? <Minimize /> : <Expand />}
          </button>
        </div>
      </div>
    </div>
    
  );
}
