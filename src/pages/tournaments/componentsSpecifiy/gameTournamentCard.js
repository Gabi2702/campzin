import React from 'react'
import CardFixed from '../../../components/card/cardFixed'

export default function GameTournamentCard({tournament}) {
  return (
    <CardFixed Title={"Jogo"} className="col-start-1 row-start-2 h-[150px] w-full">
        <p className='p-2 font-semibold text-3xl text-white'>{tournament.game_id.name}</p>
    </CardFixed>
  )
}
