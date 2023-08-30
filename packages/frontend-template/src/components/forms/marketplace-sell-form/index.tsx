import React from 'react';
import {
 Box,
 Stepper,
 Step,
 StepLabel,
 Button,
 Typography,
 FormControlLabel,
 Alert,
} from '@mui/material';
import { Stack } from '@mui/system';
import PageContainer from '../../../../src/components/container/PageContainer';
import CustomTextField from '../../../../src/components/forms/theme-elements/CustomTextField';
import CustomSelect from '../theme-elements/CustomSelect';
import CustomFormLabel from '../../../../src/components/forms/theme-elements/CustomFormLabel';
import ParentCard from '../../../../src/components/shared/ParentCard';
import SubscriptionSelectAutocomplete from './subscriptionSelectAutocomplete';

const steps = ['Mint Debt NFT', 'List NFT for sale'];

const MarketplaceSellForm = () => {
 const [activeStep, setActiveStep] = React.useState(0);
 const [skipped, setSkipped] = React.useState(new Set());

 // Should put here the index number of the optional steps
 const isStepOptional = (step: any) => step === null;

 const isStepSkipped = (step: any) => skipped.has(step);

 const handleNext = () => {
  let newSkipped = skipped;
  if (isStepSkipped(activeStep)) {
   newSkipped = new Set(newSkipped.values());
   newSkipped.delete(activeStep);
  }

  setActiveStep((prevActiveStep) => prevActiveStep + 1);
  setSkipped(newSkipped);
 };

 const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
 };

 const handleSkip = () => {
  if (!isStepOptional(activeStep)) {
   // You probably want to guard against something like this,
   // it should never occur unless someone's actively trying to break something.
   throw new Error("You can't skip a step that isn't optional.");
  }

  setActiveStep((prevActiveStep) => prevActiveStep + 1);
  setSkipped((prevSkipped) => {
   const newSkipped = new Set(prevSkipped.values());
   newSkipped.add(activeStep);

   return newSkipped;
  });
 };

 // eslint-disable-next-line consistent-return
 const handleSteps = (step: any) => {
  switch (step) {
   case 0:
    return (
     <Box>
      <CustomFormLabel htmlFor='subscription'>Subscription</CustomFormLabel>
      <SubscriptionSelectAutocomplete />
      <CustomFormLabel htmlFor='debt'>Debt amount</CustomFormLabel>
      <CustomTextField
       id='debt'
       type='text'
       variant='outlined'
       fullWidth
      />
     </Box>
    );
   case 1:
    return (
     <Box>
      <CustomFormLabel htmlFor='price'>Price</CustomFormLabel>
      <CustomTextField
       id='price'
       variant='outlined'
       fullWidth
      />
     </Box>
    );
   default:
    break;
  }
 };

 const handleReset = () => {
  setActiveStep(0);
 };
 return (
  <PageContainer>
   <ParentCard title='Sell Form'>
    <Box width='100%'>
     <Stepper activeStep={activeStep}>
      {steps.map((label, index) => {
       const stepProps: { completed?: boolean } = {};
       const labelProps: {
        optional?: React.ReactNode;
       } = {};
       if (isStepOptional(index)) {
        labelProps.optional = (
         <Typography variant='caption'>Optional</Typography>
        );
       }
       if (isStepSkipped(index)) {
        stepProps.completed = false;
       }

       return (
        <Step
         key={label}
         {...stepProps}>
         <StepLabel {...labelProps}>{label}</StepLabel>
        </Step>
       );
      })}
     </Stepper>
     {activeStep === steps.length ? (
      <>
       <Stack
        spacing={2}
        mt={3}>
        <Alert severity='success'>
         All steps completed - you&apos;re finished!
        </Alert>

        <Box textAlign='right'>
         <Button
          onClick={handleReset}
          variant='contained'
          color='error'>
          Reset
         </Button>
        </Box>
       </Stack>
      </>
     ) : (
      <>
       <Box>{handleSteps(activeStep)}</Box>

       <Box
        display='flex'
        flexDirection='row'
        mt={3}>
        <Button
         color='inherit'
         variant='contained'
         disabled={activeStep === 0}
         onClick={handleBack}
         sx={{ mr: 1 }}>
         Back
        </Button>
        <Box flex='1 1 auto' />
        {isStepOptional(activeStep) && (
         <Button
          color='inherit'
          onClick={handleSkip}
          sx={{ mr: 1 }}>
          Skip
         </Button>
        )}

        <Button
         onClick={handleNext}
         variant='contained'
         color={activeStep === steps.length - 1 ? 'success' : 'secondary'}>
         {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
       </Box>
      </>
     )}
    </Box>
   </ParentCard>
  </PageContainer>
 );
};

export default MarketplaceSellForm;
