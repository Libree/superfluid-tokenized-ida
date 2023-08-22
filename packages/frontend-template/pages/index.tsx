import React from 'react';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

export default function Modern() {
 const [isLoading, setLoading] = useState(true);
 useEffect(() => {
  setLoading(false);
 }, []);

 return (
  <PageContainer>
   <Box></Box>
  </PageContainer>
 );
}
