import React from 'react';
import { Container, Box } from '@mui/material';
import MarketComponent from '@/components/marketComponent'; // Should be a better name

const Market = () => {
 return (
  <Container
   sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   }}>
   <MarketComponent />
  </Container>
 );
};

export default Market;
