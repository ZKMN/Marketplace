/* eslint-disable max-len */
import { Metadata } from 'next';

import { Home } from '@/pagesLayer/Home';

import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getEnMetadata({
      url: config.urls.site,
      title: "Weestep Kids - Taking care of children's feet!",
      description: '👟💖 Immerse yourself in the world of comfort with our children\'s footwear! 💫 300+ models of orthopedic footwear - caring for your child\'s health. Find the perfect pair right now and get a -30% discount! 👣🌟',
    });
  }

  return getEsMetadata({
    url: config.urls.site,
    title: 'Weestep Kids - Cuidar los pies de los niños!',
    description: '👟💖 ¡Sumérgete en el mundo del confort con nuestro calzado infantil! 💫 Más de 300+ modelos de calzado ortopédico: cuidado de la salud de tu hijo. ¡Encuentra el par perfecto ahora y obtén un descuento del -30%! 👣🌟',
  });
}

const HomePage = () => <Home />;

export default HomePage;
