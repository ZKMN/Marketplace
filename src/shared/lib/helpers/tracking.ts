import ReactPixel from 'react-facebook-pixel';
import { EventNameString, getAnalytics, logEvent } from 'firebase/analytics';

import { FBApp } from '../firebase.config';

type EventParams = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const getFBAEvent = (
  event: string | EventNameString,
  eventParams?: EventParams,
) => {
  if (typeof window !== 'undefined') {
    const analytics = getAnalytics(FBApp);

    logEvent(analytics, event, { ...eventParams, environment: process.env.NEXT_PUBLIC_APP_ENV });
  }
};

export const getFBPixelEvents = () => ({
  pageView: () => {
    if (typeof window !== 'undefined') {
      ReactPixel.pageView();
    }
  },
});
