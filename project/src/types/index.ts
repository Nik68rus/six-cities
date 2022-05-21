import { TOffer } from './offers';
export type TCityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type TUser = {
  avatar: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type TCity = {
  lat: number;
  lng: number;
  zoom: number;
  title: TCityName;
}

export type TPoint = {
  id: TOffer['id'];
  lat: number;
  lng: number;
}
