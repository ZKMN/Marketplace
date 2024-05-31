import React from 'react';
import { useBoolean } from 'ahooks';

import { checkoutStore } from '@/widgets/PaymentSteps/lib/store';

import { ShippingPolicyModal } from '@/entities/Modals';

import { IntlButton } from '@/shared/components';

export const ShippingDetailsButton = () => {
  const carrier = checkoutStore((state) => state.carrier);

  const [isOpen, { setTrue, setFalse }] = useBoolean();

  if (!carrier) {
    return null;
  }

  return (
    <>
      <ShippingPolicyModal
        isOpen={isOpen}
        onClose={setFalse}
      />

      <IntlButton
        sx={{ fontSize: '0.8rem', padding: '0 4px', ml: 1 }}
        intl={{ label: 'shippingPolicy' }}
        color="secondary"
        onClick={setTrue}
      />
    </>
  );
};
