import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const carouselData = [
  { number: '10', status: 'New Requests' },
  { number: '05', status: 'Delayed Requests' },
  { number: '02', status: 'Escalated Requests' },
  { number: '00', status: 'On Hold Requests' },
];

const CarouselItem = ({ number, status }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        width: 150,
        height: 150,
        backgroundColor: '#212121',
        padding: 2,
        margin: '0 auto',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 48,
          marginBottom: 1,
        }}
      >
        {number}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: '#888',
          fontWeight: 'normal',
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        {status}
      </Typography>
    </Paper>
  );
};

function StatusCarousel() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2 }}>
      {carouselData.map((item) => (
        <Box key={item.number}>
          <CarouselItem number={item.number} status={item.status} />
        </Box>
      ))}
    </Box>
  );
}

export default StatusCarousel;
