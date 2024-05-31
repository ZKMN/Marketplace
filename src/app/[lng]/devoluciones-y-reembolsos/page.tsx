/* eslint-disable max-len */
import { Metadata } from 'next';

import { ReturnsRefunds } from '@/pagesLayer/ReturnsRefunds';

import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getEnMetadata({
      url: `${config.urls.site}/${lng}${Links.RETURNS_REFUNDS}`,
      title: 'Returns and refunds - Weestep Kids',
      description: 'Weestep Kids simplifies your returns and refunds. We are committed to your satisfaction. Shop with confidence, knowing that we are here to address your concerns.',
    });
  }

  return getEsMetadata({
    url: `${config.urls.site}/${lng}${Links.RETURNS_REFUNDS}`,
    title: 'Devoluciones y reembolsos - Weestep Kids',
    description: 'Weestep Kids simplifica tus devoluciones y reembolsos. Estamos comprometidos con tu satisfacción. Compra con confianza, sabiendo que estamos aquí para atender tus inquietudes.',
  });
}

const ReturnRefundPage = () => <ReturnsRefunds />;

export default ReturnRefundPage;
