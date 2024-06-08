'use client';

import { useEffect } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';

import { FBApp } from '@/shared/lib/firebase.config';

export const LibLoader = () => {
  useEffect(() => {
    const analytics = getAnalytics(FBApp);

    logEvent(analytics, 'app_open');
  }, []);

  return null;
};
