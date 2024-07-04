import { apiPost } from '@/shared/api/instance';
import { errorMessage, getFBAEvent } from '@/shared/lib/helpers';
import { ICarrier, IShippingDetails, TLanguages } from '@/shared/types';

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

    getFBAEvent('Client Secret created');

    return { orderNumber: data.orderNumber, clientSecret: data.clientSecret };
  } catch (error) {
    getFBAEvent('Client Secret create error');

    errorMessage('Error en el proceso de pago. Client secret', { toastId: 'pay-error' });

    return { orderNumber: 0, clientSecret: '' };
  }
};
