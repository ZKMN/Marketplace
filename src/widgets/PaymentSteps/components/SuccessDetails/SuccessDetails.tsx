import React, { Suspense, useEffect } from 'react';
import { CheckCircleTwoTone } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlButton, IntlTypography, Loading } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { resetBasketAction } from '@/shared/lib/store';
import { Links } from '@/shared/types';

import { checkoutStore } from '../../lib/store';

const SuccessDetailsComponent = () => {
  const step = checkoutStore((state) => state.step);

  const [handleRedirect] = useClickRedirect();

  const [paymentStatus] = useQueryState('payment_status');
  const [redirectStatus] = useQueryState('redirect_status');

  useEffect(() => {
    if (paymentStatus === 'succeeded' || redirectStatus === 'succeeded') {
      checkoutStore.setState({ step: 3 });
      resetBasketAction();
    }
  }, [redirectStatus, paymentStatus]);

  if (step !== 3) {
    return null;
  }

  return (
    <Grid
      container
      alignItems="center"
      flexDirection="column"
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
