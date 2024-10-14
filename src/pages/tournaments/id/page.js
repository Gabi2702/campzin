import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoTournamentCard from '../componentsSpecifiy/infoTournamentCard'
import StatusTournamentCard from '../componentsSpecifiy/statusTournamentCard'
import TeamsTournamentCard from '../componentsSpecifiy/teamsTournamentCard'
import GameTournamentCard from '../componentsSpecifiy/gameTournamentCard'
import CreatorTournamentCard from '../componentsSpecifiy/creatorTournamentCard'
import CheckinTournamentCard from '../componentsSpecifiy/checkinTournamentCard'
import FormatTournamentCard from '../componentsSpecifiy/formatTournamentCard'
import TabItensTournamentCard from '../componentsSpecifiy/tabItensTournamentCard'
import TournamentService from '../../../services/tournament'
import Loading from '../../../components/loading/page'

export default function TournamentByIdPage() {
  const { id } = useParams()
  const tournamentsService = new TournamentService()
  const [tournamentById, setTournamentById] = useState();
  const [isLoading, setIsLoading] = useState(true)

  async function fetchById(id) {
    try {
      const tournament = await tournamentsService.getTournamentById(id);
      setTournamentById(tournament[0]);
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    fetchById(id)
  },[id])

  if (isLoading) {
    return (
     <Loading />
    )
  }

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-3 mt-4 mb-4 px-12">
        <InfoTournamentCard tournament={tournamentById} />
        <StatusTournamentCard />
        <TeamsTournamentCard />
        <CreatorTournamentCard />
        <GameTournamentCard tournament={tournamentById}/>
        <CheckinTournamentCard />
        <FormatTournamentCard tournament={tournamentById}/>
        <TabItensTournamentCard />
    </div>
  )
}
