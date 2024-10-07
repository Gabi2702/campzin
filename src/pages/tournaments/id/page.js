import React from 'react'
import { useParams } from 'react-router-dom'
import InfoTournamentCard from '../componentsSpecifiy/infoTournamentCard'
import StatusTournamentCard from '../componentsSpecifiy/statusTournamentCard'
import TeamsTournamentCard from '../componentsSpecifiy/teamsTournamentCard'
import GameTournamentCard from '../componentsSpecifiy/gameTournamentCard'
import CreatorTournamentCard from '../componentsSpecifiy/creatorTournamentCard'
import CheckinTournamentCard from '../componentsSpecifiy/checkinTournamentCard'
import FormatTournamentCard from '../componentsSpecifiy/formatTournamentCard'
import TabItensTournamentCard from '../componentsSpecifiy/tabItensTournamentCard'

export default function TournamentByIdPage() {
  const { id } = useParams()
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-3 mt-4 mb-4 px-12">
        <InfoTournamentCard />
        <StatusTournamentCard />
        <TeamsTournamentCard />
        <CreatorTournamentCard />
        <GameTournamentCard />
        <CheckinTournamentCard />
        <FormatTournamentCard />
        <TabItensTournamentCard />
    </div>
  )
}
