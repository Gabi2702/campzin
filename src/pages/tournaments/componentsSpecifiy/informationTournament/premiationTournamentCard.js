import React from 'react';
import CardFixed from '../../../../components/card/cardFixed';
import { formatToBRL } from '../../../../utils/maskFunctions';

export default function PremiationTournamentCard({ idTournament }) {
    const premiationList = [
        { position: 1, reward: 0},
      ];
    return (
      <CardFixed Title={"Premiação"} className={"rounded-lg shadow-md w-[40%]"} dark={true}>
        <ul className="space-y-2 mb-4 p-2 max-h-40 min-h-40 overflow-y-auto">
          {premiationList.map((premiation, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-primary-light rounded-md"
            >
              <p className="font-semibold">{premiation.position}º Lugar</p>
              <p className="text-lg font-semibold">{formatToBRL(premiation.reward)}</p>
            </li>
          ))}
        </ul>
      </CardFixed>
    );
  }
  
