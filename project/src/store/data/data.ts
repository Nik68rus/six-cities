import { TComment } from './../../types/index';
import { TOffer } from './../../types/offers';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { TDataState } from '../../types/store';
import { NameSpace } from '../../utils/const';

const initialState: TDataState = {
  offers: [],
  dataRequested: false,
  dataSucceed: false,
  dataFailed: false,
  activeOffer: undefined,
  detailsRequested: false,
  detailsSucceed: false,
  detailsFailed: false,
  neighbourOffers: [],
  comments: [],
};


export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    requestOffers: (state) => {
      state.dataRequested = true;
      state.dataFailed = false;
      state.dataSucceed = false;
    },
    setOffers: (state, action: PayloadAction<TOffer[]>) => {
      state.offers = action.payload;
      state.dataRequested = false;
      state.dataFailed = false;
      state.dataSucceed = true;
    },
    updateOffer: (state, action: PayloadAction<TOffer>) => {
      if (state.activeOffer?.id === action.payload.id) {
        state.activeOffer = action.payload;
      } else if (state.activeOffer) {
        state.neighbourOffers = state.neighbourOffers.map((ofr) => ofr.id === action.payload.id ? action.payload : ofr);
      } else {
        state.offers = state.offers.map((ofr) => ofr.id === action.payload.id ? action.payload : ofr);
      }
    },
    setError: (state) => {
      state.dataRequested = false;
      state.dataFailed = true;
      state.dataSucceed = false;
    },
    requestDetails: (state) => {
      state.detailsRequested = true;
      state.detailsFailed = false;
      state.detailsSucceed = false;
    },
    setActiveOffer: (state, action: PayloadAction<TOffer | undefined>) => {
      state.activeOffer = action.payload;
      state.detailsRequested = false;
      state.detailsFailed = false;
      state.detailsSucceed = true;
    },
    setWrongId: (state) => {
      state.detailsRequested = false;
      state.detailsFailed = true;
      state.detailsSucceed = false;
    },
    setNeighbourOffers: (state, action: PayloadAction<TOffer[]>) => {
      state.neighbourOffers = action.payload;
    },
    setComments: (state, action: PayloadAction<TComment[]>) => {
      state.comments = action.payload;
    },
  },
});

export const {requestOffers, setOffers, updateOffer, setError, requestDetails, setActiveOffer, setWrongId, setNeighbourOffers, setComments} = appData.actions;
export default appData.reducer;
