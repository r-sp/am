import type { Course } from '../types';

export const course: Course[] = [
  {
    id: 1,
    slug: 'vocabulary-building',
    name: 'Vocabulary Building',
    description: 'Expand your English vocabulary with this comprehensive course.',
    language: 'en',
    values: {
      level: 'Beginner',
      about: ['Learn essential vocabulary for everyday conversations', 'Master new words and phrases through effective techniques'],
      teaches: ['Word roots and affixes', 'Vocabulary building strategies', 'Memory techniques'],
      prerequisite: ['Basic English knowledge'],
      syllabus: [2],
      scholarship: false,
    },
    enrollment: {
      type: 'Paid',
      fee: 150000,
      batch: 11,
      current: 10,
      capacity: 15,
      history: 150,
    },
    schedule: {
      duration: 'PT1H',
      frequency: 'Daily',
      count: 10,
      start: '2024-09-09',
      end: '2024-09-16',
    },
    modified: '2024-09-09',
    published: '2021-05-27',
    location_id: 1,
    provider_id: 5,
  },
  {
    id: 2,
    slug: 'writing-skills',
    name: 'Writing Skills',
    description: 'Learn to write effectively in English with this comprehensive course.',
    language: 'en',
    values: {
      level: 'Beginner',
      about: ['Master the fundamentals of English grammar and punctuation', 'Develop strong writing skills for various purposes'],
      teaches: ['Essay writing', 'Business writing', 'Creative writing'],
      prerequisite: ['Basic English knowledge'],
      syllabus: [5],
      scholarship: false,
    },
    enrollment: {
      type: 'Paid',
      fee: 150000,
      batch: 11,
      current: 10,
      capacity: 15,
      history: 150,
    },
    schedule: {
      duration: 'PT1H',
      frequency: 'Daily',
      count: 10,
      start: '2024-09-09',
      end: '2024-09-16',
    },
    modified: '2024-09-09',
    published: '2021-05-27',
    location_id: 2,
    provider_id: 5,
  },
  {
    id: 3,
    slug: 'idioms-and-expressions',
    name: 'Idioms and Expressions',
    description: 'Understand and use idiomatic expressions.',
    language: 'en',
    values: {
      level: 'Intermediate',
      about: ['Explore the nuances of idiomatic language', 'Enhance your fluency and cultural understanding'],
      teaches: ['Common idioms and phrases', 'Cultural context of idioms', 'Using idioms in conversation'],
      prerequisite: ['Basic English knowledge'],
      syllabus: [9],
      scholarship: false,
    },
    enrollment: {
      type: 'Paid',
      fee: 250000,
      batch: 20,
      current: 19,
      capacity: 20,
      history: 380,
    },
    schedule: {
      duration: 'PT1H',
      frequency: 'Daily',
      count: 20,
      start: '2024-09-09',
      end: '2024-10-07',
    },
    modified: '2024-09-09',
    published: '2021-05-27',
    location_id: 3,
    provider_id: 7,
  },
  {
    id: 4,
    slug: 'listening-comprehension',
    name: 'Listening Comprehension',
    description: 'Improve your listening skills with this comprehensive course.',
    language: 'en',
    values: {
      level: 'Beginner',
      about: ['Develop effective listening strategies', 'Understand native English accents and dialects'],
      teaches: ['Active listening techniques', 'Note-taking strategies', 'Listening comprehension exercises'],
      prerequisite: ['Basic English knowledge'],
      syllabus: [7],
      scholarship: false,
    },
    enrollment: {
      type: 'Paid',
      fee: 250000,
      batch: 20,
      current: 19,
      capacity: 20,
      history: 380,
    },
    schedule: {
      duration: 'PT1H',
      frequency: 'Daily',
      count: 20,
      start: '2024-09-09',
      end: '2024-10-07',
    },
    modified: '2024-09-09',
    published: '2021-05-27',
    location_id: 4,
    provider_id: 7,
  },
  {
    id: 5,
    slug: 'pronunciation-practice',
    name: 'Pronunciation Practice',
    description: 'Improve your English pronunciation with this comprehensive course.',
    language: 'en',
    values: {
      level: 'Beginner',
      about: ['Master the sounds of English', 'Speak with confidence and clarity'],
      teaches: ['Phonetic symbols', 'Stress and intonation', 'Pronunciation exercises'],
      prerequisite: ['Basic English knowledge'],
      syllabus: [3],
      scholarship: false,
    },
    enrollment: {
      type: 'Paid',
      fee: 150000,
      batch: 11,
      current: 10,
      capacity: 15,
      history: 150,
    },
    schedule: {
      duration: 'PT1H',
      frequency: 'Daily',
      count: 10,
      start: '2024-09-09',
      end: '2024-09-16',
    },
    modified: '2024-09-09',
    published: '2021-05-27',
    location_id: 5,
    provider_id: 2,
  },
  {
    id: 6,
    slug: 'speaking-practice',
    name: 'Speaking Practice',
    description: 'Practice speaking English fluently with this comprehensive course.',
    language: 'en',
    values: {
      level: 'Beginner',
      about: ['Gain confidence in speaking English', 'Improve your fluency and pronunciation'],
      teaches: ['Conversational skills', 'Role-playing exercises', 'Group discussions'],
      prerequisite: ['Basic English knowledge'],
      syllabus: [6],
      scholarship: false,
    },
    enrollment: {
      type: 'Paid',
      fee: 150000,
      batch: 11,
      current: 10,
      capacity: 15,
      history: 150,
    },
    schedule: {
      duration: 'PT1H',
      frequency: 'Daily',
      count: 10,
      start: '2024-09-09',
      end: '2024-09-16',
    },
    modified: '2024-09-09',
    published: '2021-05-27',
    location_id: 6,
    provider_id: 2,
  },
  {
    id: 7,
    slug: 'phrasal-verbs',
    name: 'Phrasal Verbs',
    description: 'Learn and use common phrasal verbs effectively in English.',
    language: 'en',
    values: {
      level: 'Intermediate',
      about: ['Master the nuances of phrasal verbs', 'Enhance your fluency and naturalness in English'],
      teaches: ['Common phrasal verbs and their meanings', 'Using phrasal verbs in context', 'Phrasal verb patterns'],
      prerequisite: ['Basic English knowledge'],
      syllabus: [8],
      scholarship: false,
    },
    enrollment: {
      type: 'Paid',
      fee: 250000,
      batch: 20,
      current: 19,
      capacity: 20,
      history: 380,
    },
    schedule: {
      duration: 'PT1H',
      frequency: 'Daily',
      count: 20,
      start: '2024-09-09',
      end: '2024-10-07',
    },
    modified: '2024-09-09',
    published: '2021-05-27',
    location_id: 7,
    provider_id: 1,
  },
  {
    id: 8,
    slug: 'reading-comprehension',
    name: 'Reading Comprehension',
    description: 'Develop your reading skills with this comprehensive course.',
    language: 'en',
    values: {
      level: 'Beginner',
      about: ['Improve your reading speed and accuracy', 'Understand different reading genres and styles'],
      teaches: ['Reading strategies', 'Vocabulary building for reading', 'Critical thinking skills'],
      prerequisite: ['Basic English knowledge'],
      syllabus: [4],
      scholarship: false,
    },
    enrollment: {
      type: 'Paid',
      fee: 250000,
      batch: 20,
      current: 19,
      capacity: 20,
      history: 380,
    },
    schedule: {
      duration: 'PT1H',
      frequency: 'Daily',
      count: 20,
      start: '2024-09-09',
      end: '2024-10-07',
    },
    modified: '2024-09-09',
    published: '2021-05-27',
    location_id: 8,
    provider_id: 1,
  },
];
