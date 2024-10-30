import React from 'react'
import { Typography } from '@mui/material'
import NabBarLink from './NavBarLink'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import RequestForm from './RequestForm';

export default function AddRequest() {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () =>{
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false);
  }
  
  return (
        <div style={{display:"flex",
                      justifyItems:"flex-start",
                      padding:"20px",
                      margin:"20px"}}>
          <Typography variant="h4" 
                      sx={{ 
                       // fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                      }}
                      >  
                        Requests
                      </Typography>
          <NabBarLink label = "New Reuqest" 
                      // to ="/" 
                      icon = {AddIcon} 
                      color="white" 
                      bgcolor="#830823" 
                      hoverBgcolor="black"
                      hovercolor = "#f4edda"
                      iconHovercolor = "#black"
                      onClick={handleClickOpen}
                      />
          <RequestForm open={open} handleClose={handleClose}/>
        </div>
  )
}