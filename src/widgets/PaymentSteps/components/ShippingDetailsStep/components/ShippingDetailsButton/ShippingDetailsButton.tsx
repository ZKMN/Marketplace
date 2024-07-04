import React from 'react';
import { useBoolean } from 'ahooks';

import { ShippingPolicyModal } from '@/entities/Modals';

import { IntlButton } from '@/shared/components';
import { basketStore } from '@/shared/lib/store';

export const ShippingDetailsButton = () => {
  const carrier = basketStore((state) => state.carrier);

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
