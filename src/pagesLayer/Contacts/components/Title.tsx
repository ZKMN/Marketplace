'use client';

import React from 'react';

import { IntlTypography } from '@/shared/components';

export const Title = () => (
  <IntlTypography
    color="primary"
    variant="h1"
    component="h1"
    fontWeight={700}
    textAlign="center"
    intl={{ label: 'links.contacts' }}
    sx={({ breakpoints }) => ({
      mb: 3,
      fontSize: '2.5rem',
      [breakpoints.down('lg')]: {
        fontSize: '1.5rem',
      },
    })}
  />
);
