'use client';

import React from 'react';

import { IntlTypography } from '@/shared/components';

export const Title = () => (
  <IntlTypography
    color="primary"
    variant="h1"
    component="h1"
    intl={{ label: 'links.catalogue' }}
    fontWeight={700}
    sx={({ breakpoints }) => ({
      mb: 3,
      fontSize: '4rem',
      [breakpoints.down('lg')]: {
        fontSize: '3rem',
      },
      [breakpoints.down('md')]: {
        fontSize: '2rem',
      },
    })}
  />
);
