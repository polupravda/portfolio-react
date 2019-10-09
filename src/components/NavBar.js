import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import Underline from "./Underline.js";

function NavBar() {
  return (
    <div class="navbar-items-container">
      <Link to="/" className="navbar-items">
        Home<Underline></Underline>
      </Link>
      <Link to="/works" className="navbar-items">
        Works<Underline></Underline>
      </Link>
      <Link to="/contact" className="navbar-items">
        Contact<Underline></Underline>
      </Link>
    </div>
  );
}

export default NavBar;
