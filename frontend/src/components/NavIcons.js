import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Avatar from '@mui/material/Avatar';

export default function NavIcons() {
  return (
    <div className='nav-icons'>
        <NotificationsIcon sx={{ fontSize: 30 ,color: "white"}} className='nav-icon'/>
        <NightsStayIcon sx={{ fontSize: 30 ,color: "white"}} className='nav-icon' />
        <Avatar className='nav-icon'>H</Avatar>
    </div>
  )
}
