import { FC } from "react";
import { HOME_PAGE } from "views/pages/Home";
import { CATEGORY_PAGE } from "./../../views/pages/Category/Category";

interface Route {
  path: string;
  component: FC;
}

export const routes: Route[] = [
  {
    path: "/",
    component: HOME_PAGE,
  },
  {
    path: "/category/:slug",
    component: CATEGORY_PAGE,
  },
];
