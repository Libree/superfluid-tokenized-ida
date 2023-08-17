import React from 'react';
import { Container } from '@mui/material';
import MarketComponent from '@/components/marketComponent';

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
