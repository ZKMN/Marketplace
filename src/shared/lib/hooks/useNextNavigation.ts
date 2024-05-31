'use client';

import { useCallback } from 'react';
import { AppRouterInstance, NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useParams, usePathname, useRouter } from 'next/navigation';

import { IRoutePathParams } from '@/shared/types';

export const useClickRedirect = (): [
  (url: string, options?: NavigateOptions) => () => void,
  AppRouterInstance
] => {
  const [handlePush, router] = useLngRouter();

  const handleRedirect = useCallback((
    url: string,
    options?: NavigateOptions,
  ) => () => {
    handlePush(url, options);
  }, [handlePush]);

  return [handleRedirect, router];
};

export const useLngRouter = (): [
  (url: string, options?: NavigateOptions) => void,
  AppRouterInstance
] => {
  const { lng } = useTypedParams();
  const router = useRouter();

  const handlePush = useCallback((
    url: string,
    options?: NavigateOptions,
  ) => {
    router.push(`/${lng}${url}`, { scroll: true, ...options });
  }, [router.push]);

  return [handlePush, router];
};

export const useTypedParams = <T extends IRoutePathParams, >() => {
  const params = useParams<T>();

  return params;
};

export const usePathnameWithoutLng = () => {
  const { lng } = useTypedParams();
  const pathname = usePathname();

  return pathname.replace(`/${lng}`, '');
};
