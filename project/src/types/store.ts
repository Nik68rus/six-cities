import { AuthorizationStatus, SortType } from './../utils/const';
import { TCity, TUserData, TComment } from './index';
import { store } from '../store';
import { TOffer } from './offers';

export type TDataState = {
  offers: ReadonlyArray<TOffer> | [];
  dataRequested: boolean;
  dataSucceed: boolean;
  dataFailed: boolean;
  activeOffer: TOffer | undefined;
  detailsRequested: boolean;
  detailsSucceed: boolean;
  detailsFailed: boolean;
  neighbourOffers: TOffer[] | [];
  comments: TComment[] | [];
}

export type TUserState = {
  authorizationStatus: AuthorizationStatus;
  user: TUserData | undefined;
}

export type TAppState = {
  city: TCity;
  sorting: SortType,
  activeOfferId: TOffer['id'] | undefined;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
