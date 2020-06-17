import React from "react";
// import logo from "./logo.svg";
import background from "./background.jpeg";
import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Project from "./components/project";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <img src={background} className="display-picture" alt="logo" />
      <div className="App">
        <About></About>
        <Projects></Projects>
        <Project></Project>
      </div>
    </React.Fragment>
  );
}

export default App;
