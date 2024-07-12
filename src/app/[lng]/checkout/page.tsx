import { Metadata } from 'next';

import { Checkout } from '@/pagesLayer/Checkout';

import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getEnMetadata({
      url: `${config.urls.site}/${lng}${Links.CHECKOUT}`,
      title: 'Checkout - Weestep Kids',
      description: '',
    });
  }

  return getEsMetadata({
    url: `${config.urls.site}/${lng}${Links.CHECKOUT}`,
    title: 'Checkout - Weestep Kids',
    description: '',
  });
}

const CheckoutPage = () => <Checkout />;

export default CheckoutPage;
