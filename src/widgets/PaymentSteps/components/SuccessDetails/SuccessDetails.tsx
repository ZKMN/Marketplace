import React, { Suspense, useEffect } from 'react';
import { CheckCircleTwoTone } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlButton, IntlTypography, Loading } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { resetBasketProductsAction } from '@/shared/lib/store';
import { Links } from '@/shared/types';

import { checkoutStore } from '../../lib/store';

const SuccessDetailsComponent = () => {
  const step = checkoutStore((state) => state.step);

  const [handleRedirect] = useClickRedirect();

  const [paymentIntent] = useQueryState('payment_intent');
  const [redirectStatus] = useQueryState('redirect_status');
  const [paymentIntentClientSecret] = useQueryState('payment_intent_client_secret');

  useEffect(() => {
    if (paymentIntentClientSecret && paymentIntent && redirectStatus === 'succeeded') {
      checkoutStore.setState({ step: 3 });
      resetBasketProductsAction();
    }
  }, [redirectStatus, paymentIntent, paymentIntentClientSecret]);

  if (step !== 3) {
    return null;
  }

  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
    >

      <CheckCircleTwoTone color="success" sx={{ fontSize: '5rem' }} />

      <IntlTypography
        intl={{ label: 'titles.orderConfirmed' }}
        fontSize="2rem"
        fontWeight={700}
      />

      <IntlTypography intl={{ label: 'texts.confirmDetailsOnMail' }} />

      <Grid item mt={3}>
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
