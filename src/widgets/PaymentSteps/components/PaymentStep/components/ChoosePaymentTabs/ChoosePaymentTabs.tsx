/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { CreditCard } from '@mui/icons-material';
import {
  Box,
  Grid,
  Tab,
  Tabs,
} from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { decrStepAction } from '@/widgets/PaymentSteps/lib/store';

import { BaseImage, IntlButton, IntlTypography } from '@/shared/components';
import { config } from '@/shared/lib/config';
import { errorMessage } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';

import { StripeCreditCardForm } from './StripeCreditCardForm';
import { StripeExpress } from './StripeExpress';

const getStripe = async () => {
  try {
    const stripePromise = await loadStripe(String(config.keys.stripePublish));

    return stripePromise;
  } catch (error) {
    errorMessage('Payment methods not loaded.');
    return null;
  }
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const BaseTabPanel = (props: TabPanelProps) => {
  const {
    value,
    index,
    children,
    ...other
  } = props;

  return (
    <Box
      id={`pay-tabpanel-${index}`}
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`pay-tab-${index}`}
      {...other}
    >
      <Box>
        {children}
      </Box>
    </Box>
  );
};

const getA11yProps = (index: number) => ({
  id: `pay-tab-${index}`,
  'aria-controls': `pay-tabpanel-${index}`,
});

export const ChoosePaymentTabs = ({ amount }: { amount: string; }) => {
  const [value, setValue] = React.useState(0);
  const { lng } = useTypedParams();

  const tabs = [{
    title: 'titles.card',
    icon: <CreditCard
      color="baseGrey"
      fontSize="small"
    />,
  }, {
    title: 'titles.express',
    icon: (
      <Grid container spacing={0.2} alignItems="center">
        <Grid item>
          <BaseImage
            width={25}
            height={25}
            alt="Google pay"
            src="/images/pay-methods/google-pay.svg"
          />
        </Grid>
        <Grid item>
          <BaseImage
            width={25}
            height={25}
            alt="Apple pay"
            src="/images/pay-methods/apple-pay.svg"
          />
        </Grid>
        <Grid item>
          <BaseImage
            width={25}
            height={15}
            alt="Link pay"
            src="/images/pay-methods/link-pay.svg"
          />
        </Grid>
      </Grid>
    ),
  }];

  return (
    <>
      <Box mb={3}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          aria-label="pay-tabs"
          sx={{
            '.MuiTabs-indicator': {
              display: 'none',
            },
            '.MuiTabs-flexContainer': {
              padding: '2px',
            },
          }}
        >
          {tabs.map(({ title, icon }, index) => (
            <Tab
              key={title}
              component="button"
              {...getA11yProps(index)}
              label={(
                <Grid container flexDirection="column">
                  {icon}

                  <IntlTypography
                    intl={{ label: title as `${'titles.'}${string}` }}
                    color="text.grey"
                    textTransform="none"
                    textAlign="left"
                  />
                </Grid>
              )}
              sx={{
                width: 110,
                p: 1,
                ml: index !== 0 ? 1 : 0,
                minHeight: 'auto',
                bgcolor: 'background.default',
                borderRadius: 2,
                '&.Mui-selected': {
                  outline: '2px solid green',
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <BaseTabPanel value={value} index={0}>
        <Elements
          stripe={getStripe()}
          options={{ locale: lng }}
        >
          <StripeCreditCardForm amount={amount} />
        </Elements>
      </BaseTabPanel>

      <BaseTabPanel value={value} index={1}>
        <Elements
          stripe={getStripe()}
          options={{ locale: lng }}
        >
          <StripeExpress amount={amount} />

          <Grid item id="express-checkout-element" xs={12} minHeight={50} />

          <Grid container mt={2}>
            <Grid item xs={6}>
              <IntlButton
                intl={{ label: 'back' }}
                size="small"
                color="secondary"
                variant="outlined"
                onClick={decrStepAction}
              />
            </Grid>
          </Grid>
        </Elements>
      </BaseTabPanel>
    </>
  );
};
