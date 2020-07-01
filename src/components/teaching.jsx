import React, { Component } from "react";
import NavBar from "./navbar";
import { Link } from "react-router-dom";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

class Teaching extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <CardDeck className="classes">
          <Link to="/cs61b" className="classes">
            <Card className="classes">
              <Card.Title className="classes">Data Structures</Card.Title>
              <Card.Subtitle className="classes">CS61B</Card.Subtitle>
              <Card.Body className="classes">
                {" "}
                Introduction into Data Structures, Algorithims <br></br>
                and object orriented programing
              </Card.Body>
            </Card>
          </Link>
          <Link to="/cs169" className="classLink">
            <Card className="classes">
              <Card.Title className="classes">Software Engineering</Card.Title>
              <Card.Subtitle className="classes">CS169</Card.Subtitle>
              <Card.Body className="classes">
                {" "}
                Introduction into Software Engineering <br></br> and agile
                development
              </Card.Body>
            </Card>
          </Link>
        </CardDeck>
      </div>
    );
  }
}

export default Teaching;
