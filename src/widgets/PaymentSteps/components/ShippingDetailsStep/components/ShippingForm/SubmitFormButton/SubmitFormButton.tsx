import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { PICKUP_INITIAL_VALUES } from '@/widgets/PaymentSteps/consts';
import {
  checkoutStore,
  incrStepAction,
  setShippingDetailsAction,
} from '@/widgets/PaymentSteps/lib/store';
import { IShippingDetails } from '@/widgets/PaymentSteps/types';

import { IntlButton } from '@/shared/components';
import { getFBAEvent } from '@/shared/lib/helpers';

export const SubmitFormButton = () => {
  const shippingDetails = checkoutStore((state) => state.shippingDetails);

  const { formState, getValues, reset } = useFormContext<IShippingDetails>();

  useEffect(() => {
    if (!shippingDetails) {
      reset(PICKUP_INITIAL_VALUES);
    }
  }, [shippingDetails]);

  return (
    <IntlButton
      intl={{ label: 'next' }}
      size="small"
      color="primary"
      disabled={!formState.isValid}
      onClick={() => {
        const formData = getValues();

        incrStepAction();
        getFBAEvent('Shipping Details Confirmed');

        return setShippingDetailsAction(formData);
      }}
    />
  );
};
