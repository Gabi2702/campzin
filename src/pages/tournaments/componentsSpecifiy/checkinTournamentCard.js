import React from 'react'
import CardFixed from '../../../components/card/cardFixed'
import { AlarmClock } from 'lucide-react';

export default function CheckinTournamentCard({tournament}) {
  return (
    <CardFixed Title={"Check-In"} className="col-start-2 row-start-2  w-full">
      <div className='flex flex-row p-2 mt-2 gap-4'>
        <AlarmClock color='white' size={"40"}/>
          <p className='font-semibold text-3xl text-white'>{tournament.time_checkin_id.time} min</p>
        </div>
    </CardFixed>
  )
}
