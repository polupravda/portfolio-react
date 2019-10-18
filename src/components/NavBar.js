import React from "react";
import "../App.scss";
import NavItem from "./NavItem";

function NavBar() {
  return (
    <div class="navbar-items-container">
      <NavItem name="Home" url="/" />
      <NavItem name="About" url="/about" />
      <NavItem name="Contact" url="/contact" />
    </div>
  );
}

export default NavBar;
