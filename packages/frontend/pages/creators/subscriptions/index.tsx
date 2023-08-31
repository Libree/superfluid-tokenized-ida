import React from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import SubscriptionsComponent from '../../../src/components/subscriptions';

const Subscription = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Your Subscriptions'
    subtitle='Check your current subscriptions here'
   />
   <SubscriptionsComponent />
  </PageContainer>
 );
};

export default Subscription;
