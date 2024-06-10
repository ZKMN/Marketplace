import { firebaseConfig } from './firebase.config';

const commonVars = {
  storageKeyName: 'r2-d2-kjkszpj',
  keys: {
    gAPI: firebaseConfig.apiKey,
    stripePublish: process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY,
  },
  urls: {
    API: 'https://api.weestep-kids.es', // process.env.APP_ENV,
    site: 'https://www.weestep-kids.vercel.app',
    imgCDN: 'https://api.weestep-kids.es',
  },
};

export const config = {
  test: commonVars,
  production: {
    ...commonVars,
    urls: {
      API: 'https://api.weestep-kids.es', // process.env.APP_ENV,
      site: 'https://www.weestep-kids.es',
      imgCDN: 'https://api.weestep-kids.es',
    },
  },
  development: commonVars,
}[process.env.NEXT_PUBLIC_APP_ENV || 'development'] as typeof commonVars;
