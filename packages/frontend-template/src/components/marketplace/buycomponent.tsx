import React, { useEffect } from 'react';
import { useSelector, useDispatch } from '../../store/Store';
import { fetchBlogPosts } from '../../store/apps/blog/BlogSlice';
import { Box, Grid } from '@mui/material';
import BlogCard from '../apps/blog/BlogCard';

const BuyComponent = () => {
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
    {blogPosts?.slice(0, 6).map((subscription) => {
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

export default BuyComponent;
