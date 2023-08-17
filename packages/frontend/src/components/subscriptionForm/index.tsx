'use client';

import React, { useState, ChangeEvent } from 'react';
import {
 Box,
 TextField,
 Grid,
 Typography,
 FormLabel,
 FormControl,
 InputAdornment,
 Button,
} from '@mui/material';

const SubscriptionForm = () => {
 const [flowRate, setFlowRate] = useState(0.0);

 const handleFlowRateFocus = () => {
  if (flowRate === 0.0) {
   setFlowRate(0);
  }
 };

 const handleFlowRateChange = (e: ChangeEvent<HTMLInputElement>) => {
  const newValue = parseFloat(e.target.value);
  if (!isNaN(newValue)) {
   setFlowRate(newValue);
  }
 };

 return (
  <Box sx={{ margin: '2em', minWidth: '20rem', height: '100%' }}>
   <Typography
    sx={{
     backgroundColor: 'rgba(105, 255, 102, 0.3)',
     color: 'rgba(45, 105, 40, 1)',
     padding: '0.2em',
     borderRadius: '0.5em',
     marginBottom: '4rem',
     display: 'inline-block',
    }}>
    Create tokenized subscription
   </Typography>
   <FormControl fullWidth>
    <FormLabel sx={{ marginBottom: '0.5em' }}>Product Name</FormLabel>
    <TextField label='Your product name' />
    <FormLabel sx={{ marginTop: '1.2em', marginBottom: '0.5em' }}>
     Product Description
    </FormLabel>
    <TextField
     multiline
     rows={4}
     label='Your product description'
    />
    <FormLabel sx={{ marginTop: '1.2em', marginBottom: '0.5em' }}>
     Payment options
    </FormLabel>
    <Grid
     container
     spacing={2}>
     <Grid
      item
      xs={6}
      md={4}>
      {/* Should be a select */}
      <TextField
       label='Select a token'
       fullWidth
      />
     </Grid>
     <Grid
      item
      xs={6}
      md={8}>
      <TextField
       fullWidth
       value={flowRate === 0.0 ? '' : flowRate}
       onFocus={handleFlowRateFocus}
       onChange={handleFlowRateChange}
       InputProps={{
        endAdornment: (
         <InputAdornment
          sx={{
           marginRight: '4em',
           '@media (max-width:600px)': {
            // Breakpoint 'xs' (smallest)
            marginRight: '0.5em',
           },
          }}
          position='end'>
          / month
         </InputAdornment>
        ),
       }}
      />
     </Grid>
    </Grid>
    <FormLabel sx={{ marginTop: '1.2em', marginBottom: '0.5em' }}>
     Tokenize
    </FormLabel>
    <TextField
     label='Token name'
     fullWidth
    />
    <Grid
     container
     marginTop='1em'
     spacing={2}>
     <Grid
      item
      xs={6}>
      <TextField
       label='Token symbol'
       fullWidth
      />
     </Grid>
     <Grid
      item
      xs={6}>
      <TextField
       label='Token supply'
       fullWidth
      />
     </Grid>
    </Grid>
   </FormControl>
   <Button
    variant='contained'
    fullWidth
    sx={{
     marginTop: '4em',
     bgcolor: 'rgba(78, 214, 54, 1)',
     padding: '1em',
     borderRadius: '1em',
     '&:hover': {
      bgcolor: 'rgba(23, 69, 15, 1)',
     },
    }}>
    Create
   </Button>
  </Box>
 );
};

export default SubscriptionForm;
