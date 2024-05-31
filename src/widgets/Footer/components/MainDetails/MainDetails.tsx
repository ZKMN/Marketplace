'use client';

import React from 'react';
import { Grid, Link } from '@mui/material';

import { Socials } from '@/entities/Socials';

import { BaseImage, IntlTypography } from '@/shared/components';

import { PhoneNumber } from './PhoneNumber';

export const MainDetails = () => (
  <Grid
    container
    justifyContent="space-between"
    sx={({ breakpoints }) => ({
      padding: '40px 0',
      [breakpoints.down('sm')]: {
        padding: '15px 0',
      },
    })}
  >
    <Grid
      item
      xs={12}
      md={4}
      sx={({ breakpoints }) => ({
        [breakpoints.down('sm')]: {
          mb: 4,
        },
      })}
    >
      <Grid
        container
        alignItems="center"
        flexDirection="column"
      >
        <IntlTypography
          mb={3}
          intl={{ label: 'titles.followUs' }}
          color="text.white"
          fontSize="1.5rem"
        />

        <Grid item>
          <Socials />
        </Grid>
      </Grid>
    </Grid>

    <Grid
      item
      xs={12}
      md={4}
      sx={({ breakpoints }) => ({
        [breakpoints.down('sm')]: {
          mb: 2,
        },
      })}
    >
      <Grid container justifyContent="center">
        <BaseImage
          priority
          src="/images/logo-compact.svg"
          alt="Weestep Kids"
          width={245}
          height={120}
          objectFit="contain"
        />
      </Grid>
    </Grid>

    <Grid
      item
      xs={12}
      md={4}
    >
      <Grid
        container
        alignItems="center"
        flexDirection="column"
      >
        <PhoneNumber color="text.white" />

        <Link
          // eslint-disable-next-line max-len
          href="https://www.google.com/maps/place/Weestep+Kids/@38.3451796,-0.4898472,17z/data=!3m1!4b1!4m6!3m5!1s0xd623756defcf3f7:0x78e330b29a88f2f8!8m2!3d38.3451796!4d-0.4872723!16s%2Fg%2F11vjdvrb87?entry=ttu"
          color="text.white"
          target="_blank"
          fontWeight={700}
          underline="hover"
          aria-label="Enlace al mapa"
          fontSize="1.2rem"
        >
          Carrer Jerusalem, 24,
          <br />
          03001 Alacant, Alicante
        </Link>
      </Grid>
    </Grid>
  </Grid>
);
