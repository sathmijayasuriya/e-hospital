import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';

export default function RequestForm({ open, handleClose }) {

    const [formData , setFormData] = useState({
        requestId: '',
        floor: '',
        room: '',
        service: '',
        status: '',
        priority: '',
        department: '',
        requestedBy: '',
        assignedTo: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(formData);
        handleClose();

    }
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        // maxWidth = "md"
        sx={{
            backdropFilter: "blur(5px) sepia(3%)",
          }}
          PaperProps={{
            sx:{
                borderRadius:"10px 10px"
            }
          }}
     >
        <DialogTitle>Create New Request</DialogTitle>
        <form onSubmit={handleSubmit}> 
        <DialogContent sx={{ overflowX: 'hidden' }}>
            {/* //floor */}
        <Box sx={{display:'flex',width :'100%',m:1, gap: 1}}>
        <FormControl sx={{ flex:2}} size="small" >
          <InputLabel id="demo-select-small-label">Floor</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            name='floor'
            value={formData.floor}
            label="Floor"
            onChange={handleChange}
          >
            <MenuItem value={10}>f103</MenuItem>
            <MenuItem value={20}>f104</MenuItem>
            <MenuItem value={30}>f105</MenuItem>
            <MenuItem value={30}>f106</MenuItem>
            <MenuItem value={30}>f107</MenuItem>
            <MenuItem value={30}>f108</MenuItem>
            <MenuItem value={30}>f109</MenuItem>
            <MenuItem value={30}>f110</MenuItem>
            <MenuItem value={30}>f111</MenuItem>
          </Select>
          </FormControl>
          {/* //room */}
          <FormControl sx={{ flex:2}} size="small" >
          <InputLabel id="demo-select-small-label">Room</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            name='room'
            value={formData.room}
            label="Room"
            onChange={handleChange}
          >
            <MenuItem value={10}>bed</MenuItem>
            <MenuItem value={20}>bed 2</MenuItem>
            <MenuItem value={30}>bed 3</MenuItem>
          </Select>
        </FormControl>
        </Box>    
        {/* //serivce */}
        <FormControl  sx={{ m: 1, width: '100%' }}  size="small" >
        <InputLabel>Service</InputLabel>
            <Select
              name="service"
              value={formData.service}
              onChange={handleChange}
              label="service"
            >
              <MenuItem value="service1">Permission to access a service</MenuItem>
              <MenuItem value="service2">Ordering a service </MenuItem>
              <MenuItem value="service3">Service delivery action</MenuItem>
              <MenuItem value="service4">feedback</MenuItem>
              <MenuItem value="service5">Information request</MenuItem>
              <MenuItem value="service6">complaints</MenuItem>
            </Select>
          </FormControl>
          {/* //department */}
          <FormControl  sx={{ m: 1, width: '100%' }} size="small" >
          <InputLabel  id="demo-simple-select-label">Department</InputLabel>
            <Select
              name="department"
              value={formData.department}
              onChange={handleChange}
              label="Department"
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="FINANCE">Finance</MenuItem>
              <MenuItem value="MARKETING">Marketing</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="OPERATIONS">Operations</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ m: 1, width: '100%' }}
            size='small'
            variant="outlined"
            name="requestedBy"
            label="Requested By"
            type="text"
            value={formData.requestedBy}
            onChange={handleChange}
          />
          <TextField
            sx={{ m: 1, width: '100%' }} 
            size='small'
            variant="outlined"
            name="assignedTo"
            label="Assigned To"
            type="text"
            value={formData.assignedTo}
            onChange={handleChange}
          />
        {/* //status */}
        <Box sx={{display:'flex',width :'100%',m:1, gap: 1}}>
        <FormControl sx={{ flex:1}} size="small" >
        <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              label="Status"
            >
              <MenuItem value="NEW">NEW</MenuItem>
              <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
              <MenuItem value="ON_HOLD">ON_HOLD</MenuItem>
              <MenuItem value="REJECTED">REJECTED</MenuItem>
              <MenuItem value="CANCELLED">CANCELLED</MenuItem>
            </Select>
          </FormControl>
          {/* //priority */}
          <FormControl sx={{flex:1}} size="small" >
          <InputLabel>Priority</InputLabel>
            <Select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              label="Priority"
            >
              <MenuItem value="HIGH">HIGH</MenuItem>
              <MenuItem value="MEDIUM">MEDIUM</MenuItem>
              <MenuItem value="LOW">LOW</MenuItem>
            </Select>
          </FormControl>
          </Box>
          </DialogContent>
        </form>
        <DialogActions sx={{display:'flex',justifyContent:'center'}}> 
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
