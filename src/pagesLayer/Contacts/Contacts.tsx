import React from 'react';

import { ContactDetails } from '@/widgets/ContactDetails';

import { BaseContainer } from '@/shared/components';

import { Title } from './components';

export const Contacts = () => (
  <BaseContainer mt={3} mb={3} maxWidth={900}>
    <Title />

    <ContactDetails />
  </BaseContainer>
);
