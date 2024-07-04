import React from 'react';
import { Divider, Grid } from '@mui/material';

import {
  ADDITIONAL_FIELD,
  ADDRESS_FIELDS,
  CUSTOMER_FIELDS,
  DELIVERY_INITIAL_VALUES,
  PICKUP_INITIAL_VALUES,
} from '@/widgets/PaymentSteps/consts';
import { DELIVERY_FORM_SCHEMA, PICKUP_FORM_SCHEMA } from '@/widgets/PaymentSteps/lib/helpers';

import { FieldByType, Form, IntlButton } from '@/shared/components';
import { basketStore, decrStepAction } from '@/shared/lib/store';

import { AutocompleteInput } from './AutocompleteInput';
import { SubmitFormButton } from './SubmitFormButton';

export const ShippingForm = () => {
  const carrier = basketStore((state) => state.carrier);
  const shippingDetails = basketStore((state) => state.shippingDetails);

  const formActions = (
    <>
      <Divider sx={{ margin: '24px 0' }} />

      <Grid container spacing={2}>
        <Grid item flex={1}>
          <IntlButton
            intl={{ label: 'back' }}
            size="small"
            color="secondary"
            variant="outlined"
            onClick={decrStepAction}
          />
        </Grid>

        <Grid item flex={1}>
          <SubmitFormButton />
        </Grid>
      </Grid>
    </>
  );

  if (carrier) {
    return (
      <Form
        fields={CUSTOMER_FIELDS}
        initialValues={shippingDetails || DELIVERY_INITIAL_VALUES}
        validationSchema={DELIVERY_FORM_SCHEMA}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AutocompleteInput />
          </Grid>

          {[...ADDRESS_FIELDS, ADDITIONAL_FIELD].map((field) => (
            <Grid item xs={field.xs || 12} md={field.md} key={field.name}>
              <FieldByType field={field} />
            </Grid>
          ))}
        </Grid>

        {formActions}
      </Form>
    );
  }

  return (
    <Form
      fields={[...CUSTOMER_FIELDS, ADDITIONAL_FIELD]}
      initialValues={shippingDetails || PICKUP_INITIAL_VALUES}
      validationSchema={PICKUP_FORM_SCHEMA}
    >
      {formActions}
    </Form>
  );
};
