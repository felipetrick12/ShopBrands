import { ISize } from './products';

export interface ICartProduct {
  description: string;
  image: string[];
  price: number;
  sizes: ISize;
  slug: string;
  title: string;
  gender: 'men' | 'women' | 'kid' | 'unisex';
  quantity: number;
}
