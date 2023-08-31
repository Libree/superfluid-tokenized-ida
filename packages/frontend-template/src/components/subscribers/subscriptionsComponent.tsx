import React, { useEffect } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useSelector, useDispatch } from '../../store/Store';
import { fetchBlogPosts } from '../../store/apps/blog/BlogSlice';
import SubscriptionCard from '../subscriptions/subscriptionCard';
import { useSubscriptionManager } from '../../../hooks/useSubscriptionManager';

const SubscriptionsComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogPosts());
    }, [dispatch]);

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
                            key={subscription.name}
                        />
                    );
                })}
            </Grid>
        </Box>
    );
};

export default SubscriptionsComponent;
