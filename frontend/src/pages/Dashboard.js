import React from 'react'
import NavBar from '../components/NavBar'
import RequestsGrid from '../components/RequestsGrid'
import CircularStatus
 from '../components/CircularStatus'
export default function Dashboard() {
  return (
    <div>
        <NavBar/>
        <RequestsGrid/>
        <CircularStatus/>
    </div>
  )
}
