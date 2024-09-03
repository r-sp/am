export interface User {
  id: number;
  slug: string;
  name: string;
  description: string;
  interests: string[];
  curiosity: string[];
  reason: string;
  avatar: string | URL;
  age: number;
  address: {
    village: string;
    district: string;
    province: string;
  };
  social?: {
    wa: number;
    fb?: string;
    ig?: string;
    tt?: string;
    yt?: string;
    xt?: string;
    lk?: string;
  };
}

export const users: User[] = [
  {
    id: 1,
    slug: 'kay',
    name: 'Kay Chad',
    description: 'Learning new languages',
    interests: ['English', 'British', 'American'],
    curiosity: ['Coding', 'Design', 'Patterns'],
    reason: 'To communicate with people in foreign countries and experience different cultures.',
    avatar: '/lush-green.webp',
    age: 24,
    address: {
      village: 'Pare',
      district: 'Kediri',
      province: 'East Java',
    },
    social: {
      wa: 628124275,
    },
  },
  {
    id: 2,
    slug: 'jacob',
    name: 'Reynad Jacobs',
    description: 'Education and Career Advancement',
    interests: ['English', 'American'],
    curiosity: ['Technology', 'Science'],
    reason: 'To study abroad, pursue international opportunities, or improve job prospects.',
    avatar: '/glitter-lake.webp',
    age: 32,
    address: {
      village: 'Pare',
      district: 'Kediri',
      province: 'East Java',
    },
    social: {
      wa: 627396835,
    },
  },
  {
    id: 3,
    slug: 'harold',
    name: 'Harold Waters',
    description: 'Cultural Appreciation',
    interests: ['English', 'British'],
    curiosity: ['Cultures', 'Books'],
    reason: 'To better understand and appreciate foreign cultures, literature, and art.',
    avatar: '/candy-grape.webp',
    age: 28,
    address: {
      village: 'Pare',
      district: 'Kediri',
      province: 'East Java',
    },
    social: {
      wa: 625199267,
    },
  },
  {
    id: 4,
    slug: 'jerry',
    name: 'Jerry Leach',
    description: 'Personal Enrichment',
    interests: ['English', 'American'],
    curiosity: ['Productivity', 'Skills'],
    reason: 'To challenge oneself, expand horizons, and develop new skills.',
    avatar: '/kinky-pinky.webp',
    age: 30,
    address: {
      village: 'Pare',
      district: 'Kediri',
      province: 'East Java',
    },
    social: {
      wa: 625381774,
    },
  },
  {
    id: 5,
    slug: 'fred',
    name: 'Freddie Carrol',
    description: 'Language Exchange',
    interests: ['English', 'British'],
    curiosity: ['Cultures', 'Nature'],
    reason: 'To connect with people from different backgrounds and cultures.',
    avatar: '/bara-red.webp',
    age: 25,
    address: {
      village: 'Pare',
      district: 'Kediri',
      province: 'East Java',
    },
    social: {
      wa: 628005374,
    },
  },
  {
    id: 6,
    slug: 'jade',
    name: 'Jade Doyle',
    description: 'Business Opportunities',
    interests: ['English', 'American'],
    curiosity: ['Business', 'Startup'],
    reason: 'To expand business networks and conduct international trade.',
    avatar: '/tart-orange.webp',
    age: 26,
    address: {
      village: 'Pare',
      district: 'Kediri',
      province: 'East Java',
    },
    social: {
      wa: 626682134,
    },
  },
  {
    id: 7,
    slug: 'angel',
    name: 'Angela Malone',
    description: 'Language Enthusiasm',
    interests: ['English', 'British'],
    curiosity: ['Algorithm', 'Math'],
    reason: 'To explore the beauty and complexity of different languages.',
    avatar: '/tomorokoshi-corn.webp',
    age: 27,
    address: {
      village: 'Pare',
      district: 'Kediri',
      province: 'East Java',
    },
    social: {
      wa: 626450066,
    },
  },
  {
    id: 8,
    slug: 'harley',
    name: 'Harley Miller',
    description: 'Intellectual Stimulation',
    interests: ['English', 'American'],
    curiosity: ['Limited', 'Unknown'],
    reason: 'To challenge the mind and learn something new.',
    avatar: '/golden-snitch.webp',
    age: 20,
    address: {
      village: 'Pare',
      district: 'Kediri',
      province: 'East Java',
    },
    social: {
      wa: 628307795,
    },
  },
];
