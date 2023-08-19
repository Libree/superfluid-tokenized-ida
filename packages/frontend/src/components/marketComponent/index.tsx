import React from 'react';
import { Box, Typography } from '@mui/material';
import MarketButton from './marketButton';

const MarketComponent = () => {
 return (
  <Box
   textAlign='center'
   height='100%'
   minHeight='30rem'>
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
   <Box
    display='flex'
    alignItems='center'
    flexDirection={{
     xxs: 'column',
     xs: 'column',
     sm: 'column',
     lg: 'row',
    }}
    sx={{ marginTop: '2em', gap: '2em' }}>
    <MarketButton
     title='Collateralized borrowing'
     description='Get a borrow using your subscription as collateral in PWN'
    />
    <MarketButton
     title='Direct investment'
     description='Let an investor or DAO invest in your business by directly calling your
      subscription tokens'
    />
   </Box>
  </Box>
 );
};

export default MarketComponent;
