import { createReducer } from '@reduxjs/toolkit';
import { TCityState } from './../types/index';
import { changeCity, setCityOffers } from './action';

const initialState: TCityState = {
  city: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 12,
  },
  offers: [],
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setCityOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {cityReducer};
