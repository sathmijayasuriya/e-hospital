import React from 'react'
import NavBar from '../../components/NavBar'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import NabBarLink from '../../components/NavBarLink';
import ReportFile from './ReportFile';

export default function Reports() {

  const [open, setOpen] = useState(false);
  const handleClickOpen = () =>{
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false);
  }
  
  return (
    
    <div>
      <NavBar/>
              <div style={{display:"flex",
                      justifyItems:"flex-start",
                      padding:"20px",
                      margin:"20px"}}>
                <Typography variant="h4" 
                      sx={{ 
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                      }}
                      >  
                        Reports
                      </Typography>
                      <NabBarLink label = "Add Report Details" 
                      // to ="/" 
                      icon = {AddIcon} 
                      color="white" 
                      bgcolor="#830823" 
                      hoverBgcolor="black"
                      hovercolor = "#f4edda"
                      iconHovercolor = "#black"
                      onClick={handleClickOpen}
                      />
                      <ReportFile open={open} handleClose={handleClose}/>         
              </div>
    </div>
  )
}
