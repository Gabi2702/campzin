import React from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import GridItems from '../../components/bento/GridItems'
import FilterTournamentsByGame from '../../components/filter/filterTournamentsByGame';
import CardTournaments from '../../components/card/cardTournaments';

export default function TournamentsPage() {
  const items = [
    {
      id: "12345",
      name: "Torneio de Verão",
      image: "https://sm.ign.com/ign_br/screenshot/default/image1_z8je.jpg",
      dateInit: "2024-09-28",
      dateEnd: "2024-10-05",
      game: "Rainbow six",
      plataform: "PC",
      typeTournament: "Eliminatória",
      prizePool: "$5000",
      inscription: "$10",
      inscripted: 50,
      limitParticipants: 100,
      creator: "Organização ABC"
    },
    
  ];
  return (
    <>
      <CardBackgroundPage>
        <FilterTournamentsByGame />
      </CardBackgroundPage>
      <CardBackgroundPage>
          <GridItems>
          {items.map((item, index) => (
            <CardTournaments key={index} InfoTournament={item}/>
          ))}
          </GridItems>
      </CardBackgroundPage> 
    </>
    
  )
}
