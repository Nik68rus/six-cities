import { TCity, TPoint } from '../types';
import { TOffer, TOffers } from './../types/offers';

export const convertOfferToPoint = (offer: TOffer): TPoint => ({
  id: offer.id,
  lat: offer.location[0],
  lng: offer.location[1],
});

export const filterOffers = (city: TCity, offers: TOffers): TOffers  => offers.filter((ofr) => ofr.city.title === city.title);
