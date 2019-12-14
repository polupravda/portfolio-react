import React from "react";
import "../App.scss";
import NavItem from "./NavItem";
import Linkedin from "./Linkedin";

function NavBar() {
  return (
    <header className="App-header">
      <div id="navbar-container">
        <div class="navbar-items-container">
          <NavItem name="Home" url="/" />
          <NavItem name="Works" url="/works" />
          <NavItem name="Contact" url="/contact" />
          <Linkedin />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
