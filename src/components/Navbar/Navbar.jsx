import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <>
      <div className="topbar bg-black py-1">
          <div className="container text-end">
          <Link className="link text-white" to="/about-us">
            About Us
          </Link>
          </div>
        </div>
    <div className="navbar">
      
      <div className="wrapper container">

        <div className="center">
          <Link className="link" to="/">
            GIK<span>autos</span>
          </Link>
        </div>

        <div className="icons">
          <Link className="link" to="/search">
            <SearchIcon />
          </Link>
          <Link className="link" to="/cart">
            <div className="cartIcon">
              <ShoppingBagOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </Link>
        </div>

      </div>
    </div>
    </>
  );
};

export default Navbar;
