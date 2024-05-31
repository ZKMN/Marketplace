'use client';

import React from 'react';
import { BoxProps } from '@mui/material';
import { Box } from '@mui/system';

import { useMediaSizes } from '@/shared/lib/hooks';

export const Wrapper = ({ pt, children }: React.PropsWithChildren<Omit<BoxProps, 'pt'> & { pt?: string; }>) => {
  const { isLessSm } = useMediaSizes();

  return (
    <Box
      bgcolor="background.paper"
      borderRadius={isLessSm ? '8px' : '25px'}
      padding={isLessSm ? '10px' : `${pt || '40px'} 64px 40px 64px`}
    >
      {children}
    </Box>
  );
};
