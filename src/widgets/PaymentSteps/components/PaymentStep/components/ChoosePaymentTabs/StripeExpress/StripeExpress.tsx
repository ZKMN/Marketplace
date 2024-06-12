import { useStripe } from '@stripe/react-stripe-js';
import { StripeExpressCheckoutElementOptions } from '@stripe/stripe-js';

import { getClientSecret } from '@/widgets/PaymentSteps/lib/api';
import { checkoutStore } from '@/widgets/PaymentSteps/lib/store';

import { config } from '@/shared/lib/config';
import { errorMessage, getShoesType } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import { basketStore, setOrderIdAction } from '@/shared/lib/store';
import { Links } from '@/shared/types';

export const StripeExpress = ({ amount }: { amount: string; }) => {
  const products = basketStore((state) => state.basket?.items);

  const carrier = checkoutStore((state) => state.carrier);
  const shippingDetails = checkoutStore((state) => state.shippingDetails);

  const stripe = useStripe();
  const { lng } = useTypedParams();

  if (!stripe || !shippingDetails) {
    return null;
  }

  const elements = stripe.elements({
    mode: 'payment',
    locale: lng,
    // stripe working with cents
    amount: Number(amount) * 100,
    currency: 'eur',
    loader: 'always',
  });

  const expressCheckoutOptions: StripeExpressCheckoutElementOptions = {
    buttonType: {
      applePay: 'buy',
      googlePay: 'buy',
    },
    wallets: {
      applePay: 'auto',
      googlePay: 'auto',
    },
    layout: {
      maxRows: 3,
      maxColumns: 1,
    },
    paymentMethodOrder: ['google_pay', 'apple_pay'],
  };

  const expressCheckoutElement = elements.create('expressCheckout', expressCheckoutOptions);

  expressCheckoutElement.mount('#express-checkout-element');

  expressCheckoutElement.on('click', ({ resolve }) => {
    const lineItems = products?.map(({ product, quantity, itemsTotal }) => ({
      name: `${quantity} x ${getShoesType(product.shoesType)}`,
      // stripe working with cents
      amount: Number(itemsTotal * 100),
    }));

    if (carrier) {
      lineItems?.push({
        name: carrier.name,
        // stripe working with cents
        amount: carrier.price * 100,
      });
    }

    resolve({
      business: { name: 'Weestep Kids' },
      lineItems,
    });
  });

  expressCheckoutElement.on('confirm', async () => {
    try {
      const { clientSecret, orderNumber } = await getClientSecret(lng, carrier, shippingDetails);

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          // return_url: 'https://3da0-91-242-149-25.ngrok-free.app/en/checkout',
          return_url: `${config.urls.site}/${lng}${Links.CHECKOUT}`,
          payment_method_data: {
            billing_details: {
              name: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
              email: shippingDetails.email,
              phone: shippingDetails.phoneNumber,
            },
          },
        },
      });

      if (error?.message) {
        errorMessage(error.message, { style: { top: '100px', maxWidth: '450px' } });

        return;
      }

      setOrderIdAction(orderNumber);
    } catch (error) {
      errorMessage('Error en el proceso de pago.', { toastId: 'pay-error' });
    }
  });

  return null;
};
