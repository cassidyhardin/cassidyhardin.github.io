import React, { Component } from "react";
import NavBar from "./navbar";

class CS169 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="body">Software Engineering</div>
      </React.Fragment>
    );
  }
}

export default CS169;
