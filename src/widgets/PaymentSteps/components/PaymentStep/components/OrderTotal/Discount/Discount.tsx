import React from 'react';
import { Grid, Typography } from '@mui/material';

import { IntlTypography } from '@/shared/components';
import { getPrice } from '@/shared/lib/helpers';
import { basketStore } from '@/shared/lib/store';

export const Discount = () => {
  const promoCode = basketStore((state) => state.promoCode);

  if (!promoCode) {
    return null;
  }

  return (
    <Grid
      container
      wrap="nowrap"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <IntlTypography
          intl={{ label: 'titles.promo' }}
          color="text.grey"
          fontWeight={700}
        />
      </Grid>

      <Grid item pr={1}>
        <Typography
          color="text.grey"
          fontWeight={700}
        >
          {promoCode.discountPercent ? `-${promoCode.discountPercent}%` : `-${getPrice(promoCode.discountValue)}`}
        </Typography>
      </Grid>
    </Grid>
  );
};
