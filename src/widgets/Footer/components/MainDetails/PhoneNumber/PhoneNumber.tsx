import React from 'react';
import { PhoneIphone, WhatsApp } from '@mui/icons-material';
import { Grid, Link } from '@mui/material';

export const PhoneNumber = ({ color }: { color?: string; }) => (
  <Grid item mb={3}>
    <Link
      mb={1}
      href="https://wa.me/+34611822584"
      color={color || 'text.black'}
      target="_blank"
      underline="hover"
      display="flex"
      fontSize="1.4rem"
      alignItems="center"
      aria-label="Abrir chat de WhatsApp"
    >
      <WhatsApp sx={{ mr: 1 }} />

      +34 611-82-25-84
    </Link>

    <Link
      href="tel:34611822584"
      color={color || 'text.black'}
      underline="hover"
      display="flex"
      fontSize="1.4rem"
      alignItems="center"
      aria-label="Llame al +34 611-82-25-84"
    >
      <PhoneIphone sx={{ mr: 1 }} />

      +34 611-82-25-84
    </Link>
  </Grid>
);
