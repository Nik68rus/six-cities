import { TReview } from './../types/index';
import {faker} from '@faker-js/faker';

export const reviews: TReview[] = [
  {
    comment: faker.lorem.sentences(),
    date: new Date(faker.date.recent(200)),
    id: 1,
    rating: 4,
    user: {
      avatar: faker.image.avatar(),
      id: 4,
      isPro: false,
      name: faker.name.firstName(),
    },
  },
  {
    comment: faker.lorem.sentences(),
    date: new Date(faker.date.recent(200)),
    id: 2,
    rating: 4,
    user: {
      avatar: faker.image.avatar(),
      id: 5,
      name: faker.name.firstName(),
      isPro: false,
    },
  },
  {
    comment: faker.lorem.sentences(),
    date: new Date(faker.date.recent(200)),
    id: 3,
    rating: 4,
    user: {
      avatar: faker.image.avatar(),
      id: 4,
      isPro: false,
      name: faker.name.firstName(),
    },
  },
  {
    comment: faker.lorem.sentences(),
    date: new Date(faker.date.recent(200)),
    id: 4,
    rating: 4,
    user: {
      avatar: faker.image.avatar(),
      id: 5,
      name: faker.name.firstName(),
      isPro: false,
    },
  },
];

