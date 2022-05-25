import { TOffer } from './offers';
import { TCity } from './index';

export enum ActionType {
  ChangeCity = 'city/change',
  SetOffers = 'city/setOffers',
}

export type TChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: TCity;
}

export type TSetCityOffersAction = {
  type: ActionType.SetOffers;
  payload: ReadonlyArray<TOffer>
}

export type TActions = TChangeCityAction | TSetCityOffersAction;
