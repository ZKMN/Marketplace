import React from 'react';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
} from '@mui/material';

import { IntlTypography } from '@/shared/components';
import { basketStore, setFastDelivery } from '@/shared/lib/store';

import {
  AddressDetailsButton,
  CarrierButton,
  PickupButton,
  ShippingDetailsButton,
  ShippingForm,
} from './components';

export const ShippingDetailsStep = () => {
  const carrier = basketStore((state) => state.carrier);
  const carriers = basketStore((state) => state.carriers);
  const isFastDelivery = basketStore((state) => state.isFastDelivery);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item>
                <IntlTypography
                  intl={{ label: 'titles.shippingMethod' }}
                  color="text.grey"
                  fontWeight={700}
                  textTransform="uppercase"
                />
              </Grid>

              <Grid item>
                <AddressDetailsButton />

                <ShippingDetailsButton />
              </Grid>
            </Grid>
          </Grid>

          {carriers.map((carr) => (
            <Grid item key={carr.id} xs={6} sm={3}>
              <CarrierButton
                active={carrier?.id === carr.id}
                carrier={carr}
              />
            </Grid>
          ))}

          <Grid item xs={6} sm={3}>
            <PickupButton carrier={carrier} />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              label={<IntlTypography intl={{ label: 'labels.fastDelivery' }} />}
              control={(
                <Checkbox
                  checked={isFastDelivery}
                  disabled={!carrier}
                  onChange={({ target }) => setFastDelivery(target.checked)}
                />
              )}
            />
            <FormHelperText component="div" sx={{ mt: '-10px' }}>
              <IntlTypography
                intl={{ label: 'texts.fastDeliveryOnlyFullPrice' }}
                color="text.grey"
                fontSize="0.8rem"
              />
            </FormHelperText>
          </Grid>
        </Grid>

        <Divider sx={{ margin: '10px 0 24px 0' }} />

        <ShippingForm />
      </Grid>
    </Grid>
  );
};
