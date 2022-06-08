import { createDeepEqualSelector } from './../selectors';
import { TUserData } from './../../types/index';
import { AuthorizationStatus, NameSpace } from '../../utils/const';
import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/store';
import { TOffer } from '../../types/offers';

const selectSelf = (state: State) => state;

export const authStatusSelector = createSelector(selectSelf, (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus);
export const userSelector = createDeepEqualSelector(selectSelf, (state: State): TUserData | undefined => state[NameSpace.User].user);
export const favoriteSelector = createDeepEqualSelector(selectSelf, (state: State): TOffer[] | [] => state[NameSpace.User].favoriteOffers);
