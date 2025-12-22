import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import ErrorPage from "./components/ErrorPage";
import ProductDetails from "./components/ProductDetails.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
    <div>
      <Header />
      <Outlet  />
      <Footer/>
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails/>
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
