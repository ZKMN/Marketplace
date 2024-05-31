'use client';

import React from 'react';
import { Close } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { keys, map, upperFirst } from 'lodash';
import { useSearchParams } from 'next/navigation';
import queryString from 'query-string';

import { useMediaSizes } from '@/shared/lib/hooks';

import { useChangeFilter } from '../../lib/hooks';
import { ClearAllFiltersButton } from '../ClearAllFiltersButton';

export const RemoveFilters = () => {
  const searchParams = useSearchParams();

  const { isBiggerMd } = useMediaSizes();
  const handleRemoveFilter = useChangeFilter();

  const parsedParams = queryString.parse(searchParams.toString(), { arrayFormat: 'comma' });

  const parsedKeys = keys(parsedParams);

  if (!parsedKeys.length) {
    return null;
  }

  return (
    <Grid container spacing={1}>
      {map(parsedKeys, (key) => {
        if (Array.isArray(parsedParams[key])) {
          return map(parsedParams[key], (value) => (
            <Grid item key={value}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleRemoveFilter(key, String(value))}
                endIcon={<Close />}
              >
                {upperFirst(String(value).replace(/-/g, ' '))}
              </Button>
            </Grid>
          ));
        }

        return (
          <Grid item key={key}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleRemoveFilter(key, String(parsedParams[key]))}
              endIcon={<Close />}
            >
              {upperFirst(String(parsedParams[key]).replace(/-/g, ' '))}
            </Button>
          </Grid>
        );
      })}

      {isBiggerMd && !!parsedKeys.length && <ClearAllFiltersButton />}
    </Grid>
  );
};
