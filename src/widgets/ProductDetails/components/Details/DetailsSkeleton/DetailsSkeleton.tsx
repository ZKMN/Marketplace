import React from 'react';
import {
  Divider,
  Grid,
  Skeleton,
  Stack,
} from '@mui/material';

export const DetailsSkeleton = () => (
  <Grid container mt={2}>
    <Grid
      item
      xs={12}
      md={5}
      lg={6}
      position="relative"
      component="section"
    >
      <Skeleton variant="rectangular" width="100%" height={400} />
    </Grid>

    <Grid
      item
      xs={12}
      md={6}
      lg={5}
      component="section"
      sx={({ breakpoints }) => ({
        [breakpoints.up('md')]: {
          ml: 8,
        },
      })}
    >
      <Grid container>
        <Grid item xs={12} mb={2}>
          <Grid container>
            <Skeleton variant="text" width="10%" height={20} />
          </Grid>

          <Grid container mb={5}>
            <Skeleton variant="text" width="20%" height={50} />
          </Grid>

          <Grid
            container
            position="relative"
            justifyContent="space-between"
            sx={({ breakpoints }) => ({
              mb: 5,
              [breakpoints.down('md')]: {
                mb: 2,
              },
            })}
          >
            <Skeleton variant="text" width="30%" height={50} />
          </Grid>

          <Stack
            divider={<Divider flexItem />}
            spacing={2}
          >
            <Skeleton variant="rectangular" width="100%" height={50} />

            <Skeleton variant="rectangular" width="100%" height={50} />

            <Skeleton variant="rectangular" width="100%" height={50} />

            <Skeleton variant="rectangular" width="100%" height={50} />
          </Stack>
        </Grid>

        <Skeleton variant="rectangular" width="100%" height={100} />

        <Skeleton variant="rectangular" width="100%" height={50} />
      </Grid>
    </Grid>
  </Grid>
);
