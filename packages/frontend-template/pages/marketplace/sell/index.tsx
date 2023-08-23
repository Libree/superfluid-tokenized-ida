import React from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import SellComponent from '../../../src/components/marketplace/sellcomponent';

const Sell = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Sell'
    subtitle='Sell subscriptions'
   />
   <SellComponent />
  </PageContainer>
 );
};

export default Sell;
