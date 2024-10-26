import React from 'react'
import CardFixed from '../../../components/card/cardFixed'
import { Gamepad2 } from 'lucide-react'

export default function GameTournamentCard({tournament}) {
  return (
    <CardFixed Title={"Jogo"} className="col-start-1 row-start-2 w-full">
      <div className='flex flex-row p-2 mt-2 gap-4'>
        <Gamepad2 color='white' size={"40"} />
        <p className='font-semibold text-3xl text-white'>{tournament.game_id.name}</p>
      </div>
    </CardFixed>
  )
}
