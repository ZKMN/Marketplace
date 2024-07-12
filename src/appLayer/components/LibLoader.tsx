'use client';

import { useEffect } from 'react';

import { FBPixelEvents, getFBAEvent } from '@/shared/lib/helpers';

export const LibLoader = () => {
  useEffect(() => {
    getFBAEvent('App Init');

    FBPixelEvents.init();
  }, []);

  return null;
};
