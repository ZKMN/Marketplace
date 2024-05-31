'use client';

import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import { upperFirst } from 'lodash';
import { useSearchParams } from 'next/navigation';

import { ProductColor } from '@/entities/Product';

import { BaseCollapse } from '@/shared/components';
import { IFilter, IFilterValue } from '@/shared/types';

import { useChangeFilter } from '../../lib/hooks';

const FilterCheckbox = ({ category, value }: { category: string; value: string; }) => {
  const searchParams = useSearchParams();

  const handleChangeCategory = useChangeFilter();

  return (
    <Checkbox
      size="small"
      color="primary"
      checked={!!searchParams.get(category)?.split(',').find((cat) => cat === value)}
      onChange={handleChangeCategory(category, value)}
    />
  );
};

const FilterItem = ({
  values,
  queryKey,
  metadata,
}: { values: IFilterValue[]; queryKey: string; metadata: IFilter['metadata']; }) => {
  if (metadata.key === 'size') {
    return values.map((filter) => (
      <FormControlLabel
        key={filter.title}
        name={filter.title}
        label={upperFirst(filter.title)}
        control={(
          <FilterCheckbox
            category={queryKey}
            value={filter.queryValue}
          />
        )}
      />
    ));
  }

  if (metadata.key === 'color') {
    return values.map((filter) => (
      <Grid container key={filter.title} height="100%">
        <FormControlLabel
          name={filter.title}
          label={(
            <Grid
              container
              justifyContent="space-between"
            >
              <Typography mr={2}>
                {upperFirst(filter.title)}
              </Typography>

              <ProductColor color={filter.queryValue} />
            </Grid>
          )}
          control={(
            <FilterCheckbox
              category={queryKey}
              value={filter.queryValue}
            />
          )}
        />
      </Grid>
    ));
  }

  return values.map((filter) => (
    <Grid container key={filter.title}>
      <FormControlLabel
        name={filter.title}
        label={upperFirst(filter.title)}
        control={(
          <FilterCheckbox
            category={queryKey}
            value={filter.queryValue}
          />
        )}
      />
    </Grid>
  ));
};

export const Filters = ({ filters }: { filters?: IFilter[]; }) => {
  const searchParams = useSearchParams();

  return filters?.map(({
    title,
    values,
    queryKey,
    metadata,
  }) => (
    <BaseCollapse
      key={title}
      title={upperFirst(title)}
      color={searchParams.get(queryKey) ? 'primary' : undefined}
    >
      <FilterItem
        values={values}
        queryKey={queryKey}
        metadata={metadata}
      />
    </BaseCollapse>
  ));
};
