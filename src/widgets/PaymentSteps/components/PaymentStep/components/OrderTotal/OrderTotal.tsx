import React from 'react';
import {
  Box,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import { getBasketTotal } from '@/widgets/PaymentSteps/lib/helpers';

import { IntlTypography } from '@/shared/components';
import { getPrice } from '@/shared/lib/helpers';
import { basketStore } from '@/shared/lib/store';

import { Discount } from './Discount';
import { Handoff } from './Handoff';

export const OrderTotal = () => {
  const basket = basketStore((state) => state.basket);
  const carrier = basketStore((state) => state.carrier);
  const promoCode = basketStore((state) => state.promoCode);

  if (!basket) {
    return null;
  }

  const total = getBasketTotal({ basket, carrier, promoCode });

  return (
    <Grid container mb={3}>
      <Grid item xs={12}>
        <Box
          p={1}
          bgcolor="background.default"
          borderRadius={2}
        >
          <IntlTypography
            intl={{ label: 'titles.orderSummary' }}
            color="primary"
            fontWeight={700}
            textTransform="uppercase"
          />

          <Divider sx={{ margin: '8px 0' }} />

          <Grid
            container
            mb={0.5}
            alignItems="center"
            justifyContent="space-between"
          >
            <IntlTypography
              intl={{ label: 'titles.pairs', values: { quantity: basket?.numItems } }}
              color="text.grey"
              fontWeight={700}
            />

            <Typography
              color="text.grey"
              fontWeight={700}
            >
              {getPrice(basket?.total)}
            </Typography>
          </Grid>

          <Handoff />

          <Discount />

          <Grid
            mt={2}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <IntlTypography
              intl={{ label: 'titles.total' }}
              color="text.grey"
              fontWeight={700}
            />

            <Typography
              color="text.grey"
              fontWeight={700}
            >
              {getPrice(total)}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
