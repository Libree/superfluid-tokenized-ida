import React from 'react';
import PageContainer from '../../src/components/container/PageContainer';
import Breadcrumb from '../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import MarketplaceComponent from '../../src/components/marketplace';

const Marketplace = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Marketplace'
    subtitle='Here you can buy or sell tokens'
   />
   <MarketplaceComponent />
  </PageContainer>
 );
};

export default Marketplace;
