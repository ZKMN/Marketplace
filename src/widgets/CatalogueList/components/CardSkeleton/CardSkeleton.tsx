import React from 'react';
import { Grid, Skeleton } from '@mui/material';

export const CardSkeleton = () => (
  <Grid
    container
    sx={{
      width: '100%',
      height: 365,
      cursor: 'pointer',
      border: '1px solid',
      display: 'flex',
      borderColor: 'border.main',
      borderRadius: '12px',
      overflow: 'hidden',
    }}
  >
    <Grid item xs={12} mb={2} padding="10px 16px 0 16px">
      <Grid container justifyContent="space-between">
        <Skeleton variant="rectangular" width="50%" sx={{ fontSize: '1rem' }} />

        <Skeleton variant="circular" width={40} height={40} />
      </Grid>
    </Grid>

    <Grid
      item
      mb={2}
      xs={12}
      padding="0 16px"
    >
      <Skeleton variant="rectangular" width="100%" height={180} />
    </Grid>

    <Grid item xs={12}>
      <Skeleton variant="rectangular" width="100%" height={100} />
    </Grid>
  </Grid>
);
