import React from "react";
import "../App.scss";
import Stone404 from "../components/Stone404";
import Button from "../components/Button";
import Code404 from "../components/Code404";
import { notFound } from "../Content.js";

function NotFound() {
  return (
    <section id="not-found">
      <Code404 />
      <span class="error-message">{notFound.errorMessage}</span>
      <div id="stone-shadow"></div>
      <Stone404 />
      <Button
        buttonText={notFound.buttonText}
        buttonLink="/"
        buttonType="secondary"
        buttonWidth="210px"
      />
    </section>
  );
}

export default NotFound;
