import React from 'react';
import { Whatshot } from '@mui/icons-material';
import { Chip } from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';

export const ProductTopSale = ({
  size = 'small',
  topSales,
}: {
  size?: 'medium' | 'small';
  topSales?: boolean;
}) => {
  if (!topSales) {
    return null;
  }

  const [translate] = useClientTranslation('typography');

  return (
    <Chip
      sx={{ color: '#FFFFFF' }}
      size={size}
      icon={<Whatshot />}
      label={translate('labels.topSale')}
      color="success"
    />
  );
};
