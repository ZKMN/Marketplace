import React from 'react';
import { Grid } from '@mui/material';

import { BaseImage, IntlTypography } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { IProductDetails, Links } from '@/shared/types';

export const YouMayLike = ({ youMayLike }: { youMayLike?: IProductDetails['youMayLike']; }) => {
  const [handleRedirect] = useClickRedirect();
  if (!youMayLike?.length) {
    return null;
  }

  return (
    <Grid container mt={3}>
      <Grid item xs={12} mb={3}>
        <IntlTypography
          intl={{ label: 'titles.youMayLike' }}
          fontSize="1.6rem"
          fontWeight={700}
        />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          {youMayLike.map((item) => (
            <Grid item key={item.id}>
              <BaseImage
                alt={item.shoesType}
                src={item.image}
                width={100}
                height={100}
                onClick={handleRedirect(`${Links.PRODUCT}/${item.shoesType}/${item.id}`)}
                objectFit="contain"
              />
            </Grid>
          ))}
        </Grid>

      </Grid>
    </Grid>
  );
};
