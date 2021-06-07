import React from "react";
import Products from "./products";
import Cart from "./cart";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Context } from "./context";
import Navbar from "./navbar";

const RunRouter = () => {
  return (
    <Router>
      <Switch>
        <Context>
          <Navbar />
          <Route exact path='/'>
            <Products />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Context>
      </Switch>
    </Router>
  );
};

export default RunRouter;
