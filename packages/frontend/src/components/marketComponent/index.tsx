import React from 'react';
import { Box, Typography } from '@mui/material';

const MarketComponent = () => {
 return (
  <Box textAlign='center'>
   <Typography
    fontSize='2em'
    color='#333'>
    Monetize your subscription
   </Typography>
   <Typography
    marginTop='0.5em'
    fontSize='1em'
    color='#333'>
    Leverage your subscription tokens to get a loan or sell them to an investor
   </Typography>
  </Box>
 );
};

export default MarketComponent;
