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
    edu: 'formal' | 'informal' | 'nonformal';
    role: 'student' | 'teacher';
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

export type Institute = {
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
