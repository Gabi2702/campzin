import React, { useEffect, useState } from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import { GameService } from '../../services/games'
import Loading from '../../components/loading/page'
import CardGames from '../card/cardGames'
import Carrosel from '../carrosel/carrosel'



export default function FilterTournamentsByGame({onGameSelect}) {
  const gameService = new GameService()
  const [games, setGames] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchGames() {
    try {
      const data = await gameService.selectAll()
      setGames(data)
    } catch (error) {
      console.error('Error fetching games:', error)
    } finally {
      setLoading(false) 
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='flex p-4 mt-3'>
        <CardGames InfoGames={games} size={"sm"}/>
    </div>
  )
}
