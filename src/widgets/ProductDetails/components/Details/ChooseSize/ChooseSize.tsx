import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useQueryState } from 'nuqs';

import { IntlTypography } from '@/shared/components';
import { IProductDetails } from '@/shared/types';

export const ChooseSize = ({ sizes }: { sizes?: IProductDetails['sizes']; }) => {
  const [sizeId, setSizeId] = useQueryState('sizeId');

  return (
    <Grid
      container
      wrap="nowrap"
      alignItems="center"
    >
      <Grid item xs={4} md={3}>
        <IntlTypography
          intl={{ label: 'titles.size' }}
          color="text.grey"
          fontSize="1.4rem"
          fontWeight={700}
        />
      </Grid>

      <Grid item flex={1}>
        <Grid container spacing={1}>
          {sizes?.map(({ id, value }) => (
            <Grid item key={id} flex={1} maxWidth={60}>
              <Box
                width="100%"
                border="none"
                bgcolor="background.paper"
                padding={0.5}
                onClick={() => setSizeId(String(id))}
                borderRadius={1}
                component="button"
                sx={{
                  cursor: 'pointer',
                  outline: Number(sizeId) === Number(id) ? '2px solid #FF7C2A' : 'none',
                  ':focus': {
                    outline: Number(sizeId) === Number(id) ? '2px solid #FF7C2A' : '1px solid #FF7C2A',
                  },
                }}
              >
                <Typography>
                  {value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
