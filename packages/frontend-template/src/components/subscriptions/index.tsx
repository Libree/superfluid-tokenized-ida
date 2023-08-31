import React, { useEffect } from 'react';
import Link from 'next/link';
import { Box, Grid, Button } from '@mui/material';
import SubscriptionCard from './subscriptionCard';
import { useSubscriptionManager } from '../../../hooks/useSubscriptionManager';

const SubscriptionsComponent = () => {
    const { subscriptions } = useSubscriptionManager()

    return (
        <Box>
            <Link href='/creators/subscriptions/createSubscription'>
                <Button
                    sx={{
                        height: '3rem',
                        marginBottom: '2rem',
                        borderRadius: 2,
                        fontSize: '1rem',
                    }}>
                    Create new subscription
                </Button>
            </Link>
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
