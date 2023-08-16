import React from 'react';
import { StaticImageData } from 'next/image';
import { Box, Typography } from '@mui/material';

interface CriptoCellProps {
 cripto: string;
 logo: StaticImageData;
}

const CriptoCell: React.FC<CriptoCellProps> = ({ cripto, logo }) => {
 return (
  <Box
   display='flex'
   alignItems='center'
   sx={{ padding: '0.5em', paddingLeft: '1.2rem' }}>
   <img
    src={logo.src}
    alt={`${cripto} logo`}
    style={{ width: '2rem', height: '2rem', borderRadius: '3rem' }}
   />
   <Typography sx={{ margin: '0.4em', marginLeft: '0.8em' }}>
    {cripto}
   </Typography>
  </Box>
 );
};

export default CriptoCell;
