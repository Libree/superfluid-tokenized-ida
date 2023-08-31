import React from 'react';
import Link from 'next/link';
import { Box, Button, useMediaQuery, Theme } from '@mui/material';

const MarletplaceComponent = () => {
 const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

 return (
  <Box
   display='flex'
   flexDirection={mdUp ? 'row' : 'column'}
   alignItems='center'
   marginTop='6rem'
   gap='3em'
   justifyContent='space-around'>
   <Link href='/marketplace/buy'>
    <Button sx={{ height: '7rem', width: '15rem', fontSize: '2em' }}>
     Buy
    </Button>
   </Link>
   <Link href='/marketplace/sell'>
    <Button sx={{ height: '7rem', width: '15rem', fontSize: '2em' }}>
     Sell
    </Button>
   </Link>
  </Box>
 );
};

export default MarletplaceComponent;
