// import { setCityOffers } from './../store/action';
// import { TCity } from './index';

export enum ActionType {
  ChangeCity = 'city/change',
  RequestOffers = 'data/requestOffers',
  SetOffers = 'data/setOffers',
  SetError = 'data/setError',
  CheckAuth = 'user/checkAuth',
  SetAuthStatus = 'user/setAuth',
  SignIn = 'user/signIn',
  SetUser = 'user/setData',
  RequestDetails = 'data/requestDetails',
  SetActiveOffer = 'data/setActiveOffer',
  RequestNeighbours = 'data/requestNeighbours',
  SetNeighbours = 'data/setNeighbours',
  RequestComments = 'data/requestComments',
  SetComments = 'data/setComments',
  PostComment = 'data/postComment',
}

// export type TChangeCityAction = {
//   type: ActionType.ChangeCity;
//   payload: TCity;
// }

// export type TSetCityOffersAction = ReturnType<typeof setCityOffers>;

// export type TActions = TChangeCityAction | TSetCityOffersAction;
