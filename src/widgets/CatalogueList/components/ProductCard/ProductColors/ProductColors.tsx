import React from 'react';
import { Grid } from '@mui/material';

import { ProductColor } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';
import { IProduct } from '@/shared/types';

export const ProductColors = ({ colors }: { colors: IProduct['colors']; }) => (
  <Grid container mb={1.5}>
    <Grid item mr={1}>
      <IntlTypography
        intl={{ label: 'titles.color' }}
        fontSize="0.9rem"
        textAlign="left"
      />
    </Grid>

    <Grid item flex={1}>
      <Grid container spacing={0.5}>
        {colors.map(({ id, value }) => (
          <Grid item key={id}>
            <ProductColor
              key={id}
              color={value}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);
