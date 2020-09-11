import React from "react";
import "../App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import Works from "../views/Works";
import APit from "../views/APit";
import Motorola5GBattle from "../views/Motorola5GBattle";
import DigitalAnvilLogo from "../views/DigitalAnvilLogo";
import CssRocket from "../views/CssRocket";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import Background from "./Background";
import NavBar from "./NavBar";

const Router = () => (
  <Background>
    <BrowserRouter>
      <NavBar />
      <section id="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/apit">
            <APit />
          </Route>
          <Route path="/motorola-5g-battle">
            <Motorola5GBattle />
          </Route>
          <Route path="/digital-anvil-logo">
            <DigitalAnvilLogo />
          </Route>
          <Route path="/css-rocket">
            <CssRocket />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </section>
    </BrowserRouter>
  </Background>
);

export default Router;
