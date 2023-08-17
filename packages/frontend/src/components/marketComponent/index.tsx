import React from 'react';
import { Box, Typography } from '@mui/material';

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
    <Box
     sx={{
      padding: '1em',
      paddingY: '1.6em',
      border: '1px solid grey',
      borderRadius: '2em',
      width: '25rem',
      boxShadow: '0px 12px 22px -6px rgba(0,0,0,0.43)',
     }}>
     <Typography
      color='#333'
      marginBottom='0.2em'
      fontSize='1.4em'>
      Collateralized borrowing
     </Typography>
     <Typography color='#333'>
      Get a borrow using your subscription as collateral in PWN
     </Typography>
    </Box>
    <Box
     sx={{
      padding: '1em',
      paddingY: '1.6em',
      border: '1px solid grey',
      borderRadius: '2em',
      width: '25rem',
      boxShadow: '0px 12px 22px -6px rgba(0,0,0,0.43)',
     }}>
     <Typography
      color='#333'
      marginBottom='0.2em'
      fontSize='1.4em'>
      Direct investment
     </Typography>
     <Typography color='#333'>
      Let an investor or DAO invest in your business by directly calling your
      subscription tokens
     </Typography>
    </Box>
   </Box>
  </Box>
 );
};

export default MarketComponent;
