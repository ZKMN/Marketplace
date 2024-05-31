'use client';

import React from 'react';
import Slider from 'react-slick';
import { Box, Grid } from '@mui/material';

import { BaseContainer, BaseImage } from '@/shared/components';
import { useClickRedirect, useTypedParams } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const MainCarousel = () => {
  const { lng } = useTypedParams();

  const [handleRedirect] = useClickRedirect();

  const banners = [1, 2, 3, 4, 5, 6];

  return (
    <BaseContainer disableGutters maxWidth={1500}>
      <Box
        mb={1}
        component="section"
      >
        <Slider
          dots
          arrows
          infinite
          autoplay
          slidesToShow={1}
          autoplaySpeed={4000}
          slidesToScroll={1}
        >
          {banners.map((image, index) => (
            <Grid
              key={image}
              onClick={handleRedirect(`${Links.CATALOGUE}/1`)}
              sx={({ breakpoints }) => ({
                height: 745,
                border: 'none',
                [breakpoints.down('lg')]: {
                  height: 500,
                },
                [breakpoints.down('md')]: {
                  height: 350,
                },
                [breakpoints.down('sm')]: {
                  height: 210,
                },
              })}
            >
              <BaseImage
                pointer
                fullWidth
                alt={`Banner-${index}`}
                src={`/images/banners/banner-${'es' || lng}-${index + 1}.png`}
              />
            </Grid>
          ))}
        </Slider>
      </Box>
    </BaseContainer>
  );
};
