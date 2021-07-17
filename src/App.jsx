import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import Base from "./layouts/Base";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { Account } from "./Account";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Account>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <MainLayout>
            <Route exact path="/home" component={Home} />
          </MainLayout>
          </Account>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
