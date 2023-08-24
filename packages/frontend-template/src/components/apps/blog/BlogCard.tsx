// third-party
import NextLink  from 'next/link';
import { useDispatch } from '../../../store/Store';
import {
  CardContent,
  Stack,
  Avatar,
  Typography,
  CardMedia,
  Chip,
  Grid,
  Tooltip,
  Box,
} from '@mui/material';
import { IconEye, IconPoint } from '@tabler/icons-react';
import { fetchBlogPost } from '../../../store/apps/blog/BlogSlice';
import BlankCard from '../../shared/BlankCard';
import { BlogPostType } from '../../../types/apps/blog';
import Image from 'next/image';

interface Btype {
  post: BlogPostType;
  index?: number;
}

const BlogCard = ({ post }: Btype) => {
  const dispatch = useDispatch();
  const { coverImg, title, price, category, author, currency }: any = post;

  const linkTo = title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

  return (
    <Grid item xs={12} lg={4} md={4} sm={6} display="flex" alignItems="stretch">
      <BlankCard className="hoverCard">
        <>
          <Typography
            component={NextLink}
            href={`/apps/blog/detail/${linkTo}`}
            onClick={() => dispatch(fetchBlogPost(linkTo))}
          >
            <CardMedia component="img" height="240" image={coverImg} alt="green iguana" />
          </Typography>
          <CardContent>
            <Stack direction="row" sx={{ marginTop: '-45px' }}>
              <Tooltip title={author?.name} placement="top">
                <Avatar aria-label="recipe" src={author?.avatar}></Avatar>
              </Tooltip>
              <Chip
                sx={{ marginLeft: 'auto', marginTop: '-21px', backgroundColor: 'white' }}
                label="2 min Read"
                size="small"
              ></Chip>
            </Stack>
            <Chip label={category} size="small" sx={{ marginTop: 2 }}></Chip>
            <Box my={3}>
              <Typography
                gutterBottom
                variant="h5"
                color="inherit"
                sx={{ textDecoration: 'none' }}
                component={NextLink}
                href={`/apps/blog/detail/${linkTo}`}
                onClick={() => dispatch(fetchBlogPost(linkTo))}
              >
                {title}
              </Typography>
            </Box>
            <Stack direction="row" gap={3} alignItems="center">
              <Stack direction="row" gap={1} alignItems="center">
                <Image src={''} alt='' className='rounded-full' /> {price}
              </Stack>

              <Stack direction="row" ml="auto" alignItems="center">
                <IconPoint size="16" />
                <small>{author?.name}</small>
              </Stack>
            </Stack>
          </CardContent>
        </>
      </BlankCard>
    </Grid>
  );
};

export default BlogCard;
