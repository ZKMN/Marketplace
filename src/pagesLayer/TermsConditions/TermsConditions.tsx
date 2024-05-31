'use client';

import React from 'react';
import { Typography } from '@mui/material';

import { BaseContainer } from '@/shared/components';
import { useClientTranslation } from '@/shared/lib/hooks';

export const TermsConditions = () => {
  const [translate] = useClientTranslation('policies', { keyPrefix: 'termsConditions' });

  return (
    <BaseContainer mt={3} mb={3}>
      <Typography
        color="primary"
        variant="h1"
        component="h1"
        fontWeight={700}
        textAlign="center"
        sx={({ breakpoints }) => ({
          mb: 3,
          fontSize: '2.5rem',
          [breakpoints.down('lg')]: {
            fontSize: '1.5rem',
          },
        })}
      >
        {translate('titles.generalConditionsOfSale')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.generalTermsOfSaleReturnPolicy')}
      </Typography>
      <Typography mb={3}>
        {translate('texts.generalTermsOfSaleReturnPolicy')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.changesInPerformanceAndPrice')}
      </Typography>
      <Typography mb={3}>
        {translate('texts.changesInPerformanceAndPrice')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.forceMajeure')}
      </Typography>
      <Typography mb={3}>
        {translate('texts.forceMajeure')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.legalFeesAndCosts')}
      </Typography>
      <Typography mb={3}>
        {translate('texts.legalFeesAndCosts')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.warranty')}
      </Typography>
      <Typography mb={3}>
        {translate('texts.warranty')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.damagesAndLimitationOfLiability')}
      </Typography>
      <Typography mb={3}>
        {translate('texts.damagesAndLimitationOfLiability')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.purchaserResponsibility')}
      </Typography>
      <Typography mb={3}>
        {translate('texts.purchaserResponsibility')}
      </Typography>

      <Typography
        mb={1}
        variant="h2"
        textTransform="uppercase"
        fontSize="1rem"
        fontWeight={700}
      >
        {translate('titles.emailsAndSMS')}
      </Typography>
      <Typography mb={3}>
        {translate('texts.emailsAndSMS')}
      </Typography>
    </BaseContainer>
  );
};
