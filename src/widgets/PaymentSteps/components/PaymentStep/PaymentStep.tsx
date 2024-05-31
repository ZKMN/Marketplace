'use client';

import { Box, Grid } from '@mui/material';

import { IntlLink, IntlTypography } from '@/shared/components';
import { basketStore } from '@/shared/lib/store';

import { ChoosePaymentTabs, OrderTotal } from './components';

import { checkoutStore } from '../../lib/store';

export const PaymentStep = () => {
  const basket = basketStore((state) => state.basket);
  const carrier = checkoutStore((state) => state.carrier);

  if (!basket) {
    return null;
  }

  const amount = (basket.total + (carrier?.price || 0)).toFixed(2);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <IntlTypography
          intl={{ label: 'titles.paymentMethod' }}
          fontWeight={700}
          textTransform="uppercase"
        />

        <Box mb={2}>
          <IntlTypography
            intl={{ label: 'texts.paymentInfo' }}
            fontSize="0.8rem"
            component="span"
            color="text.grey"
          />

          <IntlLink
            intl={{ label: 'link' }}
            href="https://stripe.com/es/legal/privacy-center"
            fontSize="0.8rem"
          />
        </Box>

        <ChoosePaymentTabs amount={amount} />

        <OrderTotal
          price={basket.total}
          quantity={basket.numItems}
        />
      </Grid>
    </Grid>
  );
};
