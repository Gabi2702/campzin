import React from 'react'
import { useParams } from 'react-router-dom'
import CardBackgroundPage from '../../../components/card/cardBackgroundPage'

export default function TournamentByIdPage() {
  const { id } = useParams()
  return (
    <CardBackgroundPage>
      <p>Torneio: {id}</p>
    </CardBackgroundPage>
  )
}
