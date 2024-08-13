// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  
  createHashRouter,
  RouterProvider,
  // Link,
} from "react-router-dom";
import About from "../src/About/About";
// import App from "./App";
// import HomePage from "./HomePage/HomePage";
import App from "./App";
import ProductsPage from "./ProductsPage/ProductsPage";
import HomePage from "./HomePage/HomePage";
import CartPage from "./CartPage/CartPage";
import Notfoundpage from "./Notfoundpage";

const router = createHashRouter([
  {
    path: "",
    element: <App/>,
  },
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "lastTest",
    element: <App/>,
  },
  {
    path: "HomePage",
    element: <HomePage/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "productsPage",
    element: <ProductsPage/>,
  },
  {
    path: "Cart",
    element: <CartPage/>,
  },
  {
    path: "*",
    element: <Notfoundpage/>,
  },
]);

createRoot(document.getElementById("rooot")).render(
  <RouterProvider router={router} />
);