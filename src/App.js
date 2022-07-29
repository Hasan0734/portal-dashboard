
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Dipendenti from "./components/Dipendenti/Dipendenti";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dipendenti" component={Dipendenti} />
      </BrowserRouter>
    );
  }
}
