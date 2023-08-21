import React from 'react';
import { Typography, Box, Button, styled, CardContent, Stack } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import badgeImg from 'public/images/landingpage/shape/badge.svg';
import Image from 'next/image';

const ImgCard = styled(BlankCard)(() => ({
  backgroundImage: `url('/images/landingpage/shape/line-bg-2.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  marginTop: '-70px',
}));

const StyledButton = styled(Button)(() => ({
  padding: '13px 34px',
  fontSize: '16px',
}));

const GuaranteeCard = () => {
  return (
    <ImgCard>
      <CardContent>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Box pl={2}>
              <Image src={badgeImg} alt="bagde" width={64} height={88} />
            </Box>
            <Box pl={3}>
              <Typography variant="h4">100% moneyback guarantee</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                We offer 48 hours moneyback guarantee.
              </Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              mt: {
                xs: 2,
                sm: 0,
              },
              mr: {
                lg: 2,
              },
              width: {
                xs: '100%',
                sm: 'auto',
              },
            }}
          >
            <StyledButton variant="contained" color="primary" href="#">
              Contact
            </StyledButton>
          </Stack>
        </Stack>
      </CardContent>
    </ImgCard>
  );
};

export default GuaranteeCard;
