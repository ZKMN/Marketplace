import localFont from 'next/font/local';

export const weestepFont = localFont({
  src: [
    {
      path: '/weestep/Weestep-Regular.woff',
      weight: '400',
      style: 'normal',
    }, {
      path: '/weestep/Weestep-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/weestep/Weestep-Bold.woff',
      weight: '700',
      style: 'normal',
    }, {
      path: '/weestep/Weestep-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});
