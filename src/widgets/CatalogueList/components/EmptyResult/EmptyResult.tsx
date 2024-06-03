import React from 'react';
import { Grid } from '@mui/material';

import { BaseImage, IntlTypography } from '@/shared/components';

export const EmptyResult = () => (
  <Grid item xs={12}>
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <IntlTypography
          intl={{ label: 'titles.oops' }}
          color="text.secondary"
          textAlign="center"
          fontWeight={700}
          fontSize="1.5rem"
        />
      </Grid>

      <Grid item>
        <BaseImage
          width={250}
          height={250}
          src="/images/404.png"
          alt="No se ha encontrado"
        />

      </Grid>

      <Grid item xs={12}>
        <IntlTypography
          intl={{ label: 'texts.weSoldThis' }}
          color="text.secondary"
          textAlign="center"
        />
      </Grid>
    </Grid>
  </Grid>
);
