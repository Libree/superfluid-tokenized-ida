'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend,
 Filler,
} from 'chart.js';

ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend,
 Filler,
);

const data = {
 labels: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
 datasets: [
  {
   label: 'Your Subscriptions',
   data: [2.5, 3.0, 2.8, 4.2, 5.5, 4.8, 6.0],
   backgroundColor: 'rgba(53, 162, 235, 0.4)',
   borderColor: 'rgb(53, 162, 235)',
   borderWidth: 1,
  },
 ],
};

const options = {
 responsive: true,
 plugins: {
  legend: {
   display: false,
  },
 },
 scales: {
  y: {
   beginAtZero: true,
   stepSize: 0.5,
   max: 6.5,
  },
  x: {
   ticks: { color: 'rgba(0,220,195)' },
  },
 },
 title: {
  display: true,
  text: 'Your subscriptions',
 },
};

const AnalitycChart = () => {
 return (
  <Box>
   <Typography
    color='#333'
    fontSize='2rem'
    marginTop='3em'>
    Your subscribers
   </Typography>
   <Bar
    data={data}
    options={options}
   />
  </Box>
 );
};

export default AnalitycChart;
