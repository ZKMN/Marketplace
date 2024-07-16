'use client';

import { Box, Grid } from '@mui/material';

import { IntlLink, IntlTypography } from '@/shared/components';

import { ChoosePaymentTabs, OrderTotal, PromoCode } from './components';

export const PaymentStep = () => (
  <Grid container justifyContent="center">
    <Grid item xs={12} md={8}>
      <PromoCode />

      <OrderTotal />

      <IntlTypography
        intl={{ label: 'titles.paymentMethod' }}
        fontWeight={700}
        textTransform="uppercase"
      />

      <Box mb={2}>
        <IntlTypography
          intl={{ label: 'texts.paymentInfo' }}
          color="text.grey"
          fontSize="0.8rem"
          component="span"
        />

        <IntlLink
          intl={{ label: 'link' }}
          href="https://stripe.com/es/legal/privacy-center"
          fontSize="0.8rem"
        />
      </Box>

      <ChoosePaymentTabs />
    </Grid>
  </Grid>
);
