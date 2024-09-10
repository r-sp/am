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
    role: 'User' | 'Member' | 'Tutor';
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
    syllabus: number[];
    scholarship: boolean;
  };
  enrollment: {
    type: 'Free' | 'Paid' | 'Subscription';
    fee: number;
    batch: number;
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
  image: string | URL;
  published: string | Date;
  modified: string | Date;
  location_id: number;
  provider_id: number;
};

export type Member = {
  id: number;
  name: string;
  avatar: string | URL;
  studies: number[];
  user_id: number;
};

export type Tutor = {
  id: number;
  name: string;
  avatar: string | URL;
  teaches: number[];
  user_id: number;
};

export type Syllabus = {
  id: number;
  name: string;
  description: string;
  duration: string;
  provider_id: number;
};

export type Camp = {
  id: number;
  name: string;
  member: number[];
  capacity: number;
  image: string | URL;
  location_id: number;
  provider_id: number;
};

export type Classroom = {
  id: number;
  name: string;
  schedule: {
    name: string;
    time: string | Date;
    tutor_id: number;
    syllabus_id: number;
  }[];
  classmate: number[];
  course_id: number;
  provider_id: number;
};

export type Classes = {
  id: number;
  name: string;
  description: string;
  course_id: number[];
  member_id: number;
};

export type Location = {
  id: number;
  name: string;
  image: string | URL;
  maps_id: string;
  provider_id: number;
};

export type District = {
  iso: string;
  name: string;
  city: string[];
  regency: string[];
  timezone: 'UTC+7' | 'UTC+8' | 'UTC+9';
};
