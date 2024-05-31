import React from 'react';
import { Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { FootSizeButton } from '@/entities/Buttons';

import { IntlTypography } from '@/shared/components';
import { IProductDetails } from '@/shared/types';

export const FootLength = ({ sizes }: { sizes?: IProductDetails['sizes']; }) => {
  const [sizeId] = useQueryState('sizeId');

  const centimeters = sizes?.find(({ id }) => id === Number(sizeId))?.centimeters;

  return (
    <Grid container wrap="nowrap" alignItems="center">
      <Grid item xs={4} md={3}>
        <IntlTypography
          intl={{ label: 'titles.foot' }}
          color="text.grey"
          fontSize="1.4rem"
          fontWeight={700}
        />
      </Grid>

      <Grid item>
        <Grid container>
          <IntlTypography
            mr={2}
            fontSize="1.4rem"
            fontWeight={700}
            intl={{ label: 'labels.cmValue', values: { value: centimeters } }}
          />

          <FootSizeButton color="primary" />
        </Grid>
      </Grid>
    </Grid>
  );
};
