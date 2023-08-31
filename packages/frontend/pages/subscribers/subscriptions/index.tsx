import React from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import SubscriptionsComponent from '../../../src/components/subscribers/subscriptionsComponent';

const Subscriptions = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Subscriptions'
    subtitle='Buy active subscriptions'
   />
   <SubscriptionsComponent />
  </PageContainer>
 );
};

export default Subscriptions;
