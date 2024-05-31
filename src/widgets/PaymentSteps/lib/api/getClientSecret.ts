import axios from 'axios';

import { errorMessage } from '@/shared/lib/helpers';

export const getClientSecret = async (amount: string): Promise<string> => {
  try {
    const { data } = await axios.post('/api/create-payment-intent', {
      data: { amount: Number(amount) },
    });

    return data;
  } catch (error) {
    errorMessage('Client secret error.');

    return '';
  }
};
