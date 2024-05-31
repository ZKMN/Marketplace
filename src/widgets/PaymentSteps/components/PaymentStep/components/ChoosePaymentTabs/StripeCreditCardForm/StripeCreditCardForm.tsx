import React from 'react';
import { Warning } from '@mui/icons-material';
import { Divider, Grid, TextField } from '@mui/material';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';

import { useSubmitStripePayment, useValidateCreditCardInputs } from '@/widgets/PaymentSteps/lib/hooks';
import { decrStepAction } from '@/widgets/PaymentSteps/lib/store';

import { IntlButton, LoadingIntlButton } from '@/shared/components';
import { useClientTranslation } from '@/shared/lib/hooks';

import { StripeInput } from './StripeInput';

export const StripeCreditCardForm = ({ amount }: { amount: string; }) => {
  const {
    completed,
    cardCvcError,
    cardNumberError,
    cardExpiryError,
  } = useValidateCreditCardInputs();

  const [translate] = useClientTranslation('form');
  const [handleSubmit, { loading }] = useSubmitStripePayment(amount);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="cardNumber"
            label={translate('labels.cardNumber')}
            variant="outlined"
            error={!!cardNumberError}
            helperText={cardNumberError && translate(cardNumberError)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: cardNumberError && <Warning color="error" />,
              inputComponent: StripeInput,
              inputProps: {
                component: CardNumberElement,
              },
            }}
          />
        </Grid>

        <Grid item flex={1}>
          <TextField
            required
            fullWidth
            name="cardExpiry"
            label={translate('labels.expiredDate')}
            variant="outlined"
            error={!!cardExpiryError}
            helperText={cardExpiryError && translate(cardExpiryError)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: cardExpiryError && <Warning color="error" />,
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement,
              },
            }}
          />
        </Grid>

        <Grid item flex={1}>
          <TextField
            required
            fullWidth
            name="cvc"
            label={translate('labels.cvc')}
            variant="outlined"
            error={!!cardCvcError}
            helperText={cardCvcError && translate(cardCvcError)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: cardCvcError && <Warning color="error" />,
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement,
              },
            }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ margin: '24px 0' }} />

      <Grid container spacing={2}>
        <Grid item flex={1}>
          <IntlButton
            intl={{ label: 'back' }}
            size="small"
            color="secondary"
            variant="outlined"
            onClick={decrStepAction}
          />
        </Grid>

        <Grid item flex={1}>
          <LoadingIntlButton
            intl={{ label: 'confirmOrder' }}
            size="small"
            onClick={handleSubmit}
            loading={loading}
            disabled={!completed}
          />
        </Grid>
      </Grid>
    </>
  );
};
