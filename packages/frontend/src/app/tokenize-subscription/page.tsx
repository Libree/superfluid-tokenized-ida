import React from 'react';
import { Box, Container } from '@mui/material';
import dynamic from 'next/dynamic';
import SubscriptionForm from '@/components/subscriptionForm';

export default function TokenizedSuscription() {
 return (
  <Container
   sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   }}>
   <SubscriptionForm />
  </Container>
 );
}
