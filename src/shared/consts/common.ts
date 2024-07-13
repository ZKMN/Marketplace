import { ICarrier } from '../types';

export const PRODUCTS_COUNT = 16;
export const FAQ_QUESTIONS = 28;
export const FREE_DELIVERY_PRICE = 60;

export const CARRIERS: ICarrier[] = [{
  id: 1,
  name: 'Correos',
  price: 5,
  image: '/images/correos-logo.jpeg',
}, {
  id: 2,
  name: 'MRW',
  price: 10,
  image: '/images/mrw-logo.png',
}];
