'use client';

import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';

import { IntlLink } from '@/shared/components';
import { getShoesType } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const Bread = () => {
  const { productId, type, lng } = useTypedParams();

  const category = lng === 'en' ? `category=${type}` : `categoria=${type}`;

  return (
    <Breadcrumbs>
      <IntlLink
        to={`${Links.CATALOGUE}/1`}
        intl={{ label: 'catalogue' }}
      />

      <IntlLink to={`${Links.CATALOGUE}/1?${category}`}>
        {getShoesType(type)}
      </IntlLink>

      <Typography color="text.grey">{productId}</Typography>
    </Breadcrumbs>
  );
};
