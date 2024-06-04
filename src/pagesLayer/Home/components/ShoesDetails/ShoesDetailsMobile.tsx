'use client';

import React from 'react';
import { Box, Grid } from '@mui/material';

import { BaseImage, IntlTypography } from '@/shared/components';

import { SHOES_DETAILS } from '../../consts';

export const ShoesDetailsMobile = () => (
  <Box
    component="section"
    sx={({ breakpoints }) => ({
      [breakpoints.up('sm')]: {
        display: 'none',
      },
    })}
  >
    <Grid
      container
      bgcolor="background.secondary"
      padding="10px 0"
      justifyContent="center"
    >
      <Grid item xs={11}>
        <IntlTypography
          intl={{ label: 'texts.allShoesIsOrtopedic' }}
          color="text.white"
          fontWeight={700}
        />
      </Grid>
    </Grid>

    <Box bgcolor="background.cyan">
      <BaseImage
        priority
        src="/images/shoes-details-mobile.png"
        alt="Todos los zapatos de la tienda tienen una plantilla ortopedica y una suela anatomica."
        height={400}
        objectFit="contain"
      />
    </Box>

    <Grid
      container
      spacing={0.5}
      bgcolor="background.secondary"
      padding="10px 0 20px 40px"
    >
      {SHOES_DETAILS.map(((label) => (
        <Grid
          item
          xs={6}
          key={label}
          sx={{
            position: 'relative',
            listStyleType: 'none',
            '&::before': {
              content: '""',
              width: 5,
              height: 5,
              display: 'block',
              position: 'absolute',
              bgcolor: 'background.paper',
              borderRadius: '100%',
              top: '50%',
              left: -10,
              transform: 'translate(-50%, 0)',
            },
          }}
        >
          <IntlTypography
            intl={{ label: `labels.${label}` }}
            color="text.white"
            fontWeight={700}
          />
        </Grid>
      )))}
    </Grid>
  </Box>
);
