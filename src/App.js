import React from "react";
// import logo from "./logo.svg";
// import background from "./background.jpeg";
import "./App.css";
import About from "./components/about";
// import Navbar from "./components/navbar";
import Teaching from "./components/teaching";
import Home from "./components/Home";
import Resume from "./components/resume";
import CS61B from "./components/cs61b";
import CS169 from "./components/cs169";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/teaching" component={Teaching} />
        <Route path="/cs61b" component={CS61B} />
        <Route path="/cs169" component={CS169} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
