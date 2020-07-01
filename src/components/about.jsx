import React, { Component } from "react";
import Navbar from "./navbar";
// import Image from "./bw.jpeg";
// import ReactRotatingText from "react-rotating-text";

export default class About extends Component {
  render() {
    return (
      <div className="profile">
        <Navbar></Navbar>
        <div className="introduction-text">
          I'm a fourth year studying Computer Science and Data Science at the
          University of California, Berkeley graduating in May 2021. I am
          passionate about secuirty, data infustructure, and design. I want to
          work at the intersection of data and software, where I will be able to
          build universally accessible systems.
        </div>
      </div>
    );
  }
}
