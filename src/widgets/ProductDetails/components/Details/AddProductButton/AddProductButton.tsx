import React from 'react';
import { Box } from '@mui/material';
import { useBoolean } from 'ahooks';
import { useSearchParams } from 'next/navigation';

import { usePutRequest } from '@/shared/api/hooks';
import { LoadingIntlButton } from '@/shared/components';
import { initBasketSuccessAction } from '@/shared/lib/store';
import { IBasketResponse } from '@/shared/types';

import { DetailsModal } from './DetailsModal';

export const AddProductButton = () => {
  const [isOpen, { setTrue, setFalse }] = useBoolean();

  const search = useSearchParams();

  const edit = search.get('edit');
  const sizeId = search.get('sizeId');
  const quantity = search.get('quantity');

  const [handlePutProduct, { loading }] = usePutRequest<IBasketResponse, { sizeId: number; quantity: number; }>({
    url: '/basket',
    withCredentials: true,
    config: {
      onSuccess: ({ data }) => {
        setTrue();
        initBasketSuccessAction(data);
      },
    },
  });

  return (
    <Box
      mt={3}
      width="100%"
      display="flex"
      padding="8px 0"
      position="sticky"
      bottom={0}
      zIndex={2}
      justifyContent="flex-end"
    >
      <DetailsModal
        isOpen={isOpen}
        onClose={setFalse}
      />

      <LoadingIntlButton
        sx={{ width: 'max-content' }}
        size="large"
        intl={{ label: edit ? 'edit' : 'addToCart' }}
        loading={loading}
        disabled={!sizeId}
        onClick={() => handlePutProduct({
          payload: {
            sizeId: Number(sizeId),
            quantity: Number(quantity),
          },
        })}
      />
    </Box>
  );
};
