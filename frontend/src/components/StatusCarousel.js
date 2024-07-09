import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box } from '@mui/material';
import styled  from '@emotion/styled';

const carouselData = [
  { number: '10', status: 'New Requests' },
  { number: '05', status: 'Delayed Requests' },
  { number: '02', status: 'Escalated Requests' },
  { number: '00', status: 'On Hold Requests' },
];

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f5f5f5;
  padding: 20px;
`;

const StyledNumber = styled(Typography)`
  color: #333;
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 10px;
`;

const StyledStatus = styled(Typography)`
  color: #888;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
`;

const CarouselItem = ({ number, status }) => {
  return (
    <StyledPaper>
      <StyledNumber variant="h4">{number}</StyledNumber>
      <StyledStatus variant="subtitle2">{status}</StyledStatus>
    </StyledPaper>
  );
};

function StatusCarousel() {
  return (
    <Carousel autoPlay animation="slide">
      {carouselData.map((item) => (
        <CarouselItem key={item.number} number={item.number} status={item.status} />
      ))}
    </Carousel>
  );
}

export default StatusCarousel;
