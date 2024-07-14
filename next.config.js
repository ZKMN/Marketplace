const vercelAPI = 'https://vercel.live';
const stripeApi = 'https://js.stripe.com';
const mapsGoogleapis = 'https://maps.googleapis.com';
const fontsGoogleapis = 'https://fonts.googleapis.com';
const mapsGStatic = 'https://maps.gstatic.com';
const fontsGStatic = ' https://fonts.gstatic.com';
const appAPI = 'https://api.weestep-kids.es';
const appAPIDev = 'https://apidev.weestep-kids.es';
const GTag = 'https://www.googletagmanager.com';
const FBAPIs = 'https://firebaseinstallations.googleapis.com https://firebase.googleapis.com';
const GAAPIs = 'https://region1.google-analytics.com https://www.google-analytics.com';
const clarityAPI = 'https://www.clarity.ms';
const clarityConnect = 'https://r.clarity.ms';
const stripeUI = 'https://merchant-ui-api.stripe.com';
const FBPixel = 'https://connect.facebook.net';
const facebook = 'https://www.facebook.com';

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' ${mapsGoogleapis} ${stripeApi} ${vercelAPI} ${GTag} ${clarityAPI} ${stripeUI};
  script-src-elem 'self' 'unsafe-eval' 'unsafe-inline' ${mapsGoogleapis} ${stripeApi} ${vercelAPI} ${GTag} ${clarityAPI} ${stripeUI} ${FBPixel};
  style-src 'self' 'unsafe-inline' ${fontsGoogleapis};
  style-src-elem 'self' 'unsafe-inline' ${fontsGoogleapis} ${vercelAPI};
  img-src 'self' ${appAPI} ${appAPIDev} ${mapsGoogleapis} ${mapsGStatic} ${vercelAPI} ${facebook} https://flagcdn.com/w40/ data:;
  font-src 'self' ${fontsGStatic};
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  block-all-mixed-content;
  upgrade-insecure-requests;
  connect-src 'self' ${appAPI} ${appAPIDev} ${mapsGoogleapis} ${stripeApi} ${vercelAPI} ${FBAPIs} ${GAAPIs} ${clarityConnect} ${stripeUI};
  frame-src 'self' ${vercelAPI} ${stripeApi};
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
