'use client';

import React from 'react';

import { IntlTypography } from '@/shared/components';

export const Title = () => (
  <IntlTypography
    intl={{ label: 'titles.checkout' }}
    color="primary"
    variant="h1"
    component="h1"
    fontWeight={700}
    textAlign="center"
    sx={({ breakpoints }) => ({
      mb: 4,
      fontSize: '2.5rem',
      [breakpoints.down('lg')]: {
        fontSize: '1.5rem',
      },
    })}
  />
);
