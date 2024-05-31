/* eslint-disable max-len */
import { Metadata } from 'next';
import { ArticleJsonLd } from 'next-seo';

import { Blog } from '@/pagesLayer/Blog';

import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getEnMetadata({
      url: `${config.urls.site}/${lng}${Links.BLOG}`,
      title: 'Blog - Weestep Kids',
      description: "👟 Welcome to the world of children's footwear! 🌟 Our tips will help you choose the best shoes for your little one. Discover the latest trends and secrets of comfort for their delicate feet! ✨",
    });
  }

  return getEsMetadata({
    url: `${config.urls.site}/${lng}${Links.BLOG}`,
    title: 'Blog - Weestep Kids',
    description: '👟 ¡Bienvenido al mundo del calzado infantil! 🌟 Nuestros consejos te ayudarán a elegir el mejor calzado para tu pequeño. ¡Descubre las últimas tendencias y secretos de comodidad para sus delicados pies! ✨',
  });
}

const BlogPage = ({ params: { lng } }: INextPageParams) => {
  if (lng === 'en') {
    return (
      <>
        <ArticleJsonLd
          useAppDir
          url={`${config.urls.site}/${lng}${Links.BLOG}`}
          type="Blog"
          title="Blog - Weestep Kids"
          images={['https://www.weestep-kids.es/images/articles/store-photo.png']}
          dateModified="2024-05-08T12:00:00"
          datePublished="2024-05-08T12:00:00"
          authorName="Weestep Kids"
          description="Welcome to the world of children's footwear! Our tips will help you choose the best shoes for your little one. Discover the latest trends and secrets of comfort for their delicate feet!"
        />

        <Blog />
      </>
    );
  }

  return (
    <>
      <ArticleJsonLd
        useAppDir
        url={`${config.urls.site}/${lng}${Links.BLOG}`}
        type="Blog"
        title="Blog - Weestep Kids"
        images={['https://www.weestep-kids.es/images/articles/store-photo.png']}
        dateModified="2024-05-08T12:00:00"
        datePublished="2024-05-08T12:00:00"
        authorName="Weestep Kids"
        description="¡Bienvenido al mundo del calzado infantil! Nuestros consejos te ayudarán a elegir el mejor calzado para tu pequeño. ¡Descubre las últimas tendencias y secretos de comodidad para sus delicados pies!"
      />

      <Blog />
    </>
  );
};

export default BlogPage;
