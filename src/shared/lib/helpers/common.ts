import queryString, { StringifiableRecord } from 'query-string';

export const getBase64 = (str: string) => (typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str));

export const addQueryParamsToURL = (url: string, queryParams?: StringifiableRecord) => queryString.stringifyUrl({
  url,
  query: queryParams,
}, {
  skipNull: true,
  skipEmptyString: true,
  arrayFormat: 'comma',
});
