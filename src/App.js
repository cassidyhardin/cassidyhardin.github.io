import React from "react";
// import logo from "./logo.svg";
// import cassidy from "./cassidy.jpeg";
import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Project from "./components/project";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <About></About>
        <Projects></Projects>
        <Project></Project>
      </div>
    </React.Fragment>
  );
}

export default App;
