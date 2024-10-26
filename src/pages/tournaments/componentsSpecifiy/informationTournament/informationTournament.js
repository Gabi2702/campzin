import React from 'react'
import CardFixed from '../../../../components/card/cardFixed'
import PremiationTournamentCard from './premiationTournamentCard'
import RulesTournamentCard from './rulesTournamentCard'

export default function InformationsTournament() {
  return (
    <div className='flex gap-2 p-4'>
      <PremiationTournamentCard />
      <RulesTournamentCard />
    </div>
  )
}
