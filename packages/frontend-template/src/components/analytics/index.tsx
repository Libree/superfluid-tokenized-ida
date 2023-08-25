import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import ParentCard from '../../../src/components/shared/ParentCard';
import ActiveSubscriptionsTable from '../tables/activeSubscriptions';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AnalyticsComponent = () => {
 // chart color
 const theme = useTheme();
 const primary = theme.palette.primary.main;
 const primarylight = theme.palette.primary.light;
 const secondary = theme.palette.secondary.main;
 const secondarylight = theme.palette.secondary.light;
 const warning = theme.palette.warning.main;

 // Line Charts
 const optionslinechart: any = {
  chart: {
   height: 350,
   type: 'line',
   fontFamily: "'Plus Jakarta Sans', sans-serif",
   foreColor: '#adb0bb',
   zoom: {
    type: 'x',
    enabled: true,
   },
   toolbar: {
    show: false,
   },
   shadow: {
    enabled: true,
    color: '#000',
    top: 18,
    left: 7,
    blur: 10,
    opacity: 1,
   },
  },
  xaxis: {
   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
   title: {
    text: 'Month',
   },
  },
  grid: {
   show: false,
  },
  colors: [primary, secondary],
  dataLabels: {
   enabled: true,
  },
  stroke: {
   curve: 'straight',
   width: '2',
  },
  legend: {
   position: 'top',
   horizontalAlign: 'right',
   floating: true,
   offsetY: -25,
   offsetX: -5,
  },
  tooltip: {
   theme: 'dark',
  },
 };
 const serieslinechart: any = [
  {
   name: 'High - 2013',
   data: [28, 29, 33, 36, 32, 32, 33],
  },
  {
   name: 'Low - 2013',
   data: [12, 11, 14, 18, 17, 13, 13],
  },
 ];

 // Pie Chart
 const optionspiechart: any = {
  chart: {
   id: 'pie-chart',
   fontFamily: "'Plus Jakarta Sans', sans-serif",
   foreColor: '#adb0bb',
   toolbar: {
    show: false,
   },
  },
  dataLabels: {
   enabled: false,
  },
  plotOptions: {
   pie: {
    donut: {
     size: '70px',
    },
   },
  },
  legend: {
   show: true,
   position: 'bottom',
   width: '50px',
  },
  colors: [primary, primarylight, secondary, secondarylight, warning],
  tooltip: {
   fillSeriesColor: false,
  },
 };
 const seriespiechart = [45, 15, 27, 18, 35];

 return (
  <Box>
   <Grid
    container
    gap={2}
    justifyContent='space-evenly'>
    <Grid
     item
     sm={3.5}
     xs={12}>
     <ParentCard title='Revenue'>
      <Chart
       options={optionslinechart}
       series={serieslinechart}
       type='line'
       height='200%'
       width={'90%'}
      />
     </ParentCard>
    </Grid>
    <Grid
     item
     sm={3.5}
     xs={12}>
     <ParentCard title='Subscribers'>
      <Chart
       options={optionslinechart}
       series={serieslinechart}
       type='line'
       height='200%'
       width={'90%'}
      />
     </ParentCard>
    </Grid>
    <Grid
     item
     sm={3.5}
     xs={12}>
     <ParentCard title='Token Holders'>
      <Chart
       options={optionspiechart}
       series={seriespiechart}
       type='pie'
       height='200%'
       width={'100%'}
      />
     </ParentCard>
    </Grid>
   </Grid>
   <Box marginTop={6} >
    <ActiveSubscriptionsTable />
   </Box>
  </Box>
 );
};

export default AnalyticsComponent;
