import React from "react";
import "../App.scss";
import LogoNuxt from "./LogoNuxt";
import LogoSass from "./LogoSass";
import LogoJs from "./LogoJs";
import LogoVue from "./LogoVue";
import APitTechStack from "./APitTechStack";

function APitTools() {
  return (
    <div id="apit-tools">
      <APitTechStack />
      <div className="tech-stack-container">
        <LogoSass />
        <LogoJs />
        <LogoVue />
        <LogoNuxt />
      </div>
    </div>
  );
}

export default APitTools;
