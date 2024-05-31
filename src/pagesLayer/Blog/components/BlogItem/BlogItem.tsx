import React from 'react';
import { Grid, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { BaseImage } from '@/shared/components';
import { useClickRedirect, useClientTranslation, useTypedParams } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const BlogItem = ({
  link,
  date,
  image,
  intlTitle,
  intlDescription,
}: {
  link: string;
  date: string;
  image: string;
  intlTitle: string;
  intlDescription: string;
}) => {
  const { lng } = useTypedParams();

  const [handlePush] = useClickRedirect();

  const [translate] = useClientTranslation('articles');

  return (
    <Grid
      container
      sx={{ cursor: 'pointer' }}
      border="1px solid"
      borderColor="border.main"
      bgcolor="transparent"
      component="button"
      onClick={handlePush(`${Links.BLOG}/${link}`)}
    >
      <Grid item xs={12} sm={6} md={5} minHeight={240}>
        <BaseImage
          fullWidth
          alt={translate(intlTitle)}
          src={image}
        />
      </Grid>

      <Grid
        item
        flex={1}
        sx={({ breakpoints }) => ({
          padding: '16px 16px 10px 32px',
          [breakpoints.down('sm')]: {
            padding: 1,
          },
        })}
      >
        <Grid
          container
          mb={1}
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            <BaseImage
              width={50}
              height={50}
              alt={translate(intlTitle)}
              src="/images/articles/author-logo.jpeg"
            />
          </Grid>

          <Grid item>
            <Typography
              color="text.grey"
              fontSize="0.8rem"
            >
              Weestep Kids
            </Typography>

            <Typography
              color="text.grey"
              fontSize="0.8rem"
            >
              {dayjs(date).locale(lng).format('MMM DD, YYYY')}
            </Typography>
          </Grid>
        </Grid>

        <Typography
          mb={1}
          textAlign="left"
          fontWeight={700}
        >
          {translate(intlTitle)}
        </Typography>

        <Typography
          color="text.grey"
          fontSize="0.9rem"
          textAlign="left"
        >
          {translate(intlDescription)}
        </Typography>
      </Grid>
    </Grid>
  );
};
