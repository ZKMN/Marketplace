import React from 'react';
import { useBoolean } from 'ahooks';

import { FootSizeModal } from '@/entities/Modals';

import { IntlButton } from '@/shared/components';

export const FootSizeButton = ({ color }: { color?: 'primary';}) => {
  const [isOpen, { setTrue, setFalse }] = useBoolean();

  return (
    <>
      <FootSizeModal
        isOpen={isOpen}
        onClose={setFalse}
      />

      <IntlButton
        intl={{ label: 'findYourFit' }}
        onClick={setTrue}
        variant="text"
        sx={{
          p: 0,
          width: 'auto',
          color: color || '#ffffff',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      />
    </>
  );
};
