import React from 'react';
import { Delete } from '@mui/icons-material';
import { CircularProgress, IconButton } from '@mui/material';

import { useDeleteRequest } from '@/shared/api/hooks';
import { initBasketSuccessAction } from '@/shared/lib/store';
import { IBasketResponse } from '@/shared/types';

export const DeleteBasketProductAction = ({ sizeId }:{ sizeId: number; }) => {
  const [handleDeleteProduct, { loading }] = useDeleteRequest<IBasketResponse>({
    url: `/basket/${sizeId}`,
    withCredentials: true,
    config: {
      onSuccess: ({ data }) => initBasketSuccessAction(data),
    },
  });

  return (
    <IconButton onClick={() => handleDeleteProduct()}>
      {loading ? <CircularProgress size="1.5rem" /> : <Delete color="warning" />}
    </IconButton>
  );
};
