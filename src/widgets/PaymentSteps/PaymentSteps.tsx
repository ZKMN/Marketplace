'use client';

import React, { useEffect } from 'react';
import { AddHome, Payment, ShoppingCartCheckout } from '@mui/icons-material';
import { Grid } from '@mui/material';

import { BaseStepper } from '@/shared/components';

import { checkoutStore } from './lib/store';
import {
  BasketDetailsStep,
  PaymentStep,
  ShippingDetailsStep,
  SuccessDetails,
} from './components';

const steps = [{
  icon: <ShoppingCartCheckout />,
  intl: { label: 'titles.orderSummary' },
}, {
  icon: <AddHome />,
  intl: { label: 'titles.shippingInformation' },
}, {
  icon: <Payment />,
  intl: { label: 'titles.payment' },
}];

export const PaymentSteps = () => {
  const step = checkoutStore((state) => state.step);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <BaseStepper
          steps={steps}
          activeStep={step}
          stepNodes={{
            0: <BasketDetailsStep />,
            1: <ShippingDetailsStep />,
            2: <PaymentStep />,
          }}
        />

        <SuccessDetails />
      </Grid>
    </Grid>
  );
};
