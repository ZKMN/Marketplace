import { Metadata } from 'next';

import { TermsConditions } from '@/pagesLayer/TermsConditions';

import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getEnMetadata({
      url: `${config.urls.site}/${lng}${Links.TERMS_CONDITIONS}`,
      title: 'Terms and conditions - Weestep Kids',
      description: 'Our secure transactions and transparent rules ensure that your shopping experience is smooth and seamless.',
    });
  }

  return getEsMetadata({
    url: `${config.urls.site}/${lng}${Links.TERMS_CONDITIONS}`,
    title: 'Términos y condiciones - Weestep Kids',
    // eslint-disable-next-line max-len
    description: 'Nuestras transacciones seguras y normas transparentes garantizan que su experiencia de compra sea fluida y sin interrupciones.',
  });
}

const TermsConditionsPage = () => <TermsConditions />;

export default TermsConditionsPage;
