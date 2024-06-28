import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { upperFirst } from 'lodash';

import { useClientTranslation, useURLQueryState } from '@/shared/lib/hooks';
import { IOrdering } from '@/shared/types';

export const SortBy = ({ ordering }: { ordering?: IOrdering | null; }) => {
  const [translate] = useClientTranslation('form');
  const [, queryParams] = useURLQueryState();

  if (!ordering) {
    return null;
  }

  const value = ordering.values.find((item) => item.active)?.queryValue;

  return (
    <FormControl fullWidth>
      <InputLabel id="sort-by-label" size="small">
        {translate('labels.sortBy')}
      </InputLabel>

      <Select
        name="sortBy"
        size="small"
        value={value}
        labelId="sort-by-label"
        aria-labelledby="sort-by-label"
        label={translate('labels.sortBy')}
        onChange={({ target }) => queryParams.set(ordering.queryKey, target.value)}
      >
        {ordering.values.map(({ title, queryValue }) => (
          <MenuItem
            key={title}
            value={queryValue}
            sx={{
              padding: '5px',
              fontSize: '14px',
            }}
          >
            {upperFirst(title)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
