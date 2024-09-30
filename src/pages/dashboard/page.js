import React from 'react'
import { useParams } from 'react-router-dom'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'

export default function DashboardUser() {
    const { id } = useParams()
  return (
    <CardBackgroundPage>
        <p>{id}</p>
    </CardBackgroundPage>
  )
}
