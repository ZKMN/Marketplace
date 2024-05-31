import React from 'react';
import { Box } from '@mui/material';
import { useBoolean } from 'ahooks';
import { useSearchParams } from 'next/navigation';

import { BaseDrawer, IntlButton } from '@/shared/components';
import { IFilter } from '@/shared/types';

import { Filters } from '.';

import { ClearAllFiltersButton } from '../ClearAllFiltersButton';

export const FiltersDrawer = ({ filters }: { filters?: IFilter[]; }) => {
  const [isOpen, { setTrue, setFalse }] = useBoolean();

  const searchParams = useSearchParams();

  const appliedFilters = searchParams.toString().split('&').filter(Boolean).length;

  return (
    <Box
      sx={({ breakpoints }) => ({
        [breakpoints.up('md')]: {
          display: 'none',
        },
      })}
    >
      <IntlButton
        sx={{ height: '100%' }}
        intl={{ label: 'filtersValue', values: { value: appliedFilters ? `(${appliedFilters})` : '' } }}
        color="secondary"
        onClick={setTrue}
      />

      <BaseDrawer
        open={isOpen}
        anchor="left"
        onClose={setFalse}
        titleIntl={{ label: 'titles.filters' }}
        titleExtraNode={<ClearAllFiltersButton />}
      >
        <Filters filters={filters} />
      </BaseDrawer>
    </Box>
  );
};
