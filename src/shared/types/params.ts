import { AxiosError } from 'axios';

import { TLanguages } from './common';

export interface IHookOptionsParams {
  onError?: (error?: AxiosError) => void;
  onSuccess?: <T>(data?: T) => void;
}

export interface IRoutePathParams {
  [key: string]: string;
  lng: TLanguages;
  page: string;
  productId: string;
}

export interface INextPageParams {
  params: IRoutePathParams;
}
