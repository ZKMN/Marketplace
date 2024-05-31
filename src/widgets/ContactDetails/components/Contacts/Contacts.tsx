/* eslint-disable max-len */
import React from 'react';
import { LocationOn, PhoneIphone, WhatsApp } from '@mui/icons-material';
import { Grid, Link } from '@mui/material';

import { Socials } from '@/entities/Socials';

import { BaseImage, IntlTypography } from '@/shared/components';

export const Contacts = () => (
  <Grid container>
    <Grid item xs={12} mb={2}>
      <Grid container wrap="nowrap" display="flex" alignItems="center">
        <LocationOn />

        <Link
          ml={1}
          href="https://www.google.com/maps/place/Weestep+Kids/@38.3451796,-0.4898472,17z/data=!3m1!4b1!4m6!3m5!1s0xd623756defcf3f7:0x78e330b29a88f2f8!8m2!3d38.3451796!4d-0.4872723!16s%2Fg%2F11vjdvrb87?entry=ttu"
          target="_blank"
          color="text.black"
          underline="hover"
          aria-label="Enlace al mapa"
        >
          Carrer Jerusalem, 24, 03001 Alacant, Alicante
        </Link>
      </Grid>
    </Grid>

    <Grid item xs={12} mb={2}>
      <Link
        href="tel:34611822584"
        underline="hover"
        color="text.black"
        display="flex"
        alignItems="center"
        aria-label="Llame al +34 611-82-25-84"
      >
        <PhoneIphone sx={{ mr: 1 }} />

        +34 611-82-25-84
      </Link>
    </Grid>

    <Grid container mb={3} alignItems="center">
      <Link
        href="https://wa.me/+34611822584"
        color="text.black"
        target="_blank"
        underline="hover"
        display="flex"
        alignItems="center"
        aria-label="Abrir chat de WhatsApp"
      >
        <WhatsApp sx={{ mr: 1 }} />

        +34 611-82-25-84
      </Link>
    </Grid>

    <Grid container mb={3} alignItems="center">
      <IntlTypography
        mb={2}
        intl={{ label: 'titles.followUs' }}
        color="text.grey"
        fontWeight={700}
        textTransform="uppercase"
      />

      <Grid item xs={12}>
        <Socials />
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12} position="relative">
        <IntlTypography
          intl={{ label: 'labels.clickOpenMap' }}
          color="text.grey"
          fontSize="0.8rem"
          sx={{
            right: 0,
            bgcolor: 'rgba(255, 255, 255, .7)',
            position: 'absolute',
          }}
        />

        <Link
          href="https://www.google.com/maps/place/Weestep+Kids/@38.3451796,-0.4898472,17z/data=!3m1!4b1!4m6!3m5!1s0xd623756defcf3f7:0x78e330b29a88f2f8!8m2!3d38.3451796!4d-0.4872723!16s%2Fg%2F11vjdvrb87?entry=ttu"
          target="_blank"
          aria-label="Enlace al mapa"
        >
          <BaseImage
            fullWidth
            src="/images/map-screen.png"
            alt="Weestep Kids Alicante"
          />
        </Link>
      </Grid>
    </Grid>
  </Grid>
);
