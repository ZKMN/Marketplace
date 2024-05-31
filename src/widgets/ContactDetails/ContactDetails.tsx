import React from 'react';
import { Grid } from '@mui/material';

import { Contacts, SendMessageForm } from './components';

export const ContactDetails = () => (
  <Grid
    container
    spacing={3}
    justifyContent="space-between"
  >
    <Grid item xs={12} md={5}>
      <Contacts />
    </Grid>

    <Grid item xs={12} md={6}>
      <SendMessageForm />
    </Grid>
  </Grid>
);
