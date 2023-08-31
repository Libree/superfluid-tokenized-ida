// third-party
import NextLink from 'next/link';
import { useDispatch } from '../../store/Store';
import {
    CardContent,
    Stack,
    Typography,
    CardMedia,
    Grid,
    Box,
} from '@mui/material';
import { fetchBlogPost } from '../../store/apps/blog/BlogSlice';
import { IconPoint } from '@tabler/icons-react';
import BlankCard from '../shared/BlankCard';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useWeb3Storage } from '../../../hooks/useWeb3Storage';
import { readFileAsImage, readFileAsJSON } from '../../../utils';
import USDCIcon from "../../../public/images/currencies/usdc-icon.png";
import { useTokenizedIDA } from '../../../hooks/useTokenizedIDA';

import SuperfluidCheckout from '../superfluid-checkout';

const SubscriptionCard = ({ sub }: any) => {
    const dispatch = useDispatch();
    const { getCID } = useWeb3Storage()
    const { flowRate, subscription }: any = sub;
    const [jsonMetadata, setJsonMetatada] = useState()
    const [image, setImage] = useState()
    const { tokenSymbol } = useTokenizedIDA({address: subscription})

    useEffect(() => {
        async function getMetadata() {
            const data = await getCID(sub.metadata)
            const jsonMetadata = await readFileAsJSON(data[0])
            const image = await readFileAsImage(data[1])
            setJsonMetatada(jsonMetadata)
            setImage(image)
        }

        if (sub) getMetadata()
    }, [sub])

    const linkTo = subscription
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');

    return (jsonMetadata && image &&
        <Grid
            item
            xs={12}
            lg={4}
            md={4}
            sm={6}
            display='flex'
            alignItems='stretch'>
            <BlankCard className='hoverCard'>
                <>
                    <Typography
                        component={NextLink}
                        href={`/apps/blog/detail/${linkTo}`}
                    >
                        <CardMedia
                            component='img'
                            height='240'
                            image={image.src}
                            alt=''
                        />
                    </Typography>
                    <CardContent>
                        <Box my={3}>
                            <Typography
                                gutterBottom
                                variant='h5'
                                color='inherit'
                                sx={{ textDecoration: 'none' }}
                                component={NextLink}
                                href={`/apps/blog/detail/${linkTo}`}
                                onClick={() => dispatch(fetchBlogPost(linkTo))}>
                                {jsonMetadata.name}
                            </Typography>
                        </Box>
                        <Stack
                            direction='row'
                            gap={3}
                            alignItems='center'>
                            <Stack
                                direction='row'
                                gap={1}
                                alignItems='center'>
                                <Image
                                    src={USDCIcon}
                                    alt=''
                                    width={20}
                                    height={20}
                                    style={{ borderRadius: '100%' }}
                                />{' '}
                                {flowRate.toString()}
                            </Stack>
                            <Stack
                                direction='row'
                                ml='auto'
                                alignItems='center'>
                                <IconPoint size='16' />
                                <small>{tokenSymbol}</small>
                            </Stack>
                        </Stack>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'end',
                                paddingTop: '0.5rem',
                            }}
                        >
                            <SuperfluidCheckout />
                        </div>
                    </CardContent>
                </>
            </BlankCard>
        </Grid>
    );
};

export default SubscriptionCard;
