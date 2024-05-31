import { useEffect, useState } from 'react';
import { useElements } from '@stripe/react-stripe-js';
import { useBoolean } from 'ahooks';

export const useValidateCreditCardInputs = () => {
  const elements = useElements();

  const [cardCvcError, setCardCvcError] = useState('');
  const [cardExpiryError, setCardExpiryError] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');
  const [cvcComplete, { setTrue: setCVCComplete }] = useBoolean(false);
  const [cardNumberComplete, { setTrue: cardComplete }] = useBoolean(false);
  const [cardExpiryComplete, { setTrue: expiryComplete }] = useBoolean(false);

  useEffect(() => {
    if (elements) {
      const cardCvcElement = elements?.getElement('cardCvc');
      const cardExpiryElement = elements?.getElement('cardExpiry');
      const cardNumberElement = elements?.getElement('cardNumber');

      cardCvcElement?.on('change', ({ error, complete }) => {
        if (complete) {
          setCVCComplete();
        }

        if (error?.code === 'incomplete_cvc') {
          return setCardCvcError('errors.cardCVCIncomplete');
        }

        return setCardCvcError('');
      });

      cardExpiryElement?.on('change', ({ error, complete }) => {
        if (complete) {
          expiryComplete();
        }

        if (error?.code === 'incomplete_expiry') {
          return setCardExpiryError('errors.cardExpiryIncomplete');
        }

        if (error?.code === 'invalid_expiry_year_past') {
          return setCardExpiryError('errors.cardExpiryInvalid');
        }

        return setCardExpiryError('');
      });

      cardNumberElement?.on('change', ({ error, complete }) => {
        if (complete) {
          cardComplete();
        }

        if (error?.code === 'incomplete_number') {
          return setCardNumberError('errors.cardNumberIncomplete');
        }

        if (error?.code === 'invalid_number') {
          return setCardNumberError('errors.cardNumberInvalid');
        }

        return setCardNumberError('');
      });
    }
  }, [elements]);

  return {
    completed: cardNumberComplete && cardExpiryComplete && cvcComplete,
    cardCvcError,
    cardExpiryError,
    cardNumberError,
  };
};
