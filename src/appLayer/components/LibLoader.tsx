'use client';

import { useEffect } from 'react';

import { FBPixelEvents, getFBAEvent } from '@/shared/lib/helpers';

export const LibLoader = () => {
  useEffect(() => {
    getFBAEvent('App Init');

    if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
      FBPixelEvents.init();
    }
  }, []);

  return null;
};
