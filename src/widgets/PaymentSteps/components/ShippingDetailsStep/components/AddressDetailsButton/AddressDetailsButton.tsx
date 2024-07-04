import React from 'react';
import { useBoolean } from 'ahooks';

import { AddressModal } from '@/entities/Modals';

import { IntlButton } from '@/shared/components';
import { basketStore } from '@/shared/lib/store';

export const AddressDetailsButton = () => {
  const carrier = basketStore((state) => state.carrier);

  const [isOpen, { setTrue, setFalse }] = useBoolean();

  if (carrier) {
    return null;
  }

  return (
    <>
      <AddressModal
        isOpen={isOpen}
        onClose={setFalse}
      />

      <IntlButton
        sx={{ fontSize: '0.8rem', padding: '0 4px', ml: 1 }}
        intl={{ label: 'address' }}
        onClick={setTrue}
      />
    </>
  );
};
