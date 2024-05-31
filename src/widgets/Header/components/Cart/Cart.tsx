'use client';

import React from 'react';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { Badge, Grid, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

import { useGetSWR } from '@/shared/api/hooks';
import { IntlLink } from '@/shared/components';
import { getPrice } from '@/shared/lib/helpers';
import { basketStore, initBasketSuccessAction } from '@/shared/lib/store/basket';
import { IBasketResponse, Links } from '@/shared/types';

const Cart = () => {
  const basket = basketStore((state) => state.basket);

  useGetSWR<IBasketResponse>({
    url: '/basket',
    withCredentials: true,
    config: {
      onSuccess: initBasketSuccessAction,
    },
  });

  return (
    <Grid item>
      <IntlLink
        display="flex"
        underline="none"
        alignItems="center"
        to={Links.CHECKOUT}
        sx={{
          cursor: !basket?.numItems ? 'default' : 'pointer',
          border: 'none',
          bgcolor: 'background.paper',
        }}
      >
        <Badge
          showZero
          color="secondary"
          badgeContent={basket?.numItems || 0}
        >
          <ShoppingBagOutlined color="inherit" />
        </Badge>

        <Typography
          ml={1}
          sx={({ breakpoints }) => ({
            [breakpoints.up('md')]: {
              fontSize: '1.2rem',
            },
          })}
        >
          {getPrice(basket?.total)}
        </Typography>
      </IntlLink>
    </Grid>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
