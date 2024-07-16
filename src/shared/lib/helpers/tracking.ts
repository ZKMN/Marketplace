/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { EventNameString, getAnalytics, logEvent } from 'firebase/analytics';

import { config } from '../config';
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

export const FBPixelEvents = {
  init: () => {
    const ReactPixel = require('react-facebook-pixel');

    ReactPixel.default.init(config.keys.FBPixel, undefined, { autoConfig: true, debug: true });
  },
  pageView: () => {
    const ReactPixel = require('react-facebook-pixel');

    ReactPixel.default.pageView();
  },
  track: (name: string, data: Record<string, unknown>) => {
    const ReactPixel = require('react-facebook-pixel');

    ReactPixel.default.track(name, data);
  },
  trackCustom: (name: string, data: Record<string, unknown>) => {
    const ReactPixel = require('react-facebook-pixel');

    ReactPixel.default.trackCustom(name, data);
  },
};
