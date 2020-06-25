import React from "react";
// import logo from "./logo.svg";
// import background from "./background.jpeg";
import "./App.css";
import About from "./components/about";
// import Navbar from "./components/navbar";
// import Projects from "./components/projects";
import Home from "./components/Home";
// import ProjectCard from "./components/projectCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./Portfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
