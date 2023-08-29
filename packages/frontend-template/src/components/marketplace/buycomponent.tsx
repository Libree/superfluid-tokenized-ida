import React from 'react';
import {
 Box,
 IconButton,
 Stack,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from '@mui/material';
import BlogCard from '../apps/blog/BlogCard';
import ParentCard from '../shared/ParentCard';
import BlankCard from '../shared/BlankCard';
import { IconShoppingCart } from '@tabler/icons-react';
import { OpenOffersType, OpenOffersData } from '../tables/tableData';

const BuyComponent = () => {
 const mockData: OpenOffersType[] = OpenOffersData;

 return (
  <Box>
   <ParentCard title='Open offers'>
    <BlankCard>
     <TableContainer>
      <Table
       aria-label='offers table'
       sx={{
        whiteSpace: 'nowrap',
       }}>
       <TableHead>
        <TableRow>
         <TableCell>
          <Typography variant='h6'>Name</Typography>
         </TableCell>
         <TableCell>
          <Typography variant='h6'>Price</Typography>
         </TableCell>
         <TableCell>
          <Typography variant='h6'>Total</Typography>
         </TableCell>
         <TableCell>
          <Typography variant='h6'>Buy</Typography>
         </TableCell>
        </TableRow>
       </TableHead>
       <TableBody>
        {mockData.map((item) => (
         <TableRow key={item.id}>
          <TableCell>
           <Typography variant='body2'>{item.name}</Typography>
          </TableCell>
          <TableCell>
           <Typography variant='body2'>{item.price}</Typography>
          </TableCell>
          <TableCell>
           <Typography variant='body2'>{item.total}</Typography>
          </TableCell>
          <TableCell>
           <IconButton>
            <IconShoppingCart />
           </IconButton>
          </TableCell>
         </TableRow>
        ))}
       </TableBody>
      </Table>
     </TableContainer>
    </BlankCard>
   </ParentCard>
  </Box>
 );
};

export default BuyComponent;
