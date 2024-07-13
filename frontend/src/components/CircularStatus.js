import React from "react";
import { styled } from "@emotion/styled";
import { Paper, Typography, Box } from "@mui/material";

const requestData = [
  { number: "10", status: "new Requests" },
  { number: "05", status: "Delayed Requests" },
  { number: "02", status: "Escalated Requests" },
  { number: "00", status: "On Hold Requests" },
];
const RequestItem = ({ number, status }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: 150,
        height: 150,
        backgroundColor: "#212121",
        padding: 2,
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: 48,
          marginBottom: 1,
        }}
      >
        {number}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: "#888",
          fontWeight: "normal",
          fontSize: 16,
          textAlign: "center",
        }}
      >
        {status}
      </Typography>
    </Paper>
  );
};



export default function CircularStatus() {
  return <>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2 }}>
            {
              requestData.map((item) =>(
                    <Box key={item.number}>
                      <RequestItem number={item.number} status={item.status} />
                    </Box>
              ))
            }
          </Box>
        </>;
}
