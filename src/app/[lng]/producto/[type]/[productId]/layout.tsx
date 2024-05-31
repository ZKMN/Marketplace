import { getAllProducts } from '@/shared/api/helpers';
import { INextPageParams } from '@/shared/types';

// https://github.com/vercel/next.js/issues/53717
export async function generateStaticParams({ params: { lng } }: INextPageParams) {
  const products = await getAllProducts(lng);

  return products.map(({ productId, shoesType }) => ({ type: shoesType, productId: String(productId) })) || [];
}

const Layout = ({ children }: React.PropsWithChildren) => children;

export default Layout;
