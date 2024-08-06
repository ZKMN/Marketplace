/* eslint-disable max-len */
import { Metadata } from 'next';
import { FAQPageJsonLd } from 'next-seo';

import { FAQ } from '@/pagesLayer/FAQ';

import { FAQ_QUESTIONS } from '@/shared/consts';
import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { useServerTranslation } from '@/shared/lib/hooks';
import { INextPageParams, Links } from '@/shared/types';

const questions = Array.from({ length: FAQ_QUESTIONS }, (_, index) => index + 1);

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getEnMetadata({
      url: `${config.urls.site}/${lng}${Links.FAQ}`,
      title: 'Frequent Questions - Weestep Kids',
      description: "🔎 Seeking answers? Discover quick solutions to common questions about Weestep Kids on our FAQ page. From returns to shipping, we've got you covered. 🛍️ Shop confidently with us! 🌟 Got questions? We have answers! 💬🔍",
    });
  }

  return getEsMetadata({
    url: `${config.urls.site}/${lng}${Links.FAQ}`,
    title: 'Preguntas Frecuentes - Weestep Kids',
    description: '🔎 ¿Buscas respuestas? Descubre soluciones rápidas a preguntas comunes sobre Weestep Kids en nuestra página de preguntas frecuentes. Desde devoluciones hasta envíos, ¡te tenemos cubierto! 🛍️ ¡Compra con confianza con nosotros! 🌟 ¿Tienes preguntas? ¡Nosotros tenemos respuestas! 💬🔍',
  });
}

const FAQPage = async ({ params: { lng } }: INextPageParams) => {
  const { translate } = await useServerTranslation(lng, 'faq');

  const quest = questions.map((q) => ({
    questionName: translate(`titles.question${q}`),
    acceptedAnswerText: translate(`texts.answer${q}`),
  }));

  return (
    <>
      <FAQPageJsonLd
        useAppDir
        mainEntity={quest}
      />

      <FAQ />
    </>
  );
};

export default FAQPage;
