import { createAction } from '@reduxjs/toolkit';
import type { TOffers } from './../types/offers';
import type { TCity } from './../types/index';
import { ActionType } from '../types/action';

export const changeCity = createAction<TCity>(ActionType.ChangeCity);
export const setCityOffers = createAction<TOffers>(ActionType.SetOffers);
