import React, { useState } from 'react';
import CardFixed from '../../../components/card/cardFixed';
import RoundsTournamentCard from './roundsTournamentCard';
import RulesTournamentCard from './ruleTournamentCard';
import KeyGroupTournament from './keyGroupTournament';

export default function TabItensTournamentCard({tournament}) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Regras", content: <RulesTournamentCard /> },
    { label: "Partidas", content: <RoundsTournamentCard /> },
    { label: "Chaveamento", content: <KeyGroupTournament /> },
  ];

  return (
    <CardFixed className="col-span-3 row-span-3 col-start-1 row-start-3 h-full w-full ">
      <div className="flex justify-center space-x-4 mb-4 w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded font-semibold ${
              activeTab === index ? 'bg-secondary-light text-white' : 'bg-primary-dark text-white'
            } text-center`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab] && <div>{tabs[activeTab].content}</div>}
      </div>
    </CardFixed>
  );
}
