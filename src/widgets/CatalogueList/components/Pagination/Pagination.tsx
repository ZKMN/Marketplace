'use client';

import React from 'react';
import { Pagination as MUIPagination } from '@mui/material';

import { PRODUCTS_COUNT } from '@/shared/consts';
import { useMediaSizes, useTypedParams, useURLQueryState } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const Pagination = ({ total }: { total?: number; }) => {
  const { page } = useTypedParams();
  const { isLessSm } = useMediaSizes();

  const [handlePushQueryURL] = useURLQueryState();

  if (!total || total <= 16) {
    return null;
  }

  return (
    <MUIPagination
      sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
      size={isLessSm ? 'medium' : 'large'}
      page={Number(page)}
      color="secondary"
      shape="rounded"
      count={Math.ceil(Number(total) / PRODUCTS_COUNT)}
      onChange={(_, p) => handlePushQueryURL(`${Links.CATALOGUE}/${p}`, { scroll: true })}
    />
  );
};
