import { TUserData } from './../../types/index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TUserState } from '../../types/store';
import { AuthorizationStatus, NameSpace } from '../../utils/const';
import { TOffer } from '../../types/offers';

const initialState: TUserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: undefined,
  favoriteOffers: [],
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUser: (state, action: PayloadAction<TUserData>) => {
      state.user = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<TOffer[] | []>) => {
      state.favoriteOffers = action.payload;
    },
    updateFavoriteOffers: (state, action: PayloadAction<TOffer>) => {
      if (action.payload.isFavorite) {
        state.favoriteOffers = [...state.favoriteOffers, action.payload];
        return;
      }

      const offerIndex = state.favoriteOffers.findIndex((ofr) => ofr.id === action.payload.id);
      state.favoriteOffers.splice(offerIndex, 1);
    },
  },
});

export const {setAuthStatus, setUser, setFavoriteOffers, updateFavoriteOffers} = user.actions;
export default user.reducer;
