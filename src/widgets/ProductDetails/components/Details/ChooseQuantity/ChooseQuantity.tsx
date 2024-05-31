import React from 'react';
import { Grid } from '@mui/material';
import { useQueryState } from 'nuqs';

import { ProductQuantity } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';

export const ChooseQuantity = ({ available }: { available: number; }) => {
  const [quantity, setQuantity] = useQueryState('quantity');

  return (
    <Grid container wrap="nowrap" alignItems="center">
      <Grid item xs={5} md={3}>
        <IntlTypography
          intl={{ label: 'titles.quantity' }}
          color="text.grey"
          fontSize="1.4rem"
          fontWeight={700}
        />
      </Grid>

      <Grid item xs={5} sm={3}>
        <ProductQuantity
          quantity={Number(quantity)}
          available={available}
          onPlus={() => setQuantity(String(Number(quantity) + 1))}
          onMinus={() => setQuantity(String(Number(quantity) - 1))}
        />
      </Grid>
    </Grid>
  );
};
