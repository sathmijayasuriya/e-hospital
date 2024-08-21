import React from 'react'
import CircularStatus from './CircularStatus'
import AddRequest from './AddRequest'
import { Box } from '@mui/material'

export default function RequestsGrid() {
  return (
  
    <Box sx={{display:'flex',
              flexDirection:'row', 
              justifyContent:'space-around',
              alignItems :'center'
              }}>
      <AddRequest/>
      <CircularStatus/>
    </Box>
  )
}
