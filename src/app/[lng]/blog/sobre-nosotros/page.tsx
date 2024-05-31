/* eslint-disable max-len */
import React from 'react';
import { Metadata } from 'next';
import { ArticleJsonLd } from 'next-seo';

import { AboutUsEn, AboutUsEs } from '@/pagesLayer/Blog/components';

import { config } from '@/shared/lib/config';
import { getArticleEnMetadata, getArticleEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getArticleEnMetadata({
      url: `${config.urls.site}/${lng}${Links.BLOG}/sobre-nosotros`,
      publishedTime: '2024-05-08T12:00:00',
      title: "WEESTEP children's shoe store in Alicante is comfort and style for your little ones!",
      description: "Alicante is a city where every stone breathes history and beauty. In its heart, at 24 Jerusalén street, you will find a real gem for moms and their little ones: the children's shoe store WEESTEP KIDS. Dive into the world of stylish and comfortable shoes with us!",
      tags: ['New Kids Store', 'Kids Shoes', 'Teenager Shoes'],
      images: {
        url: 'https://www.weestep-kids.es/images/articles/store-photo.png',
        width: '200px',
        height: '200px',
      },
    });
  }

  return getArticleEsMetadata({
    url: `${config.urls.site}/${lng}${Links.BLOG}/sobre-nosotros`,
    title: 'La zapatería infantil WEESTEP en Alicante es comodidad y estilo para tus pequeños!',
    description: 'Alicante es una ciudad donde cada piedra respira historia y belleza. En su corazón, en la calle Jerusalén, 24, encontrarás una verdadera joya para mamás y sus pequeños: la tienda de zapatos infantiles WEESTEP KIDS. Sumérgete en el mundo de zapatos elegantes y cómodos con nosotros!',
    publishedTime: '2024-05-08T12:00:00',
    tags: ['Nueva Tienda de Niños', 'Zapatos para Niños', 'Zapatos para Adolescentes'],
    images: {
      url: 'https://www.weestep-kids.es/images/articles/store-photo.png',
      width: '200px',
      height: '200px',
    },
  });
}

const AboutUsPage = ({ params: { lng } }: INextPageParams) => {
  if (lng === 'en') {
    return (
      <>
        <ArticleJsonLd
          useAppDir
          isAccessibleForFree
          url={`${config.urls.site}/${lng}${Links.BLOG}/sobre-nosotros`}
          type="BlogPosting"
          title="WEESTEP children's shoe store in Alicante is comfort and style for your little ones!"
          images={['https://www.weestep-kids.es/images/articles/store-photo.png']}
          dateModified="2024-05-08T12:00:00"
          datePublished="2024-05-08T12:00:00"
          publisherName="Weestep Kids"
          publisherLogo="https://www.weestep-kids.es/images/articles/author-logo.jpeg"
          description="Alicante is a city where every stone breathes history and beauty. In its heart, at 24 Jerusalén street, you will find a real gem for moms and their little ones: the children's shoe store WEESTEP KIDS. Dive into the world of stylish and comfortable shoes with us!"
          authorName={[
            {
              name: 'Weestep Kids',
              url: `${config.urls.site}/${lng}${Links.BLOG}`,
            },
          ]}
        />

        <AboutUsEn />
      </>
    );
  }

  return (
    <>
      <ArticleJsonLd
        useAppDir
        isAccessibleForFree
        url={`${config.urls.site}/${lng}${Links.BLOG}/sobre-nosotros`}
        type="BlogPosting"
        title="La zapatería infantil WEESTEP en Alicante es comodidad y estilo para tus pequeños!"
        images={['https://www.weestep-kids.es/images/articles/store-photo.png']}
        dateModified="2024-05-08T12:00:00"
        datePublished="2024-05-08T12:00:00"
        publisherName="Weestep Kids"
        publisherLogo="https://www.weestep-kids.es/images/articles/author-logo.jpeg"
        description="Alicante es una ciudad donde cada piedra respira historia y belleza. En su corazón, en la calle Jerusalén, 24, encontrarás una verdadera joya para mamás y sus pequeños: la tienda de zapatos infantiles WEESTEP KIDS. Sumérgete en el mundo de zapatos elegantes y cómodos con nosotros!"
        authorName={[
          {
            name: 'Weestep Kids',
            url: `${config.urls.site}/${lng}${Links.BLOG}`,
          },
        ]}
      />

      <AboutUsEs />
    </>
  );
};

export default AboutUsPage;
