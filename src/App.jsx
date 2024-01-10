import React, { useState, useEffect } from "react";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Routes, // Import Routes from react-router-dom
  Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Search from "./components/Search/Search";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Spinner from "./components/Spinner/Spinner"

import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>{<Spinner />}</div>
      ) : (
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <Layout />,
              children: [
                {
                  path: "/",
                  element: (
                    <Routes>
                      <Route index element={<Home />} />
                    </Routes>
                  )
                },
                {
                  path: "/products/:id",
                  element: (
                    <Routes>
                      <Route index element={<Products />} />
                    </Routes>
                  )
                },
                {
                  path: "/product/:id",
                  element: (
                    <Routes>
                      <Route index element={<Product />} />
                    </Routes>
                  )
                },
                {
                  path: "/cart",
                  element: (
                    <Routes>
                      <Route index element={<Cart />} />
                    </Routes>
                  )
                },
                {
                  path: "/search",
                  element: (
                    <Routes>
                      <Route index element={<Search />} />
                    </Routes>
                  )
                },
                {
                  path: "/about-us",
                  element: (
                    <Routes>
                      <Route index element={<AboutUs />} />
                    </Routes>
                  )
                },
                {
                  path: "/contact",
                  element: (
                    <Routes>
                      <Route index element={<ContactUs />} />
                    </Routes>
                  )
                }
              ]
            }
          ])}
        />
      )}
    </div>
  );
};

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
