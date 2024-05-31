import React from 'react';
import { Grid, Typography } from '@mui/material';

import { getPrice } from '@/shared/lib/helpers';

export const ProductPrice = ({
  code,
  price,
  priceInitial,
  withDiscount,
}: {
  code: string;
  price: number;
  priceInitial: number;
  withDiscount: boolean;
}) => (
  <Grid
    container
    wrap="nowrap"
    alignItems="center"
    justifyContent="space-between"
  >
    <Typography
      fontSize="0.9rem"
      textAlign="left"
    >
      {code}
    </Typography>

    <Grid item>
      <Grid container wrap="nowrap" alignItems="center">
        {(withDiscount && priceInitial) && (
          <Typography
            sx={{ mr: 1, textDecoration: 'line-through' }}
            textAlign="left"
          >
            {getPrice(priceInitial)}
          </Typography>
        )}

        <Typography
          color={withDiscount ? 'primary' : 'initial'}
          fontSize="1.2rem"
          textAlign="left"
          fontWeight={700}
        >
          {getPrice(price)}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);
