'use client';

import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import { BasketProductActions } from '@/features/BasketProductActions';

import { ProductBasketDetails } from '@/entities/Product';

import { IntlButton, IntlTypography } from '@/shared/components';
import { getPrice } from '@/shared/lib/helpers';
import { useClickRedirect } from '@/shared/lib/hooks';
import { basketStore } from '@/shared/lib/store';
import { Links } from '@/shared/types';

import { ProductSkeleton } from './ProductSkeleton';

import { incrStepAction } from '../../lib/store';

export const BasketDetailsStep = () => {
  const basket = basketStore((state) => state.basket);
  const isBasketLoading = basketStore((state) => state.isBasketLoading);

  const [handleRedirect] = useClickRedirect();

  if (isBasketLoading) {
    return (
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={1}>
            {Array.from({ length: 2 }).map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid item key={index} xs={12}>
                <ProductSkeleton />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <Grid container mb={2} spacing={1}>
          {basket?.items?.map(({ product, quantity }) => (
            <Grid item key={product.productId} xs={12}>
              <ProductBasketDetails
                product={product}
                quantity={quantity}
                actions={(
                  <BasketProductActions
                    shoesType={product.shoesType}
                    sizeId={product.size.id}
                    quantity={quantity}
                    productId={product.productId}
                  />
                )}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          p={2}
          bgcolor="background.default"
          borderRadius={2}
        >
          <IntlTypography
            mb={2}
            intl={{ label: 'titles.orderSummary' }}
            color="primary"
            fontWeight={700}
            textTransform="uppercase"
            sx={({ breakpoints }) => ({
              fontSize: '1.5rem',
              [breakpoints.down('sm')]: {
                fontSize: '1rem',
              },
            })}
          />

          <Divider />

          <Grid
            mt={2}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <IntlTypography
              intl={{ label: 'titles.totalQty', values: { quantity: basket?.numItems } }}
              color="text.grey"
              fontSize="1.2rem"
              fontWeight={700}
            />

            <Typography
              color="text.grey"
              fontSize="1.2rem"
              fontWeight={700}
            >
              {getPrice(basket?.total)}
            </Typography>
          </Grid>
        </Box>

        <Divider sx={{ margin: '24px 0' }} />

        <Grid container spacing={2}>
          <Grid item flex={1}>
            <IntlButton
              intl={{ label: 'buyMore' }}
              size="small"
              color="secondary"
              onClick={handleRedirect(Links.CATALOGUE)}
            />
          </Grid>

          <Grid item flex={1}>
            <IntlButton
              intl={{ label: 'next' }}
              size="small"
              color="primary"
              onClick={incrStepAction}
              disabled={!basket?.items?.length}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
