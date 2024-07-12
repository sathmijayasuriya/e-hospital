import React from 'react'
import { Typography } from '@mui/material'
import NabBarLink from './NavBarLink'
import AddIcon from '@mui/icons-material/Add';

export default function AddRequest() {
  return (
        <div style={{display:"flex",justifyItems:"flex-start",padding:"20px",margin:"15px"}}>
          <Typography variant="h4"
                      sx={{fontFamily:"inter"}}
                      >
                        Requests
                      </Typography>
          <NabBarLink label = "New Reuqest" 
                      to ="/" 
                      icon = {AddIcon} 
                      color="white" 
                      bgcolor="#830823" 
                      hoverBgcolor="#830823"
                      hovercolor = "white"
                      iconHovercolor = "white"
                      />
        </div>
  )
}
