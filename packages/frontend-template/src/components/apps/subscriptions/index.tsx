import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid, Button } from '@mui/material';
import { useSelector, useDispatch } from '../../../store/Store';
import { fetchBlogPosts } from '../../../store/apps/blog/BlogSlice';
import BlogCard from '../blog/BlogCard';

const SubscriptionsComponent = () => {
 const dispatch = useDispatch();
 const router = useRouter();

 useEffect(() => {
  dispatch(fetchBlogPosts());
 }, [dispatch]);

 const blogPosts = useSelector((state) => state.blogReducer.blogposts);

 const handleButtonClick = () => {
  router.push('/subscriptions/createSubscription');
 };

 return (
  <Box>
   <Button
    fullWidth
    onClick={handleButtonClick}
    sx={{
     height: '5rem',
     marginBottom: '2rem',
     borderRadius: 2,
     fontSize: '1.5em',
    }}>
    Create new subscription
   </Button>
   <Grid
    container
    spacing={3}>
    {blogPosts?.map((subscription) => {
     return (
      <BlogCard
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
