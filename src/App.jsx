import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";
import Base from "./layouts/Base";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route>
            <Base>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Base>
          </Route>
          <Route exact path="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
