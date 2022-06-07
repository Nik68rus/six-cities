import { Token } from '../services/token';

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

export type TAuthData = {
  email: string;
  password: string;
}

export type TAuthInfo = TServerUser & {
  email: string;
  token: Token;
}

export type TUserData = TServerUser & {email: string};

export type TCommentPost = {
  comment: string;
  rating: number;
}

export type TComment = TCommentPost & {
  date: string;
  id: number;
  user: TServerUser;
}


