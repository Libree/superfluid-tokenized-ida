import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box, Typography } from '@mui/material';
import { Height } from '@mui/icons-material';

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
   <Image
    src={logo.src}
    alt={`${cripto} logo`}
    width={30}
    height={30}
    style={{ width: '2rem', height: '2rem', borderRadius: '3rem' }}
   />
   <Typography sx={{ margin: '0.4em', marginLeft: '0.8em' }}>
    {cripto}
   </Typography>
  </Box>
 );
};

export default CriptoCell;
