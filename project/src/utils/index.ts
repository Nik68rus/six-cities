import { TPoint } from '../types';
import { TOffer } from './../types/offers';

export const convertOfferToPoint = (offer: TOffer): TPoint => ({
  id: offer.id,
  lat: offer.location[0],
  lng: offer.location[1],
});
