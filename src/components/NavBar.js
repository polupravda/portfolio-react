import React from "react";
import "../App.scss";
import {isMobileDevice} from "../helperFunctions";
import NavItem from "./NavItem";
import Linkedin from "./Linkedin";
import Github from "./Github";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "closed"
    };
  };

  checkForDropdown = () => {
    const mobile = isMobileDevice();
    if (mobile) {
      this.state.menu === "closed" ? this.setState({menu: "open"}) : this.setState({menu: "closed"});
    }
  };

  render() {
    return (
      <header className="App-header">
        <div className={this.state.menu} id="navbar-container" onClick={this.checkForDropdown} >
          <div className="menu-icon">
            <span className="navicon"></span>
          </div>
          <div className="navbar-items-container" >
            <NavItem name="Home" url="/" />
            <NavItem name="Works" url="/works" />
            <NavItem name="Contact" url="/contact" />
            <Linkedin />
            <Github />
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
