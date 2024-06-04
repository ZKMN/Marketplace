/* eslint-disable max-len */
import { Metadata } from 'next';
import { CorporateContactJsonLd, SocialProfileJsonLd } from 'next-seo';

import { Contacts } from '@/pagesLayer/Contacts';

import { config } from '@/shared/lib/config';
import { getEnMetadata, getEsMetadata } from '@/shared/lib/helpers';
import { INextPageParams, Links } from '@/shared/types';

export async function generateMetadata({ params: { lng } }: INextPageParams): Promise<Metadata> {
  if (lng === 'en') {
    return getEnMetadata({
      url: `${config.urls.site}/${lng}${Links.CONTACTS}`,
      title: 'Contacts - Weestep Kids',
      description: "Get in touch with us anytime for any inquiries or requests regarding children's footwear. We're always here to assist you in making the right choice and answering your questions. Our contact information is provided below. We offer various communication channels: phone, email, and a contact form. +34 611-82-25-84, Carrer Jerusalem, 24, 03001 Alacant, Alicante.",
    });
  }

  return getEsMetadata({
    url: `${config.urls.site}/${lng}${Links.CONTACTS}`,
    title: 'Contactos - Weestep Kids',
    description: 'Contáctenos en cualquier momento para cualquier pregunta o solicitud sobre calzado infantil. Siempre estamos aquí para ayudarlo a tomar la decisión correcta y responder a sus preguntas. Nuestra información de contacto se encuentra a continuación. Ofrecemos varios canales de comunicación: teléfono, correo electrónico y un formulario de contacto. +34 611-82-25-84, Carrer Jerusalem, 24, 03001 Alacant, Alicante',
  });
}

const ContactsPage = () => (
  <>
    <CorporateContactJsonLd
      useAppDir
      url={config.urls.site}
      logo="https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2"
      contactPoint={[{
        email: 'kidsweestep@gmail.com',
        telephone: '+34611822584',
        areaServed: 'ES',
        contactType: 'atención al cliente',
        availableLanguage: ['Spanish'],
      }]}
    />

    <SocialProfileJsonLd
      useAppDir
      url={config.urls.site}
      type="Organization"
      name="Weestep Kids"
      sameAs={[
        'https://www.instagram.com/weestep_kids_alicante/',
        'https://www.tiktok.com/@weestep_kids_alicante',
        'https://www.facebook.com/profile.php?id=61554203151592',
      ]}
    />

    <Contacts />
  </>
);

export default ContactsPage;
