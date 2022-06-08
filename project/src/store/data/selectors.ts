import { createDeepEqualSelector } from './../selectors';
import { sortOffers } from './../../utils/index';
import { NameSpace } from '../../utils/const';
import { State } from '../../types/store';
import { TOffer } from '../../types/offers';
import { sortingSelector } from '../app/selectors';

const selectSelf = (state: State) => state;

export const allOffersSelector = createDeepEqualSelector(selectSelf, (state: State): readonly TOffer[] | [] => state[NameSpace.Data].offers);
export const cityOffersSelector = createDeepEqualSelector(selectSelf, (state: State): TOffer[] | [] => state[NameSpace.Data].offers.filter((ofr) => ofr.city.title === state[NameSpace.App].city.title));
export const sortedOffersSelector = createDeepEqualSelector([cityOffersSelector, sortingSelector], (offers, sorting) => sortOffers(offers, sorting));
