import React from 'react'
import { styled } from '@emotion/styled'
import { Paper } from '@mui/material'
const requestData = [
  { number: '10', status: 'new Requests'},
  { number: '05', status: 'Delayed Requests' },
  { number: '02', status: 'Escalated Requests' },
  { number: '00', status: 'On Hold Requests' },
]
const RequestItem = ({number,status}) =>{
  return(
    <Paper
      sx = {{
        display:'flex',
        flexDirection :'column',
      }}
    >

    </Paper>
  )

}

export default function CircularStatus() {


  return (
    <div>

        
    </div>
  )
}
