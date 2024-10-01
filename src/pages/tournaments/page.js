import { React, useState, useEffect } from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import GridItems from '../../components/bento/GridItems'
import FilterTournamentsByGame from '../../components/filter/filterTournamentsByGame'
import CardTournaments from '../../components/card/cardTournaments'
import TournamentService from '../../services/tournament/index.js'
import Loading from '../../components/loading/page.js'
import { useParams } from 'react-router-dom'

export default function TournamentsPage() {
  const { game } = useParams()
  const tournamentsService = new TournamentService()
  const [tournaments, setTournaments] = useState([])
  const [selectedGame, setSelectedGame] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchAll(gameName) {
    setLoading(true)
    try {
      const data = await tournamentsService.getAllTournaments(gameName)
      setTournaments(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAll(game || selectedGame)
  }, [game, selectedGame])

  function handleGameSelect(game) {
    setSelectedGame(game.search_query)
  }

  return (
    <>
      <CardBackgroundPage title="Filtrar por jogo">
        <FilterTournamentsByGame onGameSelect={handleGameSelect} />
      </CardBackgroundPage>

      <CardBackgroundPage>
        {loading ? (
          <Loading />
        ) : tournaments.length === 0 ? ( 
          <div className="text-center text-white font-bold">
            Nenhum torneio encontrado para o jogo selecionado.
          </div>
        ) : (
          <GridItems>
            {tournaments.map((tournament, index) => (
              <CardTournaments key={index} InfoTournament={tournament} />
            ))}
          </GridItems>
        )}
      </CardBackgroundPage>
    </>
  )
}
