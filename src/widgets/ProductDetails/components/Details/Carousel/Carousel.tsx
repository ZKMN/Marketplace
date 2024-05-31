'use client';

import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

import { BaseImage } from '@/shared/components';

export const Carousel = ({ images }: { images?: string[]; }) => (
  <Slider
    dots
    infinite
    autoplay
    speed={1000}
    arrows={false}
    slidesToShow={1}
    slidesToScroll={1}
    autoplaySpeed={4000}
    dotsClass="slick-dots slick-thumb-custom"
    customPaging={(i) => (
      <BaseImage
        width={50}
        height={50}
        src={images?.[i]}
        alt="Zapatos"
        objectFit="contain"
      />
    )}
  >

    {images?.map((imgSrc) => (
      <Box
        key={imgSrc}
        sx={({ breakpoints }) => ({
          minHeight: 500,
          width: '100%',
          [breakpoints.down('sm')]: {
            minHeight: 200,
          },
        })}
      >
        <BaseImage
          fullWidth
          src={imgSrc}
          alt="Zapatos"
        />
      </Box>
    ))}

  </Slider>
);
