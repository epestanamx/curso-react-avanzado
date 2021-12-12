import React, { lazy } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXElement = () => JSX.Element;
type ExoticComponent = React.LazyExoticComponent<JSXElement>;

interface Route {
  path: string;
  component: ExoticComponent | JSXElement;
  name: string;
  children?: Route[];
  exact?: boolean;
}

export const routes: Route[] = [
  {
    path: '/lazyload',
    component: lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout")),
    name: 'Lazyloading Nested',
    exact: false,
  },
  {
    path: '/no-lazy',
    component: NoLazy,
    name: 'No Lazyloading',
  }
];
