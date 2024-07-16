import React, { useState } from 'react';
import { Close } from '@mui/icons-material';
import {
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';

import { IntlButton, IntlTypography } from '@/shared/components';
import { PROMO_CODES } from '@/shared/consts';
import { getPrice } from '@/shared/lib/helpers';
import { basketStore, resetPromoCodeAction, setPromoCodeAction } from '@/shared/lib/store';
import { TPromoCodes } from '@/shared/types';

export const PromoCode = () => {
  const promoCode = basketStore((state) => state.promoCode);

  const [value, setValue] = useState('');

  const promo = PROMO_CODES.find(({ code }) => code === value);

  if (promoCode) {
    return (
      <Grid
        container
        mb={3}
        border="1px solid"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
        borderColor="border.main"
        borderRadius="12px"
        padding="4px 16px 4px 4px"
      >
        <Grid item>
          <Grid container alignItems="center">
            <IconButton onClick={resetPromoCodeAction}>
              <Close color="baseGrey" />
            </IconButton>

            <IntlTypography intl={{ label: 'texts.appliedPromo' }} />
          </Grid>
        </Grid>

        <Typography
          color="primary"
          fontSize="1.5rem"
          fontWeight={700}
        >
          {promoCode.discountPercent ? `-${promoCode.discountPercent}%` : `-${getPrice(promoCode.discountValue)}`}
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid container mb={3}>
      <Grid item flex={1}>
        <TextField
          fullWidth
          size="small"
          value={value}
          onChange={({ target }) => setValue(target.value.toUpperCase())}
          InputProps={{
            sx: {
              borderRadius: '8px 0 0 8px',
            },
          }}
        />
      </Grid>

      <Grid item>
        <IntlButton
          sx={{ borderRadius: '0 8px 8px 0' }}
          intl={{ label: 'applyCode' }}
          disabled={!promo}
          onClick={() => {
            setValue('');
            setPromoCodeAction(value as TPromoCodes);
          }}
        />
      </Grid>
    </Grid>
  );
};
