import React from 'react'
import NavBar from '../components/NavBar'
import StatusCarousel from '../components/StatusCarousel'
import RequestsGrid from '../components/RequestsGrid'
import RequestsTable from '../components/RequestsTable'

export default function Requests() {
  return (
          <>
            <NavBar/>
            <RequestsGrid/>
            <RequestsTable/>         
             </>
  )
}
  