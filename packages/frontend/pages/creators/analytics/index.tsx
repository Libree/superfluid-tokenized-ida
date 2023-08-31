import React from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import AnalyticsComponent from '../../../src/components/analytics';

const Analitics = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Analytics'
    subtitle='Check your analytics here'
   />
   <AnalyticsComponent />
  </PageContainer>
 );
};

export default Analitics;
