
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import './Navbar.scss'
import Cart from "../Cart/Cart";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="wrapper container">
        <div className="center">
          <Link className="link" to="/">
            GIK<span>autos</span>
          </Link>
        </div>

        <div className="icons">
          <SearchIcon />
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingBagOutlinedIcon />
            <span>0</span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
