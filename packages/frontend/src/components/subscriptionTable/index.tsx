import React from 'react';
import { mockedSuscriptions } from '@/utils/mocks';
import CriptoCell from './criptoCell';
import {
 Box,
 Typography,
 Table,
 TableHead,
 TableBody,
 TableRow,
 TableCell,
} from '@mui/material';

const SuscriptionTable = () => {
 return (
  <Box sx={{ margin: '2em', minWidth: '50rem' }}>
   <Typography
    sx={{ textAlign: 'left', marginBottom: '0.5em', fontSize: '1.8rem' }}>
    Active Suscriptions
   </Typography>
   <Table
    sx={{
     minWidth: '30em',
     overflowX: 'auto',
     borderCollapse: 'collapse',
     backgroundColor: 'white',
     '& th': {
      border: '1px solid #e0e0e0',
      padding: '8px',
      fontSize: '1em',
      color: '#333',
      textAlign: 'center',
     },
     '& td': {
      border: '1px solid #e0e0e0',
      padding: '8px',
      fontSize: '0.8em',
      color: '#333',
      textAlign: 'center',
     },
    }}>
    <TableHead>
     <TableCell>Cripto</TableCell>
     <TableCell>Balance</TableCell>
     <TableCell>Dato 1</TableCell>
     <TableCell>Dato 2</TableCell>
     <TableCell>Total</TableCell>
    </TableHead>
    <TableBody>
     {mockedSuscriptions.map((suscription) => (
      <TableRow key={suscription.id}>
       <TableCell>
        <CriptoCell
         cripto={suscription.cripto}
         logo={suscription.logo}
        />
       </TableCell>
       <TableCell sx={{ color: 'green' }}>{suscription.balance}</TableCell>
       <TableCell>{suscription.dato1}</TableCell>
       <TableCell>{suscription.dato2}</TableCell>
       <TableCell>{suscription.total}</TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  </Box>
 );
};

export default SuscriptionTable;
