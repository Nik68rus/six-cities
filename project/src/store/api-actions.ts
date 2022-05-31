import { createAsyncThunk } from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
import { TServerOffer } from './../types/offers';
import { adaptOffer } from './../utils/adapter';
import { ActionType } from './../types/action';
import { api, store } from '.';
import { loadOffers } from './action';

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const fetchOffers = createAsyncThunk(ActionType.LoadOffers, async () => {
  api.get<TServerOffer[]>(APIRoute.Offers).then(({data}) =>  {
    const adaptedData = data.map(adaptOffer);
    store.dispatch(loadOffers(adaptedData));
  }).catch((err) => {
    toast('Something wrong!');
  });
});
