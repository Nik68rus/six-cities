import { TOffers } from '../types/offers';
import { PropertyType } from './../utils/const';
import {faker} from '@faker-js/faker';

const offers: TOffers = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    cover: 'img/apartment-01.jpg',
    type: PropertyType.Room,
    price: 130,
    rate: 4,
    isPremium: true,
    isFavorite: false,
    bedrooms: 4,
    city: {
      title: 'Amsterdam',
      lat: 52.37454,
      lng: 4.897976,
      zoom: 12,
    },
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    features: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      isPro: true,
      id: 1,
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    capacity: 3,
    location: [52.3909553943508, 4.85309666406198],
  },
  {
    id: 2,
    title: 'Wood and stone place',
    cover: 'img/room.jpg',
    type: PropertyType.Room,
    price: 80,
    rate: 4,
    isPremium: false,
    isFavorite: true,
    bedrooms: 3,
    city: {
      title: 'Amsterdam',
      lat: 52.37454,
      lng: 4.897976,
      zoom: 12,
    },
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    features: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      isPro: true,
      id: 1,
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    capacity: 4,
    location: [52.369553943508, 4.85309666406198],
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    cover: 'img/apartment-02.jpg',
    type: PropertyType.Apartment,
    price: 132,
    rate: 4,
    isPremium: false,
    isFavorite: false,
    bedrooms: 3,
    city: {
      title: 'Amsterdam',
      lat: 52.37454,
      lng: 4.897976,
      zoom: 12,
    },
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    features: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      isPro: true,
      id: 1,
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    capacity: 4,
    location: [52.3909553943508, 4.929309666406198],
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    cover: 'img/apartment-03.jpg',
    type: PropertyType.Apartment,
    price: 180,
    rate: 5,
    isPremium: true,
    isFavorite: false,
    bedrooms: 3,
    city: {
      title: 'Amsterdam',
      lat: 52.37454,
      lng: 4.897976,
      zoom: 12 ,
    },
    description: ['A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.', 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'],
    features: ['Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatar: faker.image.avatar(),
      name: faker.name.firstName(),
      isPro: true,
      id: 1,
    },
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    capacity: 4,
    location: [52.3809553943508, 4.939309666406198],
  },
];

export {offers};
