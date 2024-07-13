import React from 'react';
import { Card, Grid, Typography } from '@mui/material';

import { ProductTopSale } from '@/entities/Product';

import { BaseImage, RouteLink } from '@/shared/components';
import { getShoesType } from '@/shared/lib/helpers';
import { IProduct, Links } from '@/shared/types';

import { ProductColors } from './ProductColors';
import { ProductPrice } from './ProductPrice';
import { ProductSizes } from './ProductSizes';

export const ProductCard = ({ product }: { product: IProduct; }) => {
  const {
    img,
    code,
    price,
    sizes,
    shoesType,
    productId,
    priceInitial,
    colors,
    discount,
  } = product;

  return (
    <RouteLink
      to={`${Links.PRODUCT}/${shoesType}/${productId}`}
      underline="none"
    >
      <Card
        component="button"
        elevation={0}
        sx={{
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          border: '1px solid',
          display: 'flex',
          position: 'relative',
          borderColor: 'border.main',
          borderRadius: '12px',
          flexDirection: 'column',
        }}
      >
        <Grid container mb={2} p="10px 0 0 16px">
          <Grid item>
            <Typography fontWeight={700}>
              {getShoesType(shoesType)}
            </Typography>
          </Grid>

          {!!discount && (
            <Grid
              container
              position="absolute"
              top={10}
              right={10}
              width={60}
              height={60}
              zIndex={2}
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
                {`-${discount.toFixed(0)}%`}
              </Typography>
            </Grid>
          )}
        </Grid>

        <Grid
          container
          mb={2}
          position="relative"
          justifyContent="center"
        >
          <BaseImage
            src={img}
            alt={code}
            width={230}
            height={180}
          />

          <Grid
            position="absolute"
            left={0}
            bottom={-10}
          >
            <ProductTopSale topSales={false} />
          </Grid>
        </Grid>

        <Grid container flex={1}>
          <Grid item flex={1}>
            <Grid p="10px" height="100%" bgcolor="#115E6733">
              <ProductColors colors={colors} />

              <ProductSizes sizes={sizes} />

              <ProductPrice
                code={code}
                price={price}
                priceInitial={priceInitial}
                withDiscount={!!discount}
              />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </RouteLink>
  );
};
