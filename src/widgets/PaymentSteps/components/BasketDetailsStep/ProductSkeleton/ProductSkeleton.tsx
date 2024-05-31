import React from 'react';
import { Grid, Skeleton } from '@mui/material';

export const ProductSkeleton = () => (
  <Grid
    container
    sx={{
      width: '100%',
      height: 100,
      cursor: 'pointer',
      border: '1px solid',
      display: 'flex',
      borderColor: 'border.main',
      borderRadius: '12px',
      overflow: 'hidden',
    }}
  >
    <Grid item mr={1} bgcolor="background.paper">
      <Grid container height="100%" alignItems="center">
        <Skeleton variant="rectangular" width={80} height="100%" />
      </Grid>
    </Grid>

    <Grid flex={1} p={1}>

      <Grid container>
        <Skeleton variant="text" width="35%" height={20} />
      </Grid>

      <Grid container mb={1}>
        <Skeleton variant="text" width="20%" height={20} />
      </Grid>

      <Grid container>
        <Skeleton variant="text" width="100%" height={40} />
      </Grid>
    </Grid>
  </Grid>
);
