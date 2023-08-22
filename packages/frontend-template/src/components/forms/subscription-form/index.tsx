import {
 Grid,
 InputAdornment,
 Button,
 Typography,
 Divider,
 MenuItem,
 IconButton,
} from '@mui/material';
import React from 'react';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import CustomTextField from '../theme-elements/CustomTextField';
import CustomOutlinedInput from '../theme-elements/CustomOutlinedInput';
import CustomSelect from '../theme-elements/CustomSelect';
import { Stack } from '@mui/system';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

const countries = [
 {
  value: 'india',
  label: 'India',
 },
 {
  value: 'uk',
  label: 'United Kingdom',
 },
 {
  value: 'srilanka',
  label: 'Srilanka',
 },
];

const SubscriptionForm = () => {
 // country
 const [country, setCountry] = React.useState('');

 const handleChange = (event: any) => {
  setCountry(event.target.value);
 };

 //   password
 //
 const [showPassword, setShowPassword] = React.useState(false);

 const handleClickShowPassword = () => setShowPassword((show) => !show);

 const handleMouseDownPassword = (
  event: React.MouseEvent<HTMLButtonElement>,
 ) => {
  event.preventDefault();
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
    {/* 1 */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel
      htmlFor='fs-uname'
      sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Product Name
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomTextField
      id='fs-uname'
      placeholder='Your product name'
      fullWidth
     />
    </Grid>
    {/* 2 */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel
      htmlFor='fs-email'
      sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Product Description
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomOutlinedInput
      id='fs-email'
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

    {/* 4 */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel
      htmlFor='fs-fname'
      sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Super Token
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomSelect
      id='standard-select-currency'
      value={country}
      onChange={handleChange}
      fullWidth
      variant='outlined'>
      {countries.map((option) => (
       <MenuItem
        key={option.value}
        value={option.value}>
        {option.label}
       </MenuItem>
      ))}
     </CustomSelect>
    </Grid>
    {/* 4 */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel
      htmlFor='fs-country'
      sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Flow Rate
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomTextField
      id='fs-fname'
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
    {/* 4 */}

    <Grid
     item
     xs={12}>
     <Divider sx={{ mx: '-24px' }} />
     <Typography
      variant='h4'
      mt={2}>
      Tokenize
     </Typography>
    </Grid>

    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel
      htmlFor='fs-country'
      sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Token Name
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomTextField
      id='fs-fname'
      placeholder='Your token name'
      fullWidth
     />
    </Grid>
    {/* 4 */}
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel
      htmlFor='fs-country'
      sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Token Symbol
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomTextField
      id='fs-fname'
      placeholder='Your token symbol'
      fullWidth
     />
    </Grid>
    <Grid
     item
     xs={12}
     sm={3}
     display='flex'
     alignItems='center'>
     <CustomFormLabel
      htmlFor='fs-country'
      sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
      Token Supply
     </CustomFormLabel>
    </Grid>
    <Grid
     item
     xs={12}
     sm={9}>
     <CustomTextField
      id='fs-fname'
      placeholder='1000'
      fullWidth
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
