'use client';

import React, { Suspense } from 'react';
import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import { ProductPrice, ProductTopSale } from '@/entities/Product';

import { getShoesType } from '@/shared/lib/helpers';
import { IProductDetails } from '@/shared/types';

import { AddProductButton } from './AddProductButton';
import { Carousel } from './Carousel';
import { Characters } from './Characters';
import { ChooseColor } from './ChooseColor';
import { ChooseQuantity } from './ChooseQuantity';
import { ChooseSize } from './ChooseSize';
import { DetailsSkeleton } from './DetailsSkeleton';
import { FootLength } from './FootLength';
import { YouMayLike } from './YouMayLike';

import { useGetProduct } from '../../api/hooks';

const DetailsComponent = ({ product }: { product?: IProductDetails; }) => {
  const { data } = useGetProduct(product);

  return (
    <Grid container mt={2}>
      <Grid
        item
        xs={12}
        md={5}
        lg={6}
        position="relative"
        component="section"
      >
        <Box
          position="absolute"
          top={10}
          right={0}
          zIndex={2}
        >
          <ProductTopSale
            size="medium"
            topSales={false}
          />
        </Box>

        <Carousel images={data?.images} />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        lg={5}
        component="section"
        sx={({ breakpoints }) => ({
          [breakpoints.up('md')]: {
            ml: 8,
          },
          [breakpoints.down('md')]: {
            mt: 3,
          },
        })}
      >
        <Grid container>
          <Grid item xs={12} mb={2}>
            <Grid container>
              <Typography color="text.grey">
                {data?.code}
              </Typography>
            </Grid>

            <Grid container mb={5}>
              <Typography
                variant="h1"
                fontWeight={700}
                sx={({ breakpoints }) => ({
                  fontSize: '3rem',
                  [breakpoints.down('md')]: {
                    fontSize: '2rem',
                  },
                })}
              >
                {getShoesType(data?.shoesType)}
              </Typography>
            </Grid>

            <Grid
              container
              position="relative"
              justifyContent="space-between"
              sx={({ breakpoints }) => ({
                mb: 5,
                [breakpoints.down('md')]: {
                  mb: 2,
                },
              })}
            >
              <Grid item>
                <ProductPrice
                  large
                  widthTaxIncluded
                  price={data?.price}
                  priceInitial={data?.priceInitial}
                  withDiscount={!!data?.discount}
                />
              </Grid>

              {!!data?.discount && (
                <Grid
                  container
                  top={-10}
                  right={0}
                  width={60}
                  height={60}
                  zIndex={2}
                  position="absolute"
                  bgcolor="background.primary"
                  borderRadius="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    color="text.white"
                    fontSize="1.4rem"
                    fontWeight={700}
                  >
                    {`-${data?.discount.toFixed(0)}%`}
                  </Typography>
                </Grid>
              )}
            </Grid>

            <Stack
              divider={<Divider flexItem />}
              spacing={2}
            >
              <FootLength sizes={data?.sizes} />

              <ChooseSize sizes={data?.sizes} />

              <ChooseColor color={data?.color} colors={data?.colors} />

              <ChooseQuantity available={data?.available || 1} />
            </Stack>
          </Grid>

          <Characters details={data?.details} />

          <YouMayLike youMayLike={data?.youMayLike} />

          {data && <AddProductButton />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export const Details = ({ product }: { product?: IProductDetails; }) => (
  <Suspense fallback={<DetailsSkeleton />}>
    <DetailsComponent product={product} />
  </Suspense>
);
