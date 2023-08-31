import React from 'react';
import { Box, Grid } from '@mui/material';
import SubscriptionCard from '../subscriptions/subscriptionCard';
import { useSubscriptionManager } from '../../../hooks/useSubscriptionManager';

const SubscriptionsComponent = () => {
    const { subscriptions } = useSubscriptionManager()

    return (
        <Box>
            <Grid
                container
                spacing={3}>
                {subscriptions?.map((subscription) => {
                    return (
                        <SubscriptionCard
                            sub={subscription}
                            key={subscription.subscription}
                        />
                    );
                })}
            </Grid>
        </Box>
    );
};

export default SubscriptionsComponent;
