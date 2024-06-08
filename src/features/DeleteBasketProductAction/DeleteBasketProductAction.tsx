import React from 'react';
import { Delete } from '@mui/icons-material';
import { CircularProgress, IconButton } from '@mui/material';

import { useDeleteRequest } from '@/shared/api/hooks';
import { getFBAEvent } from '@/shared/lib/helpers';
import { initBasketSuccessAction } from '@/shared/lib/store';
import { IBasketResponse } from '@/shared/types';

export const DeleteBasketProductAction = ({ sizeId, onSuccess }:{ sizeId: number; onSuccess?: () => void; }) => {
  const [handleDeleteProduct, { loading }] = useDeleteRequest<IBasketResponse>({
    url: `/basket/${sizeId}`,
    withCredentials: true,
    config: {
      onSuccess: ({ data }) => {
        getFBAEvent('Product Removed');
        initBasketSuccessAction(data);

        if (!data?.items?.length) {
          onSuccess?.();
        }
      },
    },
  });

  return (
    <IconButton onClick={() => handleDeleteProduct()}>
      {loading ? <CircularProgress size="1.5rem" /> : <Delete color="warning" />}
    </IconButton>
  );
};
