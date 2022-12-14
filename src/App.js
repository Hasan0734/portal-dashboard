
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Dipendenti from "./components/Dipendenti/Dipendenti";
import Hello from "./components/Hello/Hello";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Dipendenti} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dependenti" component={Dipendenti} />
        <Route exact path="/hello" component={Hello} />
      </BrowserRouter>
    );
  }
}
