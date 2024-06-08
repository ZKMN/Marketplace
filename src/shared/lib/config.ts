const commonVars = {
  storageKeyName: 'r2-d2-kjkszpj',
  keys: {
    gAPI: process.env.NEXT_PUBLIC_GAPI_KEY,
    GAID: process.env.NEXT_PUBLIC_GA_ID,
    stripePublish: process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY,
  },
  urls: {
    API: 'https://api.weestep-kids.es', // process.env.APP_ENV,
    site: 'https://www.weestep-kids.vercel.app',
    imgCDN: '',
  },
};

export const config = {
  test: commonVars,
  production: {
    ...commonVars,
    urls: {
      API: 'https://api.weestep-kids.es', // process.env.APP_ENV,
      site: 'https://www.weestep-kids.es',
      imgCDN: '',
    },
  },
  development: commonVars,
}[process.env.NEXT_PUBLIC_APP_ENV || 'development'] as typeof commonVars;
