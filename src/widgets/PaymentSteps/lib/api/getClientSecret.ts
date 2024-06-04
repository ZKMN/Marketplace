import { apiPost } from '@/shared/api/instance';
import { errorMessage } from '@/shared/lib/helpers';

import { ICarrier, ICheckoutStore, IShippingDetails } from '../../types';

export const getClientSecret = async (carrier: ICarrier | null, shippingDetails: IShippingDetails | null): Promise<string> => {
  try {
    const { data } = await apiPost<{ clientSecret: string; }, Pick<ICheckoutStore, 'carrier' | 'shippingDetails'>>({
      url: '/v1/checkout/payment-intent/',
      payload: {
        carrier,
        shippingDetails,
      },
    });

    return data.clientSecret;
  } catch (error) {
    errorMessage('Error en el proceso de pago.');

    return '';
  }
};
