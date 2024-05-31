import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';

export const SortBy = () => {
  const sorters = [{
    name: 'Relevance',
    value: 'relevance',
  }, {
    name: 'Newest',
    value: 'newest',
  }];

  const [translate] = useClientTranslation('form');

  return (
    <FormControl fullWidth>
      <InputLabel id="sort-by-label" size="small">
        {translate('labels.sortBy')}
      </InputLabel>

      <Select
        name="sortBy"
        size="small"
        value="newest"
        labelId="sort-by-label"
        aria-labelledby="sort-by-label"
        // onChange={handleChange}
        label={translate('labels.sortBy')}
      >
        {sorters.map(({ name, value }) => (
          <MenuItem
            key={name}
            value={value}
            sx={{
              padding: '5px',
              fontSize: '14px',
            }}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
