import type { Classroom } from '../types';

export const classroom: Classroom[] = [
  {
    id: 1,
    name: 'Vocabulary Classroom',
    schedule: [
      {
        name: 'Vocabulary Building',
        time: '2024-04-16',
        tutor_id: 1,
        syllabus_id: 2,
      },
    ],
    classmate: [1, 2, 3, 4],
    course_id: 1,
    provider_id: 5,
  },
  {
    id: 2,
    name: 'Writing Classroom',
    schedule: [
      {
        name: 'Writing Skills',
        time: '2024-04-16',
        tutor_id: 1,
        syllabus_id: 5,
      },
    ],
    classmate: [1, 2, 3, 4],
    course_id: 2,
    provider_id: 5,
  },
  {
    id: 3,
    name: 'Idiom Classroom',
    schedule: [
      {
        name: 'Idioms and Expressions',
        time: '2024-04-16',
        tutor_id: 2,
        syllabus_id: 9,
      },
    ],
    classmate: [1, 2, 3, 4],
    course_id: 3,
    provider_id: 7,
  },
  {
    id: 4,
    name: 'Listening Classroom',
    schedule: [
      {
        name: 'Listening Comprehension',
        time: '2024-04-16',
        tutor_id: 2,
        syllabus_id: 7,
      },
    ],
    classmate: [1, 2, 3, 4],
    course_id: 4,
    provider_id: 7,
  },
  {
    id: 5,
    name: 'Pronunciation Classroom',
    schedule: [
      {
        name: 'Pronunciation Practice',
        time: '2024-04-16',
        tutor_id: 3,
        syllabus_id: 3,
      },
    ],
    classmate: [1, 2, 3, 4],
    course_id: 5,
    provider_id: 2,
  },
  {
    id: 6,
    name: 'Speaking Classroom',
    schedule: [
      {
        name: 'Speaking Practice',
        time: '2024-04-16',
        tutor_id: 3,
        syllabus_id: 6,
      },
    ],
    classmate: [1, 2, 3, 4],
    course_id: 6,
    provider_id: 2,
  },
  {
    id: 7,
    name: 'Phrasal Classroom',
    schedule: [
      {
        name: 'Phrasal Verbs',
        time: '2024-04-16',
        tutor_id: 4,
        syllabus_id: 8,
      },
    ],
    classmate: [1, 2, 3, 4],
    course_id: 7,
    provider_id: 1,
  },
  {
    id: 8,
    name: 'Reading Classroom',
    schedule: [
      {
        name: 'Reading Comprehension',
        time: '2024-04-16',
        tutor_id: 4,
        syllabus_id: 4,
      },
    ],
    classmate: [1, 2, 3, 4],
    course_id: 8,
    provider_id: 1,
  },
];
