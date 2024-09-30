import {React, useState,useEffect} from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import GridItems from '../../components/bento/GridItems'
import FilterTournamentsByGame from '../../components/filter/filterTournamentsByGame';
import CardTournaments from '../../components/card/cardTournaments';
import TournamentService from '../../services/tournament/index.js'

export default function TournamentsPage() {
  const tournamentsSerivce = new TournamentService()
  const [tournaments, setTournaments] = useState([])

  async function fetchAll(){
    try {
      setTournaments(await tournamentsSerivce.selectAll())
      
    } catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAll()
  },[])
  
  console.log(tournaments)
  return (
    <>
      <CardBackgroundPage>
        <FilterTournamentsByGame />
      </CardBackgroundPage>
      <CardBackgroundPage>
          <GridItems>
          {tournaments.map((tournament, index) => (
            <CardTournaments key={index} InfoTournament={tournament}/>
          ))}
          </GridItems>
      </CardBackgroundPage> 
    </>
    
  )
}
