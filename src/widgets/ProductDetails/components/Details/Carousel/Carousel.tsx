'use client';

import React from 'react';
import Slider from 'react-slick';
import { Grid } from '@mui/material';

import { BaseImage } from '@/shared/components';

import styles from './Carousel.module.scss';

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
      <Grid key={imgSrc}>
        <Grid container justifyContent="center">
          <BaseImage
            priority
            src={imgSrc}
            alt="Zapatos"
            className={styles.carouselItem}
          />
        </Grid>
      </Grid>
    ))}
  </Slider>
);
