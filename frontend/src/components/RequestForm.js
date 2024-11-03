import React, { useState, useEffect } from "react";
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
  Box,
} from "@mui/material";
import { addRequestData } from "../service/EhospitalAPI";
import { editRequestData } from "../service/EhospitalAPI";

export default function RequestForm({ open, handleClose, requestData = {}, isEditing = false }) {
  const [formData, setFormData] = useState({
    requestId: "",
    floor: "",
    room: "",
    service: "",
    status: "",
    priority: "",
    department: "",
    requestedBy: "",
    assignedTo: "",
  });

  // Populate form with existing data when editing
  useEffect(() => {
    if (isEditing && requestData) {
      setFormData({
        requestId: requestData.requestId || "", // handle default values
        floor: requestData.floor || "",
        room: requestData.room || "",
        service: requestData.service || "",
        status: requestData.status || "",
        priority: requestData.priority || "",
        department: requestData.department || "",
        requestedBy: requestData.requestedBy || "",
        assignedTo: requestData.assignedTo || "",
      });
    }
  }, [isEditing, requestData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        // Edit existing request
        await editRequestData(formData);  // Update API call
        console.log("Request edited: ", formData);
      } else {
        // Add new request
        await addRequestData(formData);  // Add API call
        console.log("Request added: ", formData);
      }
      handleClose(); // Close the form after submission
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "10px 10px",
          },
        }}
      >
        <DialogTitle>{isEditing ? "Edit Request" : "Create New Request"}</DialogTitle>
        <form onSubmit={handleSubmit}> {/* Move the form tag here */}
          <DialogContent sx={{ overflowX: "hidden" }}>
            {/* //floor */}
            <Box sx={{ display: "flex", width: "100%", m: 1, gap: 1 }}>
              <FormControl sx={{ flex: 2 }} size="small">
                <InputLabel id="floor-select-label">Floor</InputLabel>
                <Select
                  labelId="floor-select-label"
                  id="floor-select"
                  name="floor"
                  value={formData.floor}
                  label="Floor"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="f103">f103</MenuItem>
                  <MenuItem value="f104">f104</MenuItem>
                  <MenuItem value="f105">f105</MenuItem>
                  <MenuItem value="f106">f106</MenuItem>
                  <MenuItem value="f107">f107</MenuItem>
                  <MenuItem value="f108">f108</MenuItem>
                  <MenuItem value="f109">f109</MenuItem>
                  <MenuItem value="f110">f110</MenuItem>
                  <MenuItem value="f111">f111</MenuItem>
                </Select>
              </FormControl>
              {/* //room */}
              <FormControl sx={{ flex: 2 }} size="small">
                <InputLabel id="room-select-label">Room</InputLabel>
                <Select
                  labelId="room-select-label"
                  id="room-select"
                  name="room"
                  value={formData.room}
                  label="Room"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="r1">r1</MenuItem>
                  <MenuItem value="r2">r2</MenuItem>
                  <MenuItem value="r3">r3</MenuItem>
                  <MenuItem value="r4">r4</MenuItem>
                  <MenuItem value="r5">r5</MenuItem>
                  <MenuItem value="r6">r6</MenuItem>
                  <MenuItem value="r7">r7</MenuItem>
                  <MenuItem value="r8">r8</MenuItem>
                  <MenuItem value="r9">r9</MenuItem>
                  <MenuItem value="r10">r10</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* //service */}
            <FormControl sx={{ m: 1, width: "100%" }} size="small">
              <InputLabel>Service</InputLabel>
              <Select
                name="service"
                value={formData.service}
                onChange={handleChange}
                label="Service"
                required
              >
                <MenuItem value="service1">Permission to access a service</MenuItem>
                <MenuItem value="service2">Ordering a service</MenuItem>
                <MenuItem value="service3">Service delivery action</MenuItem>
                <MenuItem value="service4">Feedback</MenuItem>
                <MenuItem value="service5">Information request</MenuItem>
                <MenuItem value="service6">Complaints</MenuItem>
              </Select>
            </FormControl>
            {/* //department */}
            <FormControl sx={{ m: 1, width: "100%" }} size="small">
              <InputLabel id="department-select-label">Department</InputLabel>
              <Select
                name="department"
                value={formData.department}
                onChange={handleChange}
                label="Department"
                required
              >
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="FINANCE">Finance</MenuItem>
                <MenuItem value="MARKETING">Marketing</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="OPERATIONS">Operations</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ m: 1, width: "100%" }}
              size="small"
              variant="outlined"
              name="requestedBy"
              label="Requested By"
              type="text"
              value={formData.requestedBy}
              onChange={handleChange}
              required
            />
            <TextField
              sx={{ m: 1, width: "100%" }}
              size="small"
              variant="outlined"
              name="assignedTo"
              label="Assigned To"
              type="text"
              value={formData.assignedTo}
              onChange={handleChange}
              required
            />
            {/* //status */}
            <Box sx={{ display: "flex", width: "100%", m: 1, gap: 1 }}>
              <FormControl sx={{ flex: 1 }} size="small">
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  label="Status"
                  required
                >
                  <MenuItem value="NEW">NEW</MenuItem>
                  <MenuItem value="IN_PROGRESS">IN_PROGRESS</MenuItem>
                  <MenuItem value="ON_HOLD">ON_HOLD</MenuItem>
                  <MenuItem value="REJECTED">REJECTED</MenuItem>
                  <MenuItem value="CANCELLED">CANCELLED</MenuItem>
                </Select>
              </FormControl>
              {/* //priority */}
              <FormControl sx={{ flex: 1 }} size="small">
                <InputLabel>Priority</InputLabel>
                <Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  label="Priority"
                  required
                >
                  <MenuItem value="HIGH">HIGH</MenuItem>
                  <MenuItem value="MEDIUM">MEDIUM</MenuItem>
                  <MenuItem value="LOW">LOW</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "#830823" } }}
              type="submit" // Add this type to submit the form
            >
              {isEditing ? "Update" : "Create"}
            </Button>
            <Button
              onClick={handleClose}
              sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "#830823" } }}
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
