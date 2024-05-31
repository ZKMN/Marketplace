import React from 'react';
import { Grid } from '@mui/material';
import { useSearchParams } from 'next/navigation';

import { IntlButton } from '@/shared/components';
import { useClickRedirect } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const ClearAllFiltersButton = () => {
  const searchParams = useSearchParams();

  const [handlePush] = useClickRedirect();

  return (
    <Grid item>
      <IntlButton
        intl={{ label: 'clearFilters' }}
        color="secondary"
        onClick={handlePush(`${Links.CATALOGUE}/1`)}
        disabled={!searchParams.toString()}
      />
    </Grid>
  );
};
