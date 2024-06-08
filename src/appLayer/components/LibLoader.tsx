'use client';

import { useEffect } from 'react';

import { getFBAEvent } from '@/shared/lib/helpers/getFBAEvent';

export const LibLoader = () => {
  useEffect(() => {
    getFBAEvent('App Init');
  }, []);

  return null;
};
