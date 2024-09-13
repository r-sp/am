type Menu = {
  key: number;
  name: string;
  slug: string;
};

export const menu: Menu[] = [
  {
    key: 1,
    name: "Home",
    slug: "/",
  },
  {
    key: 2,
    name: "About",
    slug: "/about",
  },
  {
    key: 3,
    name: "Docs",
    slug: "/docs",
  },
];

type Notice = {
  name: string;
  text: string;
};

export const notice: Notice = {
  name: "404 Page Not Found",
  text: "Return to Home",
};
