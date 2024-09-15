import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "~/pages/index";
import About from "~/pages/about";
import Blog from "~/pages/blog";
import NotFound from "~/pages/not-found";

import "@kb/style";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/show",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
