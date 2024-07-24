'use client';

import Marquee from 'react-fast-marquee';
import { AppBar, Grid } from '@mui/material';

import { BaseContainer, BaseImage, IntlTypography } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';

import {
  Cart,
  DrawerMenu,
  LanguageSelector,
  Navigation,
} from './components';

import styles from './Header.module.scss';

export const Header = () => {
  const [handleRedirect] = useClickRedirect();

  return (
    <>
      <Grid
        container
        minHeight={40}
        bgcolor="background.primary"
        alignItems="center"
        justifyContent="center"
      >
        <Marquee autoFill>
          <IntlTypography
            pl={5}
            intl={{ label: 'texts.discount50' }}
            color="text.white"
            textAlign="center"
            fontWeight={700}
          />
          <IntlTypography
            pl={5}
            intl={{ label: 'texts.freeDelivery' }}
            color="text.white"
            textAlign="center"
            fontWeight={700}
          />
        </Marquee>
      </Grid>

      <AppBar
        color="inherit"
        position="sticky"
        component="header"
        elevation={1}
        className={styles.header}
      >
        <BaseContainer>
          <Grid
            container
            height="100%"
            component="section"
            flexDirection="column"
          >
            <Grid
              container
              pt={1}
              flex={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item position="relative">
                <BaseImage
                  pointer
                  priority
                  src="/images/logo-short.svg"
                  alt="Weestep Kids"
                  onClick={handleRedirect('/')}
                  className={styles.logo}
                />

                <IntlTypography
                  intl={{ label: 'texts.headerUnderLogo' }}
                  fontSize="1rem"
                  sx={({ breakpoints }) => ({
                    position: 'absolute',
                    left: 10,
                    bottom: -10,
                    [breakpoints.down('md')]: {
                      display: 'none',
                    },
                  })}
                />
              </Grid>

              <Grid
                item
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Grid
                  container
                  spacing={{ xs: 1, md: 3 }}
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Cart />

                  <DrawerMenu />

                  <Grid
                    item
                    sx={({ breakpoints }) => ({
                      [breakpoints.down('md')]: {
                        display: 'none',
                      },
                    })}
                  >
                    <LanguageSelector />
                  </Grid>
                </Grid>

              </Grid>
            </Grid>

            <Grid
              container
              mt={1}
              justifyContent="center"
              sx={({ breakpoints }) => ({
                pb: 2,
                [breakpoints.down('md')]: {
                  display: 'none',
                },
              })}
            >
              <Navigation />
            </Grid>
          </Grid>
        </BaseContainer>
      </AppBar>
    </>
  );
};
