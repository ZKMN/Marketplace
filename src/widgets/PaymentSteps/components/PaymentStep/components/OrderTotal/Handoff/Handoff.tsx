import React from 'react';
import { Grid, Typography } from '@mui/material';

import { AddressDetailsButton } from '@/widgets/PaymentSteps/components/ShippingDetailsStep/components';

import { IntlTypography } from '@/shared/components';
import { getPrice } from '@/shared/lib/helpers';
import { basketStore } from '@/shared/lib/store';

export const Handoff = () => {
  const carrier = basketStore((state) => state.carrier);

  if (!carrier) {
    return (
      <Grid
        container
        mb={0.5}
        wrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <IntlTypography
            intl={{ label: 'titles.pickup' }}
            color="text.grey"
            fontWeight={700}
          />
        </Grid>

        <Grid item pr={1}>
          <AddressDetailsButton />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      mb={0.5}
      alignItems="center"
      justifyContent="space-between"
    >
      <IntlTypography
        intl={{ label: 'titles.delivery' }}
        color="text.grey"
        fontWeight={700}
      />

      {carrier.price ? (
        <Typography
          color="text.grey"
          fontWeight={700}
        >
          {getPrice(carrier.price)}
        </Typography>
      ) : (
        <IntlTypography
          intl={{ label: 'labels.free' }}
          color="text.grey"
          fontWeight={700}
        />
      )}
    </Grid>
  );
};
