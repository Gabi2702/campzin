import React from 'react'
import CardFixed from '../../../components/card/cardFixed'

export default function CheckinTournamentCard({tournament}) {
  return (
    <CardFixed Title={"Check-In"} className="col-start-2 row-start-2 h-[150px] w-full">
        <p className='p-2 font-semibold text-3xl text-white'>{tournament.time_checkin_id.time}</p>
    </CardFixed>
  )
}
