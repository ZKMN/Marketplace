import { DEFAULT_FILE_NAME, DEFAULT_LNG, LANGUAGES } from '@/shared/consts';

export const getI18IntlOptions = (lng = DEFAULT_LNG, ns = DEFAULT_FILE_NAME) => ({
  // debug: true,
  ns,
  lng,
  defaultNS: DEFAULT_FILE_NAME,
  fallbackLng: DEFAULT_LNG,
  fallbackNS: DEFAULT_FILE_NAME,
  supportedLngs: LANGUAGES,
});
