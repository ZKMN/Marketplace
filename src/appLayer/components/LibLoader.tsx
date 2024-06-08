'use client';

import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';

import { FBAnalytics } from '@/shared/lib/firebase.config';

export const LibLoader = () => {
  useEffect(() => {
    logEvent(FBAnalytics, 'App init');
  }, []);

  return null;
};
