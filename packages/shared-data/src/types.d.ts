type OutLinks = {
  website?: string;
  whatsapp?: number;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  twitter?: string;
  linkedin?: string;
};

export type User = {
  id: number;
  slug: string;
  profile: {
    name: string;
    description: string;
    avatar: string | URL;
  };
  current: {
    age: number;
    edu: string;
    role: 'Member' | 'Tutor';
    job?: string;
  };
  values: {
    reason: string;
    interests: string[];
    curiosity: string[];
    habit: string[];
  };
  address: {
    village: string;
    district: string;
    province: string;
  };
  outlink: OutLinks;
};

export type Provider = {
  id: number;
  slug: string;
  profile: {
    name: string;
    description: string;
    banner: string | URL;
    avatar: string | URL;
  };
  address: {
    village: string;
    district: string;
    province: string;
    street: {
      name: string;
      number: number;
    };
    postcode: number;
  };
  outlink: OutLinks;
};

export type Course = {
  id: number;
  slug: string;
  name: string;
  description: string;
  language: 'en';
  values: {
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    about: string[];
    teaches: string[];
    prerequisite: string[];
    scholarship: boolean;
  };
  enrollment: {
    type: 'Free' | 'Paid' | 'Subscription';
    fee: number;
    current: number;
    capacity: number;
    history: number;
  };
  schedule: {
    duration: string;
    frequency: 'Daily' | 'Weekly' | 'Monthly';
    count: number;
    start: string | Date;
    end: string | Date;
  };
  award: {
    type: 'Certificate' | 'Certification';
    category: 'Free' | 'Paid';
    price: number;
  };
  published: string | Date;
  location: string;
};

export type Member = {
  id: number;
  name: string;
  avatar: string | URL;
  learns: number[];
  user_id: number;
  provider_id: number;
};

export type Tutor = {
  id: number;
  name: string;
  avatar: string | URL;
  teaches: number[];
  user_id: number;
  provider_id: number;
};

export type Syllabus = {
  id: number;
  name: string;
  description: string;
  time: string;
};

export type District = {
  name: string;
  iso: string;
};

export type Province = {
  id: number;
  iso: string;
  name: string;
  timezone: 'UTC+7' | 'UTC+8' | 'UTC+9';
};
