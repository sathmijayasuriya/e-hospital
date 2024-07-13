import React from 'react'
import NavBar from '../components/NavBar'
import RequestsGrid from '../components/RequestsGrid'
import RequestsTable from '../components/RequestsTable'

export default function Dashboard() {
  return (
    <div>
        <NavBar/>
        <RequestsGrid/>
        <RequestsTable/>
    </div>
  )
}
