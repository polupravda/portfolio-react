import React from "react";
import "../App.scss";
import NavItem from "./NavItem";
import Linkedin from "./Linkedin";

function NavBar() {
  return (
    <div class="navbar-items-container">
      <NavItem name="Home" url="/" />
      <NavItem name="About" url="/about" />
      <NavItem name="Contact" url="/contact" />
      <Linkedin />
    </div>
  );
}

export default NavBar;
