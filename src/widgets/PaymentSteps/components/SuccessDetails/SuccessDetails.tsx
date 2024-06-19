import React, { Suspense, useEffect } from 'react';
import { CheckCircleTwoTone } from '@mui/icons-material';
import { Divider, Grid, Typography } from '@mui/material';
import { useUnmount } from 'ahooks';
import { useQueryState } from 'nuqs';

import { IntlButton, IntlTypography, Loading } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { basketStore, resetBasketAction } from '@/shared/lib/store';
import { Links } from '@/shared/types';

import { checkoutStore, resetPaymentStoreAction } from '../../lib/store';

const SuccessDetailsComponent = () => {
  const step = checkoutStore((state) => state.step);
  const email = checkoutStore((state) => state.shippingDetails?.email);
  const basketOrderId = basketStore((state) => state.orderId);

  const [handleRedirect] = useClickRedirect();

  const [paymentStatus] = useQueryState('payment_status');
  const [redirectStatus] = useQueryState('redirect_status');
  const [redirectOrderId] = useQueryState('orderId');

  const orderId = basketOrderId || redirectOrderId;

  useEffect(() => {
    if (orderId && (paymentStatus === 'succeeded' || redirectStatus === 'succeeded')) {
      checkoutStore.setState({ step: 3 });
      resetBasketAction();
    }
  }, [orderId, redirectStatus, paymentStatus]);

  useUnmount(() => {
    resetPaymentStoreAction();
  });

  if (!orderId || step !== 3) {
    return null;
  }

  return (
    <Grid
      container
      mb={5}
      alignItems="center"
      flexDirection="column"
    >
      <CheckCircleTwoTone
        sx={{ fontSize: '4rem' }}
        color="success"
      />

      <IntlTypography
        mb={1}
        intl={{ label: 'titles.orderConfirmed' }}
        fontSize="2rem"
        fontWeight={700}
      />

      <IntlTypography
        mb={2}
        intl={{ label: 'titles.orderIdValue', values: { value: orderId } }}
        fontSize="1.2rem"
        fontWeight={700}
      />

      <IntlTypography intl={{ label: 'texts.confirmDetailsOnMail' }} />

      <Typography fontWeight={700}>
        {email}
      </Typography>

      <Divider sx={{ width: '100%', margin: '24px 0' }} />

      <Grid item>
        <IntlButton
          intl={{ label: 'continueShopping' }}
          color="secondary"
          onClick={handleRedirect(Links.CATALOGUE)}
        />
      </Grid>
    </Grid>
  );
};

export const SuccessDetails = () => (
  <Suspense
    fallback={(
      <div style={{ height: 200, width: '100%' }}>
        <Loading loading />
      </div>
    )}
  >
    <SuccessDetailsComponent />
  </Suspense>
);
