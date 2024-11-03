import React, { useState ,useEffect} from "react";
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
import { Typography } from '@mui/material'
import { addRequestData } from "../../service/EhospitalAPI";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import axios from "axios";


const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

export default function ReportFile({open,handleClose,requestData = {},}) {

  const [pdfFile, setPdfFile] = useState(null);
  const [formData, setFormData] = useState({
      reportType: "",
      reportDateStart: "",
      reportDateEnd: "",
  });
    // useEffect(() => {
    //     if (isEditing && requestData) {
    //       setFormData({
    //         requestId: requestData.requestId || "", // handle default values
    //         floor: requestData.floor || "",
    //         room: requestData.room || "",
    //         service: requestData.service || "",
    //         status: requestData.status || "",
    //         priority: requestData.priority || "",
    //         department: requestData.department || "",
    //         requestedBy: requestData.requestedBy || "",
    //         assignedTo: requestData.assignedTo || "",
    //       });
    //     }
    //   }, []);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file && file.type === "application/pdf") {
          setPdfFile(file);
      } else {
          alert("Please upload a PDF file.");
      }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const uploadData = new FormData();
  uploadData.append("reportType", formData.reportType);
  uploadData.append("reportDateStart", formData.reportDateStart);
  uploadData.append("reportDateEnd", formData.reportDateEnd);
  uploadData.append("file", pdfFile);

  try {
      await axios.post("/api/reports/add", uploadData, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });
      console.log("Report added successfully");
      handleClose(); // Close the form after submission
  } catch (error) {
      console.error("Error submitting form: ", error);
  }
};
  return (
    <div>  <Dialog
    open={open}
    onClose={handleClose}
    fullWidth
    // maxWidth = "md"
    // sx={{
    //   backdropFilter: "blur(5px) sepia(3%)",
    // }}
    PaperProps={{
      sx: {
        borderRadius: "10px 10px",
      },
    }}
  >
    <DialogTitle>upload New Report</DialogTitle>
    <form onSubmit={handleSubmit}>
      <DialogContent sx={{ overflowX: "hidden" }}>
        {/* //floor */}
        <Box sx={{ display: "flex", width: "100%", m: 1, gap: 1 }}>
          <FormControl sx={{ flex: 2 }} size="small">
            <InputLabel id="demo-select-small-label"> Report Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              name="reportType"
              value={formData.reportType}
              label="Report Type"
              onChange={handleChange}
            >
               <MenuItem value="Patient">Patient</MenuItem>
                <MenuItem value="Appointment">Appointment</MenuItem>
                <MenuItem value="Financial">Financial</MenuItem>
                <MenuItem value="Inventory">Inventory</MenuItem>
                <MenuItem value="Compliance">Compliance</MenuItem>
                <MenuItem value="Feedback">Feedback</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ m: 1, backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "grey" } }}
          >
            Upload PDF
            <VisuallyHiddenInput
              type="file"
              sx={{fontFamily:"Inter, sans-serif", fontWeight: 600}}
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </Button>
            {pdfFile && (
            <Typography sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500,my: "8px"}}>
                {pdfFile.name}
            </Typography>
            )}
         <TextField
              sx={{ m: 1, width: "100%" }}
              size="small"
              variant="outlined"    
              name="reportDateStart"
              label="Start Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={formData.reportDateStart}
              onChange={handleChange}
            />
            <TextField
            sx={{ m: 1, width: "100%" }}
              name="reportDateEnd"
              label="End Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              size="small"
              value={formData.reportDateEnd}
              onChange={handleChange}
            />
      </DialogContent>
    </form>
    <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
      <Button  onClick={handleClose} sx={{color:"black"}}>Cancel</Button>
      <Button  type="submit" sx={{color:"black",borderColor:"black"}}>Submit</Button>
    </DialogActions>
  </Dialog></div>
  )
}
