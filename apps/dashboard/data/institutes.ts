export interface Institute {
  id: number;
  slug: string;
  name: string;
  description: string;
  avatar: string | URL;
  banner: string | URL;
  address: {
    street: {
      name: string;
      number: number;
    };
    village: string;
    district: string;
    province: string;
    postcode: number;
  };
  website?: string;
  social: {
    wa: number;
    fb?: string;
    ig?: string;
    tt?: string;
    yt?: string;
    xt?: string;
    lk?: string;
  };
}

export const institutes: Institute[] = [
  {
    id: 1,
    slug: 'PhrasalPower',
    name: 'Phrasal Power',
    description: 'Master English phrasal verbs with confidence and ease.',
    avatar: '/adonis-rose.avatar.png',
    banner: '/adonis-rose.banner.png',
    address: {
      street: {
        name: 'Adonis',
        number: 16,
      },
      village: 'Rose',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 24,
    },
    social: {
      wa: 621162400,
      yt: 'YouTube',
      xt: 'X',
    },
  },
  {
    id: 2,
    slug: 'PronunciationPerfect',
    name: 'Pronunciation Perfect',
    description: 'Speak English with crystal-clear pronunciation and accent reduction.',
    avatar: '/camellia-rose.avatar.png',
    banner: '/camellia-rose.banner.png',
    address: {
      street: {
        name: 'Camellia',
        number: 32,
      },
      village: 'Rose',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 48,
    },
    social: {
      wa: 622324800,
      fb: 'facebook',
      ig: 'instagram',
    },
  },
  {
    id: 3,
    slug: 'ConversationCorner',
    name: 'Conversation Corner',
    description: 'Boost your conversational skills and build fluency in English.',
    avatar: '/clean-pool.avatar.png',
    banner: '/clean-pool.banner.png',
    address: {
      street: {
        name: 'Clean',
        number: 48,
      },
      village: 'Pool',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 72,
    },
    social: {
      wa: 623487200,
      tt: 'tiktok',
    },
  },
  {
    id: 4,
    slug: 'LinguaLift',
    name: 'Lingua Lift',
    description: 'Elevate your language learning journey with expert guidance.',
    avatar: '/lima-green.avatar.png',
    banner: '/lima-green.banner.png',
    address: {
      street: {
        name: 'Lima',
        number: 64,
      },
      village: 'Green',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 96,
    },
    website: 'midjourney.com',
    social: {
      wa: 624649600,
      xt: 'X',
    },
  },
  {
    id: 5,
    slug: 'LexicalLeap',
    name: 'Lexical Leap',
    description: 'Expand your vocabulary and express yourself with precision.',
    avatar: '/majorelle-blue.avatar.png',
    banner: '/majorelle-blue.banner.png',
    address: {
      street: {
        name: 'Majorelle',
        number: 80,
      },
      village: 'Blue',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 120,
    },
    website: 'llama.meta.com',
    social: {
      wa: 625801200,
      fb: 'facebook',
    },
  },
  {
    id: 6,
    slug: 'PhonologicalPath',
    name: 'Phonological Path',
    description: 'Improve your sound system and pronunciation in English.',
    avatar: '/navy-purple.avatar.png',
    banner: '/navy-purple.banner.png',
    address: {
      street: {
        name: 'Navy',
        number: 96,
      },
      village: 'Purple',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 144,
    },
    website: 'perplexity.ai',
    social: {
      wa: 626961440,
      ig: 'instagram',
    },
  },
  {
    id: 7,
    slug: 'SemanticShift',
    name: 'Semantic Shift',
    description: 'Deepen your understanding of word meanings and nuances.',
    avatar: '/orion-pink.avatar.png',
    banner: '/orion-pink.banner.png',
    address: {
      street: {
        name: 'Orion',
        number: 112,
      },
      village: 'Pink',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 168,
    },
    website: 'gemini.google.com',
    social: {
      wa: 627112168,
      lk: 'the-room',
    },
  },
  {
    id: 8,
    slug: 'SyntacticSurge',
    name: 'Syntactic Surge',
    description: 'Master English grammar and sentence structure.',
    avatar: '/weird-green.avatar.png',
    banner: '/weird-green.banner.png',
    address: {
      street: {
        name: 'Weird',
        number: 128,
      },
      village: 'Green',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 192,
    },
    website: 'ai.google',
    social: {
      wa: 628128192,
      yt: 'YouTube',
    },
  },
  {
    id: 9,
    slug: 'ToungeTwisterTraining',
    name: 'Tounge Twister Training',
    description: 'Enhance your articulation and fluency through tongue twisters.',
    avatar: '/zany-pink.avatar.png',
    banner: '/zany-pink.banner.png',
    address: {
      street: {
        name: 'Zany',
        number: 144,
      },
      village: 'Pink',
      district: 'Kediri Regency',
      province: 'East Java',
      postcode: 216,
    },
    website: 'chatgpt.com',
    social: {
      wa: 629144216,
      xt: 'X',
    },
  },
];
