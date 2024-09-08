import type { Tutor } from '../types';

export const tutor: Tutor[] = [
  {
    id: 1,
    name: 'Candy Grape',
    avatar: '/candy-grape.webp',
    teaches: [2, 9],
    user_id: 3,
    provider_id: 5,
  },
  {
    id: 2,
    name: 'Kinky Pinky',
    avatar: '/kinky-pinky.webp',
    teaches: [9, 7],
    user_id: 4,
    provider_id: 7,
  },
  {
    id: 3,
    name: 'Tart Orange',
    avatar: '/tart-orange.webp',
    teaches: [3, 6],
    user_id: 6,
    provider_id: 2,
  },
  {
    id: 4,
    name: 'Tomorokoshi Corn',
    avatar: '/tomorokoshi-corn.webp',
    teaches: [8, 4],
    user_id: 7,
    provider_id: 1,
  },
];
