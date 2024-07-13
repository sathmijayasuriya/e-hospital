import React from "react";
import { styled } from "@emotion/styled";
import { Paper, Typography, Box } from "@mui/material";

const requestData = [
  { number: "10", status: "New Requests" ,backgroundColor:"#ffb3cc" ,backgroundColorHover:"#ffccd3"},
  { number: "05", status: "Delayed Requests" ,backgroundColor:"#b8b894",backgroundColorHover:"#e0e0d1"},
  { number: "02", status: "Escalated Requests",backgroundColor:"#d0eefe" ,backgroundColorHover:"#ccffff"},
  { number: "00", status: "On Hold Requests",backgroundColor:"#d2d4ff",backgroundColorHover:"#b5b7f7" },
];
const RequestItem = ({ number, status ,backgroundColor ,backgroundColorHover}) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: 100,
        height: 100,
        padding: 2,
        margin: "10px",
        backgroundColor : backgroundColor,
        '&:hover':{
          backgroundColor : backgroundColorHover
        }
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: 38,
          // marginBottom: 1,
          marginTop:0.1,
          // fontFamily: "Inter",
          fontWeight: 600,   
          color : "#2C2C2C" 
            }}
      >
        {number}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: "#404040",
          fontWeight: "normal",
          fontSize: 14,
          textAlign: "center",
          // fontFamily: "'Inter', sans-serif",
          fontWeight: 600,  
        }}
      >
        {status}
      </Typography>
    </Paper>
  );
};



export default function CircularStatus() {
  return <>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 3 }}>
            {
              requestData.map((item) =>(
                    <Box key={item.number}>
                      <RequestItem 
                            number={item.number} 
                            status={item.status} 
                            backgroundColor={item.backgroundColor}
                            backgroundColorHover = {item.backgroundColorHover}
                            />
                    </Box>
              ))
            }
          </Box>
        </>;
}
