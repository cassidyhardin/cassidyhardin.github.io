import React, { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="home-heading">Hey, I'm Cassidy Hardin</div>
        <div className="home-attributes-text">
          I am a
          <ReactRotatingText
            items={[" DEVELOPER", " MENTOR", " LEARNER", " CREATOR"]}
            className="home-attributes"
          />
        </div>
        <div className="homeLinks">
          <Link to="/about">ABOUT </Link>
          <Link to="/portfolio">PORTFOLIO </Link>
          <Link to="/resume">RESUME </Link>
          <Link to="/contact">CONTACT </Link>
        </div>
      </div>
    );
  }
}

export default Home;
