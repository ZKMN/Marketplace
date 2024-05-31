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

export interface IFilterValue {
  title: string; // Male, name depends on language
  queryValue: string; // depends on language
  count: number;
}

export interface IFilter {
  title: string; // Gender, title depends on language
  queryKey: string; // depends on language
  metadata: {
    id: number;
    key: string; // static english value same as queryKey but only on english
  };
  values: IFilterValue[]; // Array of category options
}

export interface IProductsResponse {
  total?: number;
  items: IProduct[];
  filters: IFilter[];
}
