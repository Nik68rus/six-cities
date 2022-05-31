import { TOffer } from './offers';
export type TCityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
export type TCardType = 'cities' | 'favorites' | 'near-places';

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

export type TReview = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: TUser;
}

export type TState = {
  city: TCity;
  offers: ReadonlyArray<TOffer> | [];
  isDataLoaded: boolean;
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TServerCity = {
  name: TCityName;
  location: TLocation;
}

export type TServerUser = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}
