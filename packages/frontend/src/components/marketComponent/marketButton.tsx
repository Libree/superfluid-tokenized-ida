import React from 'react';
import { Button, Typography } from '@mui/material';

interface MarketButtonProps {
 title: string;
 description: string;
}

const MarketButton: React.FC<MarketButtonProps> = ({ title, description }) => {
 return (
  <Button
   variant='outlined'
   sx={{
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    paddingY: '1.6em',
    border: '1px solid grey',
    borderRadius: '2em',
    width: '25rem',
    height: '10rem',
    boxShadow: '0px 12px 22px -6px rgba(0,0,0,0.43)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
     transform: 'scale(1.05)',
    },
   }}>
   <Typography
    color='#333'
    marginBottom='0.2em'
    fontSize='1.4em'>
    {title}
   </Typography>
   <Typography color='#333'>{description}</Typography>
  </Button>
 );
};

export default MarketButton;
