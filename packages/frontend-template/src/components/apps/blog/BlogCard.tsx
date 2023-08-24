// third-party
import { format } from 'date-fns';
import NextLink from 'next/link';
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
  Button,
} from '@mui/material';
import { IconEye, IconMessage2, IconPoint } from '@tabler/icons-react';
import { fetchBlogPost } from '../../../store/apps/blog/BlogSlice';
import BlankCard from '../../shared/BlankCard';
import { BlogPostType } from '../../../types/apps/blog';
import productDetails from '../../superfluid-checkout/productDetails';
import paymentDetails from '../../superfluid-checkout/paymentDetails';
import superTokenList from '@superfluid-finance/tokenlist';
import SuperfluidWidget, { EventListeners, WalletManager } from '@superfluid-finance/widget';
import { useMemo } from 'react';
import { useWeb3Modal } from '@web3modal/react';

interface Btype {
  post: BlogPostType;
  index?: number;
}

const BlogCard = ({ post }: Btype) => {
  const dispatch = useDispatch();
  const { coverImg, title, view, comments, category, author, createdAt }: any = post;

  const { open, isOpen, setDefaultChain } = useWeb3Modal();
  const walletManager = useMemo<WalletManager>(
    () => ({
      open: ({ chain }) => {
        if (chain) {
          setDefaultChain(chain);
        }
        open();
      },
      isOpen,
    }),
    [open, isOpen, setDefaultChain],
  );

  const eventListeners: EventListeners = useMemo(
    () => ({
      onSuccess: () => console.log("onSuccess"),
      onSuccessButtonClick: () => console.log("onSuccessButtonClick"),
    }),
    [],
  );

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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

              <Chip label={category} size="small" sx={{ marginTop: 2 }}></Chip>
              <SuperfluidWidget
                productDetails={productDetails}
                paymentDetails={paymentDetails}
                tokenList={superTokenList}
                type='dialog'
                walletManager={walletManager}
                eventListeners={eventListeners}
              >
                {({ openModal }) => (
                  <Button onClick={() => openModal()}>
                    Buy
                  </Button>
                )}
              </SuperfluidWidget>
            </div>
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
                <IconEye size="18" /> {view}
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                <IconMessage2 size="18" /> {comments?.length}
              </Stack>

              <Stack direction="row" ml="auto" alignItems="center">
                <IconPoint size="16" />
                <small>{format(new Date(createdAt), 'E, MMM d')}</small>
              </Stack>
            </Stack>
          </CardContent>
        </>
      </BlankCard>
    </Grid>
  );
};

export default BlogCard;
