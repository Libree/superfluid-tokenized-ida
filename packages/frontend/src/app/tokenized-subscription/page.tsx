import React from 'react';
import { Container } from '@mui/material';
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
