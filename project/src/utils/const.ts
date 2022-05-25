import { TCity } from '../types';

export enum AuthorizationStatus {
  Auth = 'Auth',
  NotAuth = 'NotAuth',
}

export enum PropertyType {
  Apartment = 'Apartment',
  Room = 'Private room'
}

export enum Pins {
  Default = '/img/pin.svg',
  Active = '/img/pin-active.svg'
}

// export const cities: TCityName[] = [
//   'Paris',
//   'Cologne',
//   'Brussels',
//   'Amsterdam',
//   'Hamburg',
//   'Dusseldorf',
// ];

export const cities: TCity[] = [
  {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 12,
  },
  {
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 12,
  },
  {
    title: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 12,
  },
  {
    title: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 12,
  },
  {
    title: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 12,
  },
  {
    title: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 12,
  },
];
