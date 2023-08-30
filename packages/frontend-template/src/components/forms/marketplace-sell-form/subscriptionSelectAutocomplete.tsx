import React from 'react';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CustomTextField from '../theme-elements/CustomTextField';

const subscriptionData = [
 { sub: 'ETH', label: 'Ethereum' },
 { sub: 'BTC', label: 'Bitcoin' },
 { sub: 'XRP', label: 'XRP' },
];

const SubscriptionSelectAutocomplete = () => {
 return (
  <Autocomplete
   id='subscription'
   fullWidth
   options={subscriptionData}
   autoHighlight
   getOptionLabel={(option) => option.label}
   renderOption={(props, option) => (
    <Box
     component='li'
     sx={{ fontSize: 15, '& > span': { mr: '10px', fontSize: 18 } }}
     {...props}>
     ({option.sub}) : {option.label}
    </Box>
   )}
   renderInput={(params) => (
    <CustomTextField
     {...params}
     placeholder='Choose a subscription'
     aria-label='Choose a subscription'
     autoComplete='off'
     inputProps={{
      ...params.inputProps,
      autoComplete: 'new-password', // disable autocomplete and autofill
     }}
    />
   )}
  />
 );
};

export default SubscriptionSelectAutocomplete;
