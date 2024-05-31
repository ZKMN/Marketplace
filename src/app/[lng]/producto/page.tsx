import { redirect } from 'next/navigation';

import { Links } from '@/shared/types';

const CatalogoPage = () => {
  redirect(`${Links.CATALOGUE}/1`);
};

export default CatalogoPage;
