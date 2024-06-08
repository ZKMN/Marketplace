/* eslint-disable max-len */
import { SpeedInsights } from '@vercel/speed-insights/next';
import { dir } from 'i18next';
import Script from 'next/script';
import {
  BrandJsonLd,
  LocalBusinessJsonLd,
  LogoJsonLd,
  OrganizationJsonLd,
} from 'next-seo';

import { App } from '@/appLayer/App';

import { weestepFont } from '@/shared/assets/font';
import { LANGUAGES } from '@/shared/consts';
import { config } from '@/shared/lib/config';
import { INextPageParams } from '@/shared/types';

export async function generateStaticParams() {
  return LANGUAGES.map((lng) => ({ lng }));
}

const RootLayout = ({ children, params: { lng } }: React.PropsWithChildren<INextPageParams>) => (
  <html lang={lng} dir={dir(lng)}>
    <body className={weestepFont.className}>
      {process.env.NEXT_PUBLIC_APP_ENV === 'production' && (
        <Script id="ms-clarity">
          {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "moqac0yyrw");
        `}
        </Script>
      )}

      <SpeedInsights />

      <LogoJsonLd
        useAppDir
        url={config.urls.site}
        logo="https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2"
      />

      <BrandJsonLd
        useAppDir
        id={config.urls.site}
        type="Zapatería infantil"
        logo="https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2"
        slogan="Weestep, ser más grande!"
      />

      <OrganizationJsonLd
        useAppDir
        id={config.urls.site}
        url={config.urls.site}
        type="Zapatería infantil"
        logo="https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2"
        name="Weestep Kids"
        address={{
          streetAddress: 'Carrer Jerusalem, 24',
          addressLocality: 'Alicante',
          addressRegion: 'Alacant',
          postalCode: '03001',
          addressCountry: 'ES',
        }}
        contactPoint={[{
          email: 'kidsweestep@gmail.com',
          telephone: '+34611822584',
          areaServed: 'ES',
          contactType: 'atención al cliente',
          availableLanguage: ['Spanish'],
        }]}
      />

      <LocalBusinessJsonLd
        useAppDir
        id={config.urls.site}
        type="Zapatería infantil"
        name="Weestep Kids"
        description="👟💖 ¡Sumérgete en el mundo del confort con nuestro calzado infantil! 💫 Más de 300+ modelos de calzado ortopédico: cuidado de la salud de tu hijo. ¡Encuentra el par perfecto ahora y obtén un descuento del -30%! 👣🌟"
        url="https://www.google.com/maps/place/Weestep+Kids/@38.3451796,-0.4872723,17z/data=!3m1!4b1!4m6!3m5!1s0xd623756defcf3f7:0x78e330b29a88f2f8!8m2!3d38.3451796!4d-0.4872723!16s%2Fg%2F11vjdvrb87?entry=ttu"
        telephone="+34611822584"
        address={{
          postalCode: '03001',
          addressRegion: 'Alacant',
          streetAddress: 'Carrer Jerusalem, 24',
          addressCountry: 'ES',
          addressLocality: 'Alicante',
        }}
        geo={{
          latitude: '38.3451796',
          longitude: '-0.4872723',
        }}
        images={[
          'https://img.ankorstore.com/brands/rounded/16969-47df8e2d48b214.jpg?auto=compress&fm=pjpg&h=158&dpr=2',
        ]}
        openingHours={[
          {
            opens: '11:00',
            closes: '20:00',
            dayOfWeek: [
              'Lunes',
              'Martes',
              'Miércoles',
              'Jueves',
              'Viernes',
              'Sábado',
            ],
            validFrom: '2024-02-01',
          },
        ]}
        // rating={{
        //   ratingValue: '4.8',
        //   ratingCount: '600',
        // }}
        makesOffer={[
          {
            priceSpecification: {
              type: 'UnitPriceSpecification',
              priceCurrency: 'EUR',
              price: '10-75',
            },
            itemOffered: {
              name: 'Zapatos para niños',
              description: 'Creamos calzado infantil ortopédico, cómodo, de alta calidad y con estilo.',
            },
          },
        ]}
        areaServed={[
          {
            geoMidpoint: {
              latitude: '38.3451796',
              longitude: '-0.4872723',
            },
            geoRadius: '2000',
          },
        ]}
      />

      <App>
        {children}
      </App>

      {/* Clickjacking attack def */}
      <Script id="clickjack">
        {`
          function isInFrame() {
            try {
              return window.self !== window.top;
            } catch (e) {
              return true;
            }
          }
          
          // Sanitize the href value to prevent open redirection attacks
          function isCorrectURL(url) {
            const regex = /^(https?):\\/\\/[^\\s$.?#].[^\\s]*$/i;
            const correctURL = regex.test(url) ? url : null;
    
            // Encode any untrusted data in the URL
            if (correctURL && correctURL.startsWith("https://weestep-kids.es/")) {
              return encodeURIComponent(correctURL);
            }
    
            return "https://weestep-kids.es/";
          }
          
          // If the current window is in a frame, redirect to the sanitized URL
          if (isInFrame()) {
            const href = document.querySelector("a").getAttribute("href");
            const correctURL = isCorrectURL(href);
    
            window.top.location.replace(correctURL);
          }
    
          // Framebusting script to prevent clickjacking attacks
          if (window.self !== window.top) {
            const correctURL = isCorrectURL(window.location.href);
            
            window.top.location.replace(correctURL);
          }
        `}
      </Script>
    </body>
  </html>
);

export default RootLayout;
