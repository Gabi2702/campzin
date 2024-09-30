import React, { useEffect, useState } from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import CardGames from '../../components/card/cardGames'
import { GameService } from '../../services/games'
import Loading from '../../components/loading/page'

export default function GamesPage() {
  const gameService = new GameService()
  const [games, setGames] = useState(null)
  const [loading, setLoading] = useState(true) // Estado para controlar o carregamento

  async function fetchGames() {
    try {
      const data = await gameService.selectAll()
      setGames(data)
    } catch (error) {
      console.error('Error fetching games:', error)
    } finally {
      setLoading(false) // Termina o loading
    }
  }

  useEffect(() => {
    fetchGames()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <CardBackgroundPage>
        <CardGames InfoGames={games} />
      </CardBackgroundPage>
    </div>
  )
}
