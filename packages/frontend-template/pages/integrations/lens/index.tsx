import React from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import LensComponent from '../../../src/components/integrations/lensComponent';

const Lens = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Lens'
    subtitle='Use you subscription as a Lens follow module'
   />
   <LensComponent />
  </PageContainer>
 );
};

export default Lens;
