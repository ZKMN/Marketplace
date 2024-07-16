import React from 'react';
import { Grid, Typography } from '@mui/material';

import { IntlTypography } from '@/shared/components';
import { IProduct } from '@/shared/types';

export const ProductSizes = ({ sizes }: { sizes: IProduct['sizes']; }) => (
  <Grid container mb={1}>
    <Grid item mr={2}>
      <IntlTypography
        intl={{ label: 'titles.size' }}
        fontSize="0.9rem"
        textAlign="left"
      />
    </Grid>

    <Grid item flex={1}>
      <Grid container spacing={0.5}>
        {sizes.map(({ id, value }) => (
          <Grid
            item
            key={id}
            flex={1}
            maxWidth={30}
          >
            <Grid
              padding="2px 0"
              bgcolor="background.paper"
              borderRadius="4px"
            >
              <Typography
                fontSize="0.9rem"
                textAlign="center"
              >
                {value}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);
