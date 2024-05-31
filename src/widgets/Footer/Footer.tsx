import React from 'react';
import { Box, Divider } from '@mui/material';

import { BaseContainer } from '@/shared/components';

import { MainDetails, SubDetails } from './components';

export const Footer = () => (
  <Box component="footer" bgcolor="#000000">
    <BaseContainer>
      <MainDetails />

      <Divider sx={{ bgcolor: '#FFFFFF' }} />

      <SubDetails />
    </BaseContainer>
  </Box>
);
