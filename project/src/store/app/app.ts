import { TOffer } from './../../types/offers';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TCity } from '../../types';
import { TAppState } from '../../types/store';
import { NameSpace, SortType } from '../../utils/const';

const initialState: TAppState = {
  city: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 12,
  },
  sorting: SortType.Popular,
  activeOfferId: undefined,
};

export const app = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<TCity>) => {
      state.city = action.payload;
    },
    changeSorting: (state, action: PayloadAction<SortType>) => {
      state.sorting = action.payload;
    },
    changeActiveOfferId: (state, action: PayloadAction<TOffer['id'] | undefined>) => {
      state.activeOfferId = action.payload;
    },
  },
});

export const {changeCity, changeSorting, changeActiveOfferId} = app.actions;
export default app.reducer;
