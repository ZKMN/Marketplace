import { apiPost } from '@/shared/api/instance';
import { errorMessage } from '@/shared/lib/helpers';
import { TLanguages } from '@/shared/types';

import { ICarrier, IShippingDetails } from '../../types';

export const getClientSecret = async (
  lng: TLanguages,
  carrier: ICarrier | null,
  shippingDetails: IShippingDetails | null,
): Promise<{ orderNumber: number; clientSecret: string; }> => {
  try {
    const { data } = await apiPost<{ clientSecret: string; orderNumber: number;}, { carrier: string; shippingDetails: string; }>({
      url: `/${lng}/v1/checkout/payment-intent/`,
      withCredentials: true,
      payload: {
        carrier: JSON.stringify(carrier),
        shippingDetails: JSON.stringify(shippingDetails),
      },
    });

    return { orderNumber: data.orderNumber, clientSecret: data.clientSecret };
  } catch (error) {
    errorMessage('Error en el proceso de pago.', { toastId: 'pay-error' });

    return { orderNumber: 0, clientSecret: '' };
  }
};
