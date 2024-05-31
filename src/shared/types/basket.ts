export interface IBasketProduct {
  productId: number;
  code: string;
  priceInitial: number;
  discount: number;
  price: number;
  currency: 'EUR';
  shoesType: string;
  img: string;
  size: number;
}

export interface IBasketProductResponse {
  id: number;
  quantity: number;
  itemsTotal: number;
  product: IBasketProduct;
}

export interface IBasketResponse {
  id: number;
  total: number;
  items?: IBasketProductResponse[];
  numItems: number;
}
