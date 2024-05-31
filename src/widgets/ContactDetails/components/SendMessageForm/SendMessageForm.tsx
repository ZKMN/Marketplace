'use client';

import React from 'react';

import { Form, IntlTypography } from '@/shared/components';

import { FIELDS } from '../../consts';
import { validationSchema } from '../../lib';

export const SendMessageForm = () => (
  <>
    <IntlTypography
      mb={2}
      intl={{ label: 'titles.leaveUsMsg' }}
      color="text.grey"
      variant="h2"
      fontSize="1.4rem"
      fontWeight={700}
      textTransform="uppercase"
    />

    <Form
      fields={FIELDS}
      buttonProps={{ intl: { label: 'confirm' } }}
      validationSchema={validationSchema}
      initialValues={{
        email: '',
        subject: '',
        message: '',
      }}
      onSubmit={({ subject, message }) => {
        window.location.href = `mailto:kidsweestep@gmail.com?subject=${subject}&body=${message}`;
      }}
    />
  </>
);
