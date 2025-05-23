import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useBoolean } from 'ahooks';

import { errorMessage, getFBAEvent } from '@/shared/lib/helpers';
import { useTypedParams, useURLQueryState } from '@/shared/lib/hooks';
import { basketStore, setOrderIdAction } from '@/shared/lib/store';

import { getClientSecret } from '../api';

export const useSubmitStripePayment = (): [() => void, { loading: boolean; }] => {
  const carrier = basketStore((state) => state.carrier);
  const products = basketStore((state) => state.basket?.items);
  const promoCode = basketStore((state) => state.promoCode);
  const shippingDetails = basketStore((state) => state.shippingDetails);

  const stripe = useStripe();
  const elements = useElements();
  const { lng } = useTypedParams();

  const [loading, { setTrue, setFalse }] = useBoolean(false);

  const [, queryParams] = useURLQueryState();

  const cardElement = elements?.getElement('cardNumber');

  if (!stripe || !cardElement || !shippingDetails) {
    return [() => null, { loading: false }];
  }

  const handleSubmit = async () => {
    setTrue();

    try {
      const prods = products?.map((item) => ({ sizeId: item.product.size.id }));

      const { clientSecret, orderNumber } = await getClientSecret({
        lng,
        carrier,
        promoCode,
        shippingDetails,
      });

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          metadata: {
            products: JSON.stringify(prods),
            shippingDetails: JSON.stringify(prods),
          },
          billing_details: {
            name: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
            email: shippingDetails.email,
            phone: shippingDetails.phoneNumber,
          },
        },
      });

      if (result.error?.message) {
        errorMessage(result.error.message, { style: { top: '100px', maxWidth: '450px' } });

        return;
      }

      getFBAEvent('Order Placed');
      setOrderIdAction(orderNumber);

      queryParams.set('payment_status', 'succeeded');
    } catch (error) {
      errorMessage('Error en el proceso de pago. Credit card', { toastId: 'pay-error' });
    } finally {
      setFalse();
    }
  };

  return [handleSubmit, { loading }];
};
