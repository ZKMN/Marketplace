import React from 'react';
import { Link, Stack } from '@mui/material';

import { SOCIALS } from './consts';

export const Socials = () => (
  <Stack spacing={2} direction="row" alignItems="center">
    {SOCIALS.map(({ href, icon, title }) => (
      <Link
        key={href}
        href={href}
        target="_blank"
        aria-label={`Síguenos en ${title}`}
      >
        {icon}
      </Link>
    ))}
  </Stack>
);
