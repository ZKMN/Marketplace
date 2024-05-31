import { IProductColor, IProductSize } from "./product";

export interface IBasketProduct {
  productId: number;
  code: string;
  priceInitial: number;
  discount: number;
  price: number;
  currency: 'EUR';
  shoesType: string;
  img: string;
  size: IProductSize;
  color: IProductColor;
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
