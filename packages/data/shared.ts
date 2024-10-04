type NavMenu = {
  key: number;
  name: string;
  slug: string;
};

export const navMenu: NavMenu[] = [
  {
    key: 1,
    name: "About",
    slug: "/about",
  },
  {
    key: 2,
    name: "Blog",
    slug: "/blog",
  },
  {
    key: 3,
    name: "Showcase",
    slug: "/show",
  },
];

type ErrorNotice = {
  name: string;
  text: string;
};

export const errorNotice: ErrorNotice = {
  name: "404 Page Not Found",
  text: "Return to Home",
};

type MockArticle = {
  id: number;
  url: string;
  title: string;
  description: string;
};

export const mockArticle: MockArticle[] = [
  {
    id: 1,
    url: "https://astro.build",
    title: "Astro",
    description: "The web framework for content-driven websites",
  },
  {
    id: 2,
    url: "https://nextjs.org",
    title: "Next.js",
    description: "The React Framework for the Web",
  },
  {
    id: 3,
    url: "https://react.dev",
    title: "React",
    description: "The library for web and native user interfaces",
  },
  {
    id: 4,
    url: "https://nodejs.org",
    title: "Node.js",
    description: "Run JavaScript Everywhere",
  },
];

export const drawer: NavMenu[] = [
  {
    key: 1,
    slug: "/",
    name: "Home",
  },
  {
    key: 2,
    slug: "/about",
    name: "About",
  },
  {
    key: 3,
    slug: "/blog",
    name: "Blog",
  },
  {
    key: 4,
    slug: "/show",
    name: "Showcase",
  },
];
