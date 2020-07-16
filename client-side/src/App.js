import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Steps from "./components/steps/Steps";
import Businesses from "./components/user/Users";
import Dashboard from "./components/dahsboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/steps" exact component={Steps} />
        <Route path="/businesses" exact component={Businesses} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
