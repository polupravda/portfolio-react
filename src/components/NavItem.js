import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import Underline from "./Underline.js";

function NavItem({ name, url }) {
  return (
    <>
      <Link to={url} className="navbar-items">
        {name}
        <Underline />
      </Link>
    </>
  );
}

export default NavItem;
