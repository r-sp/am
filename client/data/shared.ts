type Menu = {
  key: number;
  name: string;
  slug: string;
};

export const menu: Menu[] = [
  {
    key: 1,
    name: "Get Started",
    slug: "/about",
  },
  {
    key: 2,
    name: "Playground",
    slug: "/play",
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
