import {
  Outlet,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import './App.css'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
