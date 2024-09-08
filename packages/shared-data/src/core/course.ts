import type { Course } from '../types';

export const course: Course[] = [
  {
    id: 1,
    slug: 'english-course-1',
    name: 'English Course 1',
    description: 'A comprehensive English course designed to improve your language skills.',
    language: 'en',
    values: {
      level: 'Beginner',
      about: ['Grammar', 'Vocabulary', 'Pronunciation', 'Reading', 'Writing'],
      teaches: ['Native English speakers', 'Experienced teachers'],
      prerequisite: ['Basic English knowledge'],
      scholarship: true,
    },
    enrollment: {
      type: 'Free',
      fee: 0,
      current: 10,
      capacity: 20,
      history: 200,
    },
    schedule: {
      duration: 'P3M',
      frequency: 'Weekly',
      count: 12,
      start: '2024-09-08T23:22:20.000Z',
      end: '2024-12-08T23:22:20.000Z',
    },
    award: {
      type: 'Certificate',
      category: 'Free',
      price: 0,
    },
    published: '2024-09-08T23:22:20.000Z',
    location: 'Online',
  },
];
