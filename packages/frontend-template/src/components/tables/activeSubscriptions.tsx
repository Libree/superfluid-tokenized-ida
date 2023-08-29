import React from 'react';
import {
 TableContainer,
 Table,
 TableRow,
 TableCell,
 TableBody,
 Avatar,
 Typography,
 TableHead,
 Box,
 IconButton,
} from '@mui/material';
import BlankCard from '../shared/BlankCard';
import { ActiveSubscriptionType, ActiveSubscriptionsData } from './tableData';
import { Stack } from '@mui/system';
import { IconPlayerPlay } from '@tabler/icons-react';
import Image from 'next/image';

const basics: ActiveSubscriptionType[] = ActiveSubscriptionsData;

const ActiveSubscriptionsTable = () => {
 return (
  <BlankCard>
   <TableContainer>
    <Table
     aria-label='simple table'
     sx={{
      whiteSpace: 'nowrap',
     }}>
     <TableHead>
      <TableRow>
       <TableCell>
        <Typography variant='h6'>Assets</Typography>
       </TableCell>
       <TableCell>
        <Typography variant='h6'>Balance</Typography>
       </TableCell>
       <TableCell>
        <Typography variant='h6'>Net Flow</Typography>
       </TableCell>
       <TableCell>
        <Typography variant='h6'>Inflow / Outflow</Typography>
       </TableCell>
       <TableCell>
        <Typography variant='h6'>Current Subscriptiors</Typography>
       </TableCell>
       <TableCell>
        <Typography variant='h6'>Distribute</Typography>
       </TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {basics.map((basic) => (
       <TableRow key={basic.id}>
        <TableCell>
         <Stack
          direction='row'
          alignItems={'center'}
          spacing={2}>
          <Image
           src={basic.assetImg}
           width={30}
           height={30}
           alt={`${basic.assetImg}`}
           style={{ borderRadius: '100%' }}
          />
          <Box>
           <Typography
            variant='h6'
            fontWeight='600'>
            {basic.asset}
           </Typography>
          </Box>
         </Stack>
        </TableCell>
        <TableCell>
         <Typography
          color='textSecondary'
          variant='h6'
          fontWeight={400}>
          {basic.balance}
         </Typography>
        </TableCell>
        <TableCell>
         <Typography
          color='textSecondary'
          variant='h6'
          fontWeight={400}>
          {basic.netFlow}
         </Typography>
        </TableCell>
        <TableCell>
         <Typography
          color='textSecondary'
          variant='h6'
          fontWeight={400}>
          {basic.flowRate}
         </Typography>
        </TableCell>
        <TableCell>
         <Typography
          color='textSecondary'
          variant='h6'
          fontWeight={400}>
          {basic.subscriptors}
         </Typography>
        </TableCell>
        <TableCell>
         <IconButton>
          <IconPlayerPlay />
         </IconButton>
        </TableCell>
       </TableRow>
      ))}
     </TableBody>
    </Table>
   </TableContainer>
  </BlankCard>
 );
};

export default ActiveSubscriptionsTable;
