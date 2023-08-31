import React from 'react';
import PageContainer from '../../../src/components/container/PageContainer';
import Breadcrumb from '../../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import ParagraphComponent from '../../../src/components/integrations/paragraphComponent';

const Paragraph = () => {
 return (
  <PageContainer>
   <Breadcrumb
    title='Paragraph'
    subtitle='Use you subscription to grant your subscribers access to Paragraph'
   />
   <ParagraphComponent />
  </PageContainer>
 );
};

export default Paragraph;
