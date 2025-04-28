import React from "react";
import { createBrowserRouter} from 'react-router';
import Root from "../Root/Root";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children:[
        {
            index: true,
            path:'/',
            loader:()=>fetch('doctorsData.json'),
            Component: Home
        },
      ]
    },
  ]);