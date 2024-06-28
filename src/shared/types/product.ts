export interface IProductColor {
  id: number;
  image: string;
  value: string;
  productId: string;
}

export interface IProductSize {
  id: number;
  value: string;
  centimeters?: number;
}

export interface IProduct {
  img: string;
  code: string;
  productId: string;
  discount: number;
  price: number;
  priceInitial: number;
  currency: 'EUR';
  shoesType: string;
  sizes: IProductSize[];
  colors: IProductColor[];
}

export interface IProductDetails extends Omit<IProduct, 'img'> {
  images: string[]; // Array of urls
  gender: 'boy' | 'girl'; // or we can split in in boolean props boys: true; girls: true;
  available: number;
  color: IProductColor;
  youMayLike: {
    id: string | number;
    image: string;
    shoesType: string;
  }[]; // Array of likes
  details: {
    title: string;
    description: string;
  }[]; // Array of details
}

interface IQueryValues {
  title: string; // Male, name depends on language
  queryKey: string; // depends on language
}

export interface IFilterValue extends IQueryValues {
  count: number;
  queryValue: string;
}

export interface IFilter extends IQueryValues {
  values: IFilterValue[]; // Array of category options
  metadata: {
    id: number;
    key: string; // static english value same as queryKey but only on english
  };
}

export interface IOrdering extends IQueryValues {
  values: {
    id: number;
    title: string;
    active: boolean;
    queryValue: string;
  }[];
}

export interface IProductsResponse {
  total?: number;
  items: IProduct[];
  filters: IFilter[];
  ordering: IOrdering | null;
}
