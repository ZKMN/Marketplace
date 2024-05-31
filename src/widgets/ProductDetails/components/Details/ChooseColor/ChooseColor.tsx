import React from 'react';
import { Grid } from '@mui/material';

import { ProductColor } from '@/entities/Product';

import { IntlTypography } from '@/shared/components';
import { useClickRedirect, useTypedParams } from '@/shared/lib/hooks';
import { IProductDetails, Links } from '@/shared/types';

export const ChooseColor = ({ color, colors }: { color?: IProductDetails['color']; colors?: IProductDetails['colors']; }) => {
  const { type } = useTypedParams();

  const [handleRedirect] = useClickRedirect();

  const filteredColors = colors?.filter(({ id }) => id !== color?.id);

  return (
    <Grid container wrap="nowrap" alignItems="center">
      <Grid item xs={4} md={3}>
        <IntlTypography
          intl={{ label: 'titles.color' }}
          color="text.grey"
          fontSize="1.4rem"
          fontWeight={700}
        />
      </Grid>

      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <ProductColor
              active
              color={color?.value}
            />
          </Grid>

          {filteredColors?.map(({ id, value, productId }) => (
            <Grid item key={id}>
              <ProductColor
                color={value}
                onClick={handleRedirect(`${Links.PRODUCT}/${type}/${productId}`)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
