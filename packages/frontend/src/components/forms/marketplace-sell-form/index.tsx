import React, { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Alert,
  MenuItem,
} from '@mui/material';
import { Stack } from '@mui/system';
import PageContainer from '../../../../src/components/container/PageContainer';
import CustomTextField from '../../../../src/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../../src/components/forms/theme-elements/CustomFormLabel';
import ParentCard from '../../../../src/components/shared/ParentCard';
import SubscriptionSelectAutocomplete from './subscriptionSelectAutocomplete';
import { useSubscriptionManager } from '../../../../hooks/useSubscriptionManager';
import CustomSlider from '../theme-elements/CustomSlider';
import CustomSelect from '../theme-elements/CustomSelect';
import { useTokenizedIDA } from '../../../../hooks/useTokenizedIDA';
import { useMarketplace } from '../../../../hooks/useMarketplace';

const steps = ['Mint Debt NFT', 'List NFT for sale'];

const MarketplaceSellForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const { subscriptions } = useSubscriptionManager()
  const {sellOrder} = useMarketplace()

  type FormData = {
    subscription: string;
    tokenAmount: string;
    tokenPrice: string;
  };

  const defaultFormData = {
    subscription: '',
    tokenAmount: '',
    tokenPrice: '',
  };

  const handleInputChange = (event: any) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const [input, setInput] = useState<FormData>(defaultFormData);

  // Should put here the index number of the optional steps
  const isStepOptional = (step: any) => step === null;

  const subscriptionData = subscriptions?.map(sub => {
    const { subscription } = sub
    const { tokenSymbol, tokenName } = useTokenizedIDA({ address: subscription })

    return {
      key: subscription,
      value: tokenName
    }

  })

  const handleSell = () => {
    sellOrder(input.subscription, input.tokenAmount, input.tokenPrice)
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
            <CustomSelect
              name='subscription'
              value={input?.subscription}
              onChange={handleInputChange}
              fullWidth
              variant='outlined'>
              {subscriptionData.map((sub) => (
                <MenuItem
                id='subscription'
                  key={sub.key}
                  value={sub.key}>
                  {sub.value}
                </MenuItem>
              ))}
            </CustomSelect>
            <CustomFormLabel htmlFor='debt'>Token amount</CustomFormLabel>
            <CustomTextField
              name='tokenAmount'
              type='text'
              variant='outlined'
              fullWidth
              value={input?.tokenAmount}
              onChange={handleInputChange}
              placeholder='Amount of tokens to sell'
            />
            <CustomFormLabel htmlFor='debt'>Token Price</CustomFormLabel>
            <CustomTextField
              name='tokenPrice'
              type='text'
              variant='outlined'
              fullWidth
              value={input?.tokenPrice}
              onChange={handleInputChange}
              placeholder='Price per token'
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
                  onClick={handleSell}
                  variant='contained'
                  color={activeStep === steps.length - 1 ? 'success' : 'secondary'}>
                  {'Sell'}
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
