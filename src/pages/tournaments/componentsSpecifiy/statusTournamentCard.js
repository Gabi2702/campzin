import React from 'react'
import CardFixed from '../../../components/card/cardFixed'

export default function StatusTournamentCard({ tournament }) {
  return (
    <CardFixed Title={"Status"} className="col-start-3 h-[150px] w-full">
       <p className='p-2 font-semibold text-3xl text-white'>{tournament.status_progress_id.name}</p>
    </CardFixed>
  )
}
