import React from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import BuyComponent from '../../../src/components/marketplace/buycomponent';

const Buy = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Buy'
    subtitle='Buy subscriptions'
   />
   <BuyComponent />
  </PageContainer>
 );
};

export default Buy;
