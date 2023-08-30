import React, { useEffect } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useSelector, useDispatch } from '../../store/Store';
import { fetchBlogPosts } from '../../store/apps/blog/BlogSlice';
import SubscriptionCard from '../subscriptions/subscriptionCard';

const SubscriptionsComponent = () => {
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchBlogPosts());
 }, [dispatch]);

 const blogPosts = useSelector((state) => state.blogReducer.blogposts);
 return (
  <Box>
   <Grid
    container
    spacing={3}>
    {blogPosts?.map((subscription) => {
     return (
      <SubscriptionCard
       post={subscription}
       key={subscription.id}
      />
     );
    })}
   </Grid>
  </Box>
 );
};

export default SubscriptionsComponent;
