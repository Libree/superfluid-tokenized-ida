// third-party
import NextLink from 'next/link';
import { useDispatch } from '../../store/Store';
import {
    CardContent,
    Stack,
    Typography,
    CardMedia,
    Chip,
    Grid,
    Box,
} from '@mui/material';
import { fetchBlogPost } from '../../store/apps/blog/BlogSlice';
import BlankCard from '../shared/BlankCard';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useWeb3Storage } from '../../../hooks/useWeb3Storage';
import { readFileAsImage, readFileAsJSON } from '../../../utils';
import USDCIcon from "../../../public/images/currencies/usdc-icon.png";


const SubscriptionCard = ({ sub }: any) => {
    const dispatch = useDispatch();
    const { getCID } = useWeb3Storage()
    const { flowRate, subscription }: any = sub;
    const [jsonMetadata, setJsonMetatada] = useState()
    const [image, setImage] = useState()

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
                        onClick={() => dispatch(fetchBlogPost(linkTo))}>
                        <CardMedia
                            component='img'
                            height='240'
                            image={image.src}
                            alt='green iguana'
                        />
                    </Typography>
                    <CardContent>
                        <Chip
                            label={'category'}
                            size='small'
                            sx={{ marginTop: 2 }}></Chip>
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
                        </Stack>
                    </CardContent>
                </>
            </BlankCard>
        </Grid>
    );
};

export default SubscriptionCard;
