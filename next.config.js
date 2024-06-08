const vercelAPI = 'https://vercel.live';
const stripeApi = 'https://js.stripe.com';
const mapsGoogleapis = 'https://maps.googleapis.com';
const fontsGoogleapis = 'https://fonts.googleapis.com';
const mapsGStatic = 'https://maps.gstatic.com';
const fontsGStatic = ' https://fonts.gstatic.com';
const appFTP = 'https://api.weestep-kids.es';
const appAPI = 'https://api.weestep-kids.es';
const GTag = 'https://www.googletagmanager.com';
const FBAPIs = 'https://firebaseinstallations.googleapis.com https://firebase.googleapis.com';
const GAAPIs = 'https://region1.google-analytics.com https://www.google-analytics.com';
const ClarityAPI = 'https://www.clarity.ms';
const ClarityConnect = 'https://r.clarity.ms';

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' ${mapsGoogleapis} ${stripeApi} ${vercelAPI} ${GTag} ${ClarityAPI};
  script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' ${mapsGoogleapis} ${stripeApi} ${vercelAPI} ${GTag} ${ClarityAPI};
  style-src 'self' 'unsafe-inline' ${fontsGoogleapis};
  style-src-elem 'self' 'unsafe-inline' ${fontsGoogleapis} ${vercelAPI};
  img-src 'self' ${appFTP} ${mapsGoogleapis} ${mapsGStatic} ${vercelAPI} https://flagcdn.com/w40/ data:;
  font-src 'self' ${fontsGStatic};
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
  connect-src 'self' ${appAPI} ${mapsGoogleapis} ${stripeApi} ${vercelAPI} ${FBAPIs} ${GAAPIs} ${ClarityConnect};
  frame-src 'self' ${vercelAPI} ${stripeApi};
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
