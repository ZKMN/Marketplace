import React, { Suspense, useEffect } from 'react';
import { CheckCircleTwoTone } from '@mui/icons-material';
import { Divider, Grid, Typography } from '@mui/material';
import { useUnmount } from 'ahooks';
import { useQueryState } from 'nuqs';

import { IntlButton, IntlTypography, Loading } from '@/shared/components';
import { getFBAEvent } from '@/shared/lib/helpers';
import { useClickRedirect } from '@/shared/lib/hooks';
import { basketStore, resetBasketAction } from '@/shared/lib/store';
import { Links } from '@/shared/types';

import { checkoutStore, resetPaymentStoreAction } from '../../lib/store';

const SuccessDetailsComponent = () => {
  const step = checkoutStore((state) => state.step);
  const email = checkoutStore((state) => state.shippingDetails?.email);
  const orderId = basketStore((state) => state.orderId);

  const [handleRedirect] = useClickRedirect();

  const [paymentStatus] = useQueryState('payment_status');
  const [redirectStatus] = useQueryState('redirect_status');

  useEffect(() => {
    if (orderId && (paymentStatus === 'succeeded' || redirectStatus === 'succeeded')) {
      getFBAEvent('Order Placed');
      checkoutStore.setState({ step: 3 });
      resetBasketAction();
    }
  }, [orderId, redirectStatus, paymentStatus]);

  useUnmount(() => {
    resetPaymentStoreAction();
  });

  if (!orderId && step !== 3) {
    return null;
  }

  return (
    <Grid
      container
      mb={5}
      alignItems="center"
      flexDirection="column"
    >

      <CheckCircleTwoTone color="success" sx={{ fontSize: '4rem' }} />

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
