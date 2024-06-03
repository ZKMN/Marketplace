import { getProductsTotal } from '@/shared/api/helpers';
import { PRODUCTS_COUNT } from '@/shared/consts';
import { INextPageParams } from '@/shared/types';

const distributeElements = (total?: number) => {
  const baseCount = Math.ceil(Number(total) / PRODUCTS_COUNT);

  return Array.from({ length: baseCount }).map((_, index) => ({ page: String(index + 1) }));
};

// https://github.com/vercel/next.js/issues/53717
export async function generateStaticParams({ params: { lng } }: INextPageParams) {
  const total = await getProductsTotal(lng);

  const resultArray = distributeElements(total);

  return resultArray || [];
}

const Layout = ({ children }: React.PropsWithChildren) => children;

export default Layout;
