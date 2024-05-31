'use client';

import React from 'react';

import { BaseContainer, IntlTypography } from '@/shared/components';

import { BlogItem } from './components';
import { ARTICLES } from './consts';

export const Blog = () => (
  <BaseContainer mt={3} mb={3} maxWidth={1000}>
    <IntlTypography
      color="primary"
      variant="h1"
      component="h1"
      fontWeight={700}
      textAlign="center"
      intl={{ label: 'links.blog' }}
      sx={({ breakpoints }) => ({
        mb: 3,
        fontSize: '2.5rem',
        [breakpoints.down('lg')]: {
          fontSize: '1.5rem',
        },
      })}
    />

    {ARTICLES.map((article) => (
      <BlogItem
        key={article.link}
        link={article.link}
        date={article.date}
        image={article.image}
        intlTitle={article.intlTitle}
        intlDescription={article.intlDescription}
      />
    ))}
  </BaseContainer>
);
