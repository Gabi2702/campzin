import React from 'react'
import CardFixed from '../../../components/card/cardFixed'
import { ServerCog } from 'lucide-react'

export default function FormatTournamentCard({tournament}) {
  return (
    <CardFixed Title={"Formato"} className="col-start-3 row-start-2 w-full">
      <div className='flex flex-row p-2 mt-2 gap-4'>
        <ServerCog color='white' size={"40"} />
        <p className='font-semibold text-3xl text-white'>{tournament.type_tournament_id.name}</p>
      </div>
    </CardFixed>
  )
}
