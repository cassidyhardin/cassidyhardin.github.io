import React from "react";
import "./App.css";
import Project from "./components/project";
import Navbar from "./components/navbar";

function Portfolio() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="body">
        <div className="cardBox">
          <Project></Project>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
