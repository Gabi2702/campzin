import React, { useContext } from 'react'
import CardBackgroundPage from '../../components/card/cardBackgroundPage'
import { AuthContext } from '../../context/auth'

export default function DashboardUser() {
    const { user } = useContext(AuthContext)
  return (
    <CardBackgroundPage>
        <p>{user.id}</p>
    </CardBackgroundPage>
  )
}
