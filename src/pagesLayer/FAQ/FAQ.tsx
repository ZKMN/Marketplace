'use client';

import React from 'react';
import { Trans, TransProps } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import { FootSizeButton } from '@/entities/Buttons';

import { BaseCollapse, BaseContainer, IntlLink } from '@/shared/components';
import { FAQ_QUESTIONS } from '@/shared/consts';
import { useClientTranslation } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

const questions = Array.from({ length: FAQ_QUESTIONS }, (_, index) => index + 1);

export const FAQ = () => {
  const [translate] = useClientTranslation('faq');

  return (
    <BaseContainer
      mt={3}
      mb={3}
      maxWidth={900}
    >
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
        {translate('titles.title')}
      </Typography>

      <Typography mb={3}>
        <Trans
          t={translate as TransProps<string>['t']}
          ns="faq"
          i18nKey="texts.followingFAQ"
          components={{
            link: <IntlLink
              to={Links.CONTACTS}
              intl={{ label: 'contactUs' }}
            />,
          }}
        />
      </Typography>

      {questions.map((q) => (
        <BaseCollapse
          key={q}
          title={(
            <>
              <strong>
                {q}
                .
              </strong>
              {' '}
              {translate(`titles.question${q}`)}
            </>
          )}
        >
          <Typography>
            <Trans
              t={translate as TransProps<string>['t']}
              ns="faq"
              i18nKey={`texts.answer${q}`}
              components={{
                br: <Box component="br" />,
                FootSizeButton: <FootSizeButton color="primary" />,
                mailLink: (
                  <IntlLink href="mailto:kidsweestep@gmail.com">
                    kidsweestep@gmail.com
                  </IntlLink>
                ),
              }}
            />
          </Typography>
        </BaseCollapse>
      ))}
    </BaseContainer>
  );
};
