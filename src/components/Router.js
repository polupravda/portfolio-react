import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import Works from "../views/Works";
import Contact from "../views/Contact";
import NotFound from "../views/NotFound";
import Background from "./Background";

const Router = () => (
  <Background>
    <BrowserRouter>
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
    </BrowserRouter>
  </Background>
);

export default Router;
