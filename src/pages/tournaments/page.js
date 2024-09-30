import { React, useState, useEffect } from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import GridItems from '../../components/bento/GridItems'
import FilterTournamentsByGame from '../../components/filter/filterTournamentsByGame';
import CardTournaments from '../../components/card/cardTournaments';
import TournamentService from '../../services/tournament/index.js'
import Loading from '../../components/loading/page.js';


export default function TournamentsPage() {
  const tournamentsService = new TournamentService()
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true) // Estado para o carregamento

  async function fetchAll() {
    try {
      const data = await tournamentsService.selectAll()
      setTournaments(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false) 
    }
  }

  useEffect(() => {
    fetchAll()
  }, [])

  if (loading) {
    return <Loading /> 
  }

  return (
    <>
      <CardBackgroundPage>
        <FilterTournamentsByGame />
      </CardBackgroundPage>
      <CardBackgroundPage>
        <GridItems>
          {tournaments.map((tournament, index) => (
            <CardTournaments key={index} InfoTournament={tournament} />
          ))}
        </GridItems>
      </CardBackgroundPage> 
    </>
  )
}
