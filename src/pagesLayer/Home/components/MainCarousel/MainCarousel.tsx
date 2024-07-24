'use client';

import React from 'react';
import Slider from 'react-slick';
import { Box, Grid } from '@mui/material';

import { BaseContainer, BaseImage } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const MainCarousel = () => {
  const [handleRedirect] = useClickRedirect();

  const banners = [2, 3, 5, 6];

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
          {banners.map((image) => (
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
                alt={`Banner-${image}`}
                src={`/images/banners/banner-es-${image}.png`}
              />
            </Grid>
          ))}
        </Slider>
      </Box>
    </BaseContainer>
  );
};
