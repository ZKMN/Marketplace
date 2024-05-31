import React from 'react';

import { PaymentSteps } from '@/widgets/PaymentSteps';

import { BaseContainer } from '@/shared/components';

import { Title } from './components';

export const Checkout = () => (
  <BaseContainer mt={3} mb={3} maxWidth={800}>
    <Title />

    <PaymentSteps />
  </BaseContainer>
);
