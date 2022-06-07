import { SortType } from './const';
import { TCity } from '../types';
import { TOffer, TOffers } from './../types/offers';

export const filterOffers = (
  city: TCity,
  offers: [] | readonly TOffer[],
): TOffers => offers.filter((ofr) => ofr.city.title === city.title);

export const sortOffers = (offers: readonly TOffer[] | [], sortType: SortType) => {
  if (offers.length > 1) {
    return [...offers].sort((a: TOffer, b: TOffer) => {
      switch (sortType) {
        case SortType.Popular:
          return 1;
        case SortType.PriceDec:
          return b.price - a.price;
        case SortType.PriceInc:
          return a.price - b.price;
        case SortType.Rate:
          return b.rate - a.rate;
        default:
          return 1;
      }
    });
  } else {
    return [];
  }
};

export const getDate = (dateString: string) => {
  const date = new Date(dateString);
  const dateTime = date.toISOString().split('T')[0];
  const dateText = date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
  return [dateTime, dateText];
};
