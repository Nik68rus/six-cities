import { TServerOffer, TOffer } from './../types/offers';

// const propTypes = {
//   room: 'Private room',
//   house: 'Whole house',
//   apartment: 'Apartment',
//   hotel: 'Hotel',
// };

export const adaptOffer = (offer: TServerOffer): TOffer  => ({
  id: offer.id,
  title: offer.title,
  cover: offer.previewImage,
  type: offer.type,
  price: offer.price,
  rate: offer.rating,
  isPremium: offer.isPremium,
  isFavorite: offer.isFavorite,
  bedrooms: offer.bedrooms,
  city: {
    title: offer.city.name,
    lat: offer.city.location.latitude,
    lng: offer.city.location.longitude,
    zoom: offer.city.location.zoom,
  },
  description: offer.description,
  features: offer.goods,
  host: {
    avatar: offer.host.avatarUrl,
    id: offer.host.id,
    isPro: offer.host.isPro,
    name: offer.host.name,
  },
  images: offer.images,
  capacity: offer.maxAdults,
  location: [offer.location.latitude, offer.location.longitude],
});
