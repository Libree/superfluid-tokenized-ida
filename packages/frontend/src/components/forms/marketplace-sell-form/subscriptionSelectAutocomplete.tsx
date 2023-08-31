import React from 'react';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CustomTextField from '../theme-elements/CustomTextField';
import { useTokenizedIDA } from '../../../../hooks/useTokenizedIDA';


const SubscriptionSelectAutocomplete = ({ subscriptions, onChange }) => {

    const subscriptionData = subscriptions.map(sub => {
        const { subscription } = sub
        const { tokenSymbol, tokenName } = useTokenizedIDA({ address: subscription })

        return {
            sub: tokenSymbol,
            label: tokenName
        }

    })


    return (
        <Autocomplete
            onChange={onChange}
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
                    name={''}
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
