import React from 'react';
import { Box } from '@mui/material';
import PageContainer from '../../../src/components/container/PageContainer';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import SubscriptionForm from '../../../src/components/forms/subscription-form';

const CreateSubscription = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Create Subscription'
    subtitle='Create your custom subscription'
   />
   <SubscriptionForm />
  </PageContainer>
 );
};

export default CreateSubscription;
