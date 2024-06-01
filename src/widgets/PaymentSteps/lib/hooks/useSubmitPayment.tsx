import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useBoolean } from 'ahooks';
import { useQueryState } from 'nuqs';

import { errorMessage } from '@/shared/lib/helpers';
import { basketStore, resetBasketProductsAction } from '@/shared/lib/store';

import { getClientSecret } from '../api';
import { checkoutStore, incrStepAction } from '../store';

export const useSubmitStripePayment = (amount: string): [() => void, { loading: boolean; }] => {
  const products = basketStore((state) => state.basket?.items);

  const carrier = checkoutStore((state) => state.carrier);
  const shippingDetails = checkoutStore((state) => state.shippingDetails);

  const stripe = useStripe();
  const elements = useElements();

  const [, setSuccessPayIntent] = useQueryState('payment_intent');
  const [loading, { setTrue, setFalse }] = useBoolean(false);

  const cardElement = elements?.getElement('cardNumber');

  if (!stripe || !cardElement) {
    return [() => null, { loading: false }];
  }

  const handleSubmit = async () => {
    setTrue();

    try {
      const prods = products?.map((item) => ({ sizeId: item.product.size.id }));

      const clientSecret = await getClientSecret(amount, carrier, prods, shippingDetails);

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          metadata: {
            products: JSON.stringify(prods),
            shippingDetails: JSON.stringify(prods),
          },
          billing_details: {
            name: `${shippingDetails?.firstName} ${shippingDetails?.lastName}`,
            email: shippingDetails?.email,
            phone: shippingDetails?.phoneNumber,
          },
        },
      });

      if (result.error?.message) {
        errorMessage(result.error.message, { style: { top: '100px', maxWidth: '450px' } });

        return;
      }

      incrStepAction();
      setSuccessPayIntent(String(result.paymentIntent?.id));
      resetBasketProductsAction();
    } catch (error) {
      errorMessage('Submit payment error');
    } finally {
      setFalse();
    }
  };

  return [handleSubmit, { loading }];
};
