import React, { Component } from "react";
import NavBar from "./navbar";
import Card from "react-bootstrap/Card";

class CS169 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <Card className="class">
          <Card.Title className="class">
            CS169 - Software Engineering
          </Card.Title>
          <Card.Subtitle className="class">
            {" "}
            Section: TBD (online){" "}
          </Card.Subtitle>
          <Card.Body className="class">
            We are currently changing the course and prepairing for adaptions
            for an online semester. Section information will be updated soon!
          </Card.Body>
          <Card.Link href="" className="class">
            Course Website
          </Card.Link>
        </Card>{" "}
      </React.Fragment>
    );
  }
}

export default CS169;
