import React from 'react';
import { Grid, Typography } from '@mui/material';

import { IntlTypography } from '@/shared/components';
import { getPrice } from '@/shared/lib/helpers';

export const ProductPrice = ({
  price,
  large,
  priceInitial,
  withDiscount,
  widthTaxIncluded,
}: {
  price?: number;
  large?: boolean;
  priceInitial?: number;
  withDiscount?: boolean;
  widthTaxIncluded?: boolean;
}) => (
  <Grid container>
    <Grid item position="relative">
      <Typography
        color={withDiscount ? 'error' : ''}
        fontSize={large ? '2rem' : '1.5rem'}
        fontWeight={700}
      >
        {getPrice(price)}
      </Typography>

      {!!(priceInitial && withDiscount) && (
        <Typography
          sx={{ textDecoration: 'line-through' }}
          position="absolute"
          top={-15}
          right={0}
          color="text.grey"
          fontWeight={700}
          fontSize={large ? '1.1rem' : '0.9rem'}
        >
          {getPrice(priceInitial)}
        </Typography>
      )}
    </Grid>

    {widthTaxIncluded && (
      <Grid
        pb={1}
        ml={1}
        display="flex"
        alignItems="end"
      >
        <IntlTypography
          intl={{ label: 'labels.taxIncluded' }}
          color="text.grey"
        />
      </Grid>
    )}
  </Grid>
);
