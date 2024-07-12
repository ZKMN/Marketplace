'use client';

import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

import { getFBAEvent } from '@/shared/lib/helpers/getFBAEvent';

export const LibLoader = () => {
  useEffect(() => {
    getFBAEvent('App Init');

    if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
      ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID as string, undefined, { autoConfig: true, debug: false });
    }
  }, []);

  return null;
};
