import React from 'react'

import CardBackgroundPage from '../../components/card/cardBackgroundPage';
import GridItems from '../../components/bento/GridItems';
import BentoGridItems from '../../components/bento/BentoGridItems';

export default function HomePage() {
    const items = [
        {
          id: "12345",
          name: "Torneio de Verão",
          image: "https://example.com/tournament-image.jpg",
          dateInit: "2024-09-28",
          dateEnd: "2024-10-05",
          game: "Game XYZ",
          plataform: "PC",
          typeTournament: "Eliminatória Simples",
          prizePool: "$5000",
          inscription: "$10",
          inscripted: 50,
          limitParticipants: 100,
          creator: "Organização ABC"
        },
        
      ];
  return (
    <div>
      <div>
        <CardBackgroundPage>
            <BentoGridItems>
              
            </BentoGridItems>
        </CardBackgroundPage> 
      </div>
      <div>
        <CardBackgroundPage>
          <GridItems items={items}/>
        </CardBackgroundPage> 
      </div>
    </div>
       
  )
}
