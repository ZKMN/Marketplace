import React from 'react';
import {
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { upperFirst } from 'lodash';

import { IntlTypography } from '@/shared/components';
import { IProductDetails } from '@/shared/types';

export const Characters = ({ details }: { details?: IProductDetails['details']; }) => {
  if (!details?.length) {
    return null;
  }

  return (
    <Grid container mt={3}>
      <Grid item xs={12} mb={3}>
        <IntlTypography
          intl={{ label: 'titles.characteristics' }}
          fontSize="1.6rem"
          fontWeight={700}
        />
      </Grid>

      <Grid item xs={12}>
        <Stack
          spacing={1.5}
          divider={<Divider flexItem />}
        >
          {details.map((detail) => (
            <Grid container key={detail.title} justifyContent="space-between">
              <Typography fontWeight={700}>
                {upperFirst(detail.title)}
              </Typography>

              <Typography>
                {upperFirst(detail.description)}
              </Typography>
            </Grid>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};
