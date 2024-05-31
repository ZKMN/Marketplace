import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

import { useLngRouter } from '@/shared/lib/hooks';
import { Links } from '@/shared/types';

export const useChangeFilter = () => {
  const [push] = useLngRouter();
  const searchParams = useSearchParams();

  const handleChangeFilter = useCallback((category: string, value: string) => () => {
    const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

    const searchCategory = searchParams.get(category);
    const categoryValues = searchCategory?.split(',').filter(Boolean) || [];

    let updatedCategoryValues;

    if (categoryValues.includes(value)) {
      updatedCategoryValues = categoryValues.filter((v) => v !== value);
    } else {
      updatedCategoryValues = [...categoryValues, value];
    }

    if (updatedCategoryValues.length > 0) {
      queryParams.set(category, updatedCategoryValues.join(','));
    } else {
      queryParams.delete(category);
    }

    const search = queryParams.toString();
    const query = search ? `?${search}` : '';

    push(`${Links.CATALOGUE}/1${query}`, { scroll: false });
  }, [searchParams]);

  return handleChangeFilter;
};
