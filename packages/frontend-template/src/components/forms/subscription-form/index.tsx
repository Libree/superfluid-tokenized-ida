import {
 Grid,
 InputAdornment,
 Button,
 Typography,
 Divider,
 MenuItem,
} from '@mui/material';
import React from 'react';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import CustomTextField from '../theme-elements/CustomTextField';
import CustomOutlinedInput from '../theme-elements/CustomOutlinedInput';
import CustomSelect from '../theme-elements/CustomSelect';
import { Stack } from '@mui/system';

const tokens = [
 {
  value: 'fDAIx',
  label: 'fDAIx',
 },
 {
  value: 'fUSDCx',
  label: 'fUSDCx',
 },
 {
  value: 'MATICx',
  label: 'MATICx',
 },
];

const SubscriptionForm = () => {
 // Tokens
 const [token, setToken] = React.useState('');

 const handleChange = (event: any) => {
  setToken(event.target.value);
 };

 return (
  <div>
   <Typography
    variant='h4'
    mb={3}>
    Product Details
   </Typography>
   {/* ------------------------------------------------------------------------------------------------ */}
   {/* Basic Layout */}
   {/* ------------------------------------------------------------------------------------------------ */}
   <Grid
    container
    spacing={3}>
    {/* Product Name */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Product Name
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomTextField
      placeholder='Your product name'
      fullWidth
     />
    </Grid>
    {/* Product Description */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Product Description
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomOutlinedInput
      placeholder='Your product description'
      fullWidth
      multiline
      rows={4}
     />
    </Grid>

    <Grid
     item
     xs={12}>
     <Divider sx={{ mx: '-24px' }} />
     <Typography
      variant='h4'
      mt={2}>
      Payment options
     </Typography>
    </Grid>

    {/* SuperToken */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Super Token
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomSelect
      value={token}
      onChange={handleChange}
      fullWidth
      variant='outlined'>
      {tokens.map((option) => (
       <MenuItem
        key={option.value}
        value={option.value}>
        {option.label}
       </MenuItem>
      ))}
     </CustomSelect>
    </Grid>
    {/* Flow Rate */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Flow Rate
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomTextField
      placeholder='0.0'
      fullWidth
      InputProps={{
       endAdornment: (
        <InputAdornment
         position='end'
         style={{ marginRight: '2rem' }}>
         /month
        </InputAdornment>
       ),
      }}
     />
    </Grid>
    
    <Grid
     item
     xs={12}
     sm={3}></Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <Stack
      direction='row'
      spacing={2}>
      <Button
       variant='contained'
       color='primary'>
       Submit
      </Button>
      <Button
       variant='text'
       color='error'>
       Cancel
      </Button>
     </Stack>
    </Grid>
   </Grid>
  </div>
 );
};

export default SubscriptionForm;
