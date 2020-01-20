import React from "react";
import "../App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import Works from "../views/Works";
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
