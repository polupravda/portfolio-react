import React from "react";
import "../App.scss";
import Stone404 from "../components/Stone404";
import ButtonSecondary from "../components/ButtonSecondary";
import NavBar from "../components/NavBar";
import { notFound } from "../Content.js";

function NotFound() {
  return (
    <>
      <div class="bgCanvas">
        <div class="foreground"></div>
      </div>
      <header className="App-header">
        <div id="navabar-container">
          <NavBar />
        </div>
      </header>
      <section id="main">
        <span class="error-code">{notFound.errorCode}</span>
        <span class="error-message">{notFound.errorMessage}</span>
        <Stone404 />
        <ButtonSecondary buttonText="Back home" />
      </section>
    </>
  );
}

export default NotFound;
