import React from "react";
import { createBrowserRouter} from 'react-router';
import Root from "../Root/Root";
import Home from "../Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import ApointList from "../Pages/ApointList/ApointList";




export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            path:'/',
            loader:()=>fetch('doctorsData.json'),
            Component: Home
        },
        {
          path: 'apoint-list',
          loader: () => fetch('/doctorsData.json'),
          element: <ApointList />
        },
        {
          path:  '/doctorDetails/:id',
          loader:()=>fetch('./doctorsData.json'),
          Component: DoctorDetails
        }
        
      ]
    },
  ]);