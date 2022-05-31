import { createReducer } from '@reduxjs/toolkit';
import { TState } from './../types/index';
import { changeCity, loadOffers } from './action';

const initialState: TState = {
  city: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 12,
  },
  offers: [],
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    });
});

export {reducer};
