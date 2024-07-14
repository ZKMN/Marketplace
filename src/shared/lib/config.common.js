const commonVars = {
  email: 'kidsweestep@gmail.com',
  storageKeyName: 'r2-d2-kjkszpj',
  keys: {
    gAPI: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    FBPixelKey: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    stripePublish: process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY,
  },
  urls: {
    API: process.env.NEXT_PUBLIC_API_URL, // process.env.APP_ENV,
    site: 'https://weestep-kids.vercel.app/',
    imgCDN: process.env.NEXT_PUBLIC_API_URL,
  },
};

const config = {
  test: commonVars,
  production: {
    ...commonVars,
    urls: {
      ...commonVars.urls,
      site: 'https://www.weestep-kids.es',
    },
  },
  development: commonVars,
}[process.env.NEXT_PUBLIC_APP_ENV || 'development'];

module.exports = config;
