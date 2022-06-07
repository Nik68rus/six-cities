import { createDeepEqualSelector } from './../selectors';
import { TOffer } from './../../types/offers';
import { TCity } from './../../types/index';
import { NameSpace, SortType } from '../../utils/const';
import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/store';

const selectSelf = (state: State) => state;

export const citySelector = createDeepEqualSelector(selectSelf, (state: State): TCity => state[NameSpace.App].city);
export const sortingSelector = createSelector(selectSelf, (state: State): SortType => state[NameSpace.App].sorting);
export const activeOfferIdSelector = createSelector(selectSelf, (state: State): TOffer['id'] | undefined => state[NameSpace.App].activeOfferId);
