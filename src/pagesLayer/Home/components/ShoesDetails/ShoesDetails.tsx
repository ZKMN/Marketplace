'use client';

import React from 'react';
import { Box, Grid, Stack } from '@mui/material';

import { BaseContainer, IntlTypography } from '@/shared/components';

import { SHOES_DETAILS } from '../../consts';

export const ShoesDetails = () => (
  <Box
    component="section"
    sx={({ breakpoints }) => ({
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    })}
  >
    <Box
      sx={({ breakpoints }) => ({
        height: 870,
        background: ({ palette }) => `${palette.background.cyan} url(/images/shoes-details.png) center no-repeat`,
        [breakpoints.down('lg')]: {
          height: 600,
          background: ({ palette }) => `${palette.background.cyan} url(/images/shoes-details-small.png) center no-repeat`,
        },
        [breakpoints.down('md')]: {
          height: 450,
          background: ({ palette }) => `${palette.background.cyan} url(/images/shoes-details-mobile.png) 100% center no-repeat`,
        },
      })}
    >
      <BaseContainer>
        <Grid
          container
          pt={6}
          pb={6}
          height="100%"
          justifyContent="space-between"
        >
          <Grid item>
            <Stack
              pl={5}
              component="ul"
              spacing={{ sm: 2, md: 3, lg: 6 }}
            >
              {SHOES_DETAILS.map(((label) => (
                <Box
                  key={label}
                  component="li"
                  sx={{
                    position: 'relative',
                    listStyleType: 'none',
                    '&::before': {
                      content: '""',
                      width: 10,
                      height: 10,
                      display: 'block',
                      position: 'absolute',
                      bgcolor: 'background.secondary',
                      borderRadius: '100%',
                      top: '50%',
                      left: -20,
                      transform: 'translate(-50%, 0)',
                    },
                  }}
                >
                  <IntlTypography
                    intl={{ label: `labels.${label}` }}
                    color="secondary"
                    fontWeight={700}
                    textTransform="uppercase"
                    sx={({ breakpoints }) => ({
                      fontSize: '2rem',
                      [breakpoints.down('lg')]: {
                        fontSize: '1.5rem',
                      },
                      [breakpoints.down('md')]: {
                        fontSize: '1.2rem',
                      },
                    })}
                  />
                </Box>
              )))}
            </Stack>
          </Grid>

          <Grid
            item
            display="flex"
            alignItems="center"
          >
            <IntlTypography
              intl={{ label: 'texts.templateDesigned' }}
              color="text.red"
              fontWeight={700}
              textTransform="uppercase"
              sx={({ breakpoints }) => ({
                pr: 5,
                fontSize: '2.2rem',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                letterSpacing: '4px',
                [breakpoints.down('lg')]: {
                  fontSize: '1.8rem',
                },
                [breakpoints.down('md')]: {
                  display: 'none',
                },
              })}
            />
          </Grid>
        </Grid>
      </BaseContainer>
    </Box>

    <Box
      bgcolor="background.secondary"
      padding="32px 0"
    >
      <BaseContainer>
        <Grid container justifyContent="center">
          <IntlTypography
            intl={{ label: 'texts.allShoesIsOrtopedic' }}
            color="text.white"
            fontWeight={700}
            textAlign="center"
            textTransform="uppercase"
            sx={({ breakpoints }) => ({
              fontSize: '2rem',
              [breakpoints.down('lg')]: {
                fontSize: '1.5rem',
              },
              [breakpoints.down('md')]: {
                fontSize: '1.2rem',
              },
            })}
          />
        </Grid>
      </BaseContainer>
    </Box>
  </Box>
);
