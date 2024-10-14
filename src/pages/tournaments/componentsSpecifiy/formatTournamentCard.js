import React from 'react'
import CardFixed from '../../../components/card/cardFixed'

export default function FormatTournamentCard({tournament}) {
  return (
    <CardFixed Title={"Formato"} className="col-start-3 row-start-2 h-[150px] w-full">
      <p className='p-2 font-semibold text-3xl text-white'>{tournament.type_tournament_id.name}</p>
    </CardFixed>
  )
}
