import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import Base from "./layouts/Base";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { Account } from "./Account";
import CreateProduct from "./pages/CreateProduct";
import RouteWithLayout from "./layouts/RouteWithLayout";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Account>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <RouteWithLayout exact path="/home" component={Home} layout={MainLayout}/>
            <RouteWithLayout exact path="/products/create" component={CreateProduct} layout={MainLayout}/>
          </Account>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
