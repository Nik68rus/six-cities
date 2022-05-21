import { TUser } from './index';
import { TCity } from '.';
import { PropertyType } from './../utils/const';

export type TOffer = {
  id: number;
  title: string;
  cover: string;
  type: PropertyType;
  price: number;
  rate: number;
  isPremium: boolean;
  isFavorite: boolean;
  bedrooms: number;
  city: TCity;
  description: string|string[];
  features: string[];
  host: TUser;
  images: string[];
  capacity: number;
  location: [number, number],
};

export type TOffers = TOffer[];
