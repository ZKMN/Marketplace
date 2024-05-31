'use client';

import React from 'react';
import { Grid } from '@mui/material';

import { FootSizeButton } from '@/entities/Buttons';

import { BaseImage, IntlLink, IntlTypography } from '@/shared/components';
import { Links } from '@/shared/types';

import { PAY_METHODS } from '../../consts';

export const SubDetails = () => (
  <Grid
    container
    padding="20px 0"
    justifyContent="space-between"
  >
    <Grid
      item
      sx={({ breakpoints }) => ({
        [breakpoints.down('sm')]: {
          mb: 2,
        },
      })}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md="auto">
          <IntlLink
            to={Links.TERMS_CONDITIONS}
            intl={{ label: 'termsCondtions' }}
            color="text.white"
            lineHeight="1.75"
          />
        </Grid>

        <Grid item xs={12} md="auto">
          <IntlLink
            to={Links.RETURNS_REFUNDS}
            intl={{ label: 'returnsRefunds' }}
            color="text.white"
            lineHeight="1.75"
          />
        </Grid>

        <Grid item xs={12} md="auto">
          <FootSizeButton />
        </Grid>
      </Grid>
    </Grid>

    <Grid item>
      <Grid container spacing={1}>
        {PAY_METHODS.map(({ title, src }) => (
          <Grid item key={title}>
            <BaseImage
              width={50}
              height={30}
              src={src}
              alt={title}
              borderRadius="4px"
            />
          </Grid>
        ))}
      </Grid>
    </Grid>

    <Grid
      item
      mt={2}
      xs={12}
    >
      <IntlTypography
        mb={1}
        intl={{ label: 'texts.rightReserved' }}
        color="text.white"
      />
    </Grid>
  </Grid>
);
