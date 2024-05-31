import { useCallback } from 'react';
import { useRequest } from 'ahooks';
import { AxiosResponse } from 'axios';

import { addQueryParamsToURL } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import {
  IAPIHookOptions,
  IAPIRequestParams,
  IRequestCallbackParams,
  TRequestCallback,
  TResponse,
} from '@/shared/types';

import { apiDelete } from '../instance';

export const useDeleteRequest = <R>(options?: IAPIHookOptions<R, IAPIRequestParams>): [
  request: TRequestCallback,
  response: TResponse<R, IAPIRequestParams>
] => {
  const { lng } = useTypedParams();

  const {
    url,
    config,
    baseURL,
    queryParams,
    withCredentials,
  } = options || {};

  const {
    run,
    data,
    ...rest
  } = useRequest<AxiosResponse<R>, [IAPIRequestParams]>(
    apiDelete,
    { ...config, manual: true },
  );

  const handleDeleteRequest = useCallback((params?: Omit<IRequestCallbackParams, 'payload'>) => {
    const { callbackQueryParams, callbackURL } = params || {};

    const urlWithParams = addQueryParamsToURL(String(callbackURL || url), callbackQueryParams || queryParams);

    run({
      url: `${lng}/v1${urlWithParams}/`,
      baseURL,
      withCredentials,
    });
  }, [url]);

  return [
    handleDeleteRequest,
    {
      ...rest,
      data: data?.data,
    },
  ];
};
