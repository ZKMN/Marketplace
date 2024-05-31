import React from 'react';
import { Box } from '@mui/material';

import { IntlLink, IntlTypography } from '@/shared/components';
import { Links } from '@/shared/types';

export const ContactUs = ({ color, onClick }: { color?: string; onClick?: () => void; }) => (
  <Box>
    <IntlTypography
      color={color}
      intl={{
        label: 'texts.ifYouHaveQuestions',
      }}
      components={{
        link: <IntlLink
          to={Links.CONTACTS}
          intl={{ label: 'contactUs' }}
          onClick={onClick}
        />,
      }}
    />
  </Box>
);
