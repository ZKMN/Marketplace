import { firebaseConfig } from './firebase.config';

const commonVars = {
  storageKeyName: 'r2-d2-kjkszpj',
  keys: {
    gAPI: firebaseConfig.apiKey,
    stripePublish: process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY,
  },
  urls: {
    API: process.env.NEXT_PUBLIC_API_URL, // process.env.APP_ENV,
    site: 'https://weestep-kids-sgo8-zkmns-projects.vercel.app',
    imgCDN: process.env.NEXT_PUBLIC_API_URL,
  },
};

export const config = {
  test: commonVars,
  production: {
    ...commonVars,
    urls: {
      ...commonVars.urls,
      site: 'https://www.weestep-kids.es',
    },
  },
  development: commonVars,
}[process.env.NEXT_PUBLIC_APP_ENV || 'development'] as typeof commonVars;
