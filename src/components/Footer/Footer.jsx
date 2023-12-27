import React from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <WhatsAppIcon />
        <CallIcon />
        <LocationOnIcon />
      </div>
      <hr className="line" />
      <div className="down">
        <Link className="link" to="/">
          GIK<span>autos</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
